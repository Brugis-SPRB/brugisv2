
const React = require('react');
const PropTypes = require('prop-types');
const {Grid, Row, Col, Form, FormGroup, FormControl, Button, Checkbox, ControlLabel} = require('react-bootstrap');
const Message = require('../../MapStore2/web/client/components/I18N/Message');

class BrugisContact extends React.Component {
   static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
   };

   static defaultProps = {
        name: 'Brugis',
        className: 'bg-news',
        style: {}
   };

   render() {
       return (
           <Grid style={{ height: '60%', color: 'black', width: '100%', backgroundColor: 'white'}}>
            <Row>
                <Col md={6}>
                <h2>Contact</h2><br/>
                <hr />
                <Form horizontal action="mailto:brugis@urban.brussels" method="GET">
                    <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Subject
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Subject" name="subject"/>
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                    <Col componentClass={ControlLabel} sm={2}>
                     Message
                    </Col>
                    <Col sm={10}>
                        <FormControl componentClass="textarea" placeholder="textarea" name="body" />
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Urgent
                    </Col>
                    <Col sm={10}>
                        <Checkbox/>
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">
                        Send
                        </Button>
                    </Col>
                    </FormGroup>
                </Form>
                <br />
                <Col smOffset={2} sm={10}>
                    <label><Message msgId="best-effort" /><a href="mailto:brugis@urban.brussels"><Message msgId="BruGISTeam" /></a></label>
                    </Col>
                </Col>
                <Col md={6}>
                <h2>Trombinoscope</h2><br/>
                <hr />
                Marcel <br />
                <img src="https://img.memecdn.com/and-then-i-said_c_1753409.jpg"></img>
                Gertrude <br />
                Gontrand <br />
                </Col>
            </Row>
            </Grid>
       );
   }
}

module.exports = BrugisContact;
