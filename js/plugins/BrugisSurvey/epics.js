const Rx = require('rxjs');
var {SET_CONTROL_PROPERTY, setControlProperty, toggleControl} = require('../../../MapStore2/web/client/actions/controls');
const {addLayer, removeLayer} = require('../../../MapStore2/web/client/actions/layers');
const PARCEL_LAYER_ID = "SURVEY_PARCEL";


const {
    changeDrawingStatus
} = require('../../../MapStore2/web/client/actions/draw');

const {loadBrugisSurveys, BRUGIS_SURVEY_CREATE_DONE, brugisSurveyDeleteDrawings} = require('./actions');


const addremoveparcelsonactivativeEpic = (action$, store) =>
    action$.ofType(SET_CONTROL_PROPERTY)
      .filter( (action) => action.toggle === true && action.value === "BrugisSurvey" && action.control === "toolbar")
      .switchMap(() => {
          let state = store.getState();
          if (state.controls && state.controls.toolbar && state.controls.toolbar.active === "BrugisSurvey" || false) {
              let baseobs = Rx.Observable.from([addLayer({
                    type: "wms",
                    url: state.brugisSurvey.geoserver,
                    visibility: true,
                    name: "BDU:Parcelle_2020",
                    title: "Parcelle",
                    group: "brugis",
                    origin: [140000.0, 160000.0],
                    tileSize: 256,
                    tiled: true,
                    id: PARCEL_LAYER_ID
              }), toggleControl('brugissurvey', null)]);

              let mustCloseInfo = Rx.Observable.empty();
              if (state.controls && state.controls.info && state.controls.info.enabled) {
                  mustCloseInfo = Rx.Observable.of(toggleControl('info'));
              }

              let mustCloneStreet = Rx.Observable.empty();
              if (state.controls && state.controls.streetview && state.controls.streetview.active === "streetView") {
                  mustCloneStreet = Rx.Observable.of(setControlProperty('streetview', 'active', 'streetView', true));
              }

              return Rx.Observable.merge(
                baseobs,
                mustCloseInfo,
                mustCloneStreet
              );
          }
          return Rx.Observable.of(
            removeLayer(PARCEL_LAYER_ID),
            changeDrawingStatus("clean", null, 'BrugisSurvey'),
            brugisSurveyDeleteDrawings(),
            toggleControl('brugissurvey', null)
          );
      });

const reloadWhenNewSurveyIsDone = (action$, store) =>
    action$.ofType(BRUGIS_SURVEY_CREATE_DONE)
      .switchMap(() => {
          let state = store.getState();
          return Rx.Observable.of(
            loadBrugisSurveys(state.brugisSurvey.webreperagehost + "/res/reperage/userextjs?sort=startdate&dir=DESC&user=" + state.brugisSurvey.user)
          );
      });

module.exports = {
    addremoveparcelsonactivativeEpic,
    reloadWhenNewSurveyIsDone
};
