
const React = require('react');
const MapInfoUtils = require('../../../MapStore2/web/client/utils/MapInfoUtils');
const FeatureInfoUtils = require('../../../MapStore2/web/client/utils/FeatureInfoUtils');
const HTML = require('../../../MapStore2/web/client/components/I18N/HTML');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');
const PropTypes = require('prop-types');
const {Alert, Panel, Accordion} = require('react-bootstrap');

const DefaultHeader = require('../../../MapStore2/web/client/components/data/identify/DefaultHeader');
const ViewerPage = require('./ViewerPage');

const mapInfoViewers = {
    [FeatureInfoUtils.INFO_FORMATS.JSON]: require('./JSONBruGISViewer'),
    [FeatureInfoUtils.INFO_FORMATS.HTML]: require('../../../MapStore2/web/client/components/data/identify/viewers/HTMLViewer'),
    [FeatureInfoUtils.INFO_FORMATS.TEXT]: require('../../../MapStore2/web/client/components/data/identify/viewers/TextViewer')
};

const DefaultViewer = React.createClass({
    propTypes: {
        format: PropTypes.string,
        collapsible: PropTypes.bool,
        requests: PropTypes.array,
        responses: PropTypes.array,
        missingResponses: PropTypes.number,
        container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        header: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        headerOptions: PropTypes.object,
        validator: PropTypes.func,
        viewers: PropTypes.object,
        style: PropTypes.object,
        containerProps: PropTypes.object,
        locale: PropTypes.string,
        point: PropTypes.object,
        onChangeDrawingStatus: PropTypes.func,
        onEndDrawing: PropTypes.func,
        onGeometryChanged: PropTypes.func
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
            point: {},
            onChangeDrawingStatus: () => {},
            onEndDrawing: () => {}
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
            return <Viewer response={response} locale={this.props.locale} onChangeDrawingStatus={this.props.onChangeDrawingStatus}/>;
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
                    <ViewerPage
                      response={response}
                      locale={this.props.locale}
                      layers={queryParams.layers}
                      format={(format && FeatureInfoUtils.INFO_FORMATS[format]) || this.props.format} viewers={this.props.viewers}
                      onChangeDrawingStatus={this.props.onChangeDrawingStatus}
                      onGeometryChanged={this.props.onGeometryChanged}
                       />
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

                    {this.renderPages(validResponses)}
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
