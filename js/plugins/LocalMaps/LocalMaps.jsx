const React = require('react');
const assign = require('object-assign');
const {createSelector} = require('reselect');
var {saveMapState, loadMapState} = require('./actions');
const SaveAndLoad = require('./SaveAndLoad');
const {connect} = require('react-redux');
const {Glyphicon} = require('react-bootstrap');
const {Modal, Button} = require('react-bootstrap');
const Message = require("../../../MapStore2/web/client/components/I18N/Message");
const {toggleControl, setControlProperty} = require("../../../MapStore2/web/client/actions/controls");

const stateSelector = state => state;

const selector = createSelector(stateSelector, (state) => ({
    active: state.controls && state.controls.LocalMaps && state.controls.LocalMaps.enabled === true || state.controls && state.controls.toolbar && state.controls.toolbar.active === "LocalMaps",
    currentstate: state
}));

const LocalMaps = React.createClass({

    propTypes: {
        expanded: React.PropTypes.bool,
        onStateSave: React.PropTypes.func,
        onStateLoad: React.PropTypes.func,
        currentstate: React.PropTypes.object,
        active: React.PropTypes.bool,
        onClose: React.PropTypes.func,
        onCloseToolBar: React.PropTypes.func
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
        this.props.onStateSave(name, this.props.currentstate);
    },
    close() {
        if (this.props.currentstate.controls && this.props.currentstate.controls.toolbar && this.props.currentstate.controls.toolbar.active === "LocalMaps") {
            this.props.onCloseToolBar();
        } else {
            this.props.onClose();
        }
    }
});

const LocalMapsPlugin = connect(selector, {
    onStateSave: saveMapState,
    onStateLoad: loadMapState,
    onClose: toggleControl.bind(null, 'LocalMaps', null),
    onCloseToolBar: setControlProperty.bind(null, 'toolbar', 'active', null)
})(LocalMaps);

module.exports = {
    LocalMapsPlugin: assign(LocalMapsPlugin, {
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
        BurgerMenu: {
            name: 'LocalMaps',
            position: 6,
            text: <Message msgId="localmaps.title"/>,
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
