const assign = require('object-assign');
const {CLICK_ON_MAP} = require('../../../MapStore2/web/client/actions/map');

function streetView(state = null, action) {
    switch (action.type) {
        case CLICK_ON_MAP: {
            return assign({}, state, {
                clickPoint: action.point
            });
        }
        default:
          return state;
    }
}

module.exports = streetView;
