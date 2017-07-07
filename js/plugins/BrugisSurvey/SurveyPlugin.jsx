const React = require('react');
const assign = require('object-assign');
const {connect} = require('react-redux');
const layersIcon = require('../../../MapStore2/web/client/plugins/toolbar/assets/img/layers.png');

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
    brugisSurveyDeleteDrawings
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
      drawSurfaceActive: React.PropTypes.bool,
      spatialField: React.PropTypes.object,
      point: React.PropTypes.object,
      parcel: React.PropTypes.object,
      map: React.PropTypes.object
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
          drawSurfaceActive: false,
          spatialField: {},
          point: {},
          parcel: {},
          map: {}
      };
  },
  render() {
      const surveyPanel = (
          <Panel role="body">
            <SurveyToolBox
              onChangeDrawingStatus={this.props.onChangeDrawingStatus}
              onEndDrawing={this.props.onEndDrawing}
              onBrugisSurveyDrawSurfaceToggle={this.props.onBrugisSurveyDrawSurfaceToggle}
              onBrugisSelectParcelToggle={this.props.onBrugisSelectParcelToggle}
              onLoadBrugisSurveyWFSIntersectQuery={this.props.onLoadBrugisSurveyWFSIntersectQuery}
              onBrugisSurveyDeleteDrawings={this.props.onBrugisSurveyDeleteDrawings}
              drawSurfaceActive={this.props.drawSurfaceActive}
              spatialField={this.props.spatialField}
              point={this.props.point}
              parcel={this.props.parcel}
              map={this.props.map}
            />
            <SurveyForm evtKey={1} />
            <SurveyGrid evtKey={2} />
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
  closeDialog() {
      this.props.toggleControl(null, 'brugissurvey', null);
  }
});

const BrugisSurveyPlugin = connect((state) => ({
    map: (state.map && state.map.present) || (state.map) || (state.config && state.config.map) || null,
    surveys: state && state.surveys,
    visible: state.controls && state.controls.brugissurvey && state.controls.brugissurvey.enabled || false,
    toolbarActive: state.controls && state.controls.toolbar && state.controls.toolbar.active === 'BrugisSurvey' || false,
    drawSurfaceActive: state.brugisSurvey && state.brugisSurvey.active_tool === 'DRAW_POLY' || false,
    spatialField: state.brugisSurvey && state.brugisSurvey.spatialField,
    point: state.brugisSurvey && state.brugisSurvey.clickPoint || {},
    parcel: state.brugisSurvey && state.brugisSurvey.clickParcel || {}
}), {
    loadSurveys: loadBrugisSurveys,
    toggleControl: toggleControl.bind(null, 'brugissurvey', null),
    onChangeDrawingStatus: changeDrawingStatus,
    onEndDrawing: endDrawing,
    onBrugisSurveyDrawSurfaceToggle: brugisSurveyDrawSurfaceToggle,
    onBrugisSelectParcelToggle: brugisSelectParcelToggle,
    onLoadBrugisSurveyWFSIntersectQuery: getFeatureInfo,
    onBrugisSurveyDeleteDrawings: brugisSurveyDeleteDrawings
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
