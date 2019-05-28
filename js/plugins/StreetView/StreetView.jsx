const React = require('react');
const PropTypes = require('prop-types');
const Draggable = require('react-draggable');
const {Panel, Glyphicon} = require('react-bootstrap');
const asyncLoading = require('react-async-loader');
const Dialog = require('../../../MapStore2/web/client/components/misc/Dialog');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');
const MapInfoUtils = require('../../../MapStore2/web/client/utils/MapInfoUtils');
// import mainLogo from'./imgs/littleman_blue.png';
const mainLogo = require('./imgs/littleman_blue.svg');

const StreetView = React.createClass({

    propTypes: {
        id: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.string,
        btnSize: PropTypes.oneOf(['large', 'small', 'xsmall']),
        className: PropTypes.string,
        panelClassName: PropTypes.string,
        headerClassName: PropTypes.string,
        bodyClassName: PropTypes.string,
        collapsible: PropTypes.bool,
        enabled: PropTypes.bool,
        draggable: PropTypes.bool,
        bsStyle: PropTypes.string,
        asPanel: PropTypes.bool,
        tooltip: PropTypes.element,
        tooltipPlace: PropTypes.string,
        lat: PropTypes.number,
        lng: PropTypes.number,
        latMov: PropTypes.number,
        lngMov: PropTypes.number,
        heading: PropTypes.number,
        pitch: PropTypes.number,
        zoom: PropTypes.number,
        tabkey: PropTypes.number,
        headerGlyph: PropTypes.string,
        closeGlyph: PropTypes.string,
        google_map_api_key: PropTypes.string,
        googleMaps: PropTypes.object,
        toggleControl: PropTypes.func,
        addLayer: PropTypes.func,
        removeLayer: PropTypes.func,
        defaultIconStyle: PropTypes.object,
        updateLocation: PropTypes.func
    },

    getDefaultProps() {
        return {
            id: "streetview",
            className: "square-button",
            text: "StreetView",
            enabled: false,
            draggable: true,
            tooltipPlace: "left",
            bsStyle: "primary",
            asPanel: true,
            style: {
                position: "absolute",
                width: "500px",
                top: "56px",
                left: "45px",
                zIndex: 1023,
                boxShadow: "2px 2px 4px #A7A7A7"
            },
            lat: 46.9171876,
            lng: 17.8951832,
            latMov: 46.9171876,
            lngMov: 17.8951832,
            heading: 100,
            pitch: 0,
            zoom: 1,
            tabkey: 0,
            google_map_api_key: "AIzaSyBOj4l8-OrXmpVXEpeLH-dIfjCxhGkWxh0",
            googleMaps: {},
            toggleControl: () => {},
            addLayer: () => {},
            removeLayer: () => {},
            defaultIconStyle: {
                iconUrl: mainLogo,  // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            },
            updateLocation: () => {}
        };
    },
    componentWillReceiveProps(newProps) {
        if (newProps.enabled) {
            if (newProps.enabled && !this.props.enabled) {
                delete this.streetView;
            }
            if (this.needStreetViewRefresh(newProps)) {
                let infos = {
                    position: {lat: newProps.lat, lng: newProps.lng},
                    pov: {heading: 0, pitch: 0},
                    zoom: 1,
                    linksControl: false
                };
                this.initialize(this.ctn, infos, {lat: newProps.lat, lng: newProps.lng});
            } else {
                if (this.hasMovedInsideStreetView(newProps)) {
                    this.showMarker(newProps.latMov, newProps.lngMov);
                }
            }
        } else {
            if (this.props.enabled) {
                this.props.removeLayer(this.props.id);
            }
        }
    },

    renderHeader() {
        return (
            <span role="header">
                {this.props.headerGlyph ? <Glyphicon glyph={this.props.headerGlyph} /> : null}&nbsp;<Message msgId="StreetView" />
                <button onClick={this.handleClose} className="close">{this.props.closeGlyph ? <Glyphicon glyph={this.props.closeGlyph}/> : <span>×</span>}</button>
            </span>
        );
    },
    renderContent() {

        return this.props.asPanel ? (
            <Panel
                defaultExpanded="true"
                collapsible={this.props.collapsible}
                id="mapstore-streetview"
                style={this.props.style}
                className={this.props.panelClassName}>
                <div role="header" >
                    {this.renderHeader()}
                </div>
                <div role="body">
                  <div ref={ (ctn) => {this.ctn = ctn; }} style={{
                      height: '450px',
                      backgroundColor: '#eeeeee'
                    }}>
                  </div>
                </div>
            </Panel>
        ) : (
            <Dialog id="mapstore-streetview"
                style={this.props.style}
                className={this.props.panelClassName}
                headerClassName={this.props.headerClassName}
                bodyClassName={this.props.bodyClassName}
                >
                <div role="header" >
                  {this.renderHeader()}
                </div>
                <div role="body">
                  <div ref={ (ctn) => {this.ctn = ctn; }} style={{
                      height: '450px',
                      backgroundColor: '#eeeeee'
                    }}>
                  </div>
                </div>
            </Dialog>
        );

    },

    render() {
        if (this.props.enabled) {
            return this.props.draggable ? (
                  <Draggable>
                      {this.renderContent()}
                  </Draggable>
              ) : this.renderContent();
        }
        return null;
    },

    initialize(canvas, infos, pos) {
        if (this.props.googleMaps && typeof (this.streetView) === "undefined") {
            this.streetView = new this.props.googleMaps.StreetViewPanorama(
                canvas,
                infos
            );
            this.streetView.addListener('position_changed', function() {
                let currentPos = this.streetView.getPosition();
                let currentPosLat = currentPos.lat();
                let currentPosLng = currentPos.lng();

                this.props.updateLocation({
                    lat: currentPosLat,
                    lng: currentPosLng
                });
            }.bind(this));
        } else {
            this.streetView.setPosition(pos);
        }
    },

    showMarker(lat, lng) {
        let layer = MapInfoUtils.getMarkerLayer("GetFeatureInfo", {
            lat: lat,
            lng: lng
        }, 'marker', {
            overrideOLStyle: true,
            style: this.props.defaultIconStyle
        });
        layer.id = this.props.id;
        this.props.removeLayer(this.props.id);
        this.props.addLayer(layer);
    },

    needStreetViewRefresh(newProps) {
        if (this.props.lat !== newProps.lat || this.props.lng !== newProps.lng) {
            return true;
        }
        if (this.ctn && this.ctn.clientHeight === 450 && typeof (this.streetView) === "undefined") {
            return true;
        }
        return false;
    },

    hasMovedInsideStreetView(newProps) {
        if (this.props.latMov !== newProps.latMov || this.props.lngMov !== newProps.lngMov) {
            return true;
        }
        return false;
    },

    handleClose() {
        delete this.streetView;
        this.props.toggleControl();
    }
});

function mapScriptsToProps() {
    const googleMapsApiKey = "AIzaSyBOj4l8-OrXmpVXEpeLH-dIfjCxhGkWxh0";
    return {
        googleMaps: {
        globalPath: 'google.maps',
        url: 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey,
        jsonp: true
        }
    };
}
module.exports = asyncLoading(mapScriptsToProps)(StreetView);
