
const React = require('react');
const PropTypes = require('prop-types');
const {Grid, Row, Col, Form, FormGroup, FormControl, Button, ControlLabel, Image} = require('react-bootstrap');
const Message = require('../../MapStore2/web/client/components/I18N/Message');
import sendMail from './img/noun_send mail_877514.svg';

class BrugisContact extends React.Component {
   static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
   };

   static contextTypes = {
    intl: PropTypes.object.isRequired
   };

   static defaultProps = {
    name: 'Brugis',
    className: 'bg-news',
    style: {}
   };

   constructor(props) {
       super(props);
       this.state = {value: ''};

       this.handleChange = this.handleChange.bind(this);
   }

   render() {

       return (
           <Grid style={{ height: '40%', color: '#345d6f', width: '100%'}}>
            <Row>
                <Col md={3}/>
                <Col md={6}>
                <Form horizontal action="mailto:brugis@urban.brussels" method="GET">
                    <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={3}>
                        <Message msgId="brugisInfo.contact_subject"/>
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder={this.context.intl.formatMessage({id: 'brugisInfo.contact_subject_placeholder'})} name="subject"/>
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                    <Col componentClass={ControlLabel} sm={3}>
                       <Message msgId="brugisInfo.contact_message"/>
                    </Col>
                    <Col sm={9}>
                        <FormControl componentClass="textarea" placeholder={this.context.intl.formatMessage({id: 'brugisInfo.contact_message_placeholder'})} onChange={this.handleChange} />
                    </Col>
                    </FormGroup>
                    <FormGroup id="sendMailFormGroup">
                    <Col>
                        <Button style ={{boxShadow: '0 3px 6px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.24)'}}
                                type="submit" title={this.context.intl.formatMessage({id: 'brugisInfo.contact_send'})}>
                            <Image src={sendMail} responsive/>
                        </Button>
                    </Col>
                    </FormGroup>
                    <input type="hidden" name="body" value={this.state.value} id="hbody"></input>
                </Form>
                </Col>
            </Row>
            </Grid>
       );
   }

   handleChange(event) {
       this.setState({value: encodeURIComponent(event.target.value)});
   }

}

module.exports = BrugisContact;
