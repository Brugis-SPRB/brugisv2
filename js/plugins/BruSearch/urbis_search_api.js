
var axios = require('../../../MapStore2/web/client/libs/ajax');
const urlUtil = require('url');
const assign = require('object-assign');

const {TEXT_SEARCH_RESULTS_LOADED} = require("../../../MapStore2/web/client/actions/search");

const EnvUtils = require('../../utils/EnvUtils');
const DEFAULT_URL = '//geoservices.irisnet.be/localization/Rest/Localize/getaddresses';
const DEFAUTL_REVERSE_URL = '//nominatim.openstreetmap.org/reverse';

const defaultOptions = {
    language: '',
    spatialReference: '31370'
};

// exemple CAPAKEY : 21682C0176/00Z012
const capakeyRegex = "\\d{5}[A-Z]{1}\\d{4}\\/\\d{2}[A-Z]\\d{3}";

/**
 * API for local config
 */
const Api = {
    geocode: function(text, options) {
        var params = assign({address: text}, options || {}, defaultOptions);
        var url = urlUtil.format({
            host: DEFAULT_URL,
            query: params
        });
        return axios.get(url); // TODO the jsonp method returns .promise and .cancel method,the last can be called when user cancel the query
    },
    reverseGeocode: function(coords, options) {
        const params = assign({lat: coords.lat, lon: coords.lng}, options || {}, defaultOptions);
        const url = urlUtil.format({
            host: DEFAUTL_REVERSE_URL,
            query: params
        });
        return axios.get(url);
    }
};

const WFSApi = {
  geocode: function(text, options) {
      var filter = "(<Filter xmlns=\"http://www.opengis.net/ogc\"><PropertyIsEqualTo><PropertyName>CAPAKEY</PropertyName><Literal>" + text + "</Literal></PropertyIsEqualTo></Filter>)";

      var params = assign({
        service: "wfs",
        version: "1.0.0",
        request: "GetFeature",
        typeName: "BDU:Parcelle_2017",
        outputFormat: "application/json",
        FILTER: filter
      }, options || {}, defaultOptions);

      var url = urlUtil.format({
          host: EnvUtils.getBrugisGeoserverUrl(),
          query: params
      });
      return axios.get(url); // TODO the jsonp method returns .promise and .cancel method,the last can be called when user cancel the query
  },
  reverseGeocode: function(coords, options) {
      const params = assign({lat: coords.lat, lon: coords.lng}, options || {}, defaultOptions);
      const url = urlUtil.format({
          host: DEFAUTL_REVERSE_URL,
          query: params
      });
      return axios.get(url);
  }
};

function searchResultLoaded(results) {
    return {
        type: TEXT_SEARCH_RESULTS_LOADED,
        results: results.data
    };
}

function textSearch(text) {

    return (dispatch) => {
      var re = new RegExp(capakeyRegex);
      if (text.match(re)) {
        WFSApi.geocode(text).then((response) => {
            console.log(response);
            dispatch(searchResultLoaded(response));
        }).catch((e) => {
            dispatch(searchResultLoaded(e));
        });
      } else {
        Api.geocode(text).then((response) => {
            dispatch(searchResultLoaded(response));
        }).catch((e) => {
            dispatch(searchResultLoaded(e));
        });
      }
    };
}



module.exports = {
    Api,
    textSearch
};
