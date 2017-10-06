
const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');
const ol = require('openlayers');

const StandardApp = require('../MapStore2/web/client/components/app/StandardApp');

const {pages, pluginsDef, initialState, storeOpts, appEpics = {}} = require('./appConfig');

const StandardRouter = connect((state) => ({
    locale: state.locale || {},
    pages
}))(require('../MapStore2/web/client/components/app/StandardRouter'));

/*
const appStore = require('./stores/store').bind(null, initialState, {
  maptype: require('../MapStore2/web/client/reducers/maptype'),
  maps: require('../MapStore2/web/client/reducers/maps')
}, appEpics);
*/

const appStore = require('../MapStore2/web/client/stores/StandardStore').bind(null, initialState, {
  maptype: require('../MapStore2/web/client/reducers/maptype'),
  maps: require('../MapStore2/web/client/reducers/maps')
}, appEpics);

const appConfig = {
    storeOpts,
    appEpics,
    appStore,
    pluginsDef,
    initialActions: [],
    appComponent: StandardRouter,
    printingEnabled: true,
    themeCfg: {theme: "brugis"}
};

var lb72Projection = new ol.proj.Projection({
     code: 'EPSG:31370',
    // extent: [140000.0,160000.0,165088.0,185088.0],
     extent: [
       0, 0,
       300000, 300000
   ],
   /*
  extent: [
     17646.52218435664,21958.60926379636,
     297198.78807110013,245254.64733992796
   ],*/
     units: "m"
});

ol.proj.addProjection(lb72Projection);

ReactDOM.render(
    <StandardApp {...appConfig}/>,
    document.getElementById('container')
);
