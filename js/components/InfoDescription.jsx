const React = require('react');
const PropTypes = require('prop-types');
const {Grid, Row, Col} = require('react-bootstrap');
const HTML = require('../../MapStore2/web/client/components/I18N/HTML');

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
                    <h2>Webservices</h2><br/>
                    <p>
                        <HTML msgId="home.shortDescription"/>
                    </p>
                </Col>
           </Row>
        </Grid>
        );
    }
}

module.exports = InfoDescription;
