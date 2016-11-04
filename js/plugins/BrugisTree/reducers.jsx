
var {BRUGIS_TREE_LOAD_START, BRUGIS_TREE_LOADED, BRUGIS_TREE_LOAD_ERROR, BRUGIS_TREE_NODE_TOGGLE} = require('./actions');
var {REMOVE_LAYER} = require('../../../MapStore2/web/client/actions/layers');
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
            node.checked = false;
            node.id = Math.random().toString(16).substr(2,8);
            node.childNodes = wmsWalker(cur_layer.layer);
            tmp_nodes.push(node);
        }
        return tmp_nodes;
    }
}

function toggleNode(nodes, node){
    if(typeof(nodes) == "undefined" || nodes == null || nodes.length == 0) {
        return [];
    } else {
        var new_nodes=[];
        for(var i=0; i < nodes.length; i++){
            var newNode = {
                expanded : true,
                name  : nodes[i].name,
                title : nodes[i].title,
                path  : nodes[i].path,
                id    : nodes[i].id
            };
            if(nodes[i].name == node.name){
                if(nodes[i].checked){
                    newNode.checked = false;
                } else {
                    newNode.checked = true;
                }
            } else {
                newNode.checked = nodes[i].checked;
            }
            newNode.childNodes = toggleNode(nodes[i].childNodes,node);
            new_nodes.push(assign({},newNode));
        }
        return new_nodes;
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
            let newtreenodes = toggleNode(state.treenodes,node);

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
