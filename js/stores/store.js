const assign = require('object-assign');

const {mapConfigHistory, createHistory} = require('../../MapStore2/web/client/utils/MapHistoryUtils');

const map = mapConfigHistory(require('../../MapStore2/web/client/reducers/map'));

const layers = require('../../MapStore2/web/client/reducers/layers');
const mapConfig = require('../../MapStore2/web/client/reducers/config');

const DebugUtils = require('../../MapStore2/web/client/utils/DebugUtils');
const {combineReducers} = require('../../MapStore2/web/client/utils/PluginsUtils');

const LayersUtils = require('../../MapStore2/web/client/utils/LayersUtils');
const {CHANGE_BROWSER_PROPERTIES} = require('../../MapStore2/web/client/actions/browser');
const {persistStore, autoRehydrate} = require('redux-persist');

module.exports = (initialState = {defaultState: {}, mobile: {}}, appReducers = {}, plugins, storeOpts) => {

    const getGroup = (group, allLayers) => {
        let groupName = group || 'Default';
        let subGroups = allLayers.filter((layer) => layer.group.indexOf(groupName + '.') === 0)
            .map((layer) => layer.group).reduce((previous, subGroupName) => {
                let name = subGroupName.substring(subGroupName.indexOf('.') + 1);
                return previous.indexOf(name) === -1 ? previous.concat([name]) : previous;
            }, []);

        return assign({}, {
            id: groupName,
            name: groupName,
            title: groupName,
            nodes: allLayers.filter((layer) => layer.group === group).map((layer) => layer.id).concat(
                subGroups.map((subGroupName) => {
                    return {
                        id: groupName + '.' + subGroupName,
                        type: "group",
                        name: groupName + '.' + subGroupName,
                        title: subGroupName,
                        expanded: true,
                        nodes: allLayers.filter((layer) => layer.group === (groupName + '.' + subGroupName)).map((layer) => layer.id)
                    };
                })
            ),
            expanded: true
        });
    };

    const getLayersByGroup = function(configLayers) {
        let i = 0;
        let lyrs = configLayers.map((layer) => assign({}, layer, {storeIndex: i++}));
        let groupNames = lyrs.reduce((groups, layer) => {
            let groupName = layer.group;
            if (groupName.indexOf('.') !== -1) {
                groupName = groupName.split('.')[0];
            }
            return groups.indexOf(groupName) === -1 ? groups.concat([groupName]) : groups;
        }, []);
        return groupNames.map((group) => getGroup(group, lyrs));
    };

    const allReducers = combineReducers(plugins, {
        ...appReducers,
        locale: require('../../MapStore2/web/client/reducers/locale'),
        browser: require('../../MapStore2/web/client/reducers/browser'),
        controls: require('../../MapStore2/web/client/reducers/controls'),
        help: require('../../MapStore2/web/client/reducers/help'),
        map: () => {return null; },
        mapInitialConfig: () => {return null; },
        layers: () => {return null; }
    });
    const defaultState = initialState.defaultState;
    const mobileOverride = initialState.mobile;

    const rootReducer = (state, action) => {
        let mapState = createHistory(LayersUtils.splitMapAndLayers(mapConfig(state, action)));
        let mapLayers = mapState ? layers(mapState.layers, action) : null;
        let groupsTree = mapLayers.flat ? getLayersByGroup(mapLayers.flat) : null;
        if (groupsTree) {
            mapLayers = assign({}, mapLayers, {
                groups: groupsTree
            });
        }
        let newState = {
            ...allReducers(state, action),
            map: mapState && mapState.map ? map(mapState.map, action) : null,
            mapInitialConfig: mapState ? mapState.mapInitialConfig : null,
            layers: mapLayers
        };
        if (action && action.type === CHANGE_BROWSER_PROPERTIES && newState.browser.mobile) {
            newState = assign(newState, mobileOverride);
        }

        return newState;
    };
    if (storeOpts && storeOpts.persist) {
        let store = DebugUtils.createDebugStore(rootReducer, defaultState, [], autoRehydrate());
        persistStore(store, storeOpts.persist, storeOpts.onPersist);
        return store;
    }
    return DebugUtils.createDebugStore(rootReducer, defaultState);


};
