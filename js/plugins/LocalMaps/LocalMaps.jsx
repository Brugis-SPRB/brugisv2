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
        DrawerMenu: {
            name: 'LocalMaps',
            position: 1,
            icon: <Glyphicon glyph="glyphicon-th-list"/>,
            title: 'SaveMap',
            priority: 1
        }
    }),
    reducers: {
        localMaps: require('./reducers')
    }
};
