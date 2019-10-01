const React = require('react');
const PropTypes = require('prop-types');
const Draggable = require('react-draggable');
const {Panel, Glyphicon, Modal} = require('react-bootstrap');
const Dialog = require('../../../MapStore2/web/client/components/misc/Dialog');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');
const CesiumMap = require('./Map');
const brugis3DBuildingIcon = require('./imgs/noun_House Frame_80931.svg');


const Brugis3DBuilding = React.createClass({

    propTypes: {
        id: PropTypes.string,
        style: PropTypes.object,
        state: PropTypes.object,
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
        zoom: PropTypes.number,
        tabkey: PropTypes.number,
        headerGlyph: PropTypes.string,
        closeGlyph: PropTypes.string,
        toggleControl: PropTypes.func,
        addLayer: PropTypes.func,
        removeLayer: PropTypes.func,
        defaultIconStyle: PropTypes.object,
        updateLocation: PropTypes.func
    },

    getDefaultProps() {
        return {
            id: "brugis3dbuilding",
            panelClassName: "modal-dialog info-panel modal-content",
            headerClassName: "modal-header",
            bodyClassName: "modal-body info-wrap",
            asPanel: false,
            headerGlyph: "",
            closeGlyph: "1-close",
            className: "square-button",
            text: "brugis3dbuilding",
            enabled: false,
            draggable: true,
            tooltipPlace: "left",
            bsStyle: "primary",
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
            addLayer: () => {},
            removeLayer: () => {},
            updateLocation: () => {},
            toggleControl: () => {}
        };
    },

    renderHeader() {
        return (
            <span role="header">
                <img src={brugis3DBuildingIcon} height="28" width="28"></img>&nbsp;<span className="settings-panel-title"><Message msgId="Brugis3DBuilding.title_panel"/>
                <button onClick={this.handleClose} className="close">{this.props.closeGlyph ? <Glyphicon glyph={this.props.closeGlyph}/> : <span>×</span>}</button></span>
            </span>
        );
    },
    renderContent() {
        return this.props.asPanel ? (
            <Panel
                defaultExpanded="true"
                collapsible={this.props.collapsible}
                id="mapstore-brugis3dbuilding"
                style={this.props.style}
                className={this.props.panelClassName}>
                <div className={this.props.headerClassName ? this.props.headerClassName : "panel-heading"}>
                    {this.renderHeader()}
                </div>
                <div role="body">
                  <div ref={ (ctn) => {this.ctn = ctn; }} style={{
                      height: '450px',
                      backgroundColor: '#eeeeee'
                    }}>
                        <CesiumMap />
                  </div>
                </div>
            </Panel>
        ) : (
            <Dialog id="mapstore-brugis3dbuilding"
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
                        <CesiumMap />
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

    },

    showMarker(lat, lng) {

    },

    handleClose() {
        this.props.toggleControl();
    }
});


module.exports = Brugis3DBuilding;
