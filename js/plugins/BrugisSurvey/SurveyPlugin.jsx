const React = require('react');
const assign = require('object-assign');
const {connect} = require('react-redux');
const layersIcon = require('../../../MapStore2/web/client/plugins/toolbar/assets/img/layers.png');

const union = require("@turf/union");
const {polygon, multiPolygon} = require("@turf/helpers");
const {stringify} = require("wellknown");
const qs = require('qs');

const SurveyForm = require('./SurveyForm');
const SurveyToolBox = require('./SurveyToolbox');
const SurveyGrid = require('./SurveyGrid');
const {toggleControl} = require('../../../MapStore2/web/client/actions/controls');
const {Panel} = require('react-bootstrap');
const Dialog = require('../../../MapStore2/web/client/components/misc/Dialog');
const Message = require('../../../MapStore2/web/client/plugins/locale/Message');

const {
    loadBrugisSurveys,
    brugisSurveyDrawSurfaceToggle,
    brugisSelectParcelToggle,
    brugisSurveyDeleteDrawings,
    loadBrugisSurveyTypes,
    postNewSurvey
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
      surveys: React.PropTypes.array,
      visible: React.PropTypes.bool,
      toolbarActive: React.PropTypes.bool,
      toggleControl: React.PropTypes.func,
      id: React.PropTypes.string,
      style: React.PropTypes.object,
      wrap: React.PropTypes.bool,
      wrapWithPanel: React.PropTypes.bool,
      panelStyle: React.PropTypes.object,
      panelClassName: React.PropTypes.string,
      closeGlyph: React.PropTypes.string,
      onChangeDrawingStatus: React.PropTypes.func,
      onEndDrawing: React.PropTypes.func,
      onBrugisSurveyDrawSurfaceToggle: React.PropTypes.func,
      onBrugisSelectParcelToggle: React.PropTypes.func,
      onLoadBrugisSurveyWFSIntersectQuery: React.PropTypes.func,
      onBrugisSurveyDeleteDrawings: React.PropTypes.func,
      onLoadBrugisSurveyTypes: React.PropTypes.func,
      loadSurveys: React.PropTypes.func,
      onPostNewSurvey: React.PropTypes.func,
      drawSurfaceActive: React.PropTypes.bool,
      selectParcelActive: React.PropTypes.bool,
      spatialField: React.PropTypes.object,
      point: React.PropTypes.object,
      parcel: React.PropTypes.object,
      map: React.PropTypes.object,
      types: React.PropTypes.array,
      user: React.PropTypes.string
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
          user: ""
      };
  },
  componentWillMount() {
      if (this.props.types && this.props.types.length === 0) {
          this.props.onLoadBrugisSurveyTypes("http://10.1.2.125:8080/WebReperage/resources/ReperagesType");
      } else {
          // console.log("AlreadyLoaded");
      }
  },
  componentDidMount() {
      this.loadSurveyTime();
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
            "http://10.1.2.125:8080/WebReperage/res/reperage",
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
      }
  },
  render() {
      const surveyPanel = (
          <Panel role="body">

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
              />
            </SurveyForm>
            <SurveyGrid
              evtKey={2}
              surveys={this.props.surveys}
            />
          </Panel>
      );
      if (this.props.wrap) {
          if (this.props.visible || this.props.toolbarActive) {
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
                      <span className="settings-panel-title"><Message msgId="Urbanalyse"/></span>
                  </span>
                  {surveyPanel}
              </Dialog>);
          }
      } else {
          return surveyPanel;
      }
      return null;
  },
  loadSurveyTime() {
      setTimeout(() => {
          if (this.props.user) {
              this.props.loadSurveys("http://10.1.2.125:8080/WebReperage/res/reperage/user?user=" + this.props.user);
          }
          this.loadSurveyTime();
      }, 5000);
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
    visible: state.controls && state.controls.brugissurvey && state.controls.brugissurvey.enabled || false,
    toolbarActive: state.controls && state.controls.toolbar && state.controls.toolbar.active === 'BrugisSurvey' || false,
    drawSurfaceActive: state.brugisSurvey && state.brugisSurvey.active_tool === 'DRAW_POLY' || false,
    selectParcelActive: state.brugisSurvey && state.brugisSurvey.active_tool === 'SELECT_PARCEL' || false,
    spatialField: state.brugisSurvey && state.brugisSurvey.spatialField,
    point: state.brugisSurvey && state.brugisSurvey.clickPoint || {},
    parcel: state.brugisSurvey && state.brugisSurvey.clickParcel || {},
    types: state.brugisSurvey && state.brugisSurvey.types || [],
    user: state.brugisSurvey && state.brugisSurvey.user || ""
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
    onPostNewSurvey: postNewSurvey
})(BrugisSurvey);

module.exports = {
    BrugisSurveyPlugin: assign(BrugisSurveyPlugin, {
        Toolbar: {
            name: 'BrugisSurvey',
            tooltip: "BrugisSurvey",
            title: 'BrugisSurvey',
            icon: <img src={layersIcon}/>,
            panel: true,
            exclusive: true,
            priority: 1
        }
    }),
    reducers: {
        brugisSurvey: require('./reducers')
    }
};
