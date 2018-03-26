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
                    expanded: true
                },
                drawer: {
                    enabled: false,
                    menu: "1"
                }
            },
            brugisSurvey: {
                user: localStorage.getItem('currentUser')
            },
            mapInfo: { infoFormat: 'application/json' },
            maptype: { mapType: 'openlayers' },
            "catalog": {
              "default": {
                "newService": {
                    "url": "",
                    "type": "wms",
                    "title": "",
                    "isNew": true,
                    "autoload": false
                },
                "selectedService": "Brugis WMS Service",
                "services": {
                  "Brugis WMS Service": {
                    "url": "https://.mybrugis.irisnet.be/geoserver/ows",
                    "type": "wms",
                    "title": "Brugis WMS Service",
                    "autoload": true
                  },
                  "Bruxelles Mobilité": {
                    "url": "http://data-mobility.brussels/geoserver/bm_inspire_fr/ows",
                    "type": "wms",
                    "title": "Bruxelles Mobilité",
                    "autoload": false
                  },
                  "Bruxelles environnement": {
                    "url": "http://wms.ibgebim.be/ibgewms",
                    "type": "wms",
                    "title": "Bruxelles environnement",
                    "autoload": false
                  },
                  'AGIV WMS - Basiskaart': {
                    "url": "http://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart/wms",
                    "type": "wms",
                    "title": "AGIV WMS - Basiskaart",
                    "autoload": false
                  },
                  'Stib mivb': {
                    "url": "http://gis.irisnet.be/geoserver/stib_mivb/wms?",
                    "type": "wms",
                    "title": "Stib mivb",
                    "autoload": false
                  },
                  'IBSA WMS': {
                    "url": "http://gis.irisnet.be/geoserver/ibsa_bisa/wms?",
                    "type": "wms",
                    "title": "IBSA WMS",
                    "autoload": false
                  }
                }
              }
            }
        },
        mobile: {
            mapInfo: {enabled: true, infoFormat: 'text/html' },
            mousePosition: {enabled: true, crs: "EPSG:4326", showCenter: true}
        }
    },
    storeOpts: {
        persist: {
            whitelist: ["locale"]
        }
    }
};
