/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Panel, Glyphicon, Modal} = require('react-bootstrap');
const {findIndex} = require('lodash');

require('../../../MapStore2/web/client/plugins/identify/identify.css');
const PropTypes = require('prop-types');
const Draggable = require('react-draggable');

const MapInfoUtils = require('../../../MapStore2/web/client/utils/MapInfoUtils');
const Spinner = require('../../../MapStore2/web/client/components/misc/spinners/BasicSpinner/BasicSpinner');
const Message = require('../../../MapStore2/web/client/components/I18N/Message');
const DefaultViewer = require('./BrugisViewer');
const Dialog = require('../../../MapStore2/web/client/components/misc/Dialog');

class Identify extends React.Component {
    static propTypes = {
        enabled: PropTypes.bool,
        draggable: PropTypes.bool,
        collapsible: PropTypes.bool,
        style: PropTypes.object,
        point: PropTypes.object,
        format: PropTypes.string,
        map: PropTypes.object,
        layers: PropTypes.array,
        buffer: PropTypes.number,
        requests: PropTypes.array,
        responses: PropTypes.array,
        viewerOptions: PropTypes.object,
        viewer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        purgeResults: PropTypes.func,
        noQueryableLayers: PropTypes.func,
        clearWarning: PropTypes.func,
        queryableLayersFilter: PropTypes.func,
        buildRequest: PropTypes.func,
        sendRequest: PropTypes.func,
        localRequest: PropTypes.func,
        showMarker: PropTypes.func,
        hideMarker: PropTypes.func,
        changeMousePointer: PropTypes.func,
        maxItems: PropTypes.number,
        excludeParams: PropTypes.array,
        includeOptions: PropTypes.array,
        showRevGeocode: PropTypes.func,
        hideRevGeocode: PropTypes.func,
        showModalReverse: PropTypes.bool,
        reverseGeocodeData: PropTypes.object,
        enableRevGeocode: PropTypes.bool,
        wrapRevGeocode: PropTypes.bool,
        panelClassName: PropTypes.string,
        headerClassName: PropTypes.string,
        bodyClassName: PropTypes.string,
        asPanel: PropTypes.bool,
        headerGlyph: PropTypes.string,
        closeGlyph: PropTypes.string,
        allowMultiselection: PropTypes.bool,
        warning: PropTypes.string,
        locale: PropTypes.string,
        onChangeDrawingStatus: PropTypes.func,
        onEndDrawing: PropTypes.func,
        onGeometryChanged: PropTypes.func
    };

    static defaultProps = {
            enabled: false,
            draggable: true,
            collapsible: false,
            format: MapInfoUtils.getDefaultInfoFormatValue(),
            requests: [],
            responses: [],
            buffer: 2,
            viewerOptions: {},
            viewer: DefaultViewer,
            purgeResults: () => {},
            buildRequest: MapInfoUtils.buildIdentifyRequest,
            localRequest: () => {},
            sendRequest: () => {},
            showMarker: () => {},
            hideMarker: () => {},
            noQueryableLayers: () => {},
            clearWarning: () => {},
            changeMousePointer: () => {},
            showRevGeocode: () => {},
            hideRevGeocode: () => {},
            containerProps: {
                continuous: false
            },
            showModalReverse: false,
            reverseGeocodeData: {},
            enableRevGeocode: true,
            wrapRevGeocode: false,
            queryableLayersFilter: MapInfoUtils.defaultQueryableFilter,
            style: {
                position: "absolute",
                maxWidth: "700px",
                top: "56px",
                left: "45px",
                zIndex: 1023,
                boxShadow: "2px 2px 4px #A7A7A7"
            },
            point: {},
            map: {},
            layers: [],
            maxItems: 10,
            excludeParams: ["SLD_BODY"],
            includeOptions: [
                "buffer",
                "cql_filter",
                "filter",
                "propertyName",
                "info_format"
            ],
            panelClassName: "modal-dialog info-panel modal-content",
            headerClassName: "modal-header",
            bodyClassName: "modal-body info-wrap",
            asPanel: false,
            headerGlyph: "",
            closeGlyph: "1-close",
            className: "square-button",
            allowMultiselection: false,
            locale: "FR",
            onChangeDrawingStatus: () => {},
            onEndDrawing: () => {}
    };
/*
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(newProps) {
        if (this.needsRefresh(newProps)) {
            if (!newProps.point.modifiers || newProps.point.modifiers.ctrl !== true || !newProps.allowMultiselection) {
                this.props.purgeResults();
            }
            const queryableLayers = newProps.layers.filter(newProps.queryableLayersFilter);
            queryableLayers.forEach((layer) => {
                const {url, request, metadata} = this.props.buildRequest(layer, newProps);
                if (url) {
                    this.props.sendRequest(url, request, metadata, this.filterRequestParams(layer));
                } else {
                    this.props.localRequest(layer, request, metadata);
                }
            });
            if (queryableLayers.length === 0) {
                this.props.noQueryableLayers();
            } else {
                this.props.showMarker();
            }
        }

        if (newProps.enabled && !this.props.enabled) {
            this.props.changeMousePointer('pointer');
        } else if (!newProps.enabled && this.props.enabled) {
            this.props.changeMousePointer('auto');
            this.props.hideMarker();
            this.props.purgeResults();
        }
    }

    onModalHiding() {
        this.props.hideMarker();
        this.props.purgeResults();
        this.props.onChangeDrawingStatus("clean", null, 'BrugisInfo');
    }
*/
    componentDidMount() {
        if (this.props.enabled) {
            this.props.changeMousePointer('pointer');
        }
    }
    componentWillReceiveProps(newProps) {
        if (this.needsRefresh(newProps)) {

            if (!newProps.point.modifiers || newProps.point.modifiers.ctrl !== true || !newProps.allowMultiselection) {
                this.props.purgeResults();
            }

            const queryableLayers = newProps.layers
                .filter(newProps.queryableLayersFilter)
                .filter(newProps.layer ? l => l.id === newProps.layer : () => true);
            queryableLayers.forEach((layer) => {
                const {url, request, metadata} = this.props.buildRequest(layer, newProps);
                if (url) {
                    this.props.sendRequest(url, request, metadata, this.filterRequestParams(layer));
                } else {
                    this.props.localRequest(layer, request, metadata);
                }

            });
            if (queryableLayers.length === 0) {
                this.props.noQueryableLayers();
            } else {
                if (!newProps.layer) {
                    this.props.showMarker();
                } else {
                    this.props.hideMarker();
                }
            }

        }

        if (newProps.enabled && !this.props.enabled) {
            this.props.changeMousePointer('pointer');
        } else if (!newProps.enabled && this.props.enabled) {
            this.props.changeMousePointer('auto');
            this.props.hideMarker();
            this.props.purgeResults();
        }
    }

