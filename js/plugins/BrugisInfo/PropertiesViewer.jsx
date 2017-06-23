/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Panel} = require('react-bootstrap');

var PropertiesViewer = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        exclude: React.PropTypes.array,
        titleStyle: React.PropTypes.object,
        listStyle: React.PropTypes.object,
        panelStyle: React.PropTypes.object,
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
              marginLeft: "5px",
            }
        };
    },
    getBodyItems() {
        return Object.keys(this.props)
            .filter(this.toExlude)
            .map((key) => {
                return (
                  <dl>
                      <dt>{key}</dt>
                      <dd>{this.props[key]}</dd>
                  </dl>
                );
            });
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
    render() {
        return (
            <Panel header={this.renderHeader()}
                    style={this.props.listStyle}
                    eventKey={this.props.key}
                    key={this.props.title}
                    collapsible={this.props.collapsible}>
                {this.renderBody()}
            </Panel>
        );
    },
    alwaysExcluded: ["exclude", "titleStyle", "listStyle", "componentStyle", "title","bsStyle","headerRoletab","panelRoletabpanel","collapsible","expanded","onSelect","headerRole","panelRole"],
    toExlude(propName) {
        return this.alwaysExcluded
            .concat(this.props.exclude)
            .indexOf(propName) === -1;
    }
});

module.exports = PropertiesViewer;
