const React = require('react');
const PropTypes = require('prop-types');
const assign = require('object-assign');
const {connect} = require('react-redux');
const layersIcon = require('../../../MapStore2/web/client/plugins/toolbar/assets/img/layers.png');
const {loadBrugisTreeConfig, brugisTreeNodeToggle} = require('./actions');
const {addLayer, removeLayer} = require('../../../MapStore2/web/client/actions/layers');
const {Glyphicon} = require('react-bootstrap');
const BrugisTreeNode = require('./BrugisTreeNode');
const {reloadTreeEpic, autoSwitchMenuEpic} = require('./epics');

const BrugisTree = React.createClass({
    propTypes: {
        expanded: PropTypes.bool,
        loadTreeData: PropTypes.func,
        onLayerAdd: PropTypes.func,
        onLayerRemove: PropTypes.func,
        onLayerToggle: PropTypes.func,
        treenodes: PropTypes.array,
        layers: PropTypes.array,
        currentLocale: PropTypes.string
    },
    getDefaultProps() {
        return {
            expanded: true,
            loadTreeData: () => {},
            treenodes: [],
            layers: [],
            currentLocale: 'fr-BE'
        };
    },
    componentWillMount() {
        if (!this.props.treenodes || this.props.treenodes.length < 1) {
            this.props.loadTreeData(this.props.currentLocale);
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
            <ul className="tree firstTree" key="brutree01">
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
            singleTile: item.singleTile,
            id: item.id
        });
    }
});

const BrugisTreePlugin = connect((state) => ({
    treenodes: state && state.brugisTree && state.brugisTree.treenodes,
    layers: state && state.layers && state.layers.flat,
    currentLocale: state && state.locale && state.locale.current
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
    },
    epics: { reloadTreeEpic, autoSwitchMenuEpic }
};
