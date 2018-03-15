var React = require('react');
const PropTypes = require('prop-types');
var {FormattedDate} = require('react-intl');
var {Panel, Table, Label} = require('react-bootstrap');
var SurveyUtils = require('./utils.js');
var BrugisPagination = require('./Pagination');


class SurveyGrid extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        surveys: PropTypes.array,
        evtKey: PropTypes.number,
        user: PropTypes.string,
        locale: PropTypes.string,
        webreperagehost: PropTypes.string,
        surveyUpdate: PropTypes.number
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
       var style = "default";
        switch(state) {
          case 'NEW':
            style="primary";
            break;
          case 'PENDING':
            style="warning";
            break;
          case 'DONE':
            style="success";
            break;
          case 'FAILED':
            style="danger";
          default:
            style="default";
            break;
        }
        return (<Label bsStyle={style}>{state}</Label>);
    }

    renderIfDone(survey, button) {
        if(survey.state !== "DONE") {
            return "-";
        } else {
            return button;
        }
    }

    render() {

        const headerMessage = "Liste des reperages (" + new Date(this.props.surveyUpdate) + ")";
        return (<Panel header={headerMessage} eventKey={this.props.evtKey} collapsible defaultExpanded="true">
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
                              {this.renderIfDone(survey, <button onClick={() => this.onDocxClick(survey)}>Docx</button>)}
                           </td>
                           <td>
                              {this.renderIfDone(survey,  <button onClick={() => this.onPdfClick(survey)}>Pdf</button>)}
                           </td>
                         </tr>
                )}

            </tbody>
          </Table>
          <BrugisPagination items={this.props.surveys} onChangePage={this.onChangePage} surveyUpdate={this.props.surveyUpdate}/>
        </Panel>
        );
    }
};

module.exports = SurveyGrid;
