const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');

const assign = require('object-assign');
const {changeMeasurement} = require('../../../MapStore2/web/client/actions/measurement');
const {Button, Tooltip, OverlayTrigger} = require('react-bootstrap');

const lineRuleIcon = require('./img/line-ruler.svg');

const MeasureLength = React.createClass({

    propTypes: {
        id: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.string,
        btnSize: PropTypes.oneOf(['large', 'small', 'xsmall']),
        className: PropTypes.string,
        uom: PropTypes.shape({
            area: PropTypes.shape({
                unit: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired
            })
        }),
        active: PropTypes.bool,
        lengthMeasureEnabled: PropTypes.bool,
        bsStyle: PropTypes.string,
        toggleMeasure: PropTypes.func,
        tooltip: PropTypes.element,
        tooltipPlace: PropTypes.string
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
            tooltip: "measureComponent.MeasureLength",
            tooltipPlace: "left"
        };
    },
    onLineClick: function() {
        this.props.toggleMeasure({
            geomType: 'LineString'
        });
    },
    render() {
        return this.addTooltip(
            <Button
                onClick={() => this.onLineClick()}
                className={this.props.className}
                tooltip={this.props.tooltip}
                bsStyle={this.props.bsStyle}
                id={this.props.id}
                tooltipPlace="left"
                >
                <img src={lineRuleIcon} height="47" width="38"></img>
            </Button>
        );
    },
    addTooltip(btn) {
        if (!this.props.tooltip) {
            return btn;
        }
        let tooltip = <Tooltip id="locate-tooltip">{this.props.tooltip}</Tooltip>;
        return (
            <OverlayTrigger placement={this.props.tooltipPlace} key={"overlay-trigger." + this.props.id} overlay={tooltip}>
                {btn}
            </OverlayTrigger>
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
            tooltip: "measureComponent.MeasureLength",
            tool: true,
            priority: 1
        }
    }),
    reducers: {
    }
};
