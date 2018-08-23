

const React = require('react');
const {connect} = require('react-redux');
const {loadMapConfig} = require('../actions/config');

const MapViewer = connect((state) => ({
    locale: state.locale.current
}), {
    loadMapConfig: loadMapConfig.bind(null)
})(require('../components/MapViewer'));

const Main = (props) => <MapViewer plugins={props.plugins} params={{mapType: "openlayers"}}/>;

module.exports = Main;
