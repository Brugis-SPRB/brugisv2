var React = require('react');
var {Button, ButtonGroup, ButtonToolbar} = require('react-bootstrap');
const MapUtils = require('../../../MapStore2/web/client/utils/MapUtils');
const CoordinatesUtils = require('../../../MapStore2/web/client/utils/CoordinatesUtils');

var SurveyToolBox = React.createClass({
    propTypes: {
        loadSurveyTypes: React.PropTypes.func,
        submitNewSurvey: React.PropTypes.func,
        bsSize: React.PropTypes.string,
        onChangeDrawingStatus: React.PropTypes.func,
        onEndDrawing: React.PropTypes.func,
        drawSurfaceActive: React.PropTypes.bool,
        selectParcelActive: React.PropTypes.bool,
        onBrugisSurveyDrawSurfaceToggle: React.PropTypes.func,
        onBrugisSelectParcelToggle: React.PropTypes.func,
        onLoadBrugisSurveyWFSIntersectQuery: React.PropTypes.func,
        onBrugisSurveyDeleteDrawings: React.PropTypes.func,
        spatialField: React.PropTypes.object,
        point: React.PropTypes.object,
        parcel: React.PropTypes.object,
        map: React.PropTypes.object,
        geoserver: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            loadSurveyTypes: () => {},
            submitNewSurvey: () => {},
            bsSize: "small",
            onChangeDrawingStatus: () => {},
            onEndDrawing: () => {},
            drawSurfaceActive: false,
            selectParcelActive: false,
            onBrugisSurveyDrawSurfaceToggle: () => {},
            onBrugisSelectParcelToggle: () => {},
            onLoadBrugisSurveyWFSIntersectQuery: () => {},
            onBrugisSurveyDeleteDrawings: () => {},
            spatialField: {},
            point: {},
            parcel: {},
            map: {},
            geoserver: {}
        };
    },
    componentWillReceiveProps(newProps) {
        if (this.needsSelectParcelRefresh(newProps)) {
            const {url, request, metadata} = this.buildRequest(
              "BDU:Parcelle_2016",
               newProps,
               this.props.geoserver
             );
            this.props.onLoadBrugisSurveyWFSIntersectQuery(url, request, metadata);
        }
        let initialLayer = [];
        initialLayer = initialLayer.concat(newProps.spatialField.geometries);
        if (this.needsDisplayParcelRefresh(newProps)) {
            this.props.onChangeDrawingStatus("replace", 'Polygon', 'BrugisSurvey', initialLayer);
        }
    },
    render() {
        return (<ButtonToolbar>
               <ButtonGroup>
                    <Button bsSize={this.props.bsSize} bsStyle="primary" onClick={this.drawSurface} active={this.props.drawSurfaceActive}>Dessiner une surface</Button>
                    <Button bsSize={this.props.bsSize} bsStyle="primary" onClick={this.selectParcel} active={this.props.selectParcelActive}>Sélectionner une parcelle</Button>
                    <Button bsSize={this.props.bsSize} bsStyle="primary" onClick={this.deleteDrawing}>Supprimer le dessin</Button>
               </ButtonGroup>
          </ButtonToolbar>
        );
    },
    drawSurface() {
        let initalLayer = [];
        if (this.props.spatialField && this.props.spatialField.geometries && this.props.spatialField.geometries.length > 0) {
            initalLayer = initalLayer.concat(this.props.spatialField.geometries);
        }
        this.props.onBrugisSurveyDrawSurfaceToggle();
        let options = {
          stopAfterDrawing: false
        };
        if (!this.props.drawSurfaceActive) {
            this.props.onChangeDrawingStatus("start", 'Polygon', 'BrugisSurvey', initalLayer, options);
        } else {
            this.props.onChangeDrawingStatus("stop", 'Polygon', 'BrugisSurvey', initalLayer);
        }
    },
    selectParcel() {
        this.props.onBrugisSelectParcelToggle();
    },
    deleteDrawing() {
        this.props.onChangeDrawingStatus("clean", null, 'BrugisSurvey');
        this.props.onBrugisSurveyDeleteDrawings();
    },
    needsSelectParcelRefresh(props) {
        if (props.point && props.point.pixel) {
            if (!this.props.point.pixel || this.props.point.pixel.x !== props.point.pixel.x ||
                    this.props.point.pixel.y !== props.point.pixel.y ) {
                return true;
            }
        }
        return false;
    },
    needsDisplayParcelRefresh(props) {
        if (props.spatialField && props.spatialField.geometries && props.spatialField.geometries.length > 0) {
            if (!this.props.spatialField || !this.props.spatialField.geometries || (this.props.spatialField.geometries.length < props.spatialField.geometries.length && !this.props.drawSurfaceActive)) {
                return true;
            }
        }
        return false;
    },
    buildRequest: (layerName, props, url) => {
        /* In order to create a valid feature info request
         * we create a bbox of 101x101 pixel that wrap the point.
         * center point is repojected then is built a box of 101x101pixel around it
         */
        const heightBBox = (props && props.sizeBBox && props.sizeBBox.height) || 101;
        const widthBBox = (props && props.sizeBBox && props.sizeBBox.width) || 101;
        const size = [heightBBox, widthBBox];
        const rotation = 0;
        const resolution = MapUtils.getCurrentResolution(Math.ceil(props.map.zoom), 0, 21, 96);
        let wrongLng = props.point.latlng.lng;
        // longitude restricted to the [-180°,+180°] range
        let lngCorrected = wrongLng - (360) * Math.floor(wrongLng / (360) + 0.5);
        const center = {x: lngCorrected, y: props.point.latlng.lat};
        let centerProjected = CoordinatesUtils.reproject(center, 'EPSG:4326', props.map.projection);
        let bounds = CoordinatesUtils.getProjectedBBox(centerProjected, resolution, rotation, size, null);
        let queryLayers = layerName;

        return {
            request: {
                service: 'WMS',
                version: '1.1.1',
                request: 'GetFeatureInfo',
                exceptions: 'application/json',
                layers: layerName,
                query_layers: queryLayers,
                x: ((widthBBox % 2) === 1) ? Math.ceil(widthBBox / 2) : widthBBox / 2,
                y: ((widthBBox % 2) === 1) ? Math.ceil(widthBBox / 2) : widthBBox / 2,
                height: heightBBox,
                width: widthBBox,
                srs: CoordinatesUtils.normalizeSRS(props.map.projection) || 'EPSG:4326',
                bbox: bounds.minx + "," +
                      bounds.miny + "," +
                      bounds.maxx + "," +
                      bounds.maxy,
                feature_count: 5,
                info_format: 'application/json'
            },
            metadata: {
                title: layerName
            },
            url: url
        };
    }
});

module.exports = SurveyToolBox;
