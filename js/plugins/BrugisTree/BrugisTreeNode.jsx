const React = require('react');
const PropTypes = require('prop-types');
const BrugisTreeNode = React.createClass({

  propTypes: {
      toggle: PropTypes.func,
      toggleLayer: PropTypes.func,
      layers: PropTypes.array,
      item: PropTypes.object
  },

  renderChild: function(item) {
      return (
          <ul className="tree" key={item.id}>
            <BrugisTreeNode item={item} toggle={this.props.toggle} toggleLayer={this.props.toggleLayer} layers={this.props.layers} />
          </ul>
      );
  },

  renderTreeGlyph: function(item, disabled, checked) {
      var close = <i className="glyphicon glyphicon-folder-close" onClick={this.toggleLayer.bind(this, item, disabled)}></i>;
      var open = <i className="glyphicon glyphicon-folder-open" onClick={this.toggleLayer.bind(this, item, disabled)}></i>;
      var layeractive = <i className="glyphicon glyphicon-check" onClick={this.toggleLayer.bind(this, item, disabled)}></i>;
      var layer = <i className="glyphicon glyphicon-unchecked" onClick={this.toggleLayer.bind(this, item, disabled)}></i>;
      var glyph = null;

      if ( !disabled ) {
          if (!checked) {
              glyph = close;
          } else {
              glyph = open;
          }
      } else {
          if (!checked) {
              glyph = layer;
          } else {
              glyph = layeractive;
          }
      }

      return (glyph);
  },

  render: function() {
      var item = this.props.item;
      var disabled = item.childNodes === null || item.childNodes.length === 0;
      var checked = item.checked ? true : false;
      var labelDynamicClass = "brugistreelabel";
      if (item.checked && disabled) {
          labelDynamicClass += "checked";
      }

      return (<li className="tree">
                <div className="treenodediv">
               {this.renderTreeGlyph(item, disabled, checked)}
                <label className="treenodelabel" onClick={this.toggleLayer.bind(this, item, disabled)} className={labelDynamicClass}>{item.title}</label>
                </div>
          {(item.checked && item.childNodes) ? item.childNodes.map(this.renderChild, this) : false }
      </li>);
  },

  divStyle: function(item, disabled) {
      return {
          marginLeft: 1 + "px",
          display: disabled ? "block" : "none",
          marginRight: disabled ? "1px" : "none"
      };
  },
  labelStyle: function(item, disabled) {
      var labelDynamicClass = "brugistreelabel";
      if (item.checked && disabled) {
          labelDynamicClass += " checked";
      }
      return labelDynamicClass;
  },

  toggle: function(path) {
      this.props.toggle(path);
  },

  toggleLayer: function(item, leaf) {
      this.props.toggleLayer(item, leaf);
  }

});

module.exports = BrugisTreeNode;
