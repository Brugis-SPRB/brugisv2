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

  renderTreeGlyph: function(disabled, checked) {
      var close = <i className="glyphicon glyphicon-folder-close"></i>;
      var open = <i className="glyphicon glyphicon-folder-open"></i>;
      if ( !disabled ) {
          return !checked ? (close) : (open);
      }
  },

  render: function() {
      var item = this.props.item;
      var disabled = item.childNodes === null || item.childNodes.length === 0;
      var checked = item.checked ? true : false;

      return (<li className="tree">
                <div>
               {this.renderTreeGlyph(disabled, checked)}
               <input type="checkbox" checked={ item.checked ? true : false} onChange={this.toggleLayer.bind(this, item, disabled)} style={this.divStyle(item, disabled)}></input>
                <label onClick={this.toggleLayer.bind(this, item, disabled)}>{item.title}</label>
                </div>
          {(item.checked && item.childNodes) ? item.childNodes.map(this.renderChild, this) : false }
      </li>);
  },

  divStyle: function(item, disabled) {
      return {
          marginLeft: 1 + "px",
          display: disabled ? "" : "none",
          marginRight: disabled ? "1px" : "none"
      };
  },

  toggle: function(path) {
      this.props.toggle(path);
  },

  toggleLayer: function(item, leaf) {
      this.props.toggleLayer(item, leaf);
  }

});

module.exports = BrugisTreeNode;
