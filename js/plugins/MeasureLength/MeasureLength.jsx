const React = require('react');
const {connect} = require('react-redux');

const assign = require('object-assign');
const {changeMeasurement} = require('../../../MapStore2/web/client/actions/measurement');
const {Button, Tooltip, OverlayTrigger} = require('react-bootstrap');

const lineRuleIcon = require('./img/line-ruler.svg');

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
        tooltip: React.PropTypes.element,
        tooltipPlace: React.PropTypes.string
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