    onModalHiding = () => {
        this.props.hideMarker();
        this.props.purgeResults();
    };

    renderHeader(missing) {
        return (
            <span role="header">
                { (missing !== 0 ) ? <Spinner value={missing} sSize="sp-small" /> : null }
                {this.props.headerGlyph ? <Glyphicon glyph={this.props.headerGlyph} /> : null}&nbsp;<Message msgId="identifyTitle" />
                <button onClick={this.onModalHiding.bind(this)} className="close">{this.props.closeGlyph ? <Glyphicon glyph={this.props.closeGlyph}/> : <span>×</span>}</button>
            </span>
        );
    }

    renderResults(missingResponses) {
        const Viewer = this.props.viewer;
        return (<Viewer
          format={this.props.format}
          point={this.props.point}
          locale={this.props.locale}
          missingResponses={missingResponses}
          responses={this.props.responses}
          onChangeDrawingStatus={this.props.onChangeDrawingStatus}
          onGeometryChanged={this.props.onGeometryChanged}
          {...this.props.viewerOptions}/>);
    }

    renderContent() {
        let missingResponses = this.props.requests.length - this.props.responses.length;
        return this.props.asPanel ? (
            <Panel
                defaultExpanded="true"
                collapsible={this.props.collapsible}
                id="mapstore-getfeatureinfo"
                style={this.props.style}
                className={this.props.panelClassName}>
                <div className={this.props.headerClassName ? this.props.headerClassName : "panel-heading"}>
                    {this.renderHeader(missingResponses)}
                </div>
                {this.renderResults(missingResponses)}
            </Panel>
        ) : (
            <Dialog id="mapstore-getfeatureinfo"
                style={this.props.style}
                className={this.props.panelClassName}
                headerClassName={this.props.headerClassName}
                bodyClassName={this.props.bodyClassName}
                >
                {this.renderHeader(missingResponses)}
                <div role="body">
                    {this.renderResults(missingResponses)}
                </div>
            </Dialog>
        );
    }

    render() {
        if (this.props.enabled && this.props.requests.length !== 0) {
            return this.props.draggable ? (
                    <Draggable>
                        {this.renderContent()}
                    </Draggable>
                ) : this.renderContent();
        }
        if (this.props.warning) {
            return (<Modal show="true" bsSize="small" onHide={() => {
                this.props.clearWarning();
            }}>
                <Modal.Header className="dialog-error-header-side" closeButton>
                    <Modal.Title><Message msgId="warning"/></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mapstore-error"><Message msgId="identifyNoQueryableLayers"/></div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>);
        }
        return null;
    }

    needsRefresh = (props) => {
        if (props.enabled && props.point && props.point.pixel) {
            if (!this.props.point || !this.props.point.pixel ||
                this.props.point.pixel.x !== props.point.pixel.x ||
                this.props.point.pixel.y !== props.point.pixel.y ) {
                return true;
            }
            if (!this.props.point || !this.props.point.pixel || props.point.pixel && this.props.format !== props.format) {
                return true;
            }
        }
        return false;
    };


   filterRequestParams(layer) {
        let includeOpt = this.props.includeOptions || [];
        let excludeList = this.props.excludeParams || [];
        let options = Object.keys(layer).reduce((op, next) => {
            if (next !== "params" && includeOpt.indexOf(next) !== -1) {
                op[next] = layer[next];
            }else if (next === "params" && excludeList.length > 0) {
                let params = layer[next];
                Object.keys(params).forEach((n) => {
                    if (findIndex(excludeList, (el) => {return (el === n); }) === -1) {
                        op[n] = params[n];
                    }
                }, {});
            }
            return op;
        }, {});
        return options;
    }
}

module.exports = Identify;
