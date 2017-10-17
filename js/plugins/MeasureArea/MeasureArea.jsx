const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');

const assign = require('object-assign');
const {changeMeasurement} = require('../../../MapStore2/web/client/actions/measurement');
const {Button, Tooltip, OverlayTrigger} = require('react-bootstrap');

const areaRuleIcon = require('./img/area-ruler.svg');

const MeasureArea = React.createClass({

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
        areaMeasureEnabled: PropTypes.bool,
        bsStyle: PropTypes.string,
        toggleMeasure: PropTypes.func,
        tooltip: PropTypes.element,
        tooltipPlace: PropTypes.string
    },

    getDefaultProps() {
        return {
            id: "brugis-area",
            className: "square-button",
            text: "MeasureArea",
            toggleMeasure: () => {},
            active: false,
            tooltip: "measureComponent.MeasureArea",
            uom: {
                area: {unit: 'sqm', label: 'm²'}
            },
            tooltipPlace: "left",
            bsStyle: "primary"
        };
    },
    onAreaClick: function() {
        this.props.toggleMeasure({
            geomType: 'Polygon'
        });
    },
    render() {
        return this.addTooltip(
            <Button
                onClick={() => this.onAreaClick()}
                className={this.props.className}
                tooltip={this.props.tooltip}
                bsStyle={this.props.bsStyle}
                id={this.props.id}
                >
                <img src={areaRuleIcon} height="47" width="38"></img>
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

const MeasureAreaPlugin = connect((state) => {
    return {
        measurement: state.measurement || {},
        areaMeasureEnabled: state.measurement && state.measurement.areaMeasureEnabled || false
    };
}, {
    toggleMeasure: changeMeasurement
})(MeasureArea);

module.exports = {
    MeasureAreaPlugin: assign(MeasureAreaPlugin, {
        Toolbar: {
            name: "MeasureArea",
            tooltip: "measureComponent.MeasureArea",
            tool: true,
            priority: 1
        }
    }),
    reducers: {
    }
};
