var React = require('react');
var {Col, Button, Panel, FormGroup, ControlLabel, FormControl, Form} = require('react-bootstrap');

var SurveyForm = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        loadSurveyTypes: React.PropTypes.func,
        submitNewSurvey: React.PropTypes.func,
        bsSize: React.PropTypes.string,
        evtKey: React.PropTypes.number,
        panelClassName: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            title: "SurveyForm",
            loadSurveyTypes: () => {},
            submitNewSurvey: () => {},
            bsSize: "small",
            open: true,
            evtKey: 2,
            panelClassName: "toolbar-panel"
        };
    },
    render() {
        return (<Panel header="Nouveau Reperage" eventKey={this.props.evtKey} className={this.props.panelClassName} collapsible defaultExpanded={true}>
            <Form horizontal>
              <FormGroup controlId="RefDoc" bsSize={this.props.bsSize}>
                <Col componentClass={ControlLabel} sm={4}>
                  Référence dossier :
                </Col>
                <Col sm={8}>
                  <FormControl type="text" placeholder="Enter ref.dossier" />
                </Col>
              </FormGroup>
              <FormGroup controlId="adr" bsSize={this.props.bsSize}>
                <Col componentClass={ControlLabel} sm={4}>
                  Adresse :
                </Col>
                <Col sm={8}>
                  <FormControl type="text" placeholder="Enter adress" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formControlsSelect" bsSize={this.props.bsSize}>
                <Col componentClass={ControlLabel} sm={4}>
                  Type d'urbanalyse :
                </Col>
                <Col sm={8}>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                  </FormControl>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={8} sm={4}>
                  <Button type="submit" bsSize={this.props.bsSize}>
                    Envoyer
                  </Button>
                </Col>
              </FormGroup>
          </Form>
        </Panel>
        );
    }
});

module.exports = SurveyForm;
