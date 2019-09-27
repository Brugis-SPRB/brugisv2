const React = require('react');
const assign = require('object-assign');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');
const {setControlProperty} = require('../../../MapStore2/web/client/actions/controls');
const {connect} = require('react-redux');
const {createSelector} = require('reselect');
const {addLayer, removeLayer} = require('../../../MapStore2/web/client/actions/layers');
const Brugis3DBuilding = require('./Brugis3DBuilding');
const brugis3DBuildingIcon = require('./imgs/littleman-02.svg');

const toggleBrugis3DBuildingTool = setControlProperty.bind(null, 'brugis3db', 'active', "brugis3db", true);

const selector = createSelector([
    (state) => state,
    (state) => state.controls && state.controls.toolbar && state.controls.toolbar.active === "brugis3dbuilding" || false,
    (state) => state.brugis3db && state.brugis3db.clickPoint && state.brugis3db.clickPoint.latlng && state.brugis3db.clickPoint.latlng.lat,
    (state) => state.brugis3db && state.brugis3db.clickPoint && state.streetView.brugis3db.latlng && state.brugis3db.clickPoint.latlng.lng,
    (state) => state.brugis3db && state.brugis3db.warning,
    (state) => state.locale && state.locale.current
], (state, enabled, lat, lng, warning, locale) => ({
    state, enabled, lat, lng, warning, locale
}));

const Brugis3DBuildingPlugin = connect(selector, {
    toggleControl: toggleBrugis3DBuildingTool,
    addLayer: addLayer,
    removeLayer: removeLayer
})(Brugis3DBuilding);


module.exports = {
  Brugis3DBuildingPlugin: assign(Brugis3DBuildingPlugin, {
        Toolbar: {
          id: "brugis3dbuilding",
          name: 'brugis3dbuilding',
          position: 8,
          tooltip: "streetview.tooltip",
          icon: <img src={brugis3DBuildingIcon} height="45" width="38"></img>,
          help: <Message msgId="helptexts.streetviewButton"/>,
          // toggle: true
          exclusive: true,
          action: toggleBrugis3DBuildingTool
        }
    }),
    reducers: {
      
    }
};
