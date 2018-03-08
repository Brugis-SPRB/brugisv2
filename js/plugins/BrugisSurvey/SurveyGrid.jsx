var React = require('react');
const PropTypes = require('prop-types');
var {FormattedDate} = require('react-intl');
var {Panel, Table} = require('react-bootstrap');
var SurveyUtils = require('./utils.js');
var BrugisPagination = require('./Pagination');


class SurveyGrid extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        surveys: PropTypes.array,
        evtKey: PropTypes.number,
        user: PropTypes.string,
        locale: PropTypes.string,
        webreperagehost: PropTypes.string
    };

    static defaultProps = {
        title: "SurveyGrid",
        surveys: [],
        open: true,
        evtKey: 1,
        user: "",
        locale: "fr-FR",
        webreperagehost: ""
    };

    constructor() {
         super();

         this.state = {
             exampleItems: [],
             pageOfItems: []
         };

         // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
         this.onChangePage = this.onChangePage.bind(this);
     }

     onChangePage(pageOfItems) {
          // update state with new page of items
          this.setState({ pageOfItems: pageOfItems });
    }

    onDocxClick(survey) {
        if (survey.state === "DONE") {
            window.open(this.props.webreperagehost + "/res/reperage/" + survey.id + ".docx?lang=" + SurveyUtils.getOldBrugisLocale(this.props.locale) + "&user=" + this.props.user);
        }
    }

    onPdfClick(survey) {
        if (survey.state === "DONE") {
            window.open(this.props.webreperagehost + "/res/reperage/" + survey.id + ".pdf?lang=" + SurveyUtils.getOldBrugisLocale(this.props.locale) + "&user=" + this.props.user);
        }
    }

    renderState(state) {
        return (<span>{state}</span>);
    }

    render() {
        return (<Panel header="Liste des reperages" eventKey={this.props.evtKey} collapsible defaultExpanded="true">
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
                       {this.state.pageOfItems.map(survey =>
                         <tr key={survey.startdate}>
                           <td>{survey.docref}</td>
                           <td>{survey.adress}</td>
                           <td>{this.renderState(survey.state)}</td>
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
                           <td>
                             <button onClick={() => this.onDocxClick(survey)}>Docx</button>
                           </td>
                           <td>
                             <button onClick={() => this.onPdfClick(survey)}>Pdf</button>
                           </td>
                         </tr>
                       )}
                <BrugisPagination items={this.props.surveys} onChangePage={this.onChangePage} />
            </tbody>
          </Table>
        </Panel>
        );
    }
};

module.exports = SurveyGrid;
