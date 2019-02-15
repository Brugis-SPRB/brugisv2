const React = require('react');
const assign = require('object-assign');
const PropTypes = require('prop-types');
const {Glyphicon, Tooltip, Button} = require('react-bootstrap');

const {goToPage} = require('../../../MapStore2/web/client/actions/router');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');

class BrugisService extends React.Component {
    static propTypes = {
        icon: PropTypes.node
    };

    static contextTypes = {
        router: PropTypes.object,
        messages: PropTypes.object
    };

    static defaultProps = {
        icon: <Glyphicon glyph="home"/>
    };

    render() {
        let tooltip = <Tooltip id="toolbar-home-button">{<Message msgId="gohome"/>}</Tooltip>;
        return (
            <Button
                {...this.props}
                id="home-button"
                className="square-button"
                bsStyle="primary"
                onClick={this.goHome}
                tooltip={tooltip}
                >{this.props.icon}</Button>
        );
    }

    goHome = () => {
        goToPage('/infos', this.context.router);
    };
}

module.exports = {
    BrugisServicePlugin: assign(BrugisService, {
        Toolbar: {
            name: 'brugisservice',
            position: 1,
            tooltip: "brugisservice",
            icon: <Glyphicon glyph="home"/>,
            help: <Message msgId="helptexts.gohome"/>,
            action: (context) => goToPage('/infos', context.router),
            priority: 1
        },
        BurgerMenu: {
            name: 'brugisservice',
            position: 1,
            text: <Message msgId="gohome"/>,
            icon: <Glyphicon glyph="home"/>,
            action: (context) => goToPage('/infos', context.router),
            priority: 2
        },
        OmniBar: {
            name: 'brugisservice',
            position: 4,
            tool: true,
            action: (context) => goToPage('/infos', context.router),
            priority: 3
        }
    }),
    reducers: {}
};
