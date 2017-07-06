const {
  BRUGIS_SURVEY_LOAD_START,
  BRUGIS_SURVEY_LOADED,
  BRUGIS_SURVEY_LOAD_ERROR,
  BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE
} = require('./actions');
const {
    END_DRAWING,
    CHANGE_DRAWING_STATUS
} = require('../../../MapStore2/web/client/actions/draw');

const assign = require('object-assign');
const union = require('turf-union');

const initialState = {
    active_tool: "",
    newSurveyEnabled: false,
    spatialField: {
        method: null,
        attribute: "the_geom",
        operation: "INTERSECTS",
        geometry: null
    }
};

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
        case CHANGE_DRAWING_STATUS: {
            if (action.owner === "BrugisSurvey" && action.status === "start") {
                return assign({}, state, {newSurveyEnabled: false});
            }
            return state;
        }
        case END_DRAWING: {
            let newState;
            if (action.owner === "BrugisSurvey") {
                if (state.spatialField && state.spatialField.geometry) {
                    let fromFeat = {
                      "type": "Feature",
                      "geometry": state.spatialField.geometry
                     };
                    let addFeat = {
                      "type": "Feature",
                      "geometry": action.geometry
                     };
                    let unionFeat = union(fromFeat, addFeat);
                    newState = assign({}, state, {newSurveyEnabled: true, spatialField: assign({}, state.spatialField, {geometry: unionFeat.geometry})});
                } else {
                    newState = assign({}, state, {newSurveyEnabled: true, spatialField: assign({}, state.spatialField, {geometry: action.geometry})});
                }
            } else {
                newState = state;
            }

            return newState;
        }
        default:
            return state;
    }
}

module.exports = brugisSurvey;
