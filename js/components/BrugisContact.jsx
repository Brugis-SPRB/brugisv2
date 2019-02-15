
const React = require('react');
const PropTypes = require('prop-types');
const {Row} = require('react-bootstrap');
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
            <Row>
                <hr />
               
                <label><Message msgId="best-effort" /><a href="mailto:brugis@urban.brussels"><Message msgId="BruGISTeam" /></a></label>
            </Row>
       );
   }
}

module.exports = BrugisContact;
