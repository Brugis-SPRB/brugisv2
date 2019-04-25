const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');
const {Grid, Image, Glyphicon} = require('react-bootstrap');
const {goToPage} = require('../../MapStore2/web/client/actions/router');

import BrugisNews from "../components/BrugisNewsCarousel";
import InfoDescription from "../components/InfoDescription";
import Parallax from '../components/Parallax';
import BrugisContact from '../components/BrugisContact';

import BrugisLogo from '../../assets/img/Brugis_blanc_500.png';

const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;

// Little helpers ...
// const burl = (name) => `url(../../../brugis/assets/img/${name})`;

import BrugisBackground from '../../assets/img/BruGIS_Vintage_2000_corr.jpg';
import Brugis2000 from '../../assets/img/brugis_2000.png';
import AchterGrond2000 from '../../assets/img/achtergrond_2000_4164.png';
import VoorGrond200 from '../../assets/img/voorgrond_2000.png';

class BrugisInfo extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        mode: PropTypes.string,
        match: PropTypes.object,
        loadNews: PropTypes.func,
        locale: PropTypes.string,
        contentTabStyle: PropTypes.string
    };

    static contextTypes = {
        router: PropTypes.object
    };

    static defaultProps = {
        name: "brugis",
        mode: 'desktop',
        loadNews: () => {},
        locale: 'en-EN',
        contentTabStyle: {
            'min-height': '300px'
        }
    };

    componentWillMount() {
        if (this.props.match.params.mapType && this.props.match.params.mapId) {
            if (this.props.mode === 'mobile') {
                require('../../assets/css/mobile.css');
            }
            this.props.loadNews();
        }
    }

    render() {
        const styles = {
            fontFamily: 'Dosis, sans-serif',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        };

        return (<div>
                <div id="shadowBox">
                    <div className="d-flex">
                          <div className="flex-fill" onClick={this.goBrugis.bind(this)} title="Go back to BruGIS" id="bibIllBeBack">
                            <Image src={BrugisLogo} responsive style={{ height: '50px'}}/>
                           </div>
                          <div className="flex-fill d-none d-lg-block" onClick={() => this.refs.parallax.scrollTo(1)} title="Go to BruGIS News" id="bibNews">News</div>
                          <div className="flex-fill d-none d-lg-block" onClick={() => this.refs.parallax.scrollTo(2)} title="Go to BruGIS Webservices" id="bibWS">Webservices</div>
                          <div className="flex-fill d-none d-lg-block" onClick={() => this.refs.parallax.scrollTo(3)} title="Go to Contact BruGIS" id="bibContact">Contact</div>
                          <div className="flex-fill" onClick={() => this.refs.parallax.scrollTo(0)} title="Go back to top" id="bibTop"><Glyphicon glyph="arrow-up"/></div>
                    </div>
               </div>
               <Parallax
                  ref="parallax"
                  pages={4}
                  style={{backgroundImage: "url(" + BrugisBackground + ")", backgroundSize: 'cover'}}
                  >
                    <Parallax.Layer
                        offset={0} speed={1} factor={1}
                        style={{backgroundImage: "url(" + Brugis2000 + ")", backgroundSize: 'contain'}}
                    />
                    <Parallax.Layer
                        offset={0} speed={0} factor={4}
                        style={{backgroundImage: "url(" + AchterGrond2000 + ")", backgroundSize: 'cover'}}
                    />
                    <Parallax.Layer
                        offset={0} speed={1} factor={1}
                        style={{backgroundImage: "url(" + VoorGrond200 + ")", backgroundSize: 'contain'}}
                    />
                    <Parallax.Layer
                        id="brugisInfoNews"
                        offset={1}
                        speed={1}
                        style={styles}
                    >
                        <Grid fluid style={{ color: 'black', width: '100%', backgroundColor: 'white', height: '60%'}}>
                            <BrugisNews locale={this.props.locale} />
                        </Grid>
                    </Parallax.Layer>
                    <Parallax.Layer
                        id="brugisInfoServices"
                        offset={2}
                        speed={1}
                        style={styles}
                    >
                        <InfoDescription />
                    </Parallax.Layer>
                    <Parallax.Layer
                        id="brugisInfoContact"
                        offset={3}
                        speed={1}
                        style={styles}>
                        <BrugisContact />
                  </Parallax.Layer>
              </Parallax>

          </div>);
    }

    goBrugis = () => {
        goToPage('/', this.context.router);
    }

}

module.exports = connect((state) => ({
    mode: urlQuery.mobile || state.browser && state.browser.mobile ? 'mobile' : 'desktop',
    locale: state.locale && state.locale.current || "fr-FR"
}),
    {
        loadNews: () => {}
    })(BrugisInfo);
