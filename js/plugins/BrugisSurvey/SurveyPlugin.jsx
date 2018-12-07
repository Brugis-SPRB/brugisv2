const React = require('react');
const PropTypes = require('prop-types');
const assign = require('object-assign');
const {connect} = require('react-redux');

const Urbanalyseicon = require('./img/couches-04.svg');

const union = require("@turf/union");
const {polygon, multiPolygon} = require("@turf/helpers");
const {stringify} = require("wellknown");
const qs = require('qs');
const {Glyphicon} = require('react-bootstrap');
const SurveyForm = require('./SurveyForm');
const SurveyToolBox = require('./SurveyToolbox');
const SurveyGrid = require('./SurveyGrid');
const {toggleControl} = require('../../../MapStore2/web/client/actions/controls');
const {Panel} = require('react-bootstrap');
const Dialog = require('../../../MapStore2/web/client/components/misc/Dialog');
const Message = require('../../../MapStore2/web/client/plugins/locale/Message');

const {addremoveparcelsonactivativeEpic, closebrugissurveyEpic, reloadWhenNewSurveyIsDone} = require('./epics');

const {
    loadBrugisSurveys,
    brugisSurveyDrawSurfaceToggle,
    brugisSelectParcelToggle,
    brugisSurveyDeleteDrawings,
    loadBrugisSurveyTypes,
    postNewSurvey,
    postRestartSurvey
} = require('./actions');

const {
    changeDrawingStatus,
    endDrawing
} = require('../../../MapStore2/web/client/actions/draw');

const {
    getFeatureInfo
} = require('../../../MapStore2/web/client/actions/mapInfo');

