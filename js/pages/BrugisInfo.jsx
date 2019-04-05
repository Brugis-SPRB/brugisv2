const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');
const {Navbar, Grid, Nav, NavItem, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button, Row} = require('react-bootstrap');
import NavInfo from '../components/NavInfo';

import BrugisNews from "../components/BrugisNewsCarousel";

const {goToPage} = require('../../MapStore2/web/client/actions/router');

import Parallax from '../components/Parallax';


import 'react-multi-carousel/lib/styles.css';

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
        return (<Navbar className="navbar shadow navbar-home" sticky="top">
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
        
        const multipleBackground = burl('BruGIS_Vintage_2000.jpg');

        return (<div>
               
               <Parallax ref="parallax" pages={4} scrolling={true} style={{'background-image': multipleBackground}}>

                    <Parallax.Layer
                        offset={0} speed={1} factor={1}
                        style={{ backgroundImage: burl('brugis_2000.png'), backgroundSize: 'contain' }}
                    />
                               <Parallax.Layer
                    offset={0} speed={0} factor={4}
                    style={{ backgroundImage: burl('achtergrond_2000_4164.png'), backgroundSize: 'cover' }}
                    >
                    
                </Parallax.Layer> 
                    <Parallax.Layer
                        offset={0} speed={1} factor={1}
                        style={{ backgroundImage: burl('voorgrond_2000.png'), backgroundSize: 'contain' }}
                        onClick={() => this.refs.parallax.scrollTo(1)}
                    />

                <Parallax.Layer offset={0} speed={0} factor={1}>
                    <Grid style={{backgroundColor: 'white'}}>
                        <Nav justified bsStyle="pills">
                            <NavItem onClick={() => this.refs.parallax.scrollTo(1) }>
                                    News
                            </NavItem>
                            <NavItem onClick={() => this.refs.parallax.scrollTo(2) }>
                                    Webservices
                            </NavItem>
                            <NavItem onClick={() => this.refs.parallax.scrollTo(3) }>
                                    Contact
                            </NavItem>
                        </Nav>
                    </Grid>        
                </Parallax.Layer>

                    <Parallax.Layer
                        offset={1}
                        speed={1}
                        style={styles}
                    >
                        <Grid fluid style={{ color: 'black', width: '100%', backgroundColor: 'white', height: '60%'}}>
                            <BrugisNews />
                        </Grid>
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={2}
                        speed={1}
                        style={styles}
                    >
                        <Grid style={{ color: 'black', width: '100%', backgroundColor: 'white', height: '60%'}}>
                            <Row>
                                <Col md={12}>
                                    <p>
                                            The BruGIS® service presents all recent urban development data available in the Brussels Capital Region for engine the use of the zones surrounding yours, the areas of archaeological potential, the classified sites, …<br/>

                                            The webservices for INSPIRE data : <br/>
                                            <ul>
                                                <li>WMS : http://ws.brugis.irisnet.be/geoserver/INSPIREEN/ows?service=WMS&version=1.1.1&request=GetCapabilities</li>
                                                <li>WFS : http://ws.brugis.irisnet.be/geoserver/INSPIREEN/ows?service=WFS&version=1.0.0&request=GetCapabilities</li>
                                            </ul>
                                            The webservices for non-INSPIRE data : <br/>
                                            <ul>
                                                <li>WMS :http://www.mybrugis.irisnet.be/geoserver/ows?</li>
                                            </ul>
                                        </p>
                                </Col>
                           </Row>

                        </Grid>
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={3}
                        speed={1}
                        style={styles}
                        onClick={() => this.refs.parallax.scrollTo(0)}>
                        <Grid style={{ height: '60%', color: 'black', width: '100%', backgroundColor: 'white'}}>
                           <h2>Contact</h2>
                           <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" placeholder="Email" />
                            </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                            </Col>
                            <Col sm={10}>
                                <FormControl type="password" placeholder="Password" />
                            </Col>
                            </FormGroup>

                            <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Checkbox>Remember me</Checkbox>
                            </Col>
                            </FormGroup>

                            <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit">
                                Sign in
                                </Button>
                            </Col>
                            </FormGroup>
                        </Form>
                        </Grid>
                    </Parallax.Layer>
                </Parallax>

     </div>);
    }

    static responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    galleryItems = () => {
        return (
          [1, 2, 3, 4, 5].map((item, i) => (
            <div key={`key-${i}`}><h2>{item}</h2><img src="../../assets/img/urbis_color.PNG" /></div>
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
