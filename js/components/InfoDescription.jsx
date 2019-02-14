const React = require('react');
const PropTypes = require('prop-types');
const {Jumbotron, Grid, Row, Col} = require('react-bootstrap');
const HTML = require('../../MapStore2/web/client/components/I18N/HTML');

class InfoDescription extends React.Component {
    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.object,
        name: PropTypes.string
    };

    static defaultProps = {
        name: 'Brugis',
        className: 'ms-home-description',
        style: {}
    };

    render() {
        return (
            <Jumbotron className={this.props.className} style={this.props.style}>
                <Grid>
                    <Row>
                        <Col xs={12} className="text-center">
                            <h1>{this.props.name}</h1>
                            <p>
                                <HTML msgId="home.shortDescription"/>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
        );
    }
}

module.exports = InfoDescription;
