const React = require('react');

const BrugisTreeNode = React.createClass({

  propTypes: {
      toggle: React.PropTypes.func,
      toggleLayer: React.PropTypes.func,
      layers: React.PropTypes.array,
      item: React.PropTypes.object
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
      if ( !disabled ) {
          return !checked ? (close) : (open);
      } else {
          return (<i className="glyphicon glyphicon-th-large" onClick={this.toggleLayer.bind(this, item, disabled)}></i>);
      }
  },

  render: function() {
      var item = this.props.item;
      var disabled = item.childNodes === null || item.childNodes.length === 0;
      var checked = item.checked ? true : false;

      return (<li className="tree">
                <div>
               {this.renderTreeGlyph(item, disabled, checked)}
                <label onClick={this.toggleLayer.bind(this, item, disabled)} style={this.labelStyle(item, disabled)}>{item.title}</label>
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
      if(item.checked && disabled) {
          return {
              "backgroundColor": "lightgray"
          };
      } else {
          return {
              "backgroundColor": "white"
          };
      }
  },

  toggle: function(path) {
      this.props.toggle(path);
  },

  toggleLayer: function(item, leaf) {
      this.props.toggleLayer(item, leaf);
  }

});

module.exports = BrugisTreeNode;
