
const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');
const LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');
const ol = require('openlayers');

require('rxjs/Rx');

LocaleUtils.setSupportedLocales({

    "en": {
        code: "en-US",
        description: "English"
    },
    "fr": {
        code: "fr-FR",
        description: "Français"
    } /*,
    "nl": {
        code: "nl-NL",
        description: "Nederlands"
    }*/
});

const startApp = () => {
    const StandardApp = require('../MapStore2/web/client/components/app/StandardApp');
    const {pages, pluginsDef, initialState, storeOpts, appEpics = {}} = require('./appConfig');

    const StandardRouter = connect((state) => ({
        locale: state.locale || {},
        pages
    }))(require('../MapStore2/web/client/components/app/StandardRouter'));

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

    ol.proj.addProjection(lb72Projection);

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
