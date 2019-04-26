
const React = require('react');
const PropTypes = require('prop-types');
const {Grid, Row, Col, Form, FormGroup, FormControl, Button, Checkbox, ControlLabel} = require('react-bootstrap');
const Message = require('../../MapStore2/web/client/components/I18N/Message');

class BrugisTitle extends React.Component {
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
           <Grid style={{ height: '60%', width: '100%', fontWeight: 'Medium'}}>
            <Row style={{ fontSize: '8em', lineHeight: '1em', color: '#4f8da8'}}>
                <Col md={6}>
                </Col>
                <Col md={6}>
                BIENVENUE
                </Col>
            </Row>
            <Row style={{ fontSize: '5em', lineHeight: '1em', fontWeight: 'Bold', color: '#a2c6d7'}}>
                <Col md={3}>
                </Col>
                <Col md={7}>
                SUR LA PAGE D'INFORMATION DE
                </Col>
            </Row>
            <Row style={{ fontSize: '11em', lineHeight: '1em', fontWeight: 'Bold', color: '#345d6f'}}>
                <Col md={5}>
                </Col>
                <Col md={5}>
                BruGIS!
                </Col>
            </Row>
            </Grid>
       );
   }
}

module.exports = BrugisTitle;
