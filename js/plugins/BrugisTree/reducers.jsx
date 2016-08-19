
var {BRUGIS_TREE_LOAD_START, BRUGIS_TREE_LOADED, BRUGIS_TREE_LOAD_ERROR} = require('./actions');

function brugisTree(state = null, action) {
    switch (action.type) {
        case BRUGIS_TREE_LOAD_START:
            return state;
        case BRUGIS_TREE_LOADED:
            return state;
        case BRUGIS_TREE_LOAD_ERROR:
            return state;
        default:
            return state;
    }
}


module.exports = brugisTree;
