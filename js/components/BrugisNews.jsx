const React = require('react');
const PropTypes = require('prop-types');
const {Panel, Row, ListGroup, ListGroupItem, Col, Grid, Image} = require('react-bootstrap');
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
        //let eventCounter = 1;
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

    renderDate(dateStart) {
        return (
            <span className="newsdate">
                <span className="month">
                    {dateStart.toLocaleString(this.props.locale, { month: 'long'})}
                </span>
                <span className="day">
                    {dateStart.toLocaleString(this.props.locale, { day: 'numeric'})}
                </span>
            </span>
        );
    }

    renderNewsGroupItem() {
        let eventCounter = 1;
        let news = (this.props.locale === "fr-FR" || this.props.locale === "fr-BE") ? newsFR : newsNL;
        return news.news.map((newsItem) => {
            let dateEnd = new Date(Date.parse(newsItem.dateend));
            let dateStart = new Date(Date.parse(newsItem.datestart));
            let dateNow = new Date();
            if (dateStart <= dateNow && dateEnd >= dateNow) {
                return (
                    <ListGroupItem>
                        <Grid fluid>
                            <Col xs={6} md={2}>
                                <Image src="https://picsum.photos/300/200" responsive/>
                            </Col>
                            <Col xs={1} md={1}>
                                {this.renderDate(dateStart)}
                            </Col>
                            <Col xs={5} md={9}>
                                <h3 style={{"margin-top": "0px"}}>{newsItem.title}</h3>
                                <p style={{"padding": "10px"}}>
                                    {newsItem.message}
                                </p>
                            </Col>
                        </Grid>
                    </ListGroupItem>
                );
            }
        });
    }

    render() {
        return (
                <Row>
                    <ListGroup fill>
                        {this.renderNewsGroupItem()}
                    </ListGroup>
                </Row>
        );
    }
}

module.exports = BrugisNews;
