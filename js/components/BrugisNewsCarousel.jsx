const React = require('react');
const PropTypes = require('prop-types');
const {Panel, Row, Col, Grid, Image, Carousel} = require('react-bootstrap');
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
        locale: 'en-EN',
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

    renderSimpleDate(dateStart) {
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

    renderCarouselItem() {
        let news = (this.props.locale === "fr-FR" || this.props.locale === "fr-BE") ? newsFR : newsNL;
        // console.log(this.props.locale);
        return news.news.map((newsItem) => {
            let dateEnd = new Date(Date.parse(newsItem.dateend));
            let dateStart = new Date(Date.parse(newsItem.datestart));
            let dateNow = new Date();
            if (dateStart <= dateNow && dateEnd >= dateNow) {
                return (
                   <Carousel.Item>
                    <Grid fluid style={{backgroundColor: 'white', height: '100%', color: '#8d8d8d'}}>
                        <Col md={6}>
                            <Image src="https://picsum.photos/900/560" responsive />
                        </Col>
                        <Col md={6} >
                        <h2 >{newsItem.title}</h2>
                        <h4>{dateStart.toLocaleString(this.props.locale, { month: 'long', day: 'numeric'})}</h4>
                        <p style={{"padding": "10px", "lineHeight": '1em', }}>
                            {newsItem.message}
                        </p>
                        </Col>
                    </Grid>
                  </Carousel.Item>
                );
            }
        });
    }

    render() {
        return (
            <Row>
                <Carousel>
                    {this.renderCarouselItem()}
                </Carousel>
            </Row>
        );
    }
}

module.exports = BrugisNews;
