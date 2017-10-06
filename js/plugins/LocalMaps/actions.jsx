

const LOCAL_MAPS_SAVE = 'LOCAL_MAPS_SAVE';
const LOCAL_MAPS_LOAD = 'LOCAL_MAPS_LOAD';
const {configureMap, configureError} = require('../../../MapStore2/web/client/actions/config');
const LOCAL_MAPS_PREFIX = 'mapstore.localmaps.';

const loadMapState = (name) => {
    return (dispatch) => {
        const loaded = localStorage.getItem(LOCAL_MAPS_PREFIX + name);
        if (loaded) {
            const obj = JSON.parse(loaded);
            if (obj) {
                dispatch(configureMap(obj, name));
            }
        } else {
            dispatch(configureError("State not found in localStorage"));
        }
    };
};

function saveMapState(name, currentstate) {
    return {
        type: LOCAL_MAPS_SAVE,
        name,
        currentstate
    };
}

module.exports = {
    LOCAL_MAPS_SAVE,
    LOCAL_MAPS_LOAD,
    saveMapState,
    loadMapState
};
