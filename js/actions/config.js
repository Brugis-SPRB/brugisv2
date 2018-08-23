var axios = require('../../MapStore2/web/client/libs/ajax');
const url = require('url');


const {configureMap, configureError} = require('../../MapStore2/web/client/actions/config');

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
                if (queryObj.zoom && parseInt(queryObj.zoom, 10) > 0 && parseInt(queryObj.zoom, 10) < 30) {
                    response.data.map.zoom = parseInt(queryObj.zoom, 10);
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