const BrugisSurvey = React.createClass({
  propTypes: {
      surveys: PropTypes.array,
      visible: PropTypes.bool,
      toolbarActive: PropTypes.bool,
      toggleControl: PropTypes.func,
      id: PropTypes.string,
      style: PropTypes.object,
      wrap: PropTypes.bool,
      wrapWithPanel: PropTypes.bool,
      panelStyle: PropTypes.object,
      panelClassName: PropTypes.string,
      closeGlyph: PropTypes.string,
      onChangeDrawingStatus: PropTypes.func,
      onEndDrawing: PropTypes.func,
      onBrugisSurveyDrawSurfaceToggle: PropTypes.func,
      onBrugisSelectParcelToggle: PropTypes.func,
      onLoadBrugisSurveyWFSIntersectQuery: PropTypes.func,
      onBrugisSurveyDeleteDrawings: PropTypes.func,
      onLoadBrugisSurveyTypes: PropTypes.func,
      loadSurveys: PropTypes.func,
      onPostNewSurvey: PropTypes.func,
      drawSurfaceActive: PropTypes.bool,
      selectParcelActive: PropTypes.bool,
      spatialField: PropTypes.object,
      point: PropTypes.object,
      parcel: PropTypes.object,
      map: PropTypes.object,
      types: PropTypes.array,
      user: PropTypes.string,
      locale: PropTypes.string,
      webreperagehost: PropTypes.string,
      geoserver: PropTypes.string,
      buttonClassName: PropTypes.string,
      surveyUpdate: PropTypes.number,
      onPostRestartSurvey: PropTypes.func
  },
  getDefaultProps() {
      return {
          surveys: [],
          style: {
              width: "300px"
          },
          wrap: true,
          wrapWithPanel: false,
          toolbarActive: false,
          panelStyle: {
              minWidth: "600px",
              zIndex: 100,
              position: "absolute",
              overflow: "auto",
              top: "100px",
              left: "calc(50% - 150px)",
              backgroundColor: "white"
          },
          panelClassName: "toolbar-panel",
          visible: false,
          toggleControl: () => {},
          id: "brugis_survey",
          onChangeDrawingStatus: () => {},
          onEndDrawing: () => {},
          onBrugisSurveyDrawSurfaceToggle: () => {},
          onBrugisSelectParcelToggle: () => {},
          onLoadBrugisSurveyWFSIntersectQuery: () => {},
          onBrugisSurveyDeleteDrawings: () => {},
          onLoadBrugisSurveyTypes: () => {},
          onPostNewSurvey: () => {},
          loadSurveys: () => {},
          drawSurfaceActive: false,
          selectParcelActive: false,
          spatialField: {},
          point: {},
          parcel: {},
          map: {},
          types: [],
          user: "",
          locale: "fr-FR",
          webreperagehost: "",
          geoserver: "",
          buttonClassName: "survey-button",
          onPostRestartSurvey: () => {}
      };
  },

  componentDidMount() {
      this.props.onLoadBrugisSurveyTypes(this.props.webreperagehost + "/resources/ReperagesType");
      this.interval = setInterval(this.loadSurveyTime.bind(this), 1000);
  },

  componentWillUnmount() {
      clearInterval(this.interval);
  },

  onPostNewSurveyForm(infos) {
      if (this.props.spatialField && this.props.spatialField.geometries && this.props.spatialField.geometries.length > 0) {
          let surveyAreaJson = this.buildTurfGeom(this.props.spatialField.geometries[0]);
          if (this.props.spatialField.geometries.length > 1) {
              for (let i = 1; i < this.props.spatialField.geometries.length; i++) {
                  let geomToMerge = this.buildTurfGeom(this.props.spatialField.geometries[i]);
                  surveyAreaJson = union(surveyAreaJson, geomToMerge);
              }
          }
          let surveyAreaWKT = stringify(surveyAreaJson);
          this.props.onPostNewSurvey(
            this.props.webreperagehost + "/res/reperage",
            qs.stringify({
              geom: surveyAreaWKT,
              adr: infos.adr,
              refdossier: infos.refdoc,
              reptype: infos.type,
              user: this.props.user
            })
          );
          this.props.onChangeDrawingStatus("clean", null, 'BrugisSurvey');
          this.props.onBrugisSurveyDeleteDrawings();
      } else {
          alert("Please Draw a geometry first");
      }
  },

  onRestartSurvey(survey) {
      if (survey && survey.id) {
          this.props.onPostRestartSurvey(this.props.webreperagehost + "/resources/WorkItems/restarting-" + survey.id);
          this.loadSurveyTime();
      }
  },

  render() {
      const surveyPanel = (
        <div>
            <SurveyForm
              evtKey={1}
              types={this.props.types}
              onPostNewSurvey={this.onPostNewSurveyForm}>
              <SurveyToolBox
                onChangeDrawingStatus={this.props.onChangeDrawingStatus}
                onEndDrawing={this.props.onEndDrawing}
                onBrugisSurveyDrawSurfaceToggle={this.props.onBrugisSurveyDrawSurfaceToggle}
                onBrugisSelectParcelToggle={this.props.onBrugisSelectParcelToggle}
                onLoadBrugisSurveyWFSIntersectQuery={this.props.onLoadBrugisSurveyWFSIntersectQuery}
                onBrugisSurveyDeleteDrawings={this.props.onBrugisSurveyDeleteDrawings}
                drawSurfaceActive={this.props.drawSurfaceActive}
                selectParcelActive={this.props.selectParcelActive}
                spatialField={this.props.spatialField}
                point={this.props.point}
                parcel={this.props.parcel}
                map={this.props.map}
                geoserver={this.props.geoserver}
                bsSize={"xsmall"}
              />
            </SurveyForm>
            <SurveyGrid
              evtKey={2}
              surveys={this.props.surveys}
              surveyUpdate={this.props.surveyUpdate}
              user={this.props.user}
              locale={this.props.locale}
              webreperagehost={this.props.webreperagehost}
              onRestartSurvey={this.onRestartSurvey}
            />
        </div>
      );
      if (this.props.wrap) {
          if (this.props.toolbarActive) {
              if (this.props.wrapWithPanel) {
                  return (<Panel id={this.props.id}
                                 header={<span><span className="settings-panel-title"><Message msgId="settings"/></span><span className="settings-panel-close panel-close" onClick={this.props.toggleControl}></span></span>}
                                 style={this.props.panelStyle}
                                className={this.props.panelClassName}>
                      {surveyPanel}
                  </Panel>);
              }
              return (<Dialog id={this.props.id} style={this.props.panelStyle} className={this.props.panelClassName}>
                  <span role="header">
                      <span className="settings-panel-title"><Message msgId="brugisSurvey.title_panel"/><button onClick={this.props.toggleControl} className="close">{this.props.closeGlyph ? <Glyphicon glyph={this.props.closeGlyph}/> : <span>×</span>}</button></span>
                  </span>
                  <span role="body">
                  {surveyPanel}
                  </span>
              </Dialog>);
          }
      } else {
          return surveyPanel;
      }
      return null;
  },
  loadSurveyTime() {
      if (this.props.user) {
          this.props.loadSurveys(this.props.webreperagehost + "/res/reperage/userextjs?sort=startdate&dir=DESC&user=" + this.props.user);
      }
  },
  buildTurfGeom(mapstoreGeom) {
      switch (mapstoreGeom.type) {
          case 'Polygon':
              return polygon(mapstoreGeom.coordinates);
          case 'MultiPolygon':
              return multiPolygon(mapstoreGeom.coordinates);
          default:
              return polygon(mapstoreGeom.coordinates);
      }
  }
});

