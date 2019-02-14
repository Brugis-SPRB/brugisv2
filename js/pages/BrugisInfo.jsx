const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');
const {Navbar} = require('react-bootstrap');
const NavInfo = require('../components/NavInfo');
const InfoDescription = require('../components/InfoDescription');
const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;

class BrugisInfo extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        mode: PropTypes.string,
        match: PropTypes.object,
        loadNews: PropTypes.func
    };

    static defaultProps = {
        name: "brugis",
        mode: 'desktop',
        loadNews: () => {}
    };

    componentWillMount() {
        if (this.props.match.params.mapType && this.props.match.params.mapId) {
            if (this.props.mode === 'mobile') {
                require('../assets/css/mobile.css');
            }
            this.props.loadNews();
        }
    }

    render() {
        return (<div>
            <Navbar className="navbar shadow navbar-home">
              <Navbar.Brand href="#home">
              <img
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Brugis"
              />
             </Navbar.Brand>
             <NavInfo />

            </Navbar>
            <InfoDescription />
     </div>);
    }
}

module.exports = connect((state) => ({
    mode: urlQuery.mobile || state.browser && state.browser.mobile ? 'mobile' : 'desktop'
}),
    {
        loadNews: () => {}
    })(BrugisInfo);
