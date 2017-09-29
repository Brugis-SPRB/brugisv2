/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
const PropTypes = require('prop-types');
var PropertiesViewer = require('./PropertiesViewer');
const {Accordion} = require('react-bootstrap');

const GFI_DICT = {
  "FR": require('./GFI_Configuration/gfic_fr'),
  "NL": require('./GFI_Configuration/gfic_nl'),
  "EN": require('./GFI_Configuration/gfic_en')
};

var JSONViewer = React.createClass({
    propTypes: {
        response: PropTypes.object,
        rowViewer: PropTypes.object,
        layers: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        locale: PropTypes.string
    },
    shouldComponentUpdate(nextProps) {
        return nextProps.response !== this.props.response;
    },
    render() {
        const RowViewer = this.props.rowViewer || PropertiesViewer;

        return (<div style={{maxHeight: "250px"}}>
                <Accordion>
                {(this.props.response.features || []).map((feature, i) => {
                    var displayTitle = feature.id;
                    var customRenderers = [];
                    var curLocale = this.translateLocale(this.props.locale);
                    if (GFI_DICT[curLocale] && GFI_DICT[curLocale][this.props.layers]) {
                        if (GFI_DICT[curLocale][this.props.layers].title) {
                            displayTitle = this.parseTitle(GFI_DICT[curLocale][this.props.layers].title, feature.properties);
                        }
                        if (GFI_DICT[curLocale][this.props.layers].attributes) {
                            feature.properties = this.customiseFeatureProperties(customRenderers, feature.properties, GFI_DICT[curLocale][this.props.layers].attributes);
                        }
                    }
                    return (
                            <RowViewer key={i} title={displayTitle} exclude={["bbox"]} properties={feature.properties} customRenderers={customRenderers}/>
                    );
                })}
                </Accordion>
            </div>
        );
    },
    translateLocale(locale) {
        var gfiLocale = "FR";
        switch (locale.toLowerCase()) {
            case locale.indexOf("fr") > 0:
              gfiLocale = "FR";
              break;
            case locale.indexOf("en") > 0:
              gfiLocale = "EN";
              break;
            case locale.indexOf("nl") > 0:
              gfiLocale = "NL";
              break;
            default:
              gfiLocale = "EN";
              break;
        }
        return gfiLocale;
    },
    parseTitle(titleExp, properties) {
        var customTitle = titleExp;
        Object.keys(properties).forEach((key) => {
            var pattern = "\[%" + key + "%\]";
            customTitle = customTitle.replace(pattern, properties[key]);
        });
        customTitle = customTitle.replace(/\[%(.*?)%\]/g, "");
        return customTitle;
    },
    customiseFeatureProperties(customRenderers, properties, attributes) {
        var newProperties = {};
        attributes.forEach((attribute) => {
            Object.keys(properties).forEach((key) => {
                var pattern = "\[%" + key + "%\]";
                attribute.label = attribute.label.replace(pattern, properties[key]);
            });

            if (attribute.type && attribute.type === "link") {
                customRenderers[attribute.name] = function(attrib) {
                    return (<a href={attrib} target="_blank">{attrib}</a>);
                };
            }

            newProperties[attribute.name] = attribute.label;
        });
        return newProperties;
    }
});

module.exports = JSONViewer;
