/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const {Panel} = require('react-bootstrap');


var PropertiesViewer = React.createClass({
    propTypes: {
        title: PropTypes.string,
        exclude: PropTypes.array,
        titleStyle: PropTypes.object,
        listStyle: PropTypes.object,
        panelStyle: PropTypes.object,
        properties: PropTypes.object,
        geometry: PropTypes.object,
        customRenderers: PropTypes.array,
        collapsible: PropTypes.bool
    },
    getDefaultProps() {
        return {
            exclude: [],
            titleStyle: {
                height: "100%",
                width: "100%",
                padding: "4px 0px",
                background: "rgb(240,240,240)",
                borderRadius: "4px",
                textAlign: "center",
                textOverflow: "ellipsis"
            },
            listStyle: {
              maxHeight: "500px",
              position: "relative",
              marginBottom: 0,
              marginRight: "5px",
              marginLeft: "5px"
            }
        };
    },
    getBodyItems() {
        return Object.keys(this.props.properties)
            .filter(this.toExlude)
            .map((key) => {
                return (
                  <dl key={key}>
                      <dt>{key}</dt>
                      {this.renderValue(key)}
                  </dl>
                );
            });
    },
    renderValue(key) {
        if (this.props.customRenderers && this.props.customRenderers[key]) {
            return (
              <dd>
                {this.props.customRenderers[key](this.props.properties[key])}
              </dd>
            );
        }
        return (<dd>{this.props.properties[key]}</dd>);
    },
    renderHeader() {
        if (!this.props.title) {
            return null;
        }
        return (
          <span><span>{this.props.title}</span></span>
        );
    },
    renderBody() {
        var items = this.getBodyItems();
        if (items.length === 0) {
            return null;
        }
        return (
              <div>
                    {items}
              </div>
        );
    },
    renderArea(feature) {
       if (feature.getGeometry() && feature.getGeometry().getArea() > 0.0) {
         var areaText = feature.getGeometry().getArea().toFixed(0);
         if (areaText > 100000) {
            areaText = (areaText / 10000).toFixed(0) + " hectares";
         } else {
            areaText = areaText + " m2";
         }
         return (<dl>
           <dt>Area</dt>
           <dd>{areaText}</dd>
         </dl>);
       }
       return null;
    },
    renderCentroid(feature) {
      if(feature.getGeometry() && feature.getGeometry().getExtent()) {
          var extent = feature.getGeometry().getExtent();
          var center = ol.extent.getCenter(extent);

          return (<dl>
                <dt>Centroid</dt>
                <dd>{"X/Y: " + center[0].toFixed(2) + " m / " + center[1].toFixed(2) + " m"}</dd>
              </dl>);
      }
      return null;
    },
    renderMetrics() {
      var feature = (new ol.format.GeoJSON()).readFeature(this.props.geometry);
      return (
            <div>
                  {this.renderArea(feature)}
                  {this.renderCentroid(feature)}
            </div>
      );
    },
    render() {

        return (
            <Panel header={this.renderHeader()}
                    style={this.props.listStyle}
                    key={this.props.title}
                    collapsible={this.props.collapsible}>
                {this.renderMetrics()}
                {this.renderBody()}
            </Panel>
        );
    },
    alwaysExcluded: ["exclude", "titleStyle", "listStyle", "componentStyle", "title", "bsStyle", "headerRoletab", "panelRoletabpanel", "collapsible", "expanded", "onSelect", "headerRole", "panelRole"],
    toExlude(propName) {
        return this.alwaysExcluded
            .concat(this.props.exclude)
            .indexOf(propName) === -1;
    }
});

module.exports = PropertiesViewer;
