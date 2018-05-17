const assign = require('object-assign');
var {LOCAL_MAPS_SAVE, LOCAL_MAPS_DEL} = require('./actions');
const LOCAL_MAPS_PREFIX = 'mapstore.localmaps.';

const save = (name, newstate) => {
    localStorage.setItem(LOCAL_MAPS_PREFIX + name, newstate);
};

function localMaps(state = null, action) {
    switch (action.type) {
        case LOCAL_MAPS_SAVE:
            save(action.name, action.currentstate);
            return assign({}, state, {
                localMap: true
            });
        case LOCAL_MAPS_DEL:
            return assign({}, state, {
                localMap: true
            });
        default:
            return state;
    }
}

module.exports = localMaps;
