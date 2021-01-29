
var {BRUGIS_TREE_LOAD_START, BRUGIS_TREE_LOADED, BRUGIS_TREE_LOAD_ERROR, BRUGIS_TREE_NODE_TOGGLE} = require('./actions');
var {REMOVE_NODE} = require('../../../MapStore2/web/client/actions/layers');
const assign = require('object-assign');
const EnvUtils = require('../../utils/EnvUtils');
const SERVER_MAPPING_URL = {
											"IBSA WMS - Geoserver": "https://gis.irisnet.be/geoserver/ibsa_bisa/wms",
											"AGIV WMS - Basiskaart": "https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart/wms",
											"AGIV WMS - Historische kaarten": "https://geoservices.informatievlaanderen.be/raadpleegdiensten/histcart/wms",
											"CIRB WMS - Geoserver": "https://geoservices-urbis.irisnet.be/geoserver/ows",
											"STIB WMS - Geoserver": "https://gis.irisnet.be/geoserver/stib_mivb/wms",
											"Bruxelles Mobilité WMS - Geoserver": "https://data-mobility.irisnet.be/geoserver/bm_inspire_en/ows",
											"Bruxelles Mobilité WMS - Geoserver - bm_security": "https://data-mobility.brussels/geoserver/bm_security/ows",
											"Bruxelles Mobilité WMS - Geoserver - bm_public_space": "https://data-mobility.brussels/geoserver/bm_public_space/ows",
											"IBGE WMS - Mapserver": "https://wms.environnement.brussels/be_wms",
											"IBGE WMS - Mapserver - Fr": "https://wms.environnement.brussels/be_wms",
											"IBGE WMS - Mapserver - Nl": "https://wms.environnement.brussels/lb_wms"
										};

function inspectKeywords(layer, serverMappingUrl) {
    var wmsserver = window.location.protocol + "//" + EnvUtils.getBrugisGeoserverUrl();
    if (layer && layer.keywordList && layer.keywordList.keyword) {
        layer.keywordList.keyword.forEach(function(keyword) {
            if (keyword.value && serverMappingUrl[keyword.value]) {
                wmsserver = serverMappingUrl[keyword.value];
            }
        });
    }
    return wmsserver;
}

function inspectKeywordsSingleTile(layer) {
    var singleTile = false;
    if (layer && layer.keywordList && layer.keywordList.keyword) {
        layer.keywordList.keyword.forEach(function(keyword) {
            if (keyword.value === 'SINGLETILE') {
                singleTile = true;
                return true;
            }
        });
    }
    return singleTile;
}


function guidGenerator() {
    var s4 = function() {
        return (((1 + Math.random()) * 0X10000) | 0).toString(16).substr(1);
    };
    return (s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4());
}

function wmsWalker(layers, serverMappingUrl) {
    var tmpNodes = [];
    if (typeof layers === "undefined" || layers === null || layers.length === 0) {
        tmpNodes = [];
    } else {
        layers.forEach(function(curLayer) {
            var wmsServer = inspectKeywords(curLayer, serverMappingUrl);

            var infoFormat = wmsServer === "https://wms.environnement.brussels/be_wms" ? "TEXT" : "JSON";
            tmpNodes.push({
                "expanded": true,
                "name": curLayer.name,
                "title": curLayer.title,
                "path": true,
                "checked": false,
                "wmsserver": wmsServer,
                "singleTile": inspectKeywordsSingleTile(curLayer),
                "id": guidGenerator(),
                "infoFormat": infoFormat,
                "childNodes": wmsWalker(curLayer.layer, serverMappingUrl)
            });
        });
    }
    return tmpNodes;
}

function toggleNode(nodes, node) {
    var newNodes = [];
    if (typeof nodes === "undefined" || nodes === null || nodes.length === 0) {
        newNodes = [];
    } else {
        nodes.forEach(function(curNode) {
            var newNode = {
                "expanded": true,
                "name": curNode.name,
                "title": curNode.title,
                "path": curNode.path,
                "wmsserver": curNode.wmsserver,
                "singleTile": curNode.singleTile,
                "infoFormat": curNode.infoFormat,
                "id": curNode.id
            };
            if (curNode.id === node.id) {
                if (curNode.checked) {
                    newNode.checked = false;
                } else {
                    newNode.checked = true;
                }
            } else {
                newNode.checked = curNode.checked;
            }
            newNode.childNodes = toggleNode(curNode.childNodes, node);
            newNodes.push(assign({}, newNode));
        });
    }
    return newNodes;
}

function syncNodeWithLayer(nodes, node) {
    var newNodes = [];
    if (typeof nodes === "undefined" || nodes === null || nodes.length === 0) {
        newNodes = [];
    } else {
        nodes.forEach(function(curNode) {
            var newNode = {
                "expanded": true,
                "name": curNode.name,
                "title": curNode.title,
                "path": curNode.path,
                "wmsserver": curNode.wmsserver,
                "singleTile": curNode.singleTile,
                "infoFormat": curNode.infoFormat,
                "id": curNode.id
            };
            if (node === curNode.id) {
                if (curNode.checked) {
                    newNode.checked = false;
                } else {
                    newNode.checked = true;
                }
            } else {
                newNode.checked = curNode.checked;
            }
            newNode.childNodes = syncNodeWithLayer(curNode.childNodes, node);
            newNodes.push(assign({}, newNode));
        });
    }
    return newNodes;
}

function brugisTree(state = null, action) {
    switch (action.type) {
        case BRUGIS_TREE_LOAD_START:
            return state;
        case BRUGIS_TREE_LOADED:
            const capabilities = action.info;
            // const serverMappingUrl = action.serverMappingUrl;
            return assign({}, state, {
                treenodes: wmsWalker(capabilities.value.capability.layer.layer, SERVER_MAPPING_URL)
            });
        case BRUGIS_TREE_NODE_TOGGLE:
            let node = action.node;
            let newtreenodes = toggleNode(state.treenodes, node);
            return assign({}, state, {
                treenodes: newtreenodes
            });
        case BRUGIS_TREE_LOAD_ERROR:
            return state;
        case REMOVE_NODE:
            let layernode = action.node;
            let updatedtreenodes = syncNodeWithLayer(state.treenodes, layernode);
            return assign({}, state, {
                treenodes: updatedtreenodes
            });

        default:
            return state;
    }
}

module.exports = brugisTree;
