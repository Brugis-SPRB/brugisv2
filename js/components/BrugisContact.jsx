
const React = require('react');
const PropTypes = require('prop-types');
const {Grid, Row, Col} = require('react-bootstrap');
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
                <img src="https://sayingimages.com/wp-content/uploads/you-have-tech-support-meme.jpg"></img><br />
                <label><Message msgId="best-effort" /><a href="mailto:brugis@urban.brussels"><Message msgId="BruGISTeam" /></a></label>
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
