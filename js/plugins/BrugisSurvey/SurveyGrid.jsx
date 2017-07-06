var React = require('react');
var {Panel, Table} = require('react-bootstrap');

var SurveyGrid = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        surveys: React.PropTypes.array,
        evtKey: React.PropTypes.number
    },
    getDefaultProps() {
        return {
            title: "SurveyGrid",
            surveys: [],
            open: true,
            evtKey: 1
        };
    },
    render() {
        return (<Panel header="Liste des reperages" eventKey={this.props.evtKey} collapsible defaultExpanded={true}>
          <Table responsive striped bordered condensed hover>
            <thead>
              <tr>
                <th>Dossier</th>
                <th>Adresse</th>
                <th>Statut</th>
                <th>Type</th>
                <th>Créé le</th>
                <th>Disponible jusqu'au</th>
                <th>Docx</th>
                <th>PDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ggg</td>
                <td>zz</td>
                <td>gdddgg</td>
                <td>gdddgg</td>
                <td>gdpgg</td>
                <td>gdg</td>
                <td>ggdg</td>
                <td>gd</td>
              </tr>
            </tbody>
          </Table>
        </Panel>
        );
    }
});

module.exports = SurveyGrid;
