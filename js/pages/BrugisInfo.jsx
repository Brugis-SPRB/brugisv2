const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');
const {Navbar, Grid, Nav, NavItem, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button, Row} = require('react-bootstrap');
const {goToPage} = require('../../MapStore2/web/client/actions/router');

import NavInfo from '../components/NavInfo';
import BrugisNews from "../components/BrugisNewsCarousel";
import InfoDescription from "../components/InfoDescription";
import Parallax from '../components/Parallax';
import BrugisContact from '../components/BrugisContact';
import 'react-multi-carousel/lib/styles.css';

const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;

// Little helpers ...
const burl = (name) => `url(../../assets/img/${name})`;

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
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        };

        const multipleBackground = burl('BruGIS_Vintage_2000_corr.jpg');

        return (<div>
                <div id="shadowBox">
                    <div className="d-flex">
                          <div className="flex-fill" onClick={this.goBrugis.bind(this)} title="Go back to BruGIS" id="bibIllBeBack">BruGIS</div>
                          <div className="flex-fill d-none d-lg-block" onClick={() => this.refs.parallax.scrollTo(1)} title="Go to BruGIS News" id="bibNews">News</div>
                          <div className="flex-fill d-none d-lg-block" onClick={() => this.refs.parallax.scrollTo(2)} title="Go to BruGIS Webservices" id="bibWS">Webservices</div>
                          <div className="flex-fill d-none d-lg-block" onClick={() => this.refs.parallax.scrollTo(3)} title="Go to Contact BruGIS" id="bibContact">Contact</div>
                          <div className="flex-fill" onClick={() => this.refs.parallax.scrollTo(0)} title="Go back to top" id="bibTop">Top</div>
                    </div>
               </div>
               <Parallax
                  ref="parallax"
                  pages={4}
                  style={{'backgroundImage': multipleBackground, backgroundSize: 'cover'}}
                  >
                    <Parallax.Layer
                        offset={0} speed={1} factor={1}
                        style={{ backgroundImage: burl('brugis_2000.png'), backgroundSize: 'contain' }}
                    />
                    <Parallax.Layer
                        offset={0} speed={0} factor={4}
                        style={{ backgroundImage: burl('achtergrond_2000_4164.png'), backgroundSize: 'cover' }}
                    />
                    <Parallax.Layer
                        offset={0} speed={1} factor={1}
                        style={{ backgroundImage: burl('voorgrond_2000.png'), backgroundSize: 'contain' }}
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
