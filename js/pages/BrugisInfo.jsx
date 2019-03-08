const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');
const {Navbar, Grid, Nav, NavItem, Tabs, Tab} = require('react-bootstrap');
import NavInfo from '../components/NavInfo';
import InfoDescription from '../components/InfoDescription';
import BrugisNews from "../components/BrugisNews";
import BrugisContact from "../components/BrugisContact";
const {goToPage} = require('../../MapStore2/web/client/actions/router');
import { Parallax, Background } from 'react-parallax';

const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;

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
        return (<div>
            <Navbar className="navbar shadow navbar-home">
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
            </Navbar>
                <InfoDescription />
                {/* -----basic config-----*/}

                <Parallax
                    strength={400}
                    bgImage="http://www.fillmurray.com/500/320"
                >
                    <Grid>
                        <h2 id="newsId">News</h2>
                        <BrugisNews locale={this.props.locale} />
                        <div style={{ height: '300px' }} />
                    </Grid>
                </Parallax>

                <Parallax
                    bgImage="https://imagesvc.timeincapp.com/v3/fan/image?url=https://winteriscoming.net/wp-content/blogs.dir/385/files/2017/07/white-walker-closeup.jpg&c=sc&w=1366&h=768"
                    bgImageAlt="the cat"
                    strength={200}
                >
                    <Grid>
                        <h2 id="contentId">Content</h2>
                        <Tabs defaultActiveKey={2} id="content-tab" style={this.props.contentTabStyle} >
                            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                            <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
                        </Tabs>
                        <div style={{ height: '300px' }} />
                    </Grid>
                </Parallax>

                <Parallax
                    blur={10}
                    bgImage="http://www.fillmurray.com/500/320"
                    bgImageAlt="the cat"
                    strength={200}
                >
                    <Grid>
                        <h2 id="contactId">Contact</h2>
                        <BrugisContact />
                        <div style={{ height: '200px' }} />
                    </Grid>
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
