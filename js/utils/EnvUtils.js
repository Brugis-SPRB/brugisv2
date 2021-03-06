
const DEV = 'DEV';
const STA = 'STA';
const STANEW = 'STANEW';
const PRD = 'PRD';
const PRDNEW = 'PRDNEW';

const EnvUtils = {

    getEnvironment: function() {
        var hostname = window.location.hostname;
        var ENV = DEV;
        // console.log(hostname);
        if (hostname.indexOf('irisnet.be') >= 0) {
            ENV = PRD;
        }
        if (hostname.indexOf('irisnetlab.be') >= 0) {
            ENV = STA;
        }
        if (hostname.indexOf('gislab.urban.brussels') >= 0) {
            ENV = STANEW;
        }
        if (hostname.indexOf('gis.urban.brussels') >= 0) {
            ENV = PRDNEW;
        }
        return ENV;
    },

    getBrugisGeoserverUrl: function() {
        var env = this.getEnvironment.call(this);
        var url = "/";
        switch (env) {
            case DEV:
                url = "10.128.81.203:8080/geoserver/ows";
                break;
            case STA:
                url = "mybrugis.irisnetlab.be/geoserver/ows";
                break;
            case STANEW:
                url = "gislab.urban.brussels/geoserver/ows";
                break;
            case PRD:
                url = "mybrugis.irisnet.be/geoserver/ows";
                break;
            case PRDNEW:
                url = "gis.urban.brussels/geoserver/ows";
                break;
            default:
                url = "gis.urban.brussels/geoserver/ows";
                break;
        }
        return url;
    }
};

module.exports = EnvUtils;
