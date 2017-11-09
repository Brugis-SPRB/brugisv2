

const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');

const Message = require('../../../MapStore2/web/client/plugins/locale/Message');

const {toggleControl, setControlProperty} = require('../../../MapStore2/web/client/actions/controls');

const {changeMapStyle} = require('../../../MapStore2/web/client/actions/map');

const {Panel} = require('react-bootstrap');

const Section = require('./Section');

const {partialRight} = require('lodash');

const Menu = connect((state) => ({
    show: true, // state.controls.drawer && state.controls.drawer.enabled,
    activeKey: state.controls.drawer && state.controls.drawer.menu
}), {
    onToggle: toggleControl.bind(null, 'brugismenu', null),
    onChoose: partialRight(setControlProperty.bind(null, 'drawer', 'menu'), true),
    changeMapStyle: changeMapStyle
})(require('./Menu'));

require('./drawer.css');

const DrawerMenu = React.createClass({
    propTypes: {
        items: PropTypes.array,
        active: PropTypes.string,
        toggleMenu: PropTypes.func,
        id: PropTypes.string,
        glyph: PropTypes.string,
        buttonStyle: PropTypes.string,
        menuOptions: PropTypes.object,
        singleSection: PropTypes.bool,
        buttonClassName: PropTypes.string,
        menuButtonStyle: PropTypes.object
    },
    contextTypes: {
        messages: PropTypes.object,
        router: PropTypes.object
    },
    getDefaultProps() {
        return {
            id: "brugismenu",
            items: [],
            toggleMenu: () => {},
            glyph: "menu-hamburger",
            buttonStyle: "default",
            menuOptions: {},
            singleSection: false,
            buttonClassName: "drawer-menu-button"
        };
    },
    renderItems() {
        return this.props.items.map((tool, index) => {
            const Plugin = tool.panel || tool.plugin;
            const plugin = (<Plugin
                isPanel="true"
                {...tool.cfg}
                items={tool.items || []}
                groupStyle={{style: {
                    marginBottom: "0px",
                    cursor: "pointer"
                }}}
                />);
            return this.props.singleSection ? (
                <Panel icon={tool.icon} glyph={tool.glyph} buttonConfig={tool.buttonConfig} key={tool.name} header={<Message msgId={tool.title}/>} eventKey={(index + 1) + ""}>
                    {plugin}
                </Panel>
            ) : (<Section key={tool.name} renderInModal={tool.renderInModal || false} eventKey={(index + 1) + ""} header={<Message msgId={tool.title} />}>
                {plugin}
            </Section>);
        });
    },
    render() {
        return (
            <div id={this.props.id}>
                <Menu single={this.props.singleSection} {...this.props.menuOptions} title={<Message msgId="menu" show="true"/>} alignment="left">
                    {this.renderItems()}
                </Menu>
            </div>
        );
    }
});

module.exports = {
    BrugisMenuPlugin: connect((state) => ({
        active: state.controls && state.controls.brugismenu && state.controls.brugismenu.active
    }), {
        toggleMenu: toggleControl.bind(null, 'brugismenu', null)
    })(DrawerMenu),
    reducers: {}
};
