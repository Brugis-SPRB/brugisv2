

const LOCAL_MAPS_SAVE = 'LOCAL_MAPS_SAVE';
const LOCAL_MAPS_LOAD = 'LOCAL_MAPS_LOAD';
const LOCAL_MAPS_PREFIX = 'mapstore.localmaps.';

const load = (name) => {
    const loaded = localStorage.getItem(LOCAL_MAPS_PREFIX + name);
    if (loaded) {
        const obj = JSON.parse(loaded);
        if (obj.state) {
            return obj.state;
        }
    }
    return null;
};

function saveMapState(name, currentstate) {
    return {
        type: LOCAL_MAPS_SAVE,
        name,
        currentstate
    };
}

function loadMapState(name) {
    let state = load(name, state);
    return {
        type: LOCAL_MAPS_LOAD,
        name,
        state
    };
}

module.exports = {
    LOCAL_MAPS_SAVE,
    LOCAL_MAPS_LOAD,
    saveMapState,
    loadMapState
};
