/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {
    TEXT_SEARCH_ITEM_SELECTED
    } = require('../../../MapStore2/web/client/actions/search');

const mapUtils = require('../../../MapStore2/web/client/utils/MapUtils');
const CoordinatesUtils = require('../../../MapStore2/web/client/utils/CoordinatesUtils');
const Rx = require('rxjs');

const {changeMapView} = require('../../../MapStore2/web/client/actions/map');

const searchItemSelected = action$ =>
    action$.ofType(TEXT_SEARCH_ITEM_SELECTED)
    .switchMap(action => {

        return Rx.Observable.of(action.item)
            .concatMap((item) => {
                let bbox = item.bbox;
                let mapSize = action.mapConfig.size;

                // zoom by the max. extent defined in the map's config
                let newZoom = mapUtils.getZoomForExtent(CoordinatesUtils.reprojectBbox(bbox, "EPSG:4326", action.mapConfig.projection), mapSize, 0, 21, null);

                let actions = [
                    changeMapView(item.center, newZoom, {
                        bounds: {
                            minx: bbox[0],
                            miny: bbox[1],
                            maxx: bbox[2],
                            maxy: bbox[3]
                        },
                        crs: "EPSG:4326",
                        rotation: 0
                    }, action.mapConfig.size, null, action.mapConfig.projection)
                ];
                return actions;
            });

    });

    /**
     * Actions for search
     * @name epics.search
     */
module.exports = {
    searchItemSelected
};
