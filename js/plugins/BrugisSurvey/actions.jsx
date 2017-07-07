const axios = require('axios');

const BRUGIS_SURVEY_LOAD_START = 'BRUGIS_SURVEY_LOAD_START';
const BRUGIS_SURVEY_LOADED = 'BRUGIS_SURVEY_LOADED';
const BRUGIS_SURVEY_LOAD_ERROR = 'BRUGIS_SURVEY_LOAD_ERROR';
const BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE = 'BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE';
const BRUGIS_SURVEY_SELECT_PARCEL_TOGGLE = 'BRUGIS_SURVEY_SELECT_PARCEL_TOGGLE';
const BRUGIS_SURVEY_QUERY_WFS_START = 'BRUGIS_SURVEY_QUERY_WFS_START';
const BRUGIS_SURVEY_QUERY_WFS_LOADED = 'BRUGIS_SURVEY_QUERY_WFS_LOADED';
const BRUGIS_SURVEY_QUERY_WFS_LOAD_ERROR = 'BRUGIS_SURVEY_QUERY_WFS_LOAD_ERROR';

const BRUGIS_SURVEY_URL = 'http://mbr227.irisnet.be/WebReperage/res/reperage/userextjs?start=0&limit=15&sort=startdate&dir=DESC&user=noname';
const BRUGIS_SURVEY_WFS_URL = 'http://mbr115.irisnet.be:8080/geoserver/wfs';

function brugisSurveyQueryWFSStart() {
    return {
        type: BRUGIS_SURVEY_QUERY_WFS_START
    };
}

function brugisSurveyQueryWFSLoaded(info) {
    return {
        type: BRUGIS_SURVEY_QUERY_WFS_LOADED,
        info
    };
}

function brugisSurveyQueryWFSLoadError(error) {
    return {
        type: BRUGIS_SURVEY_QUERY_WFS_LOAD_ERROR,
        error
    };
}

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

function brugisSelectParcelToggle() {
    return {
        type: BRUGIS_SURVEY_SELECT_PARCEL_TOGGLE
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

function loadBrugisSurveyWFSIntersectQuery(url, filter) {
    return (dispatch) => {
        dispatch(brugisSurveyQueryWFSStart());
        return axios.get(url, {params: filter}, {
            timeout: 10000,
            headers: {'Accept': 'application/json', 'Content-Type': 'text/plain'}
        }).then((response) => {
            if (typeof response.data === 'object') {
                dispatch(brugisSurveyQueryWFSLoaded(response.data));
            } else {
                try {
                    dispatch(brugisSurveyQueryWFSLoaded(JSON.parse(response.data)));
                } catch(e) {
                    dispatch(brugisSurveyQueryWFSLoadError('response is not json (' + response + ')'));
                }
            }
        }).catch((e) => {
            dispatch(brugisSurveyQueryWFSLoadError(e));
        });
    };
}

module.exports = {
    BRUGIS_SURVEY_LOAD_START,
    BRUGIS_SURVEY_LOADED,
    BRUGIS_SURVEY_LOAD_ERROR,
    BRUGIS_SURVEY_DRAW_SURFACE_TOGGLE,
    BRUGIS_SURVEY_SELECT_PARCEL_TOGGLE,
    BRUGIS_SURVEY_QUERY_WFS_START,
    BRUGIS_SURVEY_QUERY_WFS_LOADED,
    BRUGIS_SURVEY_QUERY_WFS_LOAD_ERROR,
    loadBrugisSurveys,
    brugisSurveyDrawSurfaceToggle,
    brugisSelectParcelToggle,
    loadBrugisSurveyWFSIntersectQuery
};
