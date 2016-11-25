
var {BRUGIS_TREE_LOAD_START, BRUGIS_TREE_LOADED, BRUGIS_TREE_LOAD_ERROR, BRUGIS_TREE_NODE_TOGGLE} = require('./actions');
const assign = require('object-assign');

function wmsWalker(layers) {
    var tmpNodes = [];
    if (typeof layers === "undefined" || layers === null || layers.length === 0) {
        tmpNodes = [];
    } else {
        layers.forEach(function(curLayer) {
            tmpNodes.push({
                "expanded": true,
                "name": curLayer.name,
                "title": curLayer.title,
                "path": true,
                "checked": false,
                "id": Math.random().toString(16).substr(2, 8),
                "childNodes": wmsWalker(curLayer.layer)
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
                "id": curNode.id
            };
            if (curNode.name === node.name) {
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

function brugisTree(state = null, action) {
    switch (action.type) {
        case BRUGIS_TREE_LOAD_START:
            return state;
        case BRUGIS_TREE_LOADED:
            const capabilities = action.info;
            return assign({}, state, {
                treenodes: wmsWalker(capabilities.value.capability.layer.layer)
            });
        case BRUGIS_TREE_NODE_TOGGLE:
            let node = action.node;
            let newtreenodes = toggleNode(state.treenodes, node);

            return assign({}, state, {
                treenodes: newtreenodes
            });
        case BRUGIS_TREE_LOAD_ERROR:
            return state;
        default:
            return state;
    }
}

module.exports = brugisTree;
