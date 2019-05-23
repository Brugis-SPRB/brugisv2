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
                      <h3>WMS - Services de visualisation</h3>
                        <div>
                        Ce service web peut-être utilisé dans une application webGIS pour y visualiser nos données et interroger
                        le contenu alphanumérique de nos objets. Il peut aussi être ajouté comme source de données dans un GIS
                        classique de bureau tel qGIS.<br/><br/>
                        <div>
                        Adresse du WMS BruGIS: <a target="_blank" href="https://mybrugis.irisnet.be/geoserver/ows?">https://mybrugis.irisnet.be/geoserver/ows?</a><br/>
                        Exemple d'obtention de notre catalogue: <a target="_blank" href="https://mybrugis.irisnet.be/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities">GetCapabilities WMS</a><br/>
                        Exemple de visualisation d'une couche: <a target="_blank" href="https://mybrugis.irisnet.be/geoserver/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=BDU%3APatrimoine&STYLES=&SRS=EPSG%3A31370&CRS=EPSG%3A31370&TILED=true&WIDTH=256&HEIGHT=256&BBOX=148960%2C170752%2C149031.68%2C170823.68">GetMap</a><br/>
                        Exemple d'interrogation d'un objet: <a target="_blank" href="https://mybrugis.irisnet.be/geoserver/ows?service=WMS&version=1.1.1&request=GetFeatureInfo&exceptions=application%2Fjson&id=dd5d36e7-abd0-8d4d-d74f-3b77d685e7f4&layers=BDU:Patrimoine&query_layers=BDU:Patrimoine&x=51&y=51&height=101&width=101&srs=EPSG:31370&bbox=148829.7997120187,170672.04027971838,148886.3597120187,170728.60027971838&feature_count=10&info_format=application%2Fjson&ENV=">GetFeatureInfo</a><br/>
                        </div>
                        </div>
                    </p>
                    <p>
                      <h3>WFS - Services de téléchargement/visualisation vectoriel en lecture seule</h3>
                        <div>
                        Ce service WFS permet non seulement d'afficher nos données sans mise en forme, mais aussi d'en obtenir le
                        tracé vectoriel. Celui-ci peut-être utilisé à l'instar du service WMS dans une application webGIS pour y
                        visualiser nos données et interroger le contenu alphanumérique de nos objets. Il peut aussi être ajouté comme
                         source de données dans un GIS classique de bureau tel qGIS. Il permet outre la visualisation des données, leur
                         exploitation vectorielle à des fins d'analyse ou de manipulation. Ce service WFS permet d'obtenir nos données
                         sous différents formats géomatiques classiques, tels que shapefile ou GML entre autres.<br/><br/>
                        <div>
                        Adresse du WFS BruGIS: <a target="_blank" href="https://mybrugis.irisnet.be/geoserver/ows?">https://mybrugis.irisnet.be/geoserver/ows?</a><br/>
                        Exemple d'obtention de notre catalogue: <a target="_blank" href="https://mybrugis.irisnet.be/geoserver/ows?service=wfs&version=1.1.0&request=GetCapabilities">GetCapabilities WFS</a><br/>
                        Exemple de téléchargement d'une couche complète en GML: <a target="_blank" href="https://mybrugis.irisnet.be/geoserver/BDU/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=BDU%3APatrimoine">GetFeature WFS</a><br/>
                        Exemple d'obtention d'un objet dans une zone donnée: <a target="_blank" href="https://mybrugis.irisnet.be/geoserver/wfs?request=GetFeature&version=1.1.0&typeName=BDU:Patrimoine&propertyName=BENAMING_FR,TYPE_VRIJWARING_FR,FOTO&BBOX=148780,170615,148932,170782,EPSG:31370">GetFeature avec BBOX WFS</a><br/>
                        </div>
                        </div>
                    </p>
                    <p>
                      <h3>INSPIRE - Services de visualisation, téléchargement et métadonnées conforme à la directive européenne</h3>
                        <div>
                        BruGIS publie en conformité avec la directive européenne Inspire une partie de son catalogue. Vous trouverez ces
                        données <a target="_blank" href="http://www.geo.irisnet.be/geonetwork/apps/tabsearch/?hl=fre">ici</a>.<br/>
                        </div>
                    </p>
                    <p>
                      <h3>API - Services d'urbanalyse</h3>
                        <div>
                        Le service web d'urbanalyse de type REST peut être intégré dans un site web ou un logiciel tiers afin d'obtenir
                         un rapport urbanistique complet d'une situation sur le territoire de la région bruxelloise. Ce service web est
                        asynchrone et permet donc de poster une requête d'urbanalyse, d'obtenir un identifiant unique; à l'aide de
                        celui-ci de s'enquérir de l'état de la requête soumise, et enfin d'en obtenir le résultat aux formats docx, pdf
                        , pour une visualisation directe ou xml pour une intégration des résultats dans une plateforme tierce.<br/>
                        Pour l'exploitation et l'intégration de ce service web dans votre solution, merci de nous contacter via
                        le <a href="" onClick={(e) => {this.props.scrollToContact(); e.preventDefault(); }}>formulaire</a> ci-dessous pour obtenir toute l'aide nécessaire.<br/>
                        </div>
                    </p>
                    <p>
                      <h3>GitHub - Service de partage du code source de BruGIS</h3>
                        <div>
                        Les développements réalisés par BruGIS sont tous disponibles en open source via la plateforme <a target="_blank" href="https://github.com/Brugis-SPRB">GitHub</a>.<br/>
                        </div>
                    </p>
                    <p>
                      <h3>Autres services BruGIS</h3>
                        <div>
                        La cellule BruGIS se tient à votre disposition pour tout conseil en matière de cartographie et de géomatique.<br/>
                        Veuillez nous contacter via le <a href="" onClick={(e) => {this.props.scrollToContact(); e.preventDefault(); }}>formulaire</a> ci-dessous pour toutes vos questions.
                        </div>
                    </p>
                </Col>
           </Row>
        </Grid>
        );
    }
}

module.exports = InfoDescription;
