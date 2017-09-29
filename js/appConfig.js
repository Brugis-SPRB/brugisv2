/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    pages: [{
        name: "map",
        path: "/",
        component: require('./pages/Main')
    }, {
        name: "infos",
        path: "/infos",
        component: require('./pages/Home')
    }, {
        name: "main",
        path: "/main",
        component: require('./pages/Main')
    }],
    pluginsDef: require('./plugins.js'),
    initialState: {
        defaultState: {
            mousePosition: {enabled: false},
            controls: {
                toolbar: {
                    active: null,
                    expanded: false
                },
                drawer: {
                    enabled: false,
                    menu: "2"
                }
            },
            brugisSurvey: {
                user: localStorage.getItem('currentUser')
            },
            mapInfo: { infoFormat: 'application/json' },
            catalog: { format: 'wms' },
            maptype: { mapType: 'openlayers' }
        },
        mobile: {
            mapInfo: {enabled: true, infoFormat: 'text/html' },
            mousePosition: {enabled: true, crs: "EPSG:4326", showCenter: true}
        }
    }
};
