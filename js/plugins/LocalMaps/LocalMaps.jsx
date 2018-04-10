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
const {mapSelector} = require('../../../MapStore2/web/client/selectors/map');
const {layersSelector} = require('../../../MapStore2/web/client/selectors/layers');
const stateSelector = state => state;
const LayersUtils = require('../../../MapStore2/web/client/utils/LayersUtils');

const selector = createSelector(mapSelector, stateSelector, layersSelector, (map, state, layers) => ({
    active: (state.controls && state.controls.LocalMaps && state.controls.LocalMaps.enabled) || (state.controls.toolbar && state.controls.toolbar.active === "LocalMaps"),
    toolbarActive: state.controls.toolbar && state.controls.toolbar.active === "LocalMaps",
    currentZoomLvl: map && map.zoom,
    map,
    mapId: map && map.mapId,
    layers
}));

class LocalMaps extends React.Component {
    static propTypes = {
        expanded: PropTypes.bool,
        onStateSave: PropTypes.func,
        onStateLoad: PropTypes.func,
        mapId: PropTypes.string,
        map: PropTypes.object,
        layers: PropTypes.array,
        active: PropTypes.bool,
        toolbarActive: PropTypes.bool,
        onClose: PropTypes.func,
        onCloseToolBar: PropTypes.func
    };

    static defaultProps = {
      active: false
    };

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
    }

    saveMap = (name) => {
        let map = {
            center: this.props.map.center,
            maxExtent: this.props.map.maxExtent,
            projection: this.props.map.projection,
            units: this.props.map.units,
            zoom: this.props.map.zoom,
            mapOptions: {
                "view": {
                    "resolutions": [49.0, 42.0, 28.0, 21.0, 14.0, 7.0, 5.6, 3.5, 2.8, 2.1, 1.4, 0.7, 0.56, 0.28, 0.14, 0.07, 0.056, 0.035, 0.028, 0.014],
                    "DPI": 90.71428571428571
                }
            }
        };
        let layers = this.props.layers.map((layer) => {
            return LayersUtils.saveLayer(layer);
        });
        // Groups are ignored, as they already are defined in the layers
        let resultingmap = {
            version: 2,
            // layers are defined inside the map object
            map: assign({}, map, {layers})
        };

        this.props.onStateSave(name, JSON.stringify(resultingmap));
        this.props.onClose();
    };

    close = () => {
        if (this.props.toolbarActive) {
            this.props.onCloseToolBar();
        } else {
            this.props.onClose();
        }
    };
}

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
