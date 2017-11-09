const Rx = require('rxjs');
const axios = require('axios');
var {CHANGE_LOCALE} = require('../../../MapStore2/web/client/actions/locale');
var {brugisTreeLoaded, brugisTreeLoadError} = require('./actions');
const {unmarshaller} = require('../../../MapStore2/web/client/utils/ogc/WMS');

const localXmlTreeFr = 'wmsaatl_fr.xml';
const localXmlTreeNl = 'wmsaatl_nl.xml';
const localXmlTreeEn = 'wmsaatl_en.xml';

function getXmlName(currentLocale) {
    switch (currentLocale) {
        case "fr-FR":
          return localXmlTreeFr;
        case "fr-BE":
          return localXmlTreeFr;
        case "en-US":
          return localXmlTreeEn;
        case "nl-BE":
          return localXmlTreeNl;
        case "nl-NL":
          return localXmlTreeNl;
        default:
          return localXmlTreeEn;
    }
}

const reloadTreeEpic = (action$) =>
    action$.ofType(CHANGE_LOCALE).switchMap((action) => {
        var localXml = getXmlName(action.locale);

        return Rx.Observable.fromPromise(axios.get(localXml))
          .switchMap((res) => {
              let json = unmarshaller.unmarshalString(res.data);
              return Rx.Observable.of(brugisTreeLoaded(json));
          })
          .catch((e) => { return Rx.Observable.of(brugisTreeLoadError(e)); });
    });

module.exports = {
    reloadTreeEpic
};
