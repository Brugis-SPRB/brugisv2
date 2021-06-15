
module.exports = {
    pages: [{
        name: "map",
        path: "/",
        component: require('./pages/Main')
    }, {
        name: "infos",
        path: "/infos",
        component: require('./pages/BrugisInfo')
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
                    "url": "https://mybrugis.irisnet.be/geoserver/www/wmsaatl/wmsc_brugis_anon.xml",
                    "type": "wms",
                    "title": "Brugis WMS Service",
                    "autoload": true
                  },
                  "Bruxelles Mobilité": {
                    "url": "https://data.mobility.brussels/geoserver/bm_inspire_fr/ows",
                    "type": "wms",
                    "title": "Bruxelles Mobilité",
                    "autoload": false
                  },
                  "Bruxelles Mobilité pedestrian": {
                    "url": "https://data.mobility.brussels/geoserver/bm_pedestrian/wms",
                    "type": "wms",
                    "title": "Bruxelles Mobilité pedestrian",
                    "autoload": false
                  },
                  "Bruxelles environnement": {
                    "url": "https://wms.environnement.brussels/be_wms",
                    "type": "wms",
                    "title": "Bruxelles environnement",
                    "autoload": false
                  },
                  "LeefMilieu Brussel": {
                    "url": "https://wms.environnement.brussels/lb_wms",
                    "type": "wms",
                    "title": "LeefMilieu Brussel",
                    "autoload": false
                  },
                  'AGIV WMS - Basiskaart': {
                    "url": "https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart/wms",
                    "type": "wms",
                    "title": "AGIV WMS - Basiskaart",
                    "autoload": false
                  },
                  'Stib mivb': {
                    "url": "https://gis.irisnet.be/geoserver/stib_mivb/wms?",
                    "type": "wms",
                    "title": "Stib mivb",
                    "autoload": false
                  },
                  'IBSA WMS': {
                    "url": "https://gis.irisnet.be/geoserver/ibsa_bisa/wms?",
                    "type": "wms",
                    "title": "IBSA WMS",
                    "autoload": false
                  },
                  'CIRB WMS': {
                    "url": "https://geoservices-urbis.irisnet.be/geoserver/ows?",
                    "type": "wms",
                    "title": "CIRB WMS",
                    "autoload": false
                  }
                }
              }
            }
        },
        mobile: {
            mapInfo: {infoFormat: 'text/html' },
            mousePosition: {enabled: true, crs: "EPSG:31370", showCenter: false}
        }
    },
    storeOpts: {
        persist: {
            whitelist: ["version"]
        }
    }
};
