
const DEV = 'DEV';
const STA = 'STA';
const PRD = 'PRD';

const EnvUtils = {

    getEnvironment: function() {
        var hostname = window.location.hostname;
        var ENV = DEV;
        if (hostname.indexOf('irisnet.be') >= 0) {
            ENV = PRD;
        }
        if (hostname.indexOf('irisnetlab.be') >= 0) {
            ENV = STA;
        }
        return ENV;
    },

    getBrugisGeoserverUrl: function() {
        var env = this.getEnvironment.call(this);
        var url = "/";
        switch (env) {
            case DEV:
                url = "//svappmavw115:8080/geoserver/ows";
                break;
            case STA:
                url = "http://mybrugis.irisnetlab.be/geoserver/ows";
                break;
            case PRD:
                url = "https://mybrugis.irisnet.be/geoserver/ows";
                break;
            default:
                url = "https://mybrugis.irisnet.be/geoserver/ows";
                break;
        }
        return url;
    }
};

module.exports = EnvUtils;
