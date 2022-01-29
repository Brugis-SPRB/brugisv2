const React = require('react');
const PropTypes = require('prop-types');
const {Panel, Row, Col, Grid, Image, Carousel, Button} = require('react-bootstrap');
const Message = require('../../MapStore2/web/client/components/I18N/Message');
const newsFR = require('../../news/brugisnews_fr-FR');
const newsNL = require('../../news/brugisnews_nl-NL');

class BrugisNews extends React.Component {
    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string,
        locale: PropTypes.string,
        contentTabStyle: PropTypes.string,
        showAllNews: PropTypes.bool
    };

    static contextTypes = {
        router: PropTypes.object,
        intl: PropTypes.object.isRequired
    };

    static defaultProps = {
        name: 'Brugis',
        className: 'bg-news',
        locale: 'en-EN',
        contentTabStyle: {
            'min-height': '300px'
        },
        showAllNews: false
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            showAllNews: this.props.showAllNews
        };
    }

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
                <span className="year">
                    {dateStart.toLocaleString(this.props.locale, { year: 'numeric'})}
                </span>
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
                <span className="year">
                    {dateStart.toLocaleString(this.props.locale, { year: 'numeric'})}
                </span>
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
        // const { showAllNews } = this.state;
        return news.news.reverse().map((newsItem) => {
            let dateEnd = new Date(Date.parse(newsItem.dateend));
            let dateStart = new Date(Date.parse(newsItem.datestart));
            let dateNow = new Date();
            let img = "https://picsum.photos/900/560";
            if (newsItem.img) {
                img = require('../../news/imgs/' + newsItem.img);
            }
            if (this.state.showAllNews || (dateStart <= dateNow && dateEnd >= dateNow)) {
                // console.log("this.props.showAllNews: " + this.props.showAllNews);
                return (
                   <Carousel.Item>
                    <Grid fluid style={{backgroundColor: 'white', height: '100%', color: '#8d8d8d'}}>
                        <Col md={6}>
                            <Image src={img} responsive />
                        </Col>
                        <Col md={6}>
                        <h2 >{newsItem.title}</h2>
                        <h4>{dateStart.toLocaleString(this.props.locale, { year: 'numeric', month: 'long', day: 'numeric'})}</h4>
                        <p style={{"padding": "10px", "lineHeight": '1em'}}>
                            {newsItem.message}
                        </p>
                        </Col>
                    </Grid>
                  </Carousel.Item>
                );
            }
        });
    }

    renderAllNewsButton() {
        const { showAllNews } = this.state;
        return (
            <Button id="renderallnews" onClick={this.toggleAllNews.bind(this)}>{showAllNews ? <Message msgId="brugisInfo.show_news" text={this.context.intl.formatMessage({id: 'brugisInfo.show_news'})}/> : <Message msgId="brugisInfo.show_archives" text={this.context.intl.formatMessage({id: 'brugisInfo.show_archives'})}/>}</Button>
        );
    }

    render() {
        return (
            <div>
            <Row>
                <Col md={12}>
                    <Carousel>
                        {this.renderCarouselItem()}
                    </Carousel>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={5} />
                    <Col md={2} className="text-center">
                    {this.renderAllNewsButton()}
                    </Col>
                <Col md={5} />
            </Row>
            </div>
        );
    }

    toggleAllNews() {
        // const { showAllNews } = this.state;
        this.setState({
            showAllNews: !(this.state.showAllNews)
        });
    }
}

module.exports = BrugisNews;
