var React = require('react');
var {IntlMixin, FormattedDate} = require('react-intl');
var {Panel, Table} = require('react-bootstrap');


var SurveyGrid = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        surveys: React.PropTypes.array,
        evtKey: React.PropTypes.number
    },
    mixins: [IntlMixin],
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
                <th>Créé le</th>
                <th>Disponible jusqu'au</th>
                <th>Docx</th>
                <th>PDF</th>
              </tr>
            </thead>
            <tbody>
              { this.props.surveys.map( (survey) => {
                  return (
                    <tr key={survey.startdate}>
                      <td>{survey.docref}</td>
                      <td>{survey.adress}</td>
                      <td>{this.renderState()}</td>
                      <td>
                        <FormattedDate
                          value={new Date(survey.startdate)}
                          day="numeric"
                          month="long"
                          year="numeric" />
                      </td>
                      <td>
                        <FormattedDate
                          value={new Date(survey.enddate)}
                          day="numeric"
                          month="long"
                          year="numeric" />
                      </td>
                      <td><a href={survey.docPathFR}>Docx</a></td>
                      <td><a href={survey.pdfPathFR}>Pdf</a></td>
                    </tr>
                  );
              }) }
            </tbody>
          </Table>
        </Panel>
        );
    },
    renderState(state) {
        return ({state});
    }
});

module.exports = SurveyGrid;
