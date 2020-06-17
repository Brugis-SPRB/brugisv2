const React = require('react');
const PropTypes = require('prop-types');
const {Grid, Row, Col} = require('react-bootstrap');
const Message = require('../../MapStore2/web/client/components/I18N/Message');

class InfoDescription extends React.Component {
    static propTypes = {
        style: PropTypes.object,
        name: PropTypes.string,
        scrollToContact: PropTypes.func
    };

    static defaultProps = {
        name: 'Brugis',
        style: {},
        scrollToContact: () => {}
    };

    render() {
        return (
            <Grid style={{ color: '#8d8d8d', width: '100%', backgroundColor: 'white', height: '90%'}}>
            <Row>
                <Col md={12}>
                    <h2><Message msgId="brugisInfo.webservice_title" /></h2>
                    <p>
                      <h3><Message msgId="brugisInfo.webservice_wms_title" /></h3>
                        <div>
                          <Message msgId="brugisInfo.webservice_wms_text" /><br/><br/>
                        <div>
                          <Message msgId="brugisInfo.webservice_wms_example_1" /><a target="_blank" href="https://gis.urban.brussels/geoserver/ows?">https://gis.urban.brussels/geoserver/ows?</a><br/>
                          <Message msgId="brugisInfo.webservice_wms_example_2" /><a target="_blank" href="https://gis.urban.brussels/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities">GetCapabilities WMS</a><br/>
                          <Message msgId="brugisInfo.webservice_wms_example_3" /><a target="_blank" href="https://gis.urban.brussels/geoserver/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=BDU%3APatrimoine&STYLES=&SRS=EPSG%3A31370&CRS=EPSG%3A31370&TILED=true&WIDTH=256&HEIGHT=256&BBOX=148960%2C170752%2C149031.68%2C170823.68">GetMap</a><br/>
                          <Message msgId="brugisInfo.webservice_wms_example_4" /><a target="_blank" href="https://gis.urban.brussels/geoserver/ows?service=WMS&version=1.1.1&request=GetFeatureInfo&exceptions=application%2Fjson&id=dd5d36e7-abd0-8d4d-d74f-3b77d685e7f4&layers=BDU:Patrimoine&query_layers=BDU:Patrimoine&x=51&y=51&height=101&width=101&srs=EPSG:31370&bbox=148829.7997120187,170672.04027971838,148886.3597120187,170728.60027971838&feature_count=10&info_format=application%2Fjson&ENV=">GetFeatureInfo</a><br/>
                        </div>
                        </div>
                    </p>
                    <p>
                      <h3><Message msgId="brugisInfo.webservice_wfs_title" /></h3>
                        <div>
                          <Message msgId="brugisInfo.webservice_wfs_text" /><br/><br/>
                        <div>
                          <Message msgId="brugisInfo.webservice_wfs_example_1" /><a target="_blank" href="https://gis.urban.brussels/geoserver/ows?">https://gis.urban.brussels/geoserver/ows?</a><br/>
                          <Message msgId="brugisInfo.webservice_wfs_example_2" /><a target="_blank" href="https://gis.urban.brussels/geoserver/ows?service=wfs&version=1.1.0&request=GetCapabilities">GetCapabilities WFS</a><br/>
                          <Message msgId="brugisInfo.webservice_wfs_example_3" /><a target="_blank" href="https://gis.urban.brussels/geoserver/BDU/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=BDU%3APatrimoine">GetFeature WFS</a><br/>
                          <Message msgId="brugisInfo.webservice_wfs_example_4" /><a target="_blank" href="https://gis.urban.brussels/geoserver/wfs?request=GetFeature&version=1.1.0&typeName=BDU:Patrimoine&propertyName=BENAMING_FR,TYPE_VRIJWARING_FR,FOTO&BBOX=148780,170615,148932,170782,EPSG:31370">GetFeature BBOX WFS</a><br/>
                        </div>
                        </div>
                    </p>
                    <p>
                      <h3><Message msgId="brugisInfo.webservice_inspire_title" /></h3>
                        <div>
                          <Message msgId="brugisInfo.webservice_inspire_text_1" /><a target="_blank" href="http://www.geo.irisnet.be/geonetwork/apps/tabsearch/?hl=fre"><Message msgId="brugisInfo.webservice_inspire_text_2" /></a>.<br/>
                        </div>
                    </p>
                    <p>
                      <h3><Message msgId="brugisInfo.webservice_api_title" /></h3>
                        <div>
                          <Message msgId="brugisInfo.webservice_api_text_1" /><br/><Message msgId="brugisInfo.webservice_api_text_2" /><a href="" onClick={(e) => {this.props.scrollToContact(); e.preventDefault(); }}><Message msgId="brugisInfo.webservice_api_text_3" /></a><Message msgId="brugisInfo.webservice_api_text_4" /><br/>
                        </div>
                    </p>
                    <p>
                      <h3><Message msgId="brugisInfo.webservice_github_title" /></h3>
                        <div>
                          <Message msgId="brugisInfo.webservice_github_text_1" /><a target="_blank" href="https://github.com/Brugis-SPRB"><Message msgId="brugisInfo.webservice_github_text_2" /></a>.<br/>
                        </div>
                    </p>
                    <p>
                      <h3><Message msgId="brugisInfo.webservice_else_title" /></h3>
                        <div>
                          <Message msgId="brugisInfo.webservice_else_text_1" /><br/>
                          <Message msgId="brugisInfo.webservice_else_text_2" /><a href="" onClick={(e) => {this.props.scrollToContact(); e.preventDefault(); }}><Message msgId="brugisInfo.webservice_else_text_3" /></a><Message msgId="brugisInfo.webservice_else_text_4" />
                        </div>
                    </p>
                </Col>
           </Row>
        </Grid>
        );
    }
}

module.exports = InfoDescription;
