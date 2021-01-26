const React = require('react');

const Message = require('../../../MapStore2/web/client/components/I18N/Message');

const assign = require('object-assign');
const PropTypes = require('prop-types');

// import uBrugisLogo from '../../../assets/img/ubrugis_blue_no_baseline.svg';
import uBrugisLogo from '../../../assets/img/ubrugis_blanc_no_baseline.svg';


class BestEffort extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        message: PropTypes.string
    };

    static defaultProps = {
        id: 'brugis-besteffort',
        message: 'notinmyname'
    };
    render() {
        return (
            <div id={this.props.id} style={this.props.style}>
                <label style={{ verticalAlign: 'middle'}}>
                  <img style={{ height: '30px', padding: '3px', paddingLeft: '10px', paddingRight: '10px', marginRight: '10px', backgroundColor: '#345d6f'}} src={uBrugisLogo} responsive/>
                  <Message style={{ verticalAlign: 'super'}} msgId="best-effort" />
                  <a href="mailto:brugis@urban.brussels">
                    <Message style={{ verticalAlign: 'baseline'}} msgId="BruGISTeam" />
                  </a>
                </label>
            </div>
        );
    }
}

module.exports = {
    BestEffortPlugin: assign(BestEffort, {
        MapFooter: {
            name: 'bestEffort',
            position: 1,
            tool: true,
            priority: 1
        }
    })
};
