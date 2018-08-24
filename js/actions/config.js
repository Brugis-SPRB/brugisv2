var axios = require('../../MapStore2/web/client/libs/ajax');
const url = require('url');


const {configureMap, configureError} = require('../../MapStore2/web/client/actions/config');
const mapUtils = require('../../MapStore2/web/client/utils/MapUtils');
const CoordinatesUtils = require('../../MapStore2/web/client/utils/CoordinatesUtils');

const METERS_PER_UNIT = {
    'm': 1,
    'degrees': 111194.87428468118,
    'ft': 0.3048,
    'us-ft': 1200 / 3937
};

function dpi2dpu(dpi, projection) {
    const units = CoordinatesUtils.getUnits(projection || "EPSG:3857");
    return METERS_PER_UNIT[units] * mapUtils.dpi2dpm(dpi || DEFAULT_SCREEN_DPI);
}

function getScales(resolutions, projection, dpi) {
    var dpu = dpi2dpu(dpi, projection);
    return resolutions.map(function (resolution) {
        return resolution * dpu;
    });
}

/*
  Altered version of loadMapConfig.
  This method check url after receiving the config file in order to override the following settingsPanel
   * Center (via lambx and lamby parameters)
   * ZoomLevel (via zoom)
*/

function loadMapConfig(configName, mapId) {
    return (dispatch) => {
        return axios.get(configName).then((response) => {
            if (typeof response.data === 'object') {
                const queryObj = url.parse(window.location.href, true).query;
                if (queryObj.lambx && queryObj.lamby
                      && parseInt(queryObj.lambx, 10) > 0
                      && parseInt(queryObj.lamby, 10) > 0
                      && parseInt(queryObj.lambx, 10) < 300000
                      && parseInt(queryObj.lamby, 10) < 300000) {
                    response.data.map.center.x = parseInt(queryObj.lambx, 10);
                    response.data.map.center.y = parseInt(queryObj.lamby, 10);
                }
                if (queryObj.zoom && parseInt(queryObj.zoom, 10) > 0 && parseInt(queryObj.zoom, 10) < 100000) {
                   var scales = getScales(
                      response.data.map.mapOptions.view.resolutions,
                      response.data.map.projection,
                      response.data.map.mapOptions.view.DPI
                   );
                   var zoom = scales.length -1;
                   for (var zoomLvl in scales) {
                     if (parseInt(queryObj.zoom, 10) >= Math.round(scales[zoomLvl])) {
                        zoom = zoomLvl;
                        break;
                     }
                   }
                    response.data.map.zoom = zoom;
                }
                dispatch(configureMap(response.data, mapId));
            } else {
                try {
                    JSON.parse(response.data);
                } catch (e) {
                    dispatch(configureError('Configuration file broken (' + configName + '): ' + e.message, mapId));
                }
            }
        }).catch((e) => {
            dispatch(configureError(e, mapId));
        });
    };
}

module.exports = {loadMapConfig};
