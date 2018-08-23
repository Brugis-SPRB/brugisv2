var React = require('react');
const PropTypes = require('prop-types');
var {FormattedDate} = require('react-intl');
const Message = require('../../../MapStore2/web/client/plugins/locale/Message');
var {Panel, Table, Label, Button, Glyphicon} = require('react-bootstrap');
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
        surveyUpdate: PropTypes.number,
        onRestartSurvey: PropTypes.func
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
        var docxUrl = this.props.webreperagehost + "/res/reperage/" + survey.id + ".docx?lang=" + SurveyUtils.getOldBrugisLocale(this.props.locale) + "&user=" + this.props.user;
        if (survey.state === "DONE") {
            docxUrl = this.props.webreperagehost + "/res/reperage/" + survey.id + ".docx?lang=" + SurveyUtils.getOldBrugisLocale(this.props.locale) + "&user=" + this.props.user;
            console.log(docxUrl);
            window.open(docxUrl);
        }
    }

    onPdfClick(survey) {
        var pdfUrl = this.props.webreperagehost + "/res/reperage/" + survey.id + ".pdf?lang=" + SurveyUtils.getOldBrugisLocale(this.props.locale) + "&user=" + this.props.user;
        if (survey.state === "DONE") {
            pdfUrl = this.props.webreperagehost + "/res/reperage/" + survey.id + ".pdf?lang=" + SurveyUtils.getOldBrugisLocale(this.props.locale) + "&user=" + this.props.user;
            console.log(pdfUrl);
            window.open(pdfUrl);
        }
    }

    renderState(survey) {
        var style = "default";
        var renewButton = (<Button bsSize="xsmall" onClick={() => this.props.onRestartSurvey(survey)}>
          <Glyphicon glyph="repeat" />
        </Button>);
        var label = (<Label bsStyle={style}>{survey.state}</Label>);
        switch (survey.state) {
            case 'NEW':
                style = "primary";
                break;
            case 'PENDING':
                style = "warning";
                break;
            case 'DONE':
                style = "success";
                break;
            case 'FAILED':
                style = "danger";
                break;
            default:
                style = "default";
        }

        if (survey.state === 'FAILED') {
            label = (<span><Label bsStyle={style}>{survey.state}</Label>{renewButton}</span>);
        }
        return label;
    }

    renderIfDone(survey, button) {
        if (survey.state !== "DONE") {
            return "-";
        }
        return button;
    }

    render() {
        const headerMessage = (<Message msgId="brugisSurvey.title_list" />);
        return (<Panel header={headerMessage} eventKey={this.props.evtKey} collapsible defaultExpanded="true">
          <Table responsive striped bordered condensed hover>
            <thead>
              <tr>
                <th><Message msgId="brugisSurvey.file"/></th>
                <th><Message msgId="brugisSurvey.address"/></th>
                <th><Message msgId="brugisSurvey.status"/></th>
                <th><Message msgId="brugisSurvey.created"/></th>
                <th><Message msgId="brugisSurvey.available"/></th>
                <th><Message msgId="brugisSurvey.docx"/></th>
                <th><Message msgId="brugisSurvey.pdf"/></th>
              </tr>
            </thead>
            <tbody>
                {this.state.pageOfItems.map(survey =>
                         <tr key={survey.startdate}>
                           <td>{survey.docref}</td>
                           <td>{survey.adress}</td>
                           <td>{this.renderState(survey)}</td>
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
                              {this.renderIfDone(survey, <button onClick={() => this.onPdfClick(survey)}>Pdf</button>)}
                           </td>
                         </tr>
                )}
            </tbody>
          </Table>
          <BrugisPagination items={this.props.surveys} onChangePage={this.onChangePage} surveyUpdate={this.props.surveyUpdate}/>
        </Panel>
        );
    }
}

module.exports = SurveyGrid;
