const Rx = require('rxjs');
var {SET_CONTROL_PROPERTY, toggleControl} = require('../../../MapStore2/web/client/actions/controls');

const closeBrugisInfo = (action$, store) =>
    action$.ofType(SET_CONTROL_PROPERTY)
    .filter( (action) => action.toggle === true && action.value === "streetView" && action.control === "streetview")
      .switchMap(() => {
          let state = store.getState();
          if (state.controls && state.controls.toolbar && state.controls.streetview.active === "streetView"
                 && state.controls && state.controls.info && state.controls.info.enabled) {
              return Rx.Observable.of(toggleControl('info'));
          }
          return Rx.Observable.empty();
      });

module.exports = {
    closeBrugisInfo
};
