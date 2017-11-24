const React = require('react');
const PropTypes = require('prop-types');
const Draggable = require('react-draggable');
const Panel = require('react-bootstrap');
const Dialog = require('../../../MapStore2/web/client/components/misc/Dialog');
const asyncLoading = require('react-async-loader');

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
        heading: PropTypes.number,
        pitch: PropTypes.number,
        zoom: PropTypes.number,
        tabkey: PropTypes.number,
        google_map_api_key: PropTypes.string,
        googleMaps: PropTypes.object
    },

    getDefaultProps() {
        return {
            id: "streetview",
            className: "square-button",
            text: "StreetView",
            toggleMeasure: () => {},
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
            heading: 100,
            pitch: 0,
            zoom: 1,
            tabkey: 0,
            google_map_api_key: "AIzaSyBOj4l8-OrXmpVXEpeLH-dIfjCxhGkWxh0",
            googleMaps: {}
        };
    },
    componentWillReceiveProps(newProps) {
      if(newProps.enabled) {
        if (this.needStreetViewRefresh(newProps)) {
            let infos = {
                position: {lat: newProps.lat, lng: newProps.lng},
                pov: {heading: 0, pitch: 0},
                zoom: 1
            };
            this.initialize(this.ctn, infos, true);
        }
      }
    },
    renderContent() {

        return this.props.asPanel ? (
            <Panel
                defaultExpanded="true"
                collapsible={this.props.collapsible}
                id="mapstore-streetview"
                style={this.props.style}
                className={this.props.panelClassName}>
                <div className={this.props.headerClassName ? this.props.headerClassName : "panel-heading"}>

                </div>
                <div ref={ (ctn) => {this.ctn = ctn; }} style={{
                    height: '450px',
                    backgroundColor: '#eeeeee'
                  }}>
                </div>
            </Panel>
        ) : (
            <Dialog id="mapstore-streetview"
                style={this.props.style}
                className={this.props.panelClassName}
                headerClassName={this.props.headerClassName}
                bodyClassName={this.props.bodyClassName}
                >

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

    initialize(canvas, infos, update) {
        if (this.props.googleMaps && typeof (this.streetView) === "undefined" || update === true) {
            this.streetView = new this.props.googleMaps.StreetViewPanorama(
              canvas,
              infos
            );
        }
    },

    needStreetViewRefresh(newProps) {
        if (this.props.lat !== newProps.lat || this.props.lng !== newProps.lng) {
            return true;
        }
        if (this.ctn && this.ctn.clientHeight === 450 && typeof (this.streetView) === "undefined") {
            return true;
        }
        return false;
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
