const React = require('react');
const assign = require('object-assign');
const {connect} = require('react-redux');
const layersIcon = require('../../../MapStore2/web/client/plugins/toolbar/assets/img/layers.png');
const {loadBrugisTreeConfig, brugisTreeNodeToggle} = require('./actions');
const {addLayer, removeLayer} = require('../../../MapStore2/web/client/actions/layers');
const {Glyphicon} = require('react-bootstrap');
const BrugisTreeNode = require('./BrugisTreeNode');

const BrugisTree = React.createClass({

    propTypes: {
        expanded: React.PropTypes.bool,
        loadTreeData: React.PropTypes.func,
        onLayerAdd: React.PropTypes.func,
        onLayerRemove: React.PropTypes.func,
        onLayerToggle: React.PropTypes.func,
        treenodes: React.PropTypes.array,
        layers: React.PropTypes.array
    },
    getDefaultProps() {
        return {
            expanded: true,
            loadTreeData: () => {},
            treenodes: [],
            layers: []
        };
    },
    componentWillMount() {
        if (!this.props.treenodes) {
            this.props.loadTreeData();
        } else {
            // console.log("AlreadyLoaded");
        }
    },
    render() {
        if (!this.props.treenodes) {
            return (
                <ul>
                    <li>NO DATA</li>
                </ul>
            );
        }
        return (
            <ul className="tree" key="brutree01">
                {
                    this.props.treenodes.map((node) => {
                        return <BrugisTreeNode item={node} toggle={this.toggle} toggleLayer={this.toggleLayer} key={node.id} layers={this.props.layers}/>;
                    })
                }
            </ul>
        );
    },
    toggle: function() {
    },
    toggleLayer: function(item, leaf) {
        this.props.onLayerToggle(item);
        if (leaf) {
            if (item && item.checked) {
                this.removeLayer(item);
            } else {
                this.addLayer(item);
            }
        }
    },
    removeLayer(item) {
        this.props.onLayerRemove(item.id);
    },
    addLayer(item) {
        this.props.onLayerAdd({
            type: "wms",
            url: item.wmsserver,
            visibility: true,
            name: item.name,
            title: item.title || item.name,
            group: "brugis",
            origin: [140000.0, 160000.0],
            tileSize: 256,
            tiled: true,
            id: item.id
        });
    }
});


const BrugisTreePlugin = connect((state) => ({
    treenodes: state && state.brugisTree && state.brugisTree.treenodes,
    layers: state && state.layers && state.layers.flat
}), {
    loadTreeData: loadBrugisTreeConfig,
    onLayerAdd: addLayer,
    onLayerRemove: removeLayer,
    onLayerToggle: brugisTreeNodeToggle
})(BrugisTree);

module.exports = {
    BrugisTreePlugin: assign(BrugisTreePlugin, {
        Toolbar: {
            name: 'brugistree',
            position: 9,
            exclusive: true,
            panel: true,
            tooltip: "brugistree",
            wrap: true,
            title: 'Layers',
            icon: <img src={layersIcon}/>,
            hide: true
        },
        DrawerMenu: {
            name: 'brugistree',
            position: 1,
            icon: <Glyphicon glyph="glyphicon-th-list"/>,
            priority: 1,
            title: 'Layers'
        }
    }),
    reducers: {
        brugisTree: require('./reducers')
    }
};
