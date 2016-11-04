const React = require('react');
const assign = require('object-assign');
const {connect} = require('react-redux');
const layersIcon = require('../../../MapStore2/web/client/plugins/toolbar/assets/img/layers.png');
const {loadBrugisTreeConfig, brugisTreeNodeToggle} = require('./actions');
const LayersUtils = require('../../../MapStore2/web/client/utils/LayersUtils');
const {addLayer, removeLayer} = require('../../../MapStore2/web/client/actions/layers');
const {getNode} = require('../../../MapStore2/web/client/reducers/layers');
const {Glyphicon} = require('react-bootstrap');

const BrugisTreeNode = React.createClass({

    propTypes: {
        toggle: React.PropTypes.func,
        toggleLayer: React.PropTypes.func,
        layers: React.PropTypes.array
    },

  toggle: function(path) {
      this.props.toggle(path);
  },

  toggleLayer : function(item, leaf) {
      this.props.toggleLayer(item, leaf);
  },

  divStyle: function(item) {
    //var indent    = item.path.size;
    return {
      marginLeft: (1 * 1) + "px"
    };
  },
  renderChild: function(item) {
    return (
        <ul className="tree" >
            <BrugisTreeNode key={item.name} item={item} toggle={this.props.toggle} toggleLayer={this.props.toggleLayer} layers={this.props.layers} />
        </ul>
    )
  },
  render: function() {
    var item = this.props.item
    var disabled  = item.childNodes == null || item.childNodes.length == 0;
    var collapsed = ! item.expanded;
    var text      = disabled ? "" : collapsed ? "+" : "-";
    var checked = item.checked ? true : false;
    var layer = this.props.layers.find((elem) => {
        return elem.id == item.id;
    });
    if(layer){
        if(checked) {
            //we are all good sir!
        } else {
            this.toggleLayer.bind(this, item, disabled);
        }
    } else {
        if(checked) {
            this.toggleLayer.bind(this, item, disabled);
        } else {
            //we are all good sir!
        }
    }

    return (<li className="tree">
               <input type="checkbox" checked={ item.checked ? true : false} onChange={this.toggleLayer.bind(this, item, disabled)}  style={this.divStyle(item)}></input>
               { !disabled ? <span><i className="glyphicon glyphicon-triangle-right"></i>
               <i className="glyphicon glyphicon-triangle-bottom"></i></span> : false }

                <label onClick={this.toggle.bind(this, item.path)}>{item.title}</label>
          {(item.checked && item.childNodes) ? item.childNodes.map(this.renderChild, this) : false }
      </li>)
  }
});

const BrugisTree = React.createClass({
    propTypes: {
        expanded: React.PropTypes.bool,
        loadTreeData: React.PropTypes.func,
        onLayerAdd: React.PropTypes.func,
        onLayerRemove: React.PropTypes.func,
        onLayerToggle: React.PropTypes.func,
        treenodes : React.PropTypes.array,
        layers: React.PropTypes.array
    },
    getDefaultProps() {
        return {
            expanded: true,
            loadTreeData: () => {},
            treenodes : [],
            layers: []
        };
    },
    componentWillMount() {
        if(!this.props.treenodes) {
            console.log("Loading data");
            this.props.loadTreeData();
        } else {
            console.log("AlreadyLoaded");
        }
    },
    toggle: function(path) {
        console.log(path);
    },
    toggleLayer: function(item, leaf) {
        this.props.onLayerToggle(item);
        if(leaf){
            if(item && item.checked){
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
            url: "http://svappmavw019:8080/geoserver/wms",
            visibility: true,
            name: item.name,
            title: item.title || item.name,
            group: "brugis",
            origin : [140000.0,160000.0],
            tileSize : 256,
            tiled : true,
            id: item.id
        });
    },
    render() {
        if (!this.props.treenodes) {
            return (
                <ul>
                    <li>NO DATA</li>
                </ul>
            )
        }
        return (
            <ul className="tree" >
                {
                    this.props.treenodes.map((node) => {
                        return <BrugisTreeNode item={node} toggle={this.toggle} toggleLayer={this.toggleLayer} key={node.name} layers={this.props.layers}/>;
                    })
                }
            </ul>
        );
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
            title: 'BrugisTree',
            icon: <img src={layersIcon}/>,
            hide: true
        },
        DrawerMenu: {
            name: 'brugistree',
            position: 1,
            icon: <Glyphicon glyph="globe"/>,
            title: 'brugistree',
            priority: 1
        }
    }),
    reducers: {
        brugisTree : require('./reducers')
    }
};
