const React = require('react');
const assign = require('object-assign');
const {createSelector} = require('reselect');
var {saveMapState,loadMapState} = require('./actions');
const SaveAndLoad = require('./SaveAndLoad');
const {connect} = require('react-redux');
const {Glyphicon} = require('react-bootstrap');
const {mapSelector} = require('../../../MapStore2/web/client/selectors/map');
const stateSelector = state => state;

const selector = createSelector(stateSelector, (state) => ({
    currentstate : state
}));

const LocalMaps = React.createClass({

    propTypes: {
        expanded: React.PropTypes.bool,
        onStateSave: React.PropTypes.func,
        onStateLoad: React.PropTypes.func,
        currentstate: React.PropTypes.object
    },

    getDefaultProps() {
        return {
            expanded: true
        };
    },
    render() {
        return (
            <SaveAndLoad onSave={this.saveMap} onLoad={this.props.onStateLoad}/>
        );
    },
    saveMap(name) {
        this.props.onStateSave(name,this.props.currentstate);
    }
});

const LocalMapsPlugin = connect(selector, {
    onStateSave: saveMapState,
    onStateLoad: loadMapState
})(LocalMaps);

module.exports = {
    LocalMapsPlugin: assign(LocalMapsPlugin, {
        Toolbar: {
            name: 'LocalMaps',
            position: 9,
            exclusive: true,
            panel: true,
            tooltip: "LocalMaps",
            wrap: true,
            title: 'LocalMaps',
            icon: <Glyphicon glyph="hdd"/>,
            hide: false,
            priority: 2
        }
    }),
    reducers: {
        localMaps: require('./reducers')
    }
};
