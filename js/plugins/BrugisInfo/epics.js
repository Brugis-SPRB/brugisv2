const Rx = require('rxjs');
const {PURGE_MAPINFO_RESULTS, toggleMapInfoState} = require('../../../MapStore2/web/client/actions/mapInfo');
const {TOGGLE_CONTROL, setControlProperty} = require('../../../MapStore2/web/client/actions/controls');
const {changeDrawingStatus} = require('../../../MapStore2/web/client/actions/draw');

const purgeHightlight = (action$) =>
    action$.ofType(PURGE_MAPINFO_RESULTS)
      .switchMap(() => {
          return Rx.Observable.of(changeDrawingStatus("clean", null, 'BrugisInfo'));
      });

const syncEnabledFlag = (action$, store) =>
    action$.ofType(TOGGLE_CONTROL)
      .filter( (action) => action.control === "info")
      .switchMap(() => {
          let state = store.getState();
          let mustCloseInfo = Rx.Observable.empty();
          let mustCloneStreet = Rx.Observable.empty();

          if (state.controls.info && state.controls.info.enabled) {
              if (state.controls && state.controls.brugissurvey && state.controls.brugissurvey.enabled) {
                  mustCloseInfo = Rx.Observable.of(setControlProperty('toolbar', 'active', 'BrugisSurvey', true));
              }

              if (state.controls && state.controls.streetview && state.controls.streetview.active === "streetView") {
                  mustCloneStreet = Rx.Observable.of(setControlProperty('streetview', 'active', 'streetView', true));
              }
          }
          return Rx.Observable.merge(Rx.Observable.of(toggleMapInfoState()), mustCloseInfo, mustCloneStreet);
      });

module.exports = {
    purgeHightlight,
    syncEnabledFlag
};
