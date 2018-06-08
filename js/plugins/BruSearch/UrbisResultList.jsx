
var React = require('react');
const PropTypes = require('prop-types');
var UrbisResult = require('./UrbisResult');
const CoordinatesUtils = require('../../../MapStore2/web/client/utils/CoordinatesUtils');
const I18N = require('../../../MapStore2/web/client/components/I18N/I18N');


class ResultList extends React.Component {
    static propTypes = {
        results: PropTypes.array,
        mapConfig: PropTypes.object,
        onItemClick: PropTypes.func,
        addMarker: PropTypes.func,
        afterItemClick: PropTypes.func,
        notFoundMessage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    };

    static defaultProps = {
        onItemClick: () => {},
        addMarker: () => {},
        afterItemClick: () => {}
    };

    onItemClick = (item) => {

        var bbox = [parseFloat(item.extent.xmin), parseFloat(item.extent.ymin), parseFloat(item.extent.xmax), parseFloat(item.extent.ymax)];

        let wgs84center = CoordinatesUtils.reproject([item.point.x, item.point.y], 'EPSG:31370', 'EPSG:4326');

        var newCenter = {
            'x': wgs84center.x,
            'y': wgs84center.y,
            'center': wgs84center,
            'crs': 'EPSG:4326',
            'bbox': CoordinatesUtils.reprojectBbox(bbox, "EPSG:31370", "EPSG:4326")
        };

        this.props.onItemClick(newCenter, this.props.mapConfig);

        this.props.addMarker({lat: wgs84center.y, lng: wgs84center.x});
        this.props.afterItemClick();
    };

    renderResults = () => {
        return this.props.results.result.map((item)=> {return <UrbisResult item={item} onItemClick={this.onItemClick}/>; });
    };

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
    }

    purgeResults = () => {

    };
}

module.exports = ResultList;
