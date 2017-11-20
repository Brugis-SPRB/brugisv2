const React = require('react');
const assign = require('object-assign');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');
const streetviewIcon = require('./imgs/littleman-02.svg');
const {connect} = require('react-redux');
const {createSelector} = require('reselect');
const {showStreetView, hideStreetView} = require('./actions');
const StreetView = require('./StreetView');

const selector = createSelector([
    (state) => (state.streetView && state.streetView.enabled) || (state.controls && state.controls.streetView && state.controls.streetView.enabled) || false,
    (state) => state.streetView && state.streetView.clickPoint && state.streetView.clickPoint.latlng && state.streetView.clickPoint.latlng.lat,
    (state) => state.streetView && state.streetView.clickPoint && state.streetView.clickPoint.latlng && state.streetView.clickPoint.latlng.lng,
    (state) => state.streetView && state.streetView.warning,
    (state) => state.locale && state.locale.current
], (enabled, lat, lng, warning, locale) => ({
    enabled, lat, lng, warning, locale
}));

const StreetViewPlugin = connect(selector, {
    showStreetView: showStreetView,
    hideStreetView: hideStreetView
})(StreetView);

module.exports = {
    StreetViewPlugin: assign(StreetViewPlugin, {
        Toolbar: {
          id: "streetview",
          name: 'streetView',
          position: 7,
          tooltip: "streetview.tooltip",
          icon: <img src={streetviewIcon} height="45" width="38"></img>,
          help: <Message msgId="helptexts.streetviewButton"/>,
          toggle: true
        }
    }),
    reducers: {
      streetView: require('./reducers')
    }
};
