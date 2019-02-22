const React = require('react');
const PropTypes = require('prop-types');
const {Accordion, Panel, Row} = require('react-bootstrap');
const newsFR = require('../../news/brugisnews_fr-FR');
const newsNL = require('../../news/brugisnews_nl-NL');

class BrugisNews extends React.Component {
    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string,
        locale: PropTypes.string,
        contentTabStyle: PropTypes.string
    };

    static defaultProps = {
        name: 'Brugis',
        className: 'bg-news',
        contentTabStyle: {
            'min-height': '300px'
        }
    };

    renderNews() {
        let eventCounter = 1;
        let news = (this.props.locale === "fr-FR" || this.props.locale === "fr-BE") ? newsFR : newsNL;
        return news.news.map((newsItem) => {
            let dateEnd = Date.parse(newsItem.dateend);
            let dateStart = Date.parse(newsItem.datestart);
            let dateNow = new Date();
            if (dateStart <= dateNow && dateEnd >= dateNow) {
                return (
                    <Panel header={newsItem.title} eventKey={eventCounter++}>
                        {newsItem.message}
                    </Panel>
                );
            }
        });
    }

    render() {
        return (
                <Row>
                    <Accordion style={this.props.contentTabStyle}>
                        {this.renderNews()}
                    </Accordion>
                </Row>
        );
    }
}

module.exports = BrugisNews;