const BrugisSurveyPlugin = connect((state) => ({
    map: (state.map && state.map.present) || (state.map) || (state.config && state.config.map) || null,
    surveys: state.brugisSurvey && state.brugisSurvey.surveys || [],
    surveyUpdate: state.brugisSurvey && state.brugisSurvey.updateDate || 0,
    visible: state.controls && state.controls.brugissurvey && state.controls.brugissurvey.enabled || false,
    toolbarActive: state.controls && state.controls.toolbar && state.controls.toolbar.active === 'BrugisSurvey' || false,
    drawSurfaceActive: state.brugisSurvey && state.brugisSurvey.active_tool === 'DRAW_POLY' || false,
    selectParcelActive: state.brugisSurvey && state.brugisSurvey.active_tool === 'SELECT_PARCEL' || false,
    spatialField: state.brugisSurvey && state.brugisSurvey.spatialField,
    point: state.brugisSurvey && state.brugisSurvey.clickPoint || {},
    parcel: state.brugisSurvey && state.brugisSurvey.clickParcel || {},
    types: state.brugisSurvey && state.brugisSurvey.types || [],
    user: state.brugisSurvey && state.brugisSurvey.user || "",
    locale: state.locale && state.locale.current || "fr-FR",
    webreperagehost: state.brugisSurvey && state.brugisSurvey.webreperagehost || "",
    geoserver: state.brugisSurvey && state.brugisSurvey.geoserver || ""
}), {
    loadSurveys: loadBrugisSurveys,
    toggleControl: toggleControl.bind(null, 'brugissurvey', null),
    onChangeDrawingStatus: changeDrawingStatus,
    onEndDrawing: endDrawing,
    onBrugisSurveyDrawSurfaceToggle: brugisSurveyDrawSurfaceToggle,
    onBrugisSelectParcelToggle: brugisSelectParcelToggle,
    onLoadBrugisSurveyWFSIntersectQuery: getFeatureInfo,
    onBrugisSurveyDeleteDrawings: brugisSurveyDeleteDrawings,
    onLoadBrugisSurveyTypes: loadBrugisSurveyTypes,
    onPostNewSurvey: postNewSurvey,
    onPostRestartSurvey: postRestartSurvey
})(BrugisSurvey);

module.exports = {
    BrugisSurveyPlugin: assign(BrugisSurveyPlugin, {
        Toolbar: {
            name: 'BrugisSurvey',
            tooltip: "brugisSurvey.tooltip",
            // title: 'BrugisSurvey',
            icon: <img src={Urbanalyseicon} height="47" width="38"></img>,
            panel: true,
            // tool: true,
            exclusive: true,
            priority: 1
        }
    }),
    reducers: {
        brugisSurvey: require('./reducers')
    },
    epics: {
      addremoveparcelsonactivativeEpic,
      closebrugissurveyEpic,
      reloadWhenNewSurveyIsDone
    }
};
