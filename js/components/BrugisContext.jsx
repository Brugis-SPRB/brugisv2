const React = require('react');
const PropTypes = require('prop-types');
const {Grid, Row, Col} = require('react-bootstrap');
const Message = require('../../MapStore2/web/client/components/I18N/Message');

class InfoDescription extends React.Component {
    static propTypes = {
        style: PropTypes.object,
        name: PropTypes.string,
        scrollToContact: PropTypes.func
    };

    static defaultProps = {
        name: 'Brugis',
        style: {},
        scrollToContact: () => {}
    };

    render() {
        return (
            <Grid style={{ color: '#8d8d8d', width: '100%', backgroundColor: 'white'}}>
                <Row>
                    <Col md={12}>
                        <h2><Message msgId="brugisInfo.context" /></h2>
                        <p>
                            <Message msgId="brugisInfo.context_text_1" /><br/>
                            <Message msgId="brugisInfo.context_text_2" /><br/>
                            <Message msgId="brugisInfo.context_text_3" /><br/>
                            <Message msgId="brugisInfo.context_text_4" /><br/>
                            <Message msgId="brugisInfo.context_text_5" /><br/>
                        </p>
                    </Col>
                </Row>
            </Grid>
        );

    }
}

module.exports = InfoDescription;
