/*
 * 
 * 
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * 
 * Copied from MAPSTORE2
 */

const React = require('react');
const {connect} = require('.../../../MapStore2/web/client/utils/PluginsUtils');
const {createSelector} = require('reselect');

const {mapSelector} = require('../../../MapStore2/web/client/selectors/map');
const {changeZoomLevel} = require('../../../MapStore2/web/client/actions/map');

const HelpWrapper = require('../../../MapStore2/web/client/plugins/help/HelpWrapper');
const Message = require('../../../MapStore2/web/client/plugins/locale/Message');
const ScaleBox = require("../../../MapStore2/web/client/components/mapcontrols/scale/ScaleBox");

const mapUtils = require('../../../MapStore2/web/client/utils/MapUtils');
const assign = require('object-assign');

const selector = createSelector([mapSelector], (map) => ({
    currentZoomLvl: map && map.zoom && Math.round(map.zoom),
    scales: mapUtils.getScales(
        map && map.projection || 'EPSG:3857',
        map && map.mapOptions && map.mapOptions.view && map.mapOptions.view.DPI || null
     )
}));

require('../../../MapStore2/web/client/plugins/scalebox/scalebox.css');

class ScaleBoxTool extends React.Component {
    render() {
        return (<HelpWrapper id="mapstore-scalebox-container"
            key="scalebox-help"
            helpText={<Message msgId="helptexts.scaleBox"/>}>
                <ScaleBox key="scaleBox" label={<Message msgId="mapScale"/>} {...this.props}/>
        </HelpWrapper>);
    }
}

/**
  * ScaleBox Plugin. Provides a selector for the scale of the map.
  * @class  ScaleBox
  * @memberof plugins
  * @static
  *
  * @prop {object} cfg.style CSS to apply to the scalebox
  * @prop {Boolean} cfg.readOnly the selector is readonly
  * @prop {string} cfg.label label for the selector
  * @prop {Boolean} cfg.useRawInput set true if you want to use an normal html input object
  *
  */
const ScaleBoxPlugin = connect(selector, {
    onChange: changeZoomLevel
})(ScaleBoxTool);
module.exports = {
    ScaleBoxPlugin: assign(ScaleBoxPlugin, {
        disablePluginIf: "{state('mapType') === 'cesium'}"
    }, {
        MapFooter: {
            name: 'scale',
            position: 1,
            tool: true,
            priority: 1
        }
    }),
    reducers: {}
};
