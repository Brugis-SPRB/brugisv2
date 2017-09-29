const React = require('react');
const asyncLoading = require('react-async-loader');
const PropTypes = require('prop-types');

class BrugisStreetView extends React.Component {
  static propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    heading: PropTypes.number,
    pitch: PropTypes.number,
    zoom: PropTypes.number,
    tabkey: PropTypes.number,
    google_map_api_key: PropTypes.string,
    googleMaps: PropTypes.object
  };

  static defaultProps = {
    lat: 46.9171876,
    lng: 17.8951832,
    heading: 100,
    pitch: 0,
    zoom: 1,
    tabkey: 0,
    google_map_api_key: "AIzaSyBOj4l8-OrXmpVXEpeLH-dIfjCxhGkWxh0",
    googleMaps: {}
  };

  componentWillReceiveProps(newProps) {
      if (this.needStreetViewRefresh(newProps)) {
          let infos = {
              position: {lat: newProps.lat, lng: newProps.lng},
              pov: {heading: 0, pitch: 0},
              zoom: 1
          };
          this.initialize(this.ctn, infos, true);
      }
  }

  render() {
      return (<div ref={ (ctn) => {this.ctn = ctn; }} style={{
				height: '450px',
				backgroundColor: '#eeeeee'
			}}>
      </div>);
  }

  initialize(canvas, infos, update) {
      if (this.props.googleMaps && typeof (this.streetView) === "undefined" || update === true) {
          this.streetView = new this.props.googleMaps.StreetViewPanorama(
            canvas,
            infos
          );
      }
  }

  needStreetViewRefresh(newProps) {
      if (this.props.lat !== newProps.lat || this.props.lng !== newProps.lng) {
          return true;
      }
      if (this.ctn.clientHeight === 450 && typeof (this.streetView) === "undefined") {
          return true;
      }
      return false;
  }
}

function mapScriptsToProps() {
    const googleMapsApiKey = "AIzaSyBOj4l8-OrXmpVXEpeLH-dIfjCxhGkWxh0";
    return {
        googleMaps: {
        globalPath: 'google.maps',
        url: 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey,
        jsonp: true
        }
    };
}
module.exports = asyncLoading(mapScriptsToProps)(BrugisStreetView);
