
const PRINT_CAPABILITIES_LOADED = 'PRINT_CAPABILITIES_LOADED';
const PRINT_CAPABILITIES_ERROR = 'PRINT_CAPABILITIES_ERROR';

const SET_PRINT_PARAMETER = 'SET_PRINT_PARAMETER';
const CONFIGURE_PRINT_MAP = 'CONFIGURE_PRINT_MAP';
const CHANGE_PRINT_ZOOM_LEVEL = 'CHANGE_PRINT_ZOOM_LEVEL';
const CHANGE_MAP_PRINT_PREVIEW = 'CHANGE_MAP_PRINT_PREVIEW';
const PRINT_SUBMITTING = 'PRINT_SUBMITTING';
const PRINT_ERROR = 'PRINT_ERROR';
const PRINT_CREATED = 'PRINT_CREATED';
const PRINT_CANCEL = 'PRINT_CANCEL';

const axios = require('../../../MapStore2/web/client/libs/ajax');
const EnvUtils = require('../../utils/EnvUtils');

function printCapabilitiesLoaded(capabilities) {
    return {
        type: PRINT_CAPABILITIES_LOADED,
        capabilities
    };
}

function printSubmitting() {
    return {
        type: PRINT_SUBMITTING
    };
}

function printCancel() {
    return {
        type: PRINT_CANCEL
    };
}

function printCreated(url) {
    return {
        type: PRINT_CREATED,
        url
    };
}

function printCapabilitiesError(error) {
    return {
        type: PRINT_CAPABILITIES_ERROR,
        error
    };
}

function printError(error) {
    return {
        type: PRINT_ERROR,
        error
    };
}

function printSubmit(url, spec) {
    return (dispatch) => {
        return axios.post(url, spec).then((response) => {
            if (typeof response.data === 'object') {
                let hackedUrl = response.data.getURL;
                if (EnvUtils.getEnvironment() === 'PRDNEW' || EnvUtils.getEnvironment() === 'STANEW') {
                    hackedUrl = hackedUrl.replace("http", "https");
                    if (EnvUtils.getEnvironment() === 'PRDNEW') {
                        hackedUrl = hackedUrl.replace("geoserver/pdf", "print");
                    }
                }
                dispatch(printCreated(response.data && hackedUrl));
            } else {
                try {
                    JSON.parse(response.data);
                } catch (e) {
                    dispatch(printError('Error on reading print result: ' + e.data));
                }
            }
        }).catch((e) => {
            dispatch(printError('Error on printing: ' + e.data));
        });
    };
}

function loadPrintCapabilities(url) {
    return (dispatch) => {
        return axios.get(url).then((response) => {
            if (typeof response.data === 'object') {
                dispatch(printCapabilitiesLoaded(response.data));
            } else {
                try {
                    JSON.parse(response.data);
                } catch (e) {
                    dispatch(printCapabilitiesError('Print configuration broken (' + url + '): ' + e.data));
                }

            }

        }).catch((e) => {
            dispatch(printCapabilitiesError('Print configuration not available (' + url + '): ' + e.data));
        });
    };
}

function setPrintParameter(name, value) {
    return {
        type: SET_PRINT_PARAMETER,
        name,
        value
    };
}

function configurePrintMap(center, zoom, scaleZoom, scale, layers, projection, currentLocale) {
    return {
        type: CONFIGURE_PRINT_MAP,
        center,
        zoom,
        scaleZoom,
        scale,
        layers,
        projection,
        currentLocale
    };
}

function changePrintZoomLevel(zoom, scale) {
    return {
        type: CHANGE_PRINT_ZOOM_LEVEL,
        zoom,
        scale
    };
}

function changeMapPrintPreview(center, zoom, bbox, size, mapStateSource, projection) {
    return {
        type: CHANGE_MAP_PRINT_PREVIEW,
        center,
        zoom,
        bbox,
        size,
        mapStateSource,
        projection
    };
}

module.exports = {
    PRINT_CAPABILITIES_LOADED,
    PRINT_CAPABILITIES_ERROR,
    SET_PRINT_PARAMETER,
    CONFIGURE_PRINT_MAP,
    CHANGE_PRINT_ZOOM_LEVEL,
    CHANGE_MAP_PRINT_PREVIEW,
    PRINT_SUBMITTING,
    PRINT_CREATED,
    PRINT_ERROR,
    PRINT_CANCEL,
    loadPrintCapabilities,
    setPrintParameter,
    configurePrintMap,
    changePrintZoomLevel,
    changeMapPrintPreview,
    printSubmit,
    printSubmitting,
    printCancel
};
