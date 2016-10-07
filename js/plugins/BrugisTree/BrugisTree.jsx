const React = require('react');
const assign = require('object-assign');
const {connect} = require('react-redux');
const layersIcon = require('../../../MapStore2/web/client/plugins/toolbar/assets/img/layers.png');
const {loadBrugisTreeConfig} = require('./actions');

const BrugisTreeNode = React.createClass({
  toggle: function(path) {
      this.props.toggle(path);
  },

  toggleLayer : function(layerName) {
      this.props.toggleLayer(layerName);
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return ! (nextProps.item ==  this.props.item)
  },

  divStyle: function(item) {
    //var indent    = item.path.size;
    return {
      marginLeft: (1 * 1) + "px"
    };
  },
  renderChild: function(item) {
    return (
        <ul className="tree">
            <BrugisTreeNode item={item} toggle={this.props.toggle} />
        </ul>
    )
  },
  render: function() {
    var item = this.props.item
    var disabled  = item.childNodes == null || item.childNodes.length == 0;
    var collapsed = ! item.expanded;
    var text      = disabled ? "" : collapsed ? "+" : "-";

    return (<li className="tree">
               <input type="checkbox" disabled={disabled} onClick={this.toggleLayer.bind(this, item.path)}  style={this.divStyle(item)}></input>
                   <i className="fa fa-angle-double-right">+</i>
                   <i className="fa fa-angle-double-down">-</i>
                <label onClick={this.toggle.bind(this, item.path)}>{item.title}</label>
          {(item.expanded && item.childNodes) ? item.childNodes.map(this.renderChild, this) : false }
      </li>)
  }
});

const BrugisTree = React.createClass({
    propTypes: {
        expanded: React.PropTypes.bool,
        loadTreeData: React.PropTypes.func,
        treenodes : React.PropTypes.array
    },
    getDefaultProps() {
        return {
            expanded: true,
            loadTreeData: () => {},
            treenodes : []
        };
    },
    componentWillMount() {
        this.props.loadTreeData();
    },
    toggle: function(path) {
        console.log(path);
    },
    toggleLayer: function(path) {
        console.log(path);
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
            <ul className="tree">
                {
                    this.props.treenodes.map((node) => {
                        return <BrugisTreeNode item={node} toggle={this.props.toggle} toggleLayer={this.props.toggleLayer} />;
                    })
                }
            </ul>
        );
    }
});


const BrugisTreePlugin = connect((state) => ({
    treenodes: state && state.brugisTree && state.brugisTree.treenodes
}), {
    loadTreeData: loadBrugisTreeConfig
})(BrugisTree);

module.exports = {
    BrugisTreePlugin: assign(BrugisTreePlugin, {
        OmniBar: {
            name: 'Tree',
            position: 1,
            tool: true,
            priority: 1
        },
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
        }
    }),
    reducers: {
        brugisTree : require('./reducers')
    }
};
