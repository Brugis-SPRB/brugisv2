
const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');
const LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');
const ol = require('openlayers');
const proj4 = require('proj4').default;

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

    ol.proj.setProj4(proj4);
    ol.proj.get('EPSG:31370').setExtent([0, 0, 300000, 300000]);
    ol.proj.get('EPSG:3812').setExtent([640000, 661000, 658000, 679000]);

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
