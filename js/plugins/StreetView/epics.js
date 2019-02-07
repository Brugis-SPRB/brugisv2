const Rx = require('rxjs');
const {SET_CONTROL_PROPERTY, setControlProperty, toggleControl} = require('../../../MapStore2/web/client/actions/controls');

const closeBrugisInfo = (action$, store) =>
    action$.ofType(SET_CONTROL_PROPERTY)
    .filter( (action) => action.toggle === true && action.value === "streetView" && action.control === "streetview")
      .switchMap(() => {
          let state = store.getState();
          if (state.controls && state.controls.toolbar && state.controls.streetview.active === "streetView") {
              let mustCloseInfo = Rx.Observable.empty();
              if (state.controls && state.controls.info && state.controls.info.enabled) {
                  mustCloseInfo = Rx.Observable.of(toggleControl('info'));
              }
              let mustCloseSurvey = Rx.Observable.empty();
              if (state.controls && state.controls.brugissurvey && state.controls.brugissurvey.enabled) {
                  mustCloseSurvey = Rx.Observable.of(setControlProperty('toolbar', 'active', 'BrugisSurvey', true));
              }
              return Rx.Observable.merge(mustCloseInfo, mustCloseSurvey);
          }
          return Rx.Observable.empty();
      });

module.exports = {
    closeBrugisInfo
};
