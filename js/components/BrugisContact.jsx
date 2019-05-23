
const React = require('react');
const PropTypes = require('prop-types');
const {Grid, Row, Col, Form, FormGroup, FormControl, Button, Checkbox, ControlLabel} = require('react-bootstrap');
const Message = require('../../MapStore2/web/client/components/I18N/Message');

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
                        <FormControl componentClass="textarea" placeholder={this.context.intl.formatMessage({id: 'brugisInfo.contact_message_placeholder'})} name="body" />
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        <Message msgId="brugisInfo.contact_urgent"/>
                    </Col>
                    <Col sm={9}>
                        <Checkbox/>
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col smOffset={10} sm={9}>
                        <Button type="submit">
                            <Message msgId="brugisInfo.contact_send"/>
                        </Button>
                    </Col>
                    </FormGroup>
                </Form>
                </Col>
                <Col md={3}/>
            </Row>
            </Grid>
       );
   }
}

module.exports = BrugisContact;
