
const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');
const {createSelector} = require('reselect');
const {changeLayerProperties, changeGroupProperties, toggleNode,
       sortNode, showSettings, hideSettings, updateSettings, updateNode} = require('../../../MapStore2/web/client/actions/layers');
const {groupsSelector} = require('../../../MapStore2/web/client/selectors/layers');

const LayersUtils = require('../../../MapStore2/web/client/utils/LayersUtils');

const Message = require('../../../MapStore2/web/client/plugins/locale/Message');
const assign = require('object-assign');

const layersIcon = require('../../../MapStore2/web/client/plugins/toolbar/assets/img/layers.png');

const tocSelector = createSelector(
    [
        (state) => state.controls && state.controls.toolbar && state.controls.toolbar.active === 'toc',
        groupsSelector,
        (state) => state.layers.settings || {expanded: false, options: {opacity: 1}}
    ], (enabled, groups, settings) => ({
        enabled,
        groups,
        settings
    })
);

const TOC = require('../../../MapStore2/web/client/components/TOC/TOC');
const DefaultGroup = require('../../../MapStore2/web/client/components/TOC/DefaultGroup');
const GroupOrLayer = require('./GroupOrLayer');

const LayerTree = React.createClass({
    propTypes: {
        id: PropTypes.number,
        buttonContent: PropTypes.node,
        groups: PropTypes.array,
        settings: PropTypes.object,
        groupStyle: PropTypes.object,
        groupPropertiesChangeHandler: PropTypes.func,
        layerPropertiesChangeHandler: PropTypes.func,
        onToggleGroup: PropTypes.func,
        onToggleLayer: PropTypes.func,
        onSort: PropTypes.func,
        onSettings: PropTypes.func,
        hideSettings: PropTypes.func,
        updateSettings: PropTypes.func,
        updateNode: PropTypes.func,
        activateLegendTool: PropTypes.bool,
        activateSettingsTool: PropTypes.bool,
        visibilityCheckType: PropTypes.string,
        settingsOptions: PropTypes.object
    },
    getDefaultProps() {
        return {
            groupPropertiesChangeHandler: () => {},
            layerPropertiesChangeHandler: () => {},
            onToggleGroup: () => {},
            onToggleLayer: () => {},
            onSettings: () => {},
            updateNode: () => {},
            activateLegendTool: true,
            activateSettingsTool: true,
            visibilityCheckType: "checkbox",
            settingsOptions: {}
        };
    },
    getNoBackgroundLayers(group) {
        return group.name !== 'background';
    },
    render() {
        if (!this.props.groups) {
            return <div></div>;
        }

        return (
            <div>
                <TOC onSort={this.props.onSort} filter={this.getNoBackgroundLayers}
                    nodes={this.props.groups}>
                    <DefaultGroup onSort={this.props.onSort}
                                  propertiesChangeHandler={this.props.groupPropertiesChangeHandler}
                                  onToggle={this.props.onToggleGroup}
                                  style={this.props.groupStyle}
                                  groupVisibilityCheckbox={true}
                                  visibilityCheckType={this.props.visibilityCheckType}
                                  >

                                  <GroupOrLayer
                                          onSort={this.props.onSort}
                                          groupVisibilityCheckbox={true}
                                          groupPropertiesChangeHandler={this.props.groupPropertiesChangeHandler}
                                          settingsOptions={this.props.settingsOptions}
                                          onToggle={this.props.onToggleLayer}
                                          onToggleGroup={this.props.onToggleGroup}
                                          style={this.props.groupStyle}
                                          onSettings={this.props.onSettings}
                                          propertiesChangeHandler={this.props.layerPropertiesChangeHandler}
                                          hideSettings={this.props.hideSettings}
                                          settings={this.props.settings}
                                          updateSettings={this.props.updateSettings}
                                          updateNode={this.props.updateNode}
                                          visibilityCheckType={this.props.visibilityCheckType}
                                          activateLegendTool={this.props.activateLegendTool}
                                          activateSettingsTool={this.props.activateSettingsTool}
                                          opacityText={<Message msgId="opacity"/>}
                                          saveText={<Message msgId="save"/>}
                                          closeText={<Message msgId="close"/>}/>

                    </DefaultGroup>
                </TOC>
            </div>
        );
    }
});

const TOCPlugin = connect(tocSelector, {
    groupPropertiesChangeHandler: changeGroupProperties,
    layerPropertiesChangeHandler: changeLayerProperties,
    onToggleGroup: LayersUtils.toggleByType('groups', toggleNode),
    onToggleLayer: LayersUtils.toggleByType('layers', toggleNode),
    onSort: LayersUtils.sortUsing(LayersUtils.sortLayers, sortNode),
    onSettings: showSettings,
    hideSettings: hideSettings,
    updateSettings: updateSettings,
    updateNode: updateNode
})(LayerTree);

module.exports = {
    TOCPlugin: assign(TOCPlugin, {
        Toolbar: {
            name: 'toc',
            position: 7,
            exclusive: true,
            panel: true,
            help: <Message msgId="helptexts.layerSwitcher"/>,
            tooltip: "layers",
            wrap: true,
            title: 'layers',
            icon: <img src={layersIcon}/>,
            hide: true
        },
        DrawerMenu: {
            name: 'toc',
            position: 1,
            icon: <img src={layersIcon}/>,
            title: 'layers'
        }
    }),
    reducers: {}
};
