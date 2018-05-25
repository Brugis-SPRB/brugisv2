const Rx = require('rxjs');
var {SET_CONTROL_PROPERTY, setControlProperty, TOGGLE_CONTROL} = require('../../../MapStore2/web/client/actions/controls');
const {addLayer, removeLayer} = require('../../../MapStore2/web/client/actions/layers');
const PARCEL_LAYER_ID = "SURVEY_PARCEL";

const {
    changeDrawingStatus
} = require('../../../MapStore2/web/client/actions/draw');

const {loadBrugisSurveys, BRUGIS_SURVEY_CREATE_DONE} =require('./actions');


const addremoveparcelsonactivativeEpic = (action$, store) =>
    action$.ofType(SET_CONTROL_PROPERTY)
      .filter( (action) => action.toggle === true && action.value === "BrugisSurvey" && action.control === "toolbar")
      .switchMap(() => {
          let state = store.getState();
          if (state.controls && state.controls.toolbar && state.controls.toolbar.active === "BrugisSurvey" || false) {
              return Rx.Observable.of(addLayer({
                  type: "wms",
                  url: state.brugisSurvey.geoserver,
                  visibility: true,
                  name: "BDU:Parcelle_2016",
                  title: "Parcelle",
                  group: "brugis",
                  origin: [140000.0, 160000.0],
                  tileSize: 256,
                  tiled: true,
                  id: PARCEL_LAYER_ID
              }));
          }
          return Rx.Observable.of(
            removeLayer(PARCEL_LAYER_ID),
            changeDrawingStatus("clean", null, 'BrugisSurvey')
          )
      });

const closebrugissurveyEpic = (action$, store) =>
    action$.ofType(TOGGLE_CONTROL)
      .filter( (action) => action.control === "brugissurvey" )
      .switchMap(() => {
          let state = store.getState();
          if (state.controls && state.controls.toolbar && state.controls.toolbar.active === "BrugisSurvey" || false) {
              return Rx.Observable.of(setControlProperty("toolbar", "active", "BrugisSurvey", true));
          }
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
    closebrugissurveyEpic,
    reloadWhenNewSurveyIsDone
};
