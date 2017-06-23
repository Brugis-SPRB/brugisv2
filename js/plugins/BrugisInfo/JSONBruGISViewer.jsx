/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
var PropertiesViewer = require('./PropertiesViewer');
const {Accordion} = require('react-bootstrap');

const gfi_dict = {
  "FR": require('./GFI_Configuration/gfic_fr'),
  "NL": require('./GFI_Configuration/gfic_fr'),
  "EN": require('./GFI_Configuration/gfic_fr')
}

var JSONViewer = React.createClass({
    propTypes: {
        response: React.PropTypes.object,
        rowViewer: React.PropTypes.object,
        layers: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object])
    },
    shouldComponentUpdate(nextProps) {
        return nextProps.response !== this.props.response;
    },
    parseTitle(titleExp, properties) {
      var customTitle = titleExp;
      Object.keys(properties).forEach((key) => {
          var pattern = "\[%"+key+"%\]";
          customTitle = customTitle.replace(pattern,properties[key]);
      });
      customTitle = customTitle.replace(/\[%(.*?)%\]/g, "");
      return customTitle;
    },
    customiseFeatureProperties(properties, attributes){
      var newProperties = {};
      attributes.forEach((attribute) => {
        Object.keys(properties).forEach((key) => {
            var pattern = "\[%"+key+"%\]";
            attribute["label"] = attribute["label"].replace(pattern,properties[key]);
        });

        if(attribute["type"] && attribute["type"] === "link") {
          attribute["label"] = "<a href='"+attribute["label"]+"' target='_blank'>"+attribute["label"]+"</a>";
        }

        newProperties[attribute.name] = attribute["label"];
      });
      return newProperties;
    },
    render() {
        const RowViewer = this.props.rowViewer || PropertiesViewer;


        return (<div style={{maxHeight: "250px"}}>
                <Accordion>
                {(this.props.response.features || []).map((feature, i) => {
                    var displayTitle = feature.id;
                    if(gfi_dict["FR"] && gfi_dict["FR"][this.props.layers]) {
                      if(gfi_dict["FR"][this.props.layers]["title"]) {
                         displayTitle = this.parseTitle(gfi_dict["FR"][this.props.layers]["title"], feature.properties);
                      }
                      if(gfi_dict["FR"][this.props.layers]["attributes"]) {
                         feature.properties = this.customiseFeatureProperties(feature.properties,gfi_dict["FR"][this.props.layers]["attributes"]);
                      }
                    }
                    return (
                            <RowViewer key={i} title={displayTitle} exclude={["bbox"]} {...feature.properties}/>
                    );
                })}
                </Accordion>
            </div>
        );
    }
});

module.exports = JSONViewer;
