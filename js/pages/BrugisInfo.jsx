const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');
const {Navbar, Grid, Nav, NavItem, Tabs, Tab, Image} = require('react-bootstrap');
import NavInfo from '../components/NavInfo';
import InfoDescription from '../components/InfoDescription';
import BrugisNews from "../components/BrugisNews";
import BrugisContact from "../components/BrugisContact";
const {goToPage} = require('../../MapStore2/web/client/actions/router');

import Parallax from 'react-springy-parallax';
import Animated from 'animated/lib/targets/react-dom';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;

// Little helpers ...
const burl = (name) => `url(../../assets/img/${name})`;
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>;
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>;
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>;
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>;
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>;
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>;

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
    renderNavBar = () => {
        return (<Navbar className="navbar shadow navbar-home">
        <Navbar.Brand href="#home">
        <img
            src="../../assets/img/brugis_logo.jpg"
            alt="Brugis"
        />
        </Navbar.Brand>
        <NavInfo />
        <Nav pullRight>
            <NavItem onClick={this.goBrugis.bind(this)}>Back to brugis</NavItem>
        </Nav>
    </Navbar>);
    }
    render() {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        };
        const handleOnDragStart = e => e.preventDefault();
        const items = this.galleryItems();
        return (<div>

                <Parallax ref="parallax" pages={3} scrolling={true}>

                <Parallax.Layer
                    offset={0} speed={0} factor={3}
                    style={{ backgroundImage: burl('stars.svg'), backgroundSize: 'cover' }}
                />
                <Parallax.Layer
                    offset={0} speed={0.001} factor={3}
                    style={{ backgroundImage: burl('BruGIS_Vintage_02.png'), backgroundSize: 'cover' }}
                />
                    <Parallax.Layer
                        offset={0} speed={1} factor={1}
                        style={{ backgroundImage: burl('brugis.png'), backgroundSize: 'cover' }}
                    />
                <Parallax.Layer
                    offset={0} speed={0.01} factor={3}
                    style={{ backgroundImage: burl('achtergrond_02.png'), backgroundSize: 'cover' }}
                    >
                </Parallax.Layer>

                    <Parallax.Layer
                        offset={0} speed={1} factor={1}
                        style={{ backgroundImage: burl('voorgrond.png'), backgroundSize: 'cover' }}
                        onClick={() => this.refs.parallax.scrollTo(1)}
                    />

                    <Parallax.Layer
                        offset={1}
                        speed={1}
                        style={styles}
                    >
                        <Grid style={{backgroundColor: 'white', height: '80%', color: 'black', width: '100%'}}>
                           <h2> News </h2>
                           <AliceCarousel items={items} responsive={this.responsive} />
                        </Grid>
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={2}
                        speed={0.5}
                        style={styles}
                        onClick={() => this.refs.parallax.scrollTo(0)}>
                        <Grid style={{backgroundColor: 'white', height: '400px', color: 'black'}}>
                           <h2> Contact </h2>
                        </Grid>
                    </Parallax.Layer>
                </Parallax>

     </div>);
    }

    static responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 }
    };

    galleryItems = () => {
        return (
          [1, 2, 3, 4, 5].map((item, i) => (
            <div key={`key-${i}`} style={{width: '200px'}}><h2>{item}</h2><img src="../../assets/img/urbis_color.PNG" /></div>
          ))
        );
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
