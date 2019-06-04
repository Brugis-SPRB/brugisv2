var React = require('react');
const PropTypes = require('prop-types');
const Message = require('../../../MapStore2/web/client/plugins/locale/Message');
var {Col, Button, Panel, FormGroup, ControlLabel, FormControl, Form, Row, ButtonGroup, ButtonToolbar, Image} = require('react-bootstrap');
import postUrbanalysis from './img/noun_send_1022904.svg';

class SurveyForm extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        bsSize: PropTypes.string,
        evtKey: PropTypes.number,
        panelClassName: PropTypes.string,
        types: PropTypes.array,
        onPostNewSurvey: PropTypes.func
    };

    static contextTypes = {
     intl: PropTypes.object.isRequired
    };

    static defaultProps = {
    };

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            refdoc: "",
            adr: "",
            type: ""
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
        const typeEntryDefault = (<Message msgId="brugisSurvey.type_entry_default" />);
        return (<Panel eventKey={this.props.evtKey} className={this.props.panelClassName} collapsible defaultExpanded>
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
             <br />
              <Row className="show-grid">
                <Col sm={12}>
                  <FormGroup controlId="empreinte">
                    <Col>
                      <ButtonToolbar id="toolButtonGroup">
                        {this.props.children}
                      </ButtonToolbar>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={10}>
                    <FormGroup controlId="refdoc" bsSize={this.props.bsSize}>
                      <Col componentClass={ControlLabel} sm={2}>
                        <Message msgId="brugisSurvey.file"/>
                      </Col>
                      <Col sm={10}>
                        <FormControl type="text" placeholder="..." value={this.state.refdoc} onChange={this.handleChange}/>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId="adr" bsSize={this.props.bsSize}>
                      <Col componentClass={ControlLabel} sm={2}>
                        <Message msgId="brugisSurvey.address"/>
                      </Col>
                      <Col sm={10}>
                        <FormControl type="text" placeholder="..." value={this.state.adr} onChange={this.handleChange} />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId="type" bsSize={this.props.bsSize}>
                      <Col componentClass={ControlLabel} sm={2}>
                        <Message msgId="brugisSurvey.type"/>
                      </Col>
                      <Col sm={10}>
                        <FormControl componentClass="select" onChange={this.handleChange} defaultValue={-1}>
                          <option disabled value={-1}>{typeEntryDefault}</option>
                          {this.props.types.map((item) =>
                            <option value={item.id} key={item.id}>{item.title}</option>
                          )}
                        </FormControl>
                      </Col>
                    </FormGroup>
                </Col>
                <Col sm={2}>
                  <ButtonGroup id="sendButtonGroup">
                      <Button id="sendButton" type="submit" bsSize={this.props.bsSize} bsStyle="primary" disabled={this.isSendDisabled()} title={this.context.intl.formatMessage({id: 'brugisSurvey.send'})}>
                        <Image src={postUrbanalysis} responsive/>
                      </Button>
                  </ButtonGroup>
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
    isSendDisabled() {
        var isDisabled = false;
        if (this.state.refdoc === "" || this.state.adr === "" || this.state.type === "") {
            isDisabled = true;
        } else {
            isDisabled = false;
        }
        return isDisabled;
    }
    handleSubmit() {
        this.props.onPostNewSurvey(this.state);
        event.preventDefault();
        return false;
    }
}

module.exports = SurveyForm;
