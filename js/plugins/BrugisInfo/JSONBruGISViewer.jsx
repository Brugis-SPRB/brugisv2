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
    getGFIConfForLayer(curLocale, layername) {
        if (GFI_DICT[curLocale]) {
            for (let [key, value] of Object.entries(GFI_DICT[curLocale])) {
                if (this.wildTest(key, layername)) {
                    return value;
                }
            }
            return null;
        }
        return null;
    },
    render() {
        const RowViewer = this.props.rowViewer || PropertiesViewer;

        var curLocale = this.translateLocale(this.props.locale);
        var layerName = this.props.layers ? this.props.layers : "Vector";

        // Mode REDIRECT: it opens a given url directly and then construct a panel identical to the one created by the mode GRID
        if (GFI_DICT[curLocale] && GFI_DICT[curLocale][layerName] && GFI_DICT[curLocale][layerName].actiontype === "REDIRECT") {
            (this.props.response.features || []).map((feature) => {
                window.open(this.parseTitle(GFI_DICT[curLocale][layerName].url, feature.properties), '_blank');
            });
        }
        // et ici, comment éviter d'ouvrir le popup, tout en permettant, si rien n'existe dans le GFI_DICT[curLocale]
        // pour [layerName], d'obtenir tout de même un popup vanilla?
        // En l'état, "REDIRECT" ouvre bien l'url dans un nouvel onglet, mais ouvre aussi le popup d'info, ce qui en
        // soi n'est pas gênant, mais pourrait être amélioré.

        return (<div style={{maxHeight: "250px"}}>
                <Accordion>
                {(this.props.response.features || []).map((feature, i) => {
                    var displayTitle = feature.id;
                    var layerNameFromFeatureId = layerName;
                    var customRenderers = [];
                    var gfiConf = {};
                    // console.log(feature);
                    try {
                        layerNameFromFeatureId = this.props.layers.split(":")[0].concat(":").concat(feature.id.split(".")[0]);
                    } catch(err) {
                        console.log(err);
                    }
                    if (this.props.layers !== layerNameFromFeatureId) {
                        layerName = layerNameFromFeatureId;
                    }

                    // Mode LINK: it renders a title and a list of clickable renamed urls for all the feature encountered in a single panel
                    if (GFI_DICT[curLocale] && GFI_DICT[curLocale][layerName] && GFI_DICT[curLocale][layerName].actiontype === "LINK") {
                        if (GFI_DICT[curLocale][layerName].title && GFI_DICT[curLocale][layerName].url) {
                            displayTitle = this.parseLinkTitle(GFI_DICT[curLocale][layerName].title, GFI_DICT[curLocale][layerName].url, feature.properties);
                            return (<div><span><span className="linkTitle">{displayTitle}</span></span></div>);
                        }
                    }
                    // mode GRID: it renders a custom title, it customise all the attributes that need it and create a panel for each feature encountered
                    gfiConf = this.getGFIConfForLayer(curLocale, layerName);
                    if (gfiConf) {
                        if (gfiConf.title) {
                            displayTitle = this.parseTitle(gfiConf.title, feature.properties);
                        }
                        if (gfiConf.attributes) {
                            feature.properties = this.customiseFeatureProperties(customRenderers, feature.properties, gfiConf.attributes);
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
    wildTest(wildcard, str) {
        const re = new RegExp(`^${wildcard.replace(/\*/g, '.*').replace(/\?/g, '.')}$`, 'i');
        return re.test(str); // remove last 'i' above to have case sensitive
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
    parseLinkTitle(titleExp, urlExp, properties) {
        var customTitle = titleExp;
        var customUrl = urlExp;
        Object.keys(properties).forEach((key) => {
            var pattern = "\[%" + key + "%\]";
            customTitle = customTitle.replace(pattern, properties[key]);
        });
        customTitle = customTitle.replace(/\[%(.*?)%\]/g, "");
        Object.keys(properties).forEach((key) => {
            var pattern = "\[%" + key + "%\]";
            customUrl = customUrl.replace(pattern, properties[key]);
        });
        customUrl = customUrl.replace(/\[%(.*?)%\]/g, "");
        return (<a href={customUrl} target="_blank">{customTitle}</a>);
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
                if (attribute.substutedString) {
                    customRenderers[attribute.name] = function() {
                        return (<a href={attribute.label} target="_blank">{attribute.substutedString}</a>);
                    };
                } else {
                    customRenderers[attribute.name] = function(attrib) {
                        return (<a href={attrib} target="_blank">{attrib}</a>);
                    };
                }
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
