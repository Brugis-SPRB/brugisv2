const assign = require('object-assign');
var {LOCAL_MAPS_SAVE, LOCAL_MAPS_DEL, LOCAL_MAPS_CHANGED, DEFAULT_MAPS_PREFIX} = require('./actions');

const save = (name, newstate) => {
    localStorage.setItem(LOCAL_MAPS_PREFIX + name, newstate);
};

const del = (name) => {
    localStorage.removeItem(LOCAL_MAPS_PREFIX + name);
};

const changeDefaultMap = (name) => {
    localStorage.setItem(DEFAULT_MAPS_PREFIX, name);
};

function localMaps(state = null, action) {
    switch (action.type) {
        case LOCAL_MAPS_SAVE:
            save(action.name, action.currentstate);
            return assign({}, state, {
                localMap: true
            });
        case LOCAL_MAPS_DEL:
            del(action.name);
            return state;
        case LOCAL_MAPS_CHANGED:
            changeDefaultMap(action.name);
            return state;
        default:
            return state;
    }
}

module.exports = localMaps;
