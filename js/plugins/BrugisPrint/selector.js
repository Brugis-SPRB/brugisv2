
const MapUtils = require('../../../MapStore2/web/client/utils/MapUtils');
const {mapSelector} = require('../../../MapStore2/web/client/selectors/map');
const {createSelector} = require('reselect');

const scalesSelector = createSelector(
    [mapSelector],
    (map) => {
        return MapUtils.getScales(
            map && map.projection || 'EPSG:3857',
            map && map.mapOptions && map.mapOptions.view && map.mapOptions.view.DPI || null
        );
    }
);

module.exports = {
    scalesSelector
};
