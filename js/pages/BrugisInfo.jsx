const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');
const {Grid, Image} = require('react-bootstrap');
const {goToPage} = require('../../MapStore2/web/client/actions/router');
const Message = require('../../MapStore2/web/client/components/I18N/Message');

import BrugisNews from "../components/BrugisNewsCarousel";
import InfoDescription from "../components/InfoDescription";
import Parallax from '../components/Parallax';
import Animated from 'animated/lib/targets/react-dom';
// import from 'animated/lib/Easing';
import BrugisContact from '../components/BrugisContact';
// import BrugisTitle from '../components/BrugisTitle';

import BrugisLogo from '../../assets/img/Brugis_envecto_nondidju_500px.svg';
import toTopArrow from '../components/img/noun_Arrow_2333167.svg';

const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;

// Little helpers ...
// const burl = (name) => `url(../../../brugis/assets/img/${name})`;

import BrugisBackground from '../../assets/img/BruGIS_Vintage_2000_corr.jpg';
import Brugis2000 from '../../assets/img/brugis_2000.png';
import AchterGrond2000 from '../../assets/img/achtergrond_2000_4164.png';
import VoorGrond2000 from '../../assets/img/voorgrond_2000.png';

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
        router: PropTypes.object,
        intl: PropTypes.object.isRequired
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
                          <div onClick={this.goBrugis.bind(this)} title={this.context.intl.formatMessage({id: 'brugisInfo.main_go_back_to_brugis'})} style={{ flexGrow: 1}}>
                             <div style={{
                                height: '52px',
                                width: '52px',
                                padding: '5px',
                                backgroundColor: '#345d6f',
                                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.24)'
                              }} id="bibIllBeBack">
                                <Image src={BrugisLogo} responsive/>
                             </div>
                          </div>
                          <div style={{ flexGrow: 3}} />

                          <div style={{
                                flexGrow: 5,
                                display: 'inline-flex',
                                justifyContent: 'space-between',
                                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.24)',
                                lineHeight: '52px',
                                fontFamily: 'Montserrat, sans-serif'
                           }}>
                            <div onClick={() => this.refs.parallax.scrollTo(0)} title={this.context.intl.formatMessage({id: 'brugisInfo.main_news_tooltip'})} id="bibNews"><Message msgId="brugisInfo.main_news"/></div>
                            <div onClick={() => this.refs.parallax.scrollTo(1)} title={this.context.intl.formatMessage({id: 'brugisInfo.main_webservices_tooltip'})} id="bibWS"><Message msgId="brugisInfo.main_webservices"/></div>
                            <div onClick={() => this.refs.parallax.scrollTo(2)} title={this.context.intl.formatMessage({id: 'brugisInfo.main_contact_tooltip'})} id="bibContact"><Message msgId="brugisInfo.main_contact"/></div>
                          </div>

                          <div style={{ flexGrow: 3}} />
                          <div onClick={() => this.refs.parallax.scrollTo(0)} title={this.context.intl.formatMessage({id: 'brugisInfo.main_go_back_to_top_tooltip'})} style={{ flexGrow: 1}}>
                            <div id="bibTop" style={{
                                backgroundColor: '#a2c6d7',
                                'float': 'right',
                                width: '52px',
                                height: '52px',
                                fontSize: '2.1em',
                                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.24)'
                            }}>
                                <Image src={toTopArrow} responsive/>

                            </div>
                          </div>
                    </div>
               </div>
               <Parallax
                  ref="parallax"
                  pages={3}
                  style={{backgroundImage: "url(" + BrugisBackground + ")", backgroundSize: 'cover'}}
                  effect={(animation, toValue) =>
                     Animated.timing(animation, { toValue, duration: 650})}
                  >
                    <Parallax.Layer
                        offset={2} speed={1} factor={1}
                        style={{backgroundImage: "url(" + Brugis2000 + ")", backgroundSize: 'contain'}}
                        effect={(animation, toValue) =>
                           Animated.timing(animation, { toValue, duration: 650})}
                    />
                    <Parallax.Layer
                        offset={0} speed={0} factor={4}
                        style={{backgroundImage: "url(" + AchterGrond2000 + ")", backgroundSize: 'cover'}}
                        effect={(animation, toValue) =>
                           Animated.timing(animation, { toValue, duration: 650})}
                    />
                    <Parallax.Layer
                        offset={2} speed={1} factor={1}
                        style={{backgroundImage: "url(" + VoorGrond2000 + ")", backgroundSize: 'contain'}}
                        effect={(animation, toValue) =>
                           Animated.timing(animation, { toValue, duration: 650})}
                    />

                    <Parallax.Layer
                        id="brugisInfoNews"
                        offset={0.05}
                        speed={1}
                        style={styles}
                        effect={(animation, toValue) =>
                           Animated.timing(animation, { toValue, duration: 650})}>
                        <Grid fluid style={{ color: 'black', width: '100%', backgroundColor: 'white', height: '60%'}}>
                            <BrugisNews locale={this.props.locale} />
                        </Grid>
                    </Parallax.Layer>
                    <Parallax.Layer
                        id="brugisInfoServices"
                        offset={1.02}
                        speed={1}
                        style={styles}
                        effect={(animation, toValue) =>
                           Animated.timing(animation, { toValue, duration: 650})}>
                        <InfoDescription scrollToContact={() => {this.refs.parallax.scrollTo(2); }}/>
                    </Parallax.Layer>
                    <Parallax.Layer
                        id="brugisInfoContact"
                        offset={2.15}
                        speed={1}
                        style={styles}
                        effect={(animation, toValue) =>
                           Animated.timing(animation, { toValue, duration: 650})}>
                        <BrugisContact />
                  </Parallax.Layer>
              </Parallax>

          </div>);
    }

    goBrugis = () => {
        goToPage('/', this.context.router);
    }

    scrollToContact() {
        this.refs.parallax.scrollTo(2);
    }
}

module.exports = connect((state) => ({
    mode: urlQuery.mobile || state.browser && state.browser.mobile ? 'mobile' : 'desktop',
    locale: state.locale && state.locale.current || "fr-FR"
}),
    {
        loadNews: () => {}
    })(BrugisInfo);
