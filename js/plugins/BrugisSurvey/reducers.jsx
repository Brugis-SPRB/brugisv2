const {
  BRUGIS_SURVEY_LOAD_START,
  BRUGIS_SURVEY_LOADED,
  BRUGIS_SURVEY_LOAD_ERROR,
  BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE,
  BRUGIS_SURVEY_SELECT_PARCEL_TOGGLE
} = require('./actions');

const {
    END_DRAWING,
    CHANGE_DRAWING_STATUS
} = require('../../../MapStore2/web/client/actions/draw');

const {CLICK_ON_MAP} = require('../../../MapStore2/web/client/actions/map');

const {LOAD_FEATURE_INFO} = require('../../../MapStore2/web/client/actions/mapInfo');


const assign = require('object-assign');

const initialState = {
    active_tool: "",
    clickPoint: null,
    clickParcel: null,
    newSurveyEnabled: false,
    spatialField: {
        method: null,
        attribute: "the_geom",
        operation: "INTERSECTS",
        geometries: []
    }
};

// TODO Remove polygon fix when https://github.com/openlayers/openlayers/pull/6027 openlayer is updated
function closePolygonRing(geom) {
    geom.coordinates[0].push(geom.coordinates[0][0]);
    return geom;
}

function brugisSurvey(state = initialState, action) {
    switch (action.type) {
        case BRUGIS_SURVEY_LOAD_START:
            return state;
        case BRUGIS_SURVEY_LOADED:
            return state;
        case BRUGIS_SURVEY_LOAD_ERROR:
            return state;
        case BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE:
            let dsState;
            if (state.active_tool === "DRAW_POLY") {
                dsState = assign({}, state, { active_tool: ""});
            } else {
                dsState = assign({}, state, { active_tool: "DRAW_POLY"});
            }
            return dsState;
        case BRUGIS_SURVEY_SELECT_PARCEL_TOGGLE: {
            let spState;
            if (state.active_tool === "SELECT_PARCEL") {
                spState = assign({}, state, { active_tool: ""});
            } else {
                spState = assign({}, state, { active_tool: "SELECT_PARCEL"});
            }
            return spState;
        }
        case CHANGE_DRAWING_STATUS: {
            if (action.owner === "BrugisSurvey" && action.status === "start") {
                return assign({}, state, {newSurveyEnabled: false});
            }
            return state;
        }
        case END_DRAWING: {
            let newState;
            if (action.owner === "BrugisSurvey") {
                if (state.spatialField && state.spatialField.geometries && state.spatialField.geometries.length > 0) {
                    // TODO Remove polygon fix when https://github.com/openlayers/openlayers/pull/6027 openlayer is updated
                    newState = assign({}, state, {newSurveyEnabled: true, spatialField: assign({}, state.spatialField, {geometries: state.spatialField.geometries.concat(closePolygonRing(action.geometry))})});
                } else {
                    newState = assign({}, state, {newSurveyEnabled: true, spatialField: assign({}, state.spatialField, {geometries: [closePolygonRing(action.geometry)]})});
                }
            } else {
                newState = state;
            }

            return newState;
        }
        case CLICK_ON_MAP: {
            if (state.active_tool && state.active_tool === "SELECT_PARCEL") {
                return assign({}, state, {
                    clickPoint: action.point
                });
            }
            return state;
        }
        case LOAD_FEATURE_INFO: {
            if (state.active_tool && state.active_tool === "SELECT_PARCEL") {
                if (action.data && action.data.features && action.data.features[0] && action.data.features[0].geometry) {
                    return assign({}, state, {newSurveyEnabled: true, spatialField: assign({}, state.spatialField, {geometries: state.spatialField.geometries.concat(action.data.features[0].geometry)})});
                }
            }
            return state;
        }
        default:
            return state;
    }
}

module.exports = brugisSurvey;
