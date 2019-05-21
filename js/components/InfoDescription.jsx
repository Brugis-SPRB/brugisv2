const React = require('react');
const PropTypes = require('prop-types');
const {Grid, Row, Col} = require('react-bootstrap');
const Message = require('../../MapStore2/web/client/components/I18N/Message');

class InfoDescription extends React.Component {
    static propTypes = {
        style: PropTypes.object,
        name: PropTypes.string
    };

    static defaultProps = {
        name: 'Brugis',
        style: {}
    };

    render() {
        return (
            <Grid style={{ color: '#8d8d8d', width: '100%', backgroundColor: 'white', height: '60%'}}>
            <Row>
                <Col md={12}>
                    <h2><Message msgId="brugisInfo.webservice_title" /></h2><br/>
                    <p>
                        <Message msgId="home.shortDescription"/>
                    </p>
                </Col>
           </Row>
        </Grid>
        );
    }
}

module.exports = InfoDescription;
