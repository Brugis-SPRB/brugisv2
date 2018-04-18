
const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');
const LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');
const ol = require('openlayers');

require('./proj/31370.js');
require('./proj/3812.js');
require('./proj/3035.js');

const {createSelector} = require('reselect');

require('rxjs/Rx');

LocaleUtils.setSupportedLocales({
    "fr": {
        code: "fr-FR",
        description: "Français"
    },
    "en": {
        code: "en-US",
        description: "English"
    },
    "nl": {
        code: "nl-NL",
        description: "Nederlands"
    }
});

const startApp = () => {
    const StandardApp = require('./components/StandardApp');
    const {pages, pluginsDef, initialState, storeOpts, appEpics = {}} = require('./appConfig');

    const routerSelector = createSelector(state => state.locale, (locale) => ({
        locale: locale || {},
        version: "no-version",
        themeCfg: {
            theme: "brugis"
        },
        pages
    }));
    const StandardRouter = connect(routerSelector)(require('../MapStore2/web/client/components/app/StandardRouter'));

    const appStore = require('./stores/store').bind(null, initialState, {
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
       units: "m"
    });

    var lb08Projection = new ol.proj.Projection({
        code: 'EPSG:3812',
        // extent: [140000.0,160000.0,165088.0,185088.0],
         extent: [
           640000, 661000,
           658000, 679000
       ],
       units: "m"
    });


    ol.proj.addProjection(lb72Projection);
    ol.proj.addProjection(lb08Projection);

    ReactDOM.render(
        <StandardApp {...appConfig}/>,
        document.getElementById('container')
    );
};

if (!global.Intl ) {
    // Ensure Intl is loaded, then call the given callback
    LocaleUtils.ensureIntl(startApp);
} else {
    startApp();
}
