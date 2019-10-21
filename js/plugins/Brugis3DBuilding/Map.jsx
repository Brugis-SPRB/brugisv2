const Cesium = require('../../../MapStore2/web/client/libs/cesium');
const PropTypes = require('prop-types');
const Rx = require('rxjs');
const React = require('react');
const ReactDOM = require('react-dom');
const ConfigUtils = require('../../../MapStore2/web/client/utils/ConfigUtils');
const ClickUtils = require('../../../MapStore2/web/client/utils/cesium/ClickUtils');
const assign = require('object-assign');
const {throttle} = require('lodash');
const CoordinatesUtils = require('../../../MapStore2/web/client/utils/CoordinatesUtils');

class CesiumMap extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        center: ConfigUtils.PropTypes.center,
        zoom: PropTypes.number.isRequired,
        mapStateSource: ConfigUtils.PropTypes.mapStateSource,
        projection: PropTypes.string,
        onMapViewChanges: PropTypes.func,
        onCreationError: PropTypes.func,
        onClick: PropTypes.func,
        onMouseMove: PropTypes.func,
        mapOptions: PropTypes.object,
        standardWidth: PropTypes.number,
        standardHeight: PropTypes.number,
        mousePointer: PropTypes.string,
        zoomToHeight: PropTypes.number,
        viewerOptions: PropTypes.object,
        mapstyle: PropTypes.object,
        bbox: PropTypes.object
    };

    static defaultProps = {
        id: 'brugis3dmap',
        onMapViewChanges: () => {},
        onClick: () => {},
        onCreationError: () => {},
        center: {
            x: 4,
            y: 50,
            crs: "EPSG:3857"
        },
        projection: "EPSG:3857",
        mapOptions: {},
        standardWidth: 512,
        standardHeight: 512,
        zoomToHeight: 80000000,
        viewerOptions: {
            orientation: {
                heading: 0,
                pitch: -1 * Math.PI / 2,
                roll: 0
            }
        },
        mapstyle: {
            height: "100%"
        },
        zoom: 10
    };

    state = { };

    componentWillMount() {
        /*
         this prevent the Safari browser to zoom and mess up with the view.
         added only for Safari's broswers (mobile and not) bescause from safari 10 it
         won't allow you to disable pinch to zoom with the user-scalable attribute.
         see https://stackoverflow.com/questions/4389932/how-do-you-disable-viewport-zooming-on-mobile-safari/39711930#39711930
         */
        document.addEventListener('gesturestart', this.gestureStartListener );
    }

    componentDidMount() {
        //https://urbisonline.brussels/rest/assets

        //Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YzU2MjVmZS0xOGNlLTRjNjgtYWVlZS1iZGQ0NTJjZTY0ZDciLCJpZCI6MTYyOTEsInNjb3BlcyI6WyJhc3IiXSwiaWF0IjoxNTcwMDkzNDA3fQ.rXc6XVfdMgx829kf4Dialf0-6wtiwoTL4fhpq792y0Y';
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MDUzZDE0YS0zMjY3LTRlMmMtYWI3Ny05Zjg0YzYyYzExYWUiLCJpZCI6MjEsImlhdCI6MTUzNzc4MTUwMn0.aVOizwYTIKqU8BhxKoSr8gyrorGtDgYnHSQuVOtmgw8';
        
        this.terrainProvider = new Cesium.CesiumTerrainProvider({
            url: Cesium.IonResource.fromAssetId(6452),
            requestWaterMask: !1,
            requestVertexNormals: !0
        });
        console.log(this.props.bbox);

        var extentWGS84 = CoordinatesUtils.reprojectBbox(this.props.bbox, 'EPSG:31370', 'EPSG:4326');

        //this.cesiumViewer.terrainProvider = this.terrainProvider,
       // this.cesiumViewer.scene.globe.depthTestAgainstTerrain = !0,
        this.building3dTileset = new Cesium.Cesium3DTileset({
            url: Cesium.IonResource.fromAssetId(10065),
            shadows: Cesium.ShadowMode.ENABLED,
            show: !0
        });
        
        var map = new Cesium.Viewer(this.props.id, assign({
            baseLayerPicker: false,
            animation: false,
            fullscreenButton: false,
            geocoder: false,
            homeButton: false,
            infoBox: false,
            sceneModePicker: false,
            selectionIndicator: false,
            timeline: false,
            navigationHelpButton: false,
            navigationInstructionsInitiallyVisible: false,
            terrainProvider : this.terrainProvider
        }, ));

       
        /*
        map.imageryLayers.removeAll();
        map.camera.moveEnd.addEventListener(this.updateMapInfoState);
        this.hand = new Cesium.ScreenSpaceEventHandler(map.scene.canvas);
        this.subscribeClickEvent(map);
        this.hand.setInputAction(throttle(this.onMouseMove.bind(this), 500), Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        */
       //var rectangle = Cesium.Rectangle.fromDegrees(west, south, east, north);
       var rectangle = Cesium.Rectangle.fromDegrees(extentWGS84[0], extentWGS84[1], extentWGS84[2], extentWGS84[3]);

       map.camera.setView({
        destination: rectangle
       });
       /*
        map.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(
                this.props.center.x,
                this.props.center.y,
                this.getHeightFromZoom(this.props.zoom)
            )
        });
        */
        /*
        this.setMousePointer(this.props.mousePointer);
        */
        this.map = map;
        this.map.scene.primitives.add(this.building3dTileset);
        this.forceUpdate();
        /*
        if (this.props.mapOptions.navigationTools) {
            this.cesiumNavigation = window.CesiumNavigation;
            if (this.cesiumNavigation) {
                this.cesiumNavigation.navigationInitialization(this.props.id, map);
            }
        }
        */
        // Information about the currently selected feature
        var selected = {
            feature: undefined,
            originalColor: new Cesium.Color()
        };

        // Information about the currently highlighted feature
        var highlighted = {
            feature : undefined,
            originalColor : new Cesium.Color()
        };
        if (Cesium.PostProcessStageLibrary.isSilhouetteSupported(map.scene)) {
            var silhouetteBlue = Cesium.PostProcessStageLibrary.createEdgeDetectionStage();
            silhouetteBlue.uniforms.color = Cesium.Color.BLUE;
            silhouetteBlue.uniforms.length = 0.01;
            silhouetteBlue.selected = [];

            var silhouetteGreen = Cesium.PostProcessStageLibrary.createEdgeDetectionStage();
            silhouetteGreen.uniforms.color = Cesium.Color.LIME;
            silhouetteGreen.uniforms.length = 0.01;
            silhouetteGreen.selected = [];

            map.scene.postProcessStages.add(Cesium.PostProcessStageLibrary.createSilhouetteStage([silhouetteBlue, silhouetteGreen]));

            // Silhouette a feature blue on hover.
            map.screenSpaceEventHandler.setInputAction(function onMouseMove(movement) {
                // If a feature was previously highlighted, undo the highlight
                silhouetteBlue.selected = [];

                // Pick a new feature
                var pickedFeature = map.scene.pick(movement.endPosition);
                /*
                if (!Cesium.defined(pickedFeature)) {
                    nameOverlay.style.display = 'none';
                    return;
                }
                */

                // A feature was picked, so show it's overlay content
                //nameOverlay.style.display = 'block';
                //nameOverlay.style.bottom = viewer.canvas.clientHeight - movement.endPosition.y + 'px';
                //nameOverlay.style.left = movement.endPosition.x + 'px';
                
   
              
                //nameOverlay.textContent = name;

                // Highlight the feature if it's not already selected.
                if (pickedFeature !== selected.feature) {
                    silhouetteBlue.selected = [pickedFeature];
                }
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);


                // Silhouette a feature on selection and show metadata in the InfoBox.
            map.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
                // If a feature was previously selected, undo the highlight
                silhouetteGreen.selected = [];

                // Pick a new feature
                var pickedFeature = map.scene.pick(movement.position);
                /*
                if (!Cesium.defined(pickedFeature)) {
                    clickHandler(movement);
                    return;
                }
                */
                // Select the feature if it's not already selected
                if (silhouetteGreen.selected[0] === pickedFeature) {
                    return;
                }

                // Save the selected feature's original color
                var highlightedFeature = silhouetteBlue.selected[0];
                if (pickedFeature === highlightedFeature) {
                    silhouetteBlue.selected = [];
                }

                // Highlight newly selected feature
                silhouetteGreen.selected = [pickedFeature];

                if (pickedFeature && pickedFeature instanceof Cesium.Cesium3DTileFeature) {
                    //feature.color = Cesium.Color.YELLOW;
                    var propertyNames = pickedFeature.getPropertyNames();
                    for(var i=0; i < propertyNames.length; i++) {
                        if(pickedFeature.getProperty(propertyNames[i]) != ""){
                            console.log(propertyNames[i] + " " + pickedFeature.getProperty(propertyNames[i]));
                        }
                        
                    }
                    console.log("*******");
                }

               
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        }

    }

    componentWillReceiveProps(newProps) {
        /*
        if (newProps.mousePointer !== this.props.mousePointer) {
            this.setMousePointer(newProps.mousePointer);
        }
        if (newProps.mapStateSource !== this.props.id) {
            this._updateMapPositionFromNewProps(newProps);
        }
        */
        return false;
    }

    componentWillUnmount() {
        this.clickStream$.complete();
        this.pauserStream$.complete();
        this.hand.destroy();
        // see comment in componentWillMount
        document.removeEventListener('gesturestart', this.gestureStartListener );
        this.map.destroy();
    }

    onClick = (map, movement) => {
        if (this.props.onClick && movement.position !== null) {
            const cartesian = map.camera.pickEllipsoid(movement.position, map.scene.globe.ellipsoid);
            let cartographic = ClickUtils.getMouseXYZ(map, movement) || cartesian && Cesium.Cartographic.fromCartesian(cartesian);
            if (cartographic) {
                const latitude = cartographic.latitude * 180.0 / Math.PI;
                const longitude = cartographic.longitude * 180.0 / Math.PI;

                const y = (90.0 - latitude) / 180.0 * this.props.standardHeight * (this.props.zoom + 1);
                const x = (180.0 + longitude) / 360.0 * this.props.standardWidth * (this.props.zoom + 1);
                this.props.onClick({
                    pixel: {
                        x: x,
                        y: y
                    },
                    height: this.props.mapOptions && this.props.mapOptions.terrainProvider ? cartographic.height : undefined,
                    cartographic,
                    latlng: {
                        lat: latitude,
                        lng: longitude
                    },
                    crs: "EPSG:4326"
                });
            }
        }
    };

    onMouseMove = (movement) => {
        /*
        if (this.props.onMouseMove && movement.endPosition) {
            const cartesian = this.map.camera.pickEllipsoid(movement.endPosition, this.map.scene.globe.ellipsoid);
            let cartographic = ClickUtils.getMouseXYZ(this.map, movement) || cartesian && Cesium.Cartographic.fromCartesian(cartesian);
            if (cartographic) {
                const elevation = Math.round(cartographic.height);
                this.props.onMouseMove({
                    y: cartographic.latitude * 180.0 / Math.PI,
                    x: cartographic.longitude * 180.0 / Math.PI,
                    z: elevation,
                    crs: "EPSG:4326"
                });
            }
        }
        */
    };

    getMapOptions = (rawOptions) => {
        let overrides = {};
        if (rawOptions.terrainProvider) {
            let {type, ...tpOptions} = rawOptions.terrainProvider;
            switch (type) {
                case "cesium": {
                    overrides.terrainProvider = new Cesium.CesiumTerrainProvider(tpOptions);
                    break;
                }
                case "ellipsoid": {
                    overrides.terrainProvider = new Cesium.EllipsoidTerrainProvider();
                    break;
                }
                default:
                    break;
            }
        }
        return assign({}, rawOptions, overrides);
    };

    getCenter = () => {
        const center = this.map.camera.positionCartographic;
        return {
            longitude: center.longitude * 180 / Math.PI,
            latitude: center.latitude * 180 / Math.PI,
            height: center.height
        };
    };

    getZoomFromHeight = (height) => {
        return Math.log2(this.props.zoomToHeight / height) + 1;
    };

    getHeightFromZoom = (zoom) => {
        return this.props.zoomToHeight / Math.pow(2, zoom - 1);
    };

    render() {
        const map = this.map;
        const mapProj = this.props.projection;
        const children = map ? React.Children.map(this.props.children, child => {
            return child ? React.cloneElement(child, {map: map, projection: mapProj, onCreationError: this.props.onCreationError}) : null;
        }) : null;
        return (
            <div id={this.props.id} style={this.props.mapstyle}>
                {children}
            </div>
        );
    }

    gestureStartListener = (e) => {
        e.preventDefault();
    }

    setMousePointer = (pointer) => {
        if (this.map) {
            const mapDiv = ReactDOM.findDOMNode(this).getElementsByClassName("cesium-viewer")[0];
            mapDiv.style.cursor = pointer || 'auto';
        }
    };

    _updateMapPositionFromNewProps = (newProps) => {
        // Do the change at the same time, to avoid glitches
        const currentCenter = this.getCenter();
        const currentZoom = this.getZoomFromHeight(currentCenter.height);
        // current implementation will update the map only if the movement
        // between 12 decimals in the reference system to avoid rounded value
        // changes due to float mathematic operations.
        const isNearlyEqual = function(a, b) {
            if (a === undefined || b === undefined) {
                return false;
            }
            // avoid errors like 44.40641479 !== 44.40641478999999
            return a.toFixed(12) - b.toFixed(12) <= 0.000000000001;
        };
        const centerIsUpdate = !isNearlyEqual(newProps.center.x, currentCenter.longitude) ||
                               !isNearlyEqual(newProps.center.y, currentCenter.latitude);
        const zoomChanged = newProps.zoom !== currentZoom;

         // Do the change at the same time, to avoid glitches
        if (centerIsUpdate || zoomChanged) {
            const position = {
                destination: Cesium.Cartesian3.fromDegrees(
                    newProps.center.x,
                    newProps.center.y,
                    this.getHeightFromZoom(newProps.zoom)
                ),
                orientation: newProps.viewerOptions.orientation
            };
            this.setView(position);
        }
    };

    setView = (position) => {
        if (this.props.mapOptions && this.props.mapOptions.flyTo) {
            this.map.camera.flyTo(position, this.props.mapOptions.defaultFlightOptions);
        } else {
            this.map.camera.setView(position);
        }
    };

    subscribeClickEvent = (map) => {
        const samePosition = (m1, m2) => m1 && m2 && m1.x === m2.x && m1.y === m2.y;
        const types = {
            LEFT_UP: Cesium.ScreenSpaceEventType.LEFT_UP,
            LEFT_DOWN: Cesium.ScreenSpaceEventType.LEFT_DOWN,
            LEFT_CLICK: Cesium.ScreenSpaceEventType.LEFT_CLICK,
            PINCH_START: Cesium.ScreenSpaceEventType.PINCH_START,
            PINCH_END: Cesium.ScreenSpaceEventType.PINCH_END,
            PINCH_MOVE: Cesium.ScreenSpaceEventType.PINCH_MOVE
        };
        const clickStream$ = new Rx.Subject();
        const pauserStream$ = new Rx.Subject();
        Object.keys(types).forEach((type) => this.hand.setInputAction((movement) => {
            pauserStream$.next({type: types[type], movement});
            clickStream$.next({type: types[type], movement});
        }, types[type]));

        /*
         * trigger onClick only when LEFT_CLICK that follow a LEFT_DOWN at the same position.
         * Every other mouse event before the LEFT_CLICK will not trigger the onClick function (happens with multitouch devices from cesium).
         * If a pinch event is ended, wait to start listening left clicks. This to skip the LEFT_UP,LEFT_DOWN, LEFT_CLICK sequence that cesium triggers after a pinch end,
         * that othewise can not be distinguished from a normal click event.
         */
        pauserStream$
          .filter( ev => ev.type === types.PINCH_END )
          .switchMap( () => Rx.Observable.of(true).concat(Rx.Observable.of(false).delay(500)))
          .startWith(false)
          .switchMap(paused => {
              // pause is realized by mapping the click stream or an infinite stream
              return paused ? Rx.Observable.never() : clickStream$;
          })
          .filter( ev => ev.type === types.LEFT_DOWN )
          .switchMap(({movement}) =>
              clickStream$
                .filter( ev => ev.type === types.LEFT_CLICK )
                .takeUntil(
                    Rx.Observable.timer(500).merge(
                        clickStream$
                            .filter( ev =>
                                ev.type !== types.LEFT_UP && ev.type !== types.LEFT_CLICK
                                || ev.type === types.LEFT_UP && !samePosition(movement && movement.position, ev.movement && ev.movement.position)
                            )
                    )
                )
            ).subscribe(({movement}) => this.onClick(map, movement));
        this.clickStream$ = clickStream$;
        this.pauserStream$ = pauserStream$;
    };
    updateMapInfoState = () => {
        const center = this.getCenter();
        const zoom = this.getZoomFromHeight(center.height);
        const size = {
            height: Math.round(this.props.standardWidth * (zoom + 1)),
            width: Math.round(this.props.standardHeight * (zoom + 1))
        };
        this.props.onMapViewChanges({
            x: center.longitude,
            y: center.latitude,
            crs: "EPSG:4326"
        }, zoom, {
            bounds: {
                minx: -180.0,
                miny: -90.0,
                maxx: 180.0,
                maxy: 90.0
            },
            crs: 'EPSG:4326',
            rotation: 0
        }, size, this.props.id, this.props.projection, {
            orientation: {
                heading: this.map.camera.heading,
                pitch: this.map.camera.pitch,
                roll: this.map.camera.roll
            }
        });
    };
}

module.exports = CesiumMap;
