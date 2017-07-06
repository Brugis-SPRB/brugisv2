var React = require('react');
var {Button, ButtonGroup, ButtonToolbar} = require('react-bootstrap');

var SurveyToolBox = React.createClass({
    propTypes: {
        loadSurveyTypes: React.PropTypes.func,
        submitNewSurvey: React.PropTypes.func,
        bsSize: React.PropTypes.string,
        onChangeDrawingStatus: React.PropTypes.func,
        onEndDrawing: React.PropTypes.func,
        drawSurfaceActive: React.PropTypes.bool,
        selectParcelActive: React.PropTypes.bool,
        onBrugisSurveyDrawSurfaceToggle: React.PropTypes.func,
        spatialField: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            loadSurveyTypes: () => {},
            submitNewSurvey: () => {},
            bsSize: "small",
            onChangeDrawingStatus: () => {},
            onEndDrawing: () => {},
            drawSurfaceActive: false,
            selectParcelActive: false,
            onBrugisSurveyDrawSurfaceToggle: () => {},
            spatialField: {}
        };
    },
    render() {
        return (<ButtonToolbar>
               <ButtonGroup>
                    <Button bsSize={this.props.bsSize} bsStyle="primary" onClick={this.drawSurface} active={this.props.drawSurfaceActive}>Dessiner une surface</Button>
                    <Button bsSize={this.props.bsSize} bsStyle="success">Sélectionner une parcelle</Button>
                    <Button bsSize={this.props.bsSize} bsStyle="info">Modifier le tracé</Button>
                    <Button bsSize={this.props.bsSize} bsStyle="warning">Supprimer une zone</Button>
               </ButtonGroup>
          </ButtonToolbar>
        );
    },
    drawSurface() {
        let initalLayer = [];
        if (this.props.spatialField && this.props.spatialField.geometry) {
            initalLayer.push(this.props.spatialField.geometry);
        }
        this.changeDrawingStatus("start", 'Polygon', 'BrugisSurvey', initalLayer);

        // this.props.onBrugisSurveyDrawSurfaceToggle();
    },
    changeDrawingStatus(status, method, owner, features) {
        this.props.onChangeDrawingStatus(
            status,
            method !== undefined ? method : 'Polygon',
            owner,
            features);
    }
});

module.exports = SurveyToolBox;
