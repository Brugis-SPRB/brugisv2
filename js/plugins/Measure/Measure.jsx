/*
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {connect} = require('react-redux');
const {Glyphicon} = require('react-bootstrap');

const Message = require('../../../MapStore2/web/client/plugins/locale/Message');

const assign = require('object-assign');
const {createSelector} = require('reselect');
const {changeMeasurement, changeUom} = require('../../../MapStore2/web/client/actions/measurement');
const {toggleControl} = require('../../../MapStore2/web/client/actions/controls');
const {MeasureDialog} = require('../../../MapStore2/web/client/plugins/measure/index');

const selector = (state) => {
    return {
        measurement: state.measurement || {},
        uom: state.measurement && state.measurement.uom || {
            length: {unit: 'm', label: 'm'},
            area: {unit: 'sqm', label: 'm²'}
        },
        lineMeasureEnabled: state.measurement && state.measurement.lineMeasureEnabled || false,
        areaMeasureEnabled: state.measurement && state.measurement.areaMeasureEnabled || false,
        bearingMeasureEnabled: state.measurement && state.measurement.bearingMeasureEnabled || false
    };
};
const toggleMeasureTool = toggleControl.bind(null, 'measure', null);
/**
 * Measure plugin. Allows to show the tool to measure dinstances, areas and bearing.<br>
 * See [Application Configuration](local-config) to understand how to configure lengthFormula, showLabel and uom
 * @class
 * @name Measure
 * @memberof plugins
 * @prop {boolean} showResults shows the measure in the panel itself.
  */
const Measure = connect(
    createSelector([
        selector,
        (state) => state && state.controls && state.controls.measure && state.controls.measure.enabled
    ],
        (measure, show) => ({
            show,
            ...measure
        }
    )),
    {
        toggleMeasure: changeMeasurement,
        onChangeUom: changeUom,
        onClose: toggleMeasureTool
    }, null, {pure: false})(MeasureDialog);

module.exports = {
    MeasurePlugin: assign(Measure, {
        disablePluginIf: "{state('mapType') === 'cesium'}",
        Toolbar: {
            name: 'measurement',
            priority: 1,
            position: 9,
            panel: true,
            help: <Message msgId="helptexts.measureComponent"/>,
            icon: <Glyphicon glyph="1-ruler"/>,
            action: toggleMeasureTool
        }
    }),
    reducers: {measurement: require('../../../MapStore2/web/client/reducers/measurement')}
};
