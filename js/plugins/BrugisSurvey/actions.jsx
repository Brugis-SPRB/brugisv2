const axios = require('axios');

const BRUGIS_SURVEY_LOAD_START = 'BRUGIS_SURVEY_LOAD_START';
const BRUGIS_SURVEY_LOADED = 'BRUGIS_SURVEY_LOADED';
const BRUGIS_SURVEY_LOAD_ERROR = 'BRUGIS_SURVEY_LOAD_ERROR';
const BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE = 'BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE';

const BRUGIS_SURVEY_URL = 'http://mbr227.irisnet.be/WebReperage/res/reperage/userextjs?start=0&limit=15&sort=startdate&dir=DESC&user=noname';

function brugisSurveyLoaded(info) {
    return {
        type: BRUGIS_SURVEY_LOADED,
        info
    };
}

function brugisSurveyLoadError(error) {
    return {
        type: BRUGIS_SURVEY_LOAD_ERROR,
        error
    };
}

function brugisSurveyLoadStart() {
    return {
        type: BRUGIS_SURVEY_LOAD_START
    };
}

function brugisSurveyDrawSurfaceToggle() {
    return {
        type: BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE
    };
}

function loadBrugisSurveys() {
    return (dispatch) => {
        dispatch(brugisSurveyLoadStart());
        return axios.get(BRUGIS_SURVEY_URL).then((response) => {
            if (typeof response.data === 'object') {
                dispatch(brugisSurveyLoaded(response.data));
            } else {
                dispatch(brugisSurveyLoadError('response is not json (' + response + ')'));
            }
        }).catch((e) => {
            dispatch(brugisSurveyLoadError(e));
        });
    };
}

module.exports = {
    BRUGIS_SURVEY_LOAD_START,
    BRUGIS_SURVEY_LOADED,
    BRUGIS_SURVEY_LOAD_ERROR,
    BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE,
    loadBrugisSurveys,
    brugisSurveyDrawSurfaceToggle
};
