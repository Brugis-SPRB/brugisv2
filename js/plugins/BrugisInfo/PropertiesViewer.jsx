
const React = require('react');
const PropTypes = require('prop-types');
const {Panel} = require('react-bootstrap');
const ol = require('openlayers');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');

class PropertiesViewer extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        exclude: PropTypes.array,
        titleStyle: PropTypes.object,
        listStyle: PropTypes.object,
        panelStyle: PropTypes.object,
        properties: PropTypes.object,
        geometry: PropTypes.object,
        customRenderers: PropTypes.array,
        collapsible: PropTypes.bool,
        onChangeDrawingStatus: PropTypes.func,
        onGeometryChanged: PropTypes.func,
        onEndDrawing: PropTypes.func
    };

    static defaultProps = {
        exclude: [],
        titleStyle: {
            height: '100%',
            width: '100%',
            padding: '4px 0px',
            background: 'rgb(240,240,240)',
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

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    onFeaturePanelSelected() {
        this.setState({
           open: !this.state.open
        });
        if (!this.state.open) {
            this.props.onChangeDrawingStatus("replace", undefined, 'BrugisInfo', [this.props.geometry], {editEnabled: false});
        } else {
            this.props.onChangeDrawingStatus("clean", null, 'BrugisInfo');
        }
    }

    getBodyItems() {
        return Object.keys(this.props.properties)
            .filter(this.toExlude.bind(this))
            .map((key) => {
                return (
                  <dl key={key}>
                      <dt>{key}</dt>
                      {this.renderValue(key)}
                  </dl>
                );
            });
    }

    renderValue(key) {
        if (this.props.customRenderers && this.props.customRenderers[key]) {
            return (
              <dd>
                {this.props.customRenderers[key](this.props.properties[key])}
              </dd>
            );
        }
        return (<dd>{this.props.properties[key]}</dd>);
    }

    renderHeader() {
        if (!this.props.title) {
            return null;
        }
        return (
          <span><span className="propertiesTitle">{this.props.title}</span></span>
        );
    }

    renderBody() {
        var items = this.getBodyItems();
        if (items.length === 0) {
            return null;
        }
        return (
              <div style={{"padding": "5px"}}>
                    {items}
              </div>
        );
    }

    renderArea(feature) {
        if (feature.getGeometry() && feature.getGeometry().getArea && feature.getGeometry().getArea() > 0.0) {
            let areaText = feature.getGeometry().getArea().toFixed(0);
            if (areaText > 100000) {
                areaText = (areaText / 10000).toFixed(0) + " hectares";
            } else {
                areaText = areaText + " m2";
            }
            return (<dl>
              <dt><Message msgId="Area"/></dt>
              <dd>{areaText}</dd>
            </dl>);
        }
        return null;
    }

    renderCentroid(feature) {
        var extent = feature.getGeometry().getExtent();
        var center = ol.extent.getCenter(extent);
        if (feature.getGeometry() && feature.getGeometry().getExtent()) {
            return (<dl>
                <dt><Message msgId="Centroid"/></dt>
                <dd>{"X/Y: " + center[0].toFixed(2) + " m / " + center[1].toFixed(2) + " m"}</dd>
              </dl>);
        }
        return null;
    }

    renderMetrics() {
        var feature = (new ol.format.GeoJSON()).readFeature(this.props.geometry);
        return (
            <div style={{"padding": "5px"}}>
                  {this.renderArea(feature)}
                  {this.renderCentroid(feature)}
            </div>
      );
    }

    render() {
        return (
            <Panel header={this.renderHeader()}
                    style={this.props.listStyle}
                    key={this.props.title}
                    collapsible={this.props.collapsible}
                    onSelect={this.onFeaturePanelSelected.bind(this)}>
                {this.props.geometry ? this.renderMetrics() : ""}
                {this.renderBody()}
            </Panel>
        );
    }

    alwaysExcluded: ["exclude", "titleStyle", "listStyle", "componentStyle", "title", "bsStyle", "headerRoletab", "panelRoletabpanel", "collapsible", "expanded", "onSelect", "headerRole", "panelRole"];

    toExlude(propName) {
        return ["exclude", "titleStyle", "listStyle", "componentStyle", "title", "bsStyle", "headerRoletab", "panelRoletabpanel", "collapsible", "expanded", "onSelect", "headerRole", "panelRole"]
            .concat(this.props.exclude)
            .indexOf(propName) === -1;
    }
}

module.exports = PropertiesViewer;
