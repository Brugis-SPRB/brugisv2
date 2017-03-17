const assign = require('object-assign');
var {LOCAL_MAPS_SAVE} = require('./actions');
const LOCAL_MAPS_PREFIX = 'mapstore.localmaps.';

const save = (name, newstate) => {
    let savedstate = assign({}, newstate, {
        map: assign({}, newstate.map, {mapStateSource: null})
    });
    savedstate.map.present.mapStateSource = null;
    localStorage.setItem(LOCAL_MAPS_PREFIX + name, JSON.stringify({
        state: savedstate
    }));
};

function localMaps(state = null, action) {
    switch (action.type) {
        case LOCAL_MAPS_SAVE:
            save(action.name, action.currentstate);
            return assign({}, state, {
                localMap: true
            });
        default:
            return state;
    }
}

module.exports = localMaps;
