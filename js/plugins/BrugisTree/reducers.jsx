
var {BRUGIS_TREE_LOAD_START, BRUGIS_TREE_LOADED, BRUGIS_TREE_LOAD_ERROR, BRUGIS_TREE_NODE_TOGGLE} = require('./actions');
const assign = require('object-assign');

function wmsWalker(layers) {
    if(typeof(layers) == "undefined" || layers == null || layers.length == 0) {
        return [];
    } else {
        var tmp_nodes = [];
        for(var i=0; i<layers.length; i++){
            var node = {};
            var cur_layer = layers[i];
            node.expanded = true;
            node.name = cur_layer.name;
            node.title = cur_layer.title;
            node.path = true;
            node.childNodes = wmsWalker(cur_layer.layer);
            tmp_nodes.push(node);
        }
        return tmp_nodes;
    }
}

function toggleNode(nodes, node){
    if(typeof(nodes) == "undefined" || node == null || node.length == 0) {
        return;
    } else {
        for(var i=0; i < nodes.length; i++){
            if(nodes[i].name == node.name){
                if(nodes[i].checked){
                    nodes[i].checked = false;
                } else {
                    nodes[i].checked = true;
                }
            }
            toggleNode(nodes[i].childNodes);
        }
    }
}

function brugisTree(state = null, action) {
    switch (action.type) {
        case BRUGIS_TREE_LOAD_START:
            return state;
        case BRUGIS_TREE_LOADED:
            const capabilities =  action.info;
            var layers = capabilities.value.capability.layer.layer;
            var nodes = wmsWalker(layers);

            return assign({}, state, {
                treenodes : nodes
            });
        case BRUGIS_TREE_NODE_TOGGLE:
            let node = action.node;
            let newtreenodes = (state.treenodes || []).concat();
            toggleNode(newtreenodes,node);
            return assign({}, state, {
                treenodes : newtreenodes
            });
        case BRUGIS_TREE_LOAD_ERROR:
            return state;
        default:
            return state;
    }
}


module.exports = brugisTree;
