const React = require('react');
const {connect} = require('react-redux');

const assign = require('object-assign');
const {changeMeasurement} = require('../../../MapStore2/web/client/actions/measurement');
const {Button} = require('react-bootstrap');

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
        lengthMeasureEnabled: React.PropTypes.bool,
        bsStyle: React.PropTypes.string,
        toggleMeasure: React.PropTypes.func,
        tooltip: React.PropTypes.string
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
            },
            bsStyle: "primary",
            tooltip: "MeasureLength"
        };
    },
    onLineClick: function() {
        this.props.toggleMeasure({
            geomType: 'LineString'
        });
    },
    render() {
        return (
            <Button
                onClick={() => this.onLineClick()}
                className={this.props.className}
                tooltip={this.props.tooltip}
                bsStyle={this.props.bsStyle}
                tooltipPlace="left"
                >
                <img src={lineRuleIcon}></img>
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
