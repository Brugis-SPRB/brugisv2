
const React = require('react');
const MapInfoUtils = require('../../../MapStore2/web/client/utils/MapInfoUtils');
const FeatureInfoUtils = require('../../../MapStore2/web/client/utils/FeatureInfoUtils');
const HTML = require('../../../MapStore2/web/client/components/I18N/HTML');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');

const {Alert, Panel, Accordion, Tabs, Tab} = require('react-bootstrap');

const DefaultHeader = require('../../../MapStore2/web/client/components/data/identify/DefaultHeader');
const ViewerPage = require('./ViewerPage');
const BrugisStreetView = require('./BrugisStreetView');

const mapInfoViewers = {
    [FeatureInfoUtils.INFO_FORMATS.JSON]: require('./JSONBruGISViewer'),
    [FeatureInfoUtils.INFO_FORMATS.HTML]: require('../../../MapStore2/web/client/components/data/identify/viewers/HTMLViewer'),
    [FeatureInfoUtils.INFO_FORMATS.TEXT]: require('../../../MapStore2/web/client/components/data/identify/viewers/TextViewer')
};

const DefaultViewer = React.createClass({
    propTypes: {
        format: React.PropTypes.string,
        collapsible: React.PropTypes.bool,
        requests: React.PropTypes.array,
        responses: React.PropTypes.array,
        missingResponses: React.PropTypes.number,
        container: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.func]),
        header: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.func]),
        headerOptions: React.PropTypes.object,
        validator: React.PropTypes.func,
        viewers: React.PropTypes.object,
        style: React.PropTypes.object,
        containerProps: React.PropTypes.object,
        locale: React.PropTypes.string,
        point: React.PropTypes.object
    },
    getInitialState() {
        return {
            index: 0,
            tabkey: 1
        };
    },
    getDefaultProps() {
        return {
            format: MapInfoUtils.getDefaultInfoFormatValue(),
            responses: [],
            missingResponses: 0,
            collapsible: false,
            header: DefaultHeader,
            headerOptions: {},
            container: Accordion,
            validator: MapInfoUtils.getValidator,
            viewers: mapInfoViewers,
            style: {
                maxHeight: "500px",
                position: "relative",
                marginBottom: 0
            },
            containerProps: {},
            locale: "FR",
            point: {}
        };
    },
    componentWillReceiveProps(nextProps) {
        // reset current page on new requests set
        if (nextProps.requests !== this.props.requests) {
            this.setState({index: 0});
        }
    },
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.responses !== this.props.responses || nextProps.missingResponses !== this.props.missingResponses || nextState.index !== this.state.index;
    },
    renderEmptyLayers(validator) {
        const notEmptyResponses = validator.getValidResponses(this.props.responses).length;
        const invalidResponses = validator.getNoValidResponses(this.props.responses);
        if (this.props.missingResponses === 0 && notEmptyResponses === 0) {
            return null;
        }
        if (invalidResponses.length !== 0) {
            const titles = invalidResponses.map((res) => {
                const {layerMetadata} = res;
                return layerMetadata.title;
            });
            return (
                <Alert bsStyle={"info"}>
                    <Message msgId={"noInfoForLayers"} />
                    <b>{titles.join(', ')}</b>
                </Alert>
            );
        }
        return null;
    },
    renderPage(response) {
        const Viewer = this.props.viewers[this.props.format];
        if (Viewer) {
            return <Viewer response={response} locale={this.props.locale}/>;
        }
        return null;
    },
    renderPages(responses) {
        if (this.props.missingResponses === 0 && responses.length === 0) {
            return (
                <Alert bsStyle={"danger"}>
                    <h4><HTML msgId="noFeatureInfo"/></h4>
                </Alert>
            );
        }
        return responses.map((res, i) => {
            const {response, layerMetadata, format, queryParams} = res;
            const PageHeader = this.props.header;
            return (
                <Panel
                    eventKey={i}
                    key={i}
                    collapsible={this.props.collapsible}
                    header={<span><PageHeader
                        size={responses.length}
                        {...this.props.headerOptions}
                        {...layerMetadata}
                        index={this.state.index}
                        onNext={() => this.next()}
                        onPrevious={() => this.previous()}/></span>
                    }
                    style={this.props.style}>
                    <ViewerPage response={response} locale={this.props.locale} layers={queryParams.layers} format={(format && FeatureInfoUtils.INFO_FORMATS[format]) || this.props.format} viewers={this.props.viewers} />
                </Panel>
            );
        });
    },
    renderAdditionalInfo() {
        const validator = this.props.validator(this.props.format);
        if (validator) {
            return this.renderEmptyLayers(validator);
        }
    },
    render() {
        const Container = this.props.container;
        const validator = this.props.validator(this.props.format);
        const validResponses = validator.getValidResponses(this.props.responses);
        return (<div>
                <Container {...this.props.containerProps}
                    onChangeIndex={(index) => {this.setState({index}); }}
                    ref="container"
                    index={this.state.index || 0}
                    key={"swiper"}
                    className="swipeable-view"
                    >
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                      <Tab eventKey={1} title="Info">{this.renderPages(validResponses)}</Tab>
                      <Tab eventKey={2} title="StreeView">
                        <BrugisStreetView lat={this.props.point.latlng.lat} lng={this.props.point.latlng.lng}/>
                      </Tab>
                    </Tabs>
                </Container>
                {this.renderAdditionalInfo()}
            </div>
        );
    },
    next() {
        this.setState({index: Math.min(this.props.validator(this.props.format).getValidResponses(this.props.responses).length - 1, this.state.index + 1)});
    },
    previous() {
        this.setState({index: Math.max(0, this.state.index - 1) });
    }
});

module.exports = DefaultViewer;
