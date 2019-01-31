const assign = require('object-assign');
const {CLICK_ON_MAP} = require('../../../MapStore2/web/client/actions/map');
const {UPDATE_POSITION} = require('./actions');

function streetView(state = null, action) {
    switch (action.type) {
        case CLICK_ON_MAP: {
            return assign({}, state, {
                clickPoint: action.point,
                movPoint: action.point
            });
        }
        case UPDATE_POSITION: {
            return assign({}, state, {
                movPoint: action.position
            });
        }
        default:
          return state;
    }
}

module.exports = streetView;
