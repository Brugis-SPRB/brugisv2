const React = require('react');
const assign = require('object-assign');
const PropTypes = require('prop-types');
const {Glyphicon, Tooltip, Button, Badge} = require('react-bootstrap');

const {goToPage} = require('../../../MapStore2/web/client/actions/router');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');

const BRUGIS_NEWS_LOCAL_STORAGE_KEY = "brugis.persist.newstime";

const brugisNews = require('../../../news/brugisnews_fr-FR');

class BrugisService extends React.Component {
    static propTypes = {
        icon: PropTypes.node
    };

    static contextTypes = {
        router: PropTypes.object,
        messages: PropTypes.object
    };

    static defaultProps = {
        icon: <Glyphicon glyph="volume-down"/>
    };

    getNewsCount() {
        let newsDate = Date.parse(localStorage.getItem(BRUGIS_NEWS_LOCAL_STORAGE_KEY) || "2019-01-01");
        let nowDate = new Date();
        var newsCpt = 0;
        brugisNews.news.forEach((newsItem) => {
            let startDate = Date.parse(newsItem.datestart);
            let endDate = Date.parse(newsItem.dateend);
            if (startDate <= nowDate && startDate >= newsDate && endDate >= nowDate) {
                newsCpt += 1;
            }
        });
        return newsCpt;
    }

    render() {
        let tooltip = <Tooltip id="toolbar-home-button">{<Message msgId="gohome"/>}</Tooltip>;
        return (
            <Button
                {...this.props}
                id="home-button"
                className="square-button"
                bsStyle="primary"
                onClick={this.goNews}
                tooltip={tooltip}
                >{this.props.icon}
                { this.getNewsCount() > 0 ? <Badge pill bsStyle="light" className="brugisnewsBadge">{this.getNewsCount()}</Badge> : "" }
            </Button>
        );
    }

    goNews = () => {
        this.updateNewsViewingTime();

        window.gtag('config', 'UA-21637975-6', {
            'page_title': 'BrugisInfo',
            'page_path': '/infos'
        });

        goToPage('/infos', this.context.router);
    }

    updateNewsViewingTime() {
        localStorage.setItem(BRUGIS_NEWS_LOCAL_STORAGE_KEY, new Date().toISOString());
    }

}

module.exports = {
    BrugisServicePlugin: assign(BrugisService, {
        Toolbar: {
            name: 'brugisservice',
            position: 1,
            tooltip: "brugisservice",
            icon: <Glyphicon glyph="volume-down"/>,
            help: <Message msgId="helptexts.gohome"/>,
            action: (context) => goToPage('/infos', context.router),
            priority: 1
        },
        BurgerMenu: {
            name: 'brugisservice',
            position: 1,
            text: <Message msgId="gohome"/>,
            icon: <Glyphicon glyph="volume-down"/>,
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
