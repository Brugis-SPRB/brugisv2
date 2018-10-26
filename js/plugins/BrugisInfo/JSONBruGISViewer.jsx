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
        locale: PropTypes.string,
        onChangeDrawingStatus: PropTypes.func,
        onEndDrawing: PropTypes.func,
        onGeometryChanged: PropTypes.func
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
                    var layerName = this.props.layers ? this.props.layers : "Vector";
                    var layerNameFromFeatureId = layerName;
                    var customRenderers = [];
                    var curLocale = this.translateLocale(this.props.locale);
                    try {
                        layerNameFromFeatureId = this.props.layers.split(":")[0].concat(":").concat(feature.id.split(".")[0]);
                    } catch(err) {
                        console.log(err);
                    }
                    if (this.props.layers !== layerNameFromFeatureId) {
                        layerName = layerNameFromFeatureId;
                    }
                    if (GFI_DICT[curLocale] && GFI_DICT[curLocale][layerName]) {
                        if (GFI_DICT[curLocale][layerName].title) {
                            displayTitle = this.parseTitle(GFI_DICT[curLocale][layerName].title, feature.properties);
                        }
                        if (GFI_DICT[curLocale][layerName].attributes) {
                            feature.properties = this.customiseFeatureProperties(customRenderers, feature.properties, GFI_DICT[curLocale][layerName].attributes);
                        }
                    }
                    return (
                            <RowViewer
                              key={i}
                              title={displayTitle}
                              exclude={["bbox"]}
                              properties={feature.properties}
                              geometry={feature.geometry}
                              onChangeDrawingStatus={this.props.onChangeDrawingStatus}
                              onGeometryChanged={this.props.onGeometryChanged}
                              onEndDrawing={this.props.onEndDrawing}
                              customRenderers={customRenderers} />
                    );
                })}
                </Accordion>
            </div>
        );
    },
    translateLocale(locale) {
        var gfiLocale = "FR";
        if (locale.indexOf("fr") >= 0) {
            gfiLocale = "FR";
        } else {
            if (locale.indexOf("nl") >= 0) {
                gfiLocale = "NL";
            } else {
                if (locale.indexOf("en") >= 0) {
                    gfiLocale = "EN";
                }
            }
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
        attributes.forEach((attributeSource) => {
            let attribute = Object.assign({}, attributeSource);
            Object.keys(properties).forEach((key) => {
                var pattern = "\[%" + key + "%\]";
                attribute.label = attribute.label.replace(pattern, properties[key]);
            });

            if (attribute.type && attribute.type === "link") {
                customRenderers[attribute.name] = function(attrib) {
                    return (<a href={attrib} target="_blank">{attrib}</a>);
                };
            }
            if (attribute.type && attribute.type === "date") {
                customRenderers[attribute.name] = function(attrib) {
                    return (<span>{attrib}</span>);
                };
            }
            if (attribute.type && attribute.type === "picture") {
                customRenderers[attribute.name] = function(attrib) {
                    return (<a href={attrib} target="_blank"><img src={attrib} height="150"/></a>);
                };
            }
            if (attribute.type && attribute.type === "eval") {
                customRenderers[attribute.name] = function(attrib) {
                    var newattrib = attrib.replace(/\[%(.*?)%\]/g, "");
                    newattrib = eval(newattrib); // VERY BAD :p
                    return (<span>{newattrib}</span>);
                };
            }
            newProperties[attribute.name] = attribute.label;
        });
        return newProperties;
    }
});

module.exports = JSONViewer;
