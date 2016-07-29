
var axios = require('../../../MapStore2/web/client/libs/ajax');
const urlUtil = require('url');
const assign = require('object-assign');

const {TEXT_SEARCH_RESULTS_LOADED} = require("../../../MapStore2/web/client/actions/search");

const DEFAULT_URL = '//service.gis.irisnet.be/urbis/Rest/Localize/getaddresses';
const DEFAUTL_REVERSE_URL = '//nominatim.openstreetmap.org/reverse';
const defaultOptions = {
    language: 'fr'
};
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

function searchResultLoaded(results) {
    return {
        type: TEXT_SEARCH_RESULTS_LOADED,
        results: results.data
    };
}

function textSearch(text) {
    return (dispatch) => {
        Api.geocode(text).then((response) => {
            dispatch(searchResultLoaded(response));
        }).catch((e) => {
            dispatch(searchResultLoaded(e));
        });
    };
}

module.exports = {
    Api,
    textSearch
};
