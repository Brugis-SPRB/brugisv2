const axios = require('axios');

const BRUGIS_SURVEY_LOAD_START = 'BRUGIS_SURVEY_LOAD_START';
const BRUGIS_SURVEY_LOADED = 'BRUGIS_SURVEY_LOADED';
const BRUGIS_SURVEY_LOAD_ERROR = 'BRUGIS_SURVEY_LOAD_ERROR';
const BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE = 'BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE';
const BRUGIS_SURVEY_SELECT_PARCEL_TOGGLE = 'BRUGIS_SURVEY_SELECT_PARCEL_TOGGLE';
const BRUGIS_SURVEY_DELETE_DRAWINGS = 'BRUGIS_SURVEY_DELETE_DRAWINGS';
const BRUGIS_SURVEY_CREATE_START = 'BRUGIS_SURVEY_CREATE_START';
const BRUGIS_SURVEY_CREATE_DONE = 'BRUGIS_SURVEY_CREATE_DONE';
const BRUGIS_SURVEY_CREATE_FAILED = 'BRUGIS_SURVEY_CREATE_FAILED';
const BRUGIS_SURVEY_TYPE_LOADED = 'BRUGIS_SURVEY_TYPE_LOADED';

const {error} = require('../../../MapStore2/web/client/actions/notifications');

function brugisSurveyTypeLoaded(info) {
    return {
      type: BRUGIS_SURVEY_TYPE_LOADED,
      info
    };
}

function brugisSurveyCreateDone(info) {
    return {
        type: BRUGIS_SURVEY_CREATE_DONE,
        info
    };
}

function brugisSurveyCreateError(errormsg) {
    return {
        type: BRUGIS_SURVEY_CREATE_FAILED,
        errormsg
    };
}

function brugisSurveyCreateStart() {
    return {
        type: BRUGIS_SURVEY_CREATE_START
    };
}

function brugisSurveyLoaded(info) {
    return {
        type: BRUGIS_SURVEY_LOADED,
        info
    };
}

function brugisSurveyLoadError(errormsg) {
    return {
        type: BRUGIS_SURVEY_LOAD_ERROR,
        errormsg
    };
}

function brugisSurveyLoadStart() {
    return {
        type: BRUGIS_SURVEY_LOAD_START
    };
}

function brugisSurveyDeleteDrawings() {
    return {
        type: BRUGIS_SURVEY_DELETE_DRAWINGS
    };
}

function brugisSurveyDrawSurfaceToggle() {
    return {
        type: BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE
    };
}

function brugisSelectParcelToggle() {
    return {
        type: BRUGIS_SURVEY_SELECT_PARCEL_TOGGLE
    };
}

function loadBrugisSurveys(url, data) {
    return (dispatch) => {
        dispatch(brugisSurveyLoadStart());
        return axios.get(url, data).then((response) => {
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

function loadBrugisSurveyTypes(url) {
    // url = https://mbr227.irisnet.be/WebReperage/resources/ReperagesType?_dc=1499942897118&user=
    return (dispatch) => {
        return axios.get(url).then((response) => {
            if (typeof response.data === 'object') {
                dispatch(brugisSurveyTypeLoaded(response.data));
            } else {
                dispatch(brugisSurveyLoadError('response is not json (' + response + ')'));
            }
        }).catch((e) => {
            dispatch(brugisSurveyLoadError(e));
        });
    };
}

function postNewSurvey(url, payload) {
    return (dispatch) => {
        dispatch(brugisSurveyCreateStart());
        return axios.post(url, payload, {
          headers: {'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'MyBalls', Accept: 'application/json'}
        }).then((response) => {
            if (typeof response.data === 'object') {
                if (response.data.success) {
                    dispatch(brugisSurveyCreateDone(response.data));
                } else {
                    dispatch(error({
                        message: response.data.msg
                    }));
                }
            } else {
                dispatch(brugisSurveyCreateError('response is not json (' + response + ')'));
            }
        }).catch((e) => {
            if (e.data && e.data.msg) {
                dispatch(error({
                    message: e.data.msg,
                    title: e.data.msg
                }));
            } else {
                dispatch(brugisSurveyCreateError(e));
            }
        });
    };
}

function postRestartSurvey(url) {
    return (dispatch) => {
        return axios.get(url).catch((e) => {
            dispatch(brugisSurveyCreateError(e));
        });
    };
}

module.exports = {
    BRUGIS_SURVEY_LOAD_START,
    BRUGIS_SURVEY_LOADED,
    BRUGIS_SURVEY_LOAD_ERROR,
    BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE,
    BRUGIS_SURVEY_SELECT_PARCEL_TOGGLE,
    BRUGIS_SURVEY_DELETE_DRAWINGS,
    BRUGIS_SURVEY_TYPE_LOADED,
    BRUGIS_SURVEY_CREATE_START,
    BRUGIS_SURVEY_CREATE_DONE,
    loadBrugisSurveys,
    brugisSurveyDrawSurfaceToggle,
    brugisSelectParcelToggle,
    brugisSurveyDeleteDrawings,
    postNewSurvey,
    loadBrugisSurveyTypes,
    postRestartSurvey
};
