const Rx = require('rxjs');
const {PURGE_MAPINFO_RESULTS, toggleMapInfoState} = require('../../../MapStore2/web/client/actions/mapInfo');
const {TOGGLE_CONTROL, setControlProperty} = require('../../../MapStore2/web/client/actions/controls');
const {changeDrawingStatus} = require('../../../MapStore2/web/client/actions/draw');

const purgeHightlight = (action$) =>
    action$.ofType(PURGE_MAPINFO_RESULTS)
      .switchMap(() => {
          return Rx.Observable.of(changeDrawingStatus("clean", null, 'BrugisInfo'));
      });

const syncEnabledFlag = (action$) =>
    action$.ofType(TOGGLE_CONTROL)
      .filter( (action) => action.control === "info")
      .switchMap(() => {
          return Rx.Observable.of(toggleMapInfoState());
      });

const closeBrugisSurvey = (action$, store) =>
    action$.ofType(TOGGLE_CONTROL)
      .filter( (action) => action.control === "info")
      .switchMap(() => {
          let state = store.getState();
          if (state.controls && state.controls.brugissurvey && state.controls.brugissurvey.enabled && state.controls.info && state.controls.info.enabled) {
              return Rx.Observable.of(setControlProperty('toolbar', 'active', 'BrugisSurvey', true));
          }
          return Rx.Observable.empty();
      });


module.exports = {
    purgeHightlight,
    syncEnabledFlag,
    closeBrugisSurvey
};
