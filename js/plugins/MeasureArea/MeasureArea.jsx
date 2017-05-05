const React = require('react');
const {connect} = require('react-redux');

const assign = require('object-assign');
const {changeMeasurement} = require('../../../MapStore2/web/client/actions/measurement');
const {Button, Tooltip, OverlayTrigger} = require('react-bootstrap');

const areaRuleIcon = require('./img/area-ruler.png');

const MeasureArea = React.createClass({

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
        areaMeasureEnabled: React.PropTypes.bool,
        bsStyle: React.PropTypes.string,
        toggleMeasure: React.PropTypes.func,
        tooltip: React.PropTypes.element,
        tooltipPlace: React.PropTypes.string
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
                tooltipPlace="left"
                bsStyle={this.props.bsStyle}
                >
                <img src={areaRuleIcon}></img>
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
