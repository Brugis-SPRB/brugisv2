var React = require('react');
const PropTypes = require('prop-types');
var {Col, Button, Panel, FormGroup, ControlLabel, FormControl, Form, Row, ButtonGroup, ButtonToolbar} = require('react-bootstrap');

class SurveyForm extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        bsSize: PropTypes.string,
        evtKey: PropTypes.number,
        panelClassName: PropTypes.string,
        types: PropTypes.array,
        onPostNewSurvey: PropTypes.func
    };

    static defaultProps = {
    };

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            refdoc: "",
            adr: "",
            type: "",
            isSendDisabled: true
        };
    }

    static defaultProps = {
        title: "SurveyForm",
        onPostNewSurvey: () => {},
        bsSize: "small",
        open: true,
        evtKey: 2,
        panelClassName: "toolbar-panel",
        types: []
    };

    render() {
        return (<Panel header="Nouveau Reperage" eventKey={this.props.evtKey} className={this.props.panelClassName} collapsible defaultExpanded>
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
             <br />
              <Row className="show-grid">
                <Col sm={12}>
                  <FormGroup controlId="empreinte">
                    <Col componentClass={ControlLabel} sm={2}>
                      Empreinte
                    </Col>
                    <Col sm={10}>
                      <ButtonToolbar>
                        {this.props.children}
                      </ButtonToolbar>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                    <FormGroup controlId="refdoc" bsSize={this.props.bsSize}>
                      <Col componentClass={ControlLabel} sm={2}>
                        Réf.dossier
                      </Col>
                      <Col sm={10}>
                        <FormControl type="text" placeholder="Enter ref.dossier" value={this.state.refdoc} onChange={this.handleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId="adr" bsSize={this.props.bsSize}>
                      <Col componentClass={ControlLabel} sm={2}>
                        Adresse
                      </Col>
                      <Col sm={10}>
                        <FormControl type="text" placeholder="Enter adress" value={this.state.adr} onChange={this.handleChange} />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId="type" bsSize={this.props.bsSize}>
                      <Col componentClass={ControlLabel} sm={2}>
                        Type
                      </Col>
                      <Col sm={10}>
                        <FormControl componentClass="select" onChange={this.handleChange} defaultValue={-1}>
                          <option disabled value={-1}> -- select an option -- </option>
                          {this.props.types.map((item) =>
                            <option value={item.id} key={item.id}>{item.title}</option>
                          )}
                        </FormControl>
                      </Col>
                    </FormGroup>
                    <Row>
                      <Col smOffset={10}>
                        <ButtonGroup block>
                            <Button type="submit" bsSize={this.props.bsSize} bsStyle="primary" disabled={this.state.isSendDisabled}>
                              Envoyer
                            </Button>
                        </ButtonGroup>
                      </Col>
                    </Row>
                </Col>
              </Row>
              </Form>
        </Panel>
        );
    }

    handleChange(e) {
        var newObj = {};
        newObj[e.target.id] = e.target.value;
        this.setState(newObj);
    }

    handleSubmit(event) {
        this.props.onPostNewSurvey(this.state);
        event.preventDefault();
    }
}

module.exports = SurveyForm;
