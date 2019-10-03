const React = require('react');
const assign = require('object-assign');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');
const {setControlProperty} = require('../../../MapStore2/web/client/actions/controls');
const {connect} = require('react-redux');
const {createSelector} = require('reselect');
const {addLayer, removeLayer} = require('../../../MapStore2/web/client/actions/layers');
const Brugis3DBuilding = require('./Brugis3DBuilding');
const brugis3DBuildingIcon = require('./imgs/noun_House Frame_80931.svg');
const {toggleControl} = require('../../../MapStore2/web/client/actions/controls');
// const brugis3DBuildingIcon = require('./imgs/noun_Home_50688.svg');

const toggleBrugis3DBuildingTool = setControlProperty.bind(null, 'brugis3db', 'active', "brugis3db", true);

const selector = createSelector([
    (state) => state,
    (state) => state.controls && state.controls.Brugis3dbuilding && state.controls.Brugis3dbuilding.active === "brugis3dbuilding" || false,
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
          position: 10,
          tooltip: "Brugis3DBuilding.tooltip",
          icon: <img src={brugis3DBuildingIcon} height="45" width="38"></img>,
          help: <Message msgId="helptexts.Brugis3dBuildingButton"/>,
          // toggle: true
          exclusive: true,
          action: toggleBrugis3DBuildingTool
        }
    }),
    reducers: {

    }
};
