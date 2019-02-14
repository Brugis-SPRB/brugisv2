
const React = require('react');
const PropTypes = require('prop-types');
const ToolsContainer = require('../../../MapStore2/web/client/plugins/containers/ToolsContainer');

class MapHeader extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        items: PropTypes.array,
        id: PropTypes.string,
        mapType: PropTypes.string
    };

    static defaultProps = {
        items: [],
        className: "mapstore-map-header",
        style: {},
        id: "mapstore-map-header",
        mapType: "openlayers"
    };

    shouldComponentUpdate() {
        return false;
    }

    getPanels = () => {
        return this.props.items.filter((item) => item.tools).reduce((previous, current) => {
            return previous.concat(
                current.tools.map((tool, index) => ({
                    name: current.name + index,
                    panel: tool,
                    cfg: current.cfg.toolsCfg ? current.cfg.toolsCfg[index] : {}
                }))
            );
        }, []);

    };

    getTools = () => {
        return this.props.items.sort((a, b) => b.position - a.position);
    };

    render() {
        return (
            <ToolsContainer id={this.props.id}
                style={this.props.style}
                className={this.props.className}
                mapType={this.props.mapType}
                container={(props) => <div {...props}>{props.children}</div>}
                toolStyle="primary"
                activeStyle="default"
                stateSelector="mapHeader"
                tool={(props) => <div>{props.children}</div>}
                tools={this.getTools()}
                panels={this.getPanels()}/>
        );
    }
}

module.exports = {
    MapHeaderPlugin: MapHeader,
    reducers: {}
};
