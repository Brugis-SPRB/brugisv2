const Rx = require('rxjs');
var {SET_CONTROL_PROPERTY, setControlProperty} = require('../../../MapStore2/web/client/actions/controls');
const {addLayer, removeLayer} = require('../../../MapStore2/web/client/actions/layers');
const PARCEL_LAYER_ID = "SURVEY_PARCEL";

const addremoveparcelsonactivativeEpic = (action$, store) =>
    action$.ofType(SET_CONTROL_PROPERTY)
      .filter( (action) => action.toggle === true && action.value === "BrugisSurvey" && action.control === "toolbar")
      .switchMap((action) => {
          let state = store.getState();
          if( state.controls && state.controls.toolbar && state.controls.toolbar.active === "BrugisSurvey" || false) {
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
          } else {
              return Rx.Observable.of(removeLayer(PARCEL_LAYER_ID));
          }
      });

module.exports = {
    addremoveparcelsonactivativeEpic
};
