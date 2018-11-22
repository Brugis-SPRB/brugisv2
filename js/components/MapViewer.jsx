const PropTypes = require('prop-types');

const React = require('react');

const {connect} = require('react-redux');

const url = require('url');
const urlQuery = url.parse(window.location.href, true).query;

const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');
const PluginsUtils = require('../../MapStore2/web/client/utils/PluginsUtils');

const PluginsContainer = connect((state) => ({
  pluginsConfig: state.plugins || ConfigUtils.getConfigProp('plugins') || null,
  mode: urlQuery.mode || state.mode || (state.browser && state.browser.mobile ? 'mobile' : 'desktop'),
  pluginsState: state && state.controls || {},
  monitoredState: PluginsUtils.getMonitoredState(state, ConfigUtils.getConfigProp('monitorState'))
}))(require('../../MapStore2/web/client/components/plugins/PluginsContainer'));

class MapViewer extends React.Component {
    static propTypes = {
        params: PropTypes.object,
        loadMapConfig: PropTypes.func,
        locale: PropTypes.string,
        plugins: PropTypes.object
    };

    static defaultProps = {
        mode: 'desktop',
        locale: 'fr',
        loadMapConfig: () => {}
    };

    componentWillMount() {
        let simplifiedLocale = this.props.locale.slice(0, 2);
        if (urlQuery.customConfig) {
            this.props.loadMapConfig("maps/" + urlQuery.customConfig + ".json", false);
        } else {
            this.props.loadMapConfig("config-" + simplifiedLocale + ".json", false);
        }
    }

    render() {
        return (<PluginsContainer key="viewer" id="viewer" className="viewer"
            plugins={this.props.plugins}
            params={this.props.params}
            />);
    }
}

module.exports = MapViewer;
