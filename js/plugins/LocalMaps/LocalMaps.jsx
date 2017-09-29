const React = require('react');
const PropTypes = require('prop-types');
const assign = require('object-assign');
const {createSelector} = require('reselect');
var {saveMapState, loadMapState} = require('./actions');
const SaveAndLoad = require('./SaveAndLoad');
const {connect} = require('react-redux');
const {Glyphicon} = require('react-bootstrap');
const {Modal, Button} = require('react-bootstrap');
const {toggleControl, setControlProperty} = require("../../../MapStore2/web/client/actions/controls");

const selector = createSelector([
    (state) => (state.controls && state.controls.LocalMaps && state.controls.LocalMaps.enabled) || (state.controls.toolbar && state.controls.toolbar.active === "LocalMaps"),
    (state) => state
], (enabled, currentState) => ({
    active: enabled,
    currentState: currentState
}));

const LocalMaps = React.createClass({

    propTypes: {
        expanded: PropTypes.bool,
        onStateSave: PropTypes.func,
        onStateLoad: PropTypes.func,
        currentState: PropTypes.object,
        active: PropTypes.bool,
        onClose: PropTypes.func,
        onCloseToolBar: PropTypes.func
    },

    getDefaultProps() {
        return {
            active: false
        };
    },
    render() {
        if (this.props.active) {
            return (
                <Modal show={this.props.active} onHide={this.close} bsSize="small" aria-labelledby="contained-modal-title-sm">
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">Save or load Maps</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <SaveAndLoad onSave={this.saveMap} onLoad={this.props.onStateLoad}/>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
            );
        }
        return null;
    },
    saveMap(name) {
        this.props.onStateSave(name, this.props.currentState);
    },
    close() {
        if (this.props.currentState.controls && this.props.currentState.controls.toolbar && this.props.currentState.controls.toolbar.active === "LocalMaps") {
            this.props.onCloseToolBar();
        } else {
            this.props.onClose();
        }
    }
});

const LocalMapsPlugin = connect(selector, {
    toggleControl: toggleControl.bind(null, 'LocalMaps', null),
    onStateSave: saveMapState,
    onStateLoad: loadMapState,
    onClose: toggleControl.bind(null, 'LocalMaps', null),
    onCloseToolBar: setControlProperty.bind(null, 'toolbar', 'active', null)
})(LocalMaps);

module.exports = {
    LocalMapsPlugin: assign(LocalMapsPlugin, {
        /*
        Toolbar: {
            name: 'LocalMaps',
            position: 9,
            exclusive: true,
            panel: true,
            tooltip: "LocalMaps",
            wrap: false,
            title: 'LocalMaps',
            icon: <Glyphicon glyph="hdd"/>,
            hide: false,
            priority: 2
        },
        */
        BurgerMenu: {
            name: 'LocalMaps',
            position: 6,
            text: "LocalMaps", // <Message msgId="localmaps.title"/>,
            icon: <Glyphicon glyph="hdd"/>,
            action: toggleControl.bind(null, 'LocalMaps', null),
            priority: 2,
            doNotHide: true
        }
    }),
    reducers: {
        localMaps: require('./reducers')
    }
};
