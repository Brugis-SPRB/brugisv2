const React = require('react');
const {connect} = require('react-redux');

const assign = require('object-assign');
const {changeMeasurement} = require('../../../MapStore2/web/client/actions/measurement');
const {Button, Glyphicon, Tooltip, OverlayTrigger} = require('react-bootstrap');

const lineRuleIcon = require('./img/line-ruler.png');

const MeasureLength = React.createClass({

    propTypes: {
        id: React.PropTypes.string,
        style: React.PropTypes.object,
        text: React.PropTypes.string,
        btnSize: React.PropTypes.oneOf(['large', 'small', 'xsmall']),
        className: React.PropTypes.string,
        uom: React.PropTypes.shape({
            area: React.PropTypes.shape({
                unit: React.PropTypes.string.isRequired,
                label: React.PropTypes.string.isRequired
            })
        }),
        active: React.PropTypes.bool,
        lengthMeasureEnabled: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            id: "brugis-length",
            className: "square-button",
            text: "MeasureArea",
            toggleMeasure: () => {},
            active: false,
            uom: {
                length: {unit: 'm', label: 'm'}
            }
        };
    },
    onLineClick: function() {
        this.props.toggleMeasure({
            geomType: 'LineString'
        });
    },
    render() {
        return(
            <Button
                onClick={() => this.onLineClick()}
                className={this.props.className}
                tooltip={this.props.tooltip}
                tooltipPlace="left"
                >
                <img src={lineRuleIcon}></img>
                {this.props.help}
            </Button>
        );
    }
});

const MeasureLengthPlugin = connect((state) => {
    return {
        measurement: state.measurement || {},
        lengthMeasureEnabled: state.measurement && state.measurement.lengthMeasureEnabled || false
    };
}, {
    toggleMeasure: changeMeasurement
})(MeasureLength);

module.exports = {
    MeasureLengthPlugin: assign(MeasureLengthPlugin, {
        Toolbar: {
            name: "MeasureLength",
            tooltip: "MeasureLength",
            tool: true,
            priority: 1
        }
    }),
    reducers: {
    }
};
