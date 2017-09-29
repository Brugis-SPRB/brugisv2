
var React = require('react');
const PropTypes = require('prop-types');
var UrbisResult = require('./UrbisResult');
const mapUtils = require('../../../MapStore2/web/client/utils/MapUtils');
const CoordinatesUtils = require('../../../MapStore2/web/client/utils/CoordinatesUtils');
const I18N = require('../../../MapStore2/web/client/components/I18N/I18N');
const ol = require('openlayers');

let ResultList = React.createClass({
    propTypes: {
        results: PropTypes.object,
        mapConfig: PropTypes.object,
        onItemClick: PropTypes.func,
        addMarker: PropTypes.func,
        afterItemClick: PropTypes.func,
        notFoundMessage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    },
    getDefaultProps() {
        return {
            onItemClick: () => {},
            addMarker: () => {},
            afterItemClick: () => {}
        };
    },
    onItemClick(item) {
        var bbox = [parseFloat(item.extent.xmin), parseFloat(item.extent.ymin), parseFloat(item.extent.xmax), parseFloat(item.extent.ymax)];
        // zoom by the max. extent defined in the map's config
        var mapSize = this.props.mapConfig.size;

        var newZoom = mapUtils.getZoomForExtent(CoordinatesUtils.reprojectBbox(bbox, "EPSG:31370", this.props.mapConfig.projection), mapSize, 0, 21, null);

        let wgs84center = ol.proj.transform([item.point.x, item.point.y], 'EPSG:31370', 'EPSG:4326');

        var newCenter = {
            x: wgs84center[0],
            y: wgs84center[1],
            crs: 'EPSG:4326'
        };

        this.props.onItemClick(newCenter, newZoom, {
            bounds: {
               minx: bbox[0],
               miny: bbox[1],
               maxx: bbox[2],
               maxy: bbox[3]
            },
            crs: "EPSG:31370",
            rotation: 0
         }, this.props.mapConfig.size, null, this.props.mapConfig.projection);


        this.props.addMarker({lat: newCenter.y, lng: newCenter.x});
        this.props.afterItemClick();
    },
    renderResults() {
        return this.props.results.result.map((item)=> {return <UrbisResult item={item} onItemClick={this.onItemClick}/>; });
    },
    render() {
        var notFoundMessage = this.props.notFoundMessage;
        if (!notFoundMessage) {
            notFoundMessage = <I18N.Message msgId="noresultfound" />;
        }
        if (!this.props.results || !this.props.results.result) {
            return null;
        } else if (this.props.results.result.length === 0) {
            return <div className="search-result-list" style={{padding: "10px", textAlign: "center"}}>{notFoundMessage}</div>;
        }
        return (
            <div className="search-result-list">
                {this.renderResults()}
            </div>
        );
    },
    purgeResults() {

    }
});

module.exports = ResultList;
