
const LOCAL_MAPS_SAVE = 'LOCAL_MAPS_SAVE';
const LOCAL_MAPS_LOAD = 'LOCAL_MAPS_LOAD';
const LOCAL_MAPS_DEL = 'LOCAL_MAPS_DEL';
const {configureMap, configureError} = require('../../../MapStore2/web/client/actions/config');
const LOCAL_MAPS_PREFIX = 'mapstore.localmaps.';

const loadMapState = (name) => {
    return (dispatch) => {
        const loaded = localStorage.getItem(LOCAL_MAPS_PREFIX + name);
        if (loaded) {
            const obj = JSON.parse(loaded);
            if (obj) {
                dispatch(configureMap(obj, 0));
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

const delMapState = (name) => {
    return {
        type: LOCAL_MAPS_DEL,
        name
    };
};

module.exports = {
    LOCAL_MAPS_SAVE,
    LOCAL_MAPS_LOAD,
    LOCAL_MAPS_DEL,
    saveMapState,
    loadMapState,
    delMapState
};
