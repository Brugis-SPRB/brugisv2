var React = require('react');
var {Col, Button, Panel, FormGroup, ControlLabel, FormControl, Form} = require('react-bootstrap');

var SurveyForm = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        bsSize: React.PropTypes.string,
        evtKey: React.PropTypes.number,
        panelClassName: React.PropTypes.string,
        types: React.PropTypes.array,
        onPostNewSurvey: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            title: "SurveyForm",
            onPostNewSurvey: () => {},
            bsSize: "small",
            open: true,
            evtKey: 2,
            panelClassName: "toolbar-panel",
            types: []
        };
    },
    getInitialState() {
        return {
          refdoc: "",
          adr: "",
          type: ""
        };
    },
    render() {
        return (<Panel header="Nouveau Reperage" eventKey={this.props.evtKey} className={this.props.panelClassName} collapsible defaultExpanded={true}>
            {this.props.children}
            <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroup controlId="RefDoc" bsSize={this.props.bsSize}>
                <Col componentClass={ControlLabel} sm={4}>
                  Référence dossier :
                </Col>
                <Col sm={8}>
                  <FormControl type="text" placeholder="Enter ref.dossier" value={this.state.refdoc} onChange={this.handleRefDocChange}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="adr" bsSize={this.props.bsSize}>
                <Col componentClass={ControlLabel} sm={4}>
                  Adresse :
                </Col>
                <Col sm={8}>
                  <FormControl type="text" placeholder="Enter adress" value={this.state.adress} onChange={this.handleAdressChange} />
                </Col>
              </FormGroup>
              <FormGroup controlId="formControlsSelect" bsSize={this.props.bsSize}>
                <Col componentClass={ControlLabel} sm={4}>
                  Type d'urbanalyse :
                </Col>
                <Col sm={8}>
                  <FormControl componentClass="select" onChange={this.handleTypeChange}>
                    <option disabled selected > -- select an option -- </option>
                    {this.props.types.map((item) =>
                      <option value={item.id} key={item.id}>{item.title}</option>
                    )}
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
    },
    handleSubmit(event) {
        this.props.onPostNewSurvey(this.state);
        event.preventDefault();
    },
    handleRefDocChange(event) {
        this.setState({refdoc: event.target.value});
    },
    handleAdressChange(event) {
        this.setState({adr: event.target.value});
    },
    handleTypeChange(event) {
        this.setState({type: event.target.value});
    }
});

module.exports = SurveyForm;
