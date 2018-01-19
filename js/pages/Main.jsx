/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const {loadMapConfig} = require('../../MapStore2/web/client/actions/config');

const MapViewer = connect((state) => ({
    locale: state.locale.current
}), {
    //loadMapConfig: loadMapConfig.bind(null, "config.json", false)
    loadMapConfig: loadMapConfig.bind(null)
})(require('../components/MapViewer'));

const Main = (props) => <MapViewer plugins={props.plugins} params={{mapType: "openlayers"}}/>;

module.exports = Main;
