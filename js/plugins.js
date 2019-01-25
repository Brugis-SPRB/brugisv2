

module.exports = {
    plugins: {
        MousePositionPlugin: require('../MapStore2/web/client/plugins/MousePosition'),
        PrintPlugin: require('./plugins/BrugisPrint/Print'),
        TOCPlugin: require('../MapStore2/web/client/plugins/TOC'),
        BackgroundSelectorPlugin: require('../MapStore2/web/client/plugins/BackgroundSelector'),
        MapPlugin: require('../MapStore2/web/client/plugins/Map'),
        ToolbarPlugin: require('../MapStore2/web/client/plugins/Toolbar'),
        DrawerMenuPlugin: require('../MapStore2/web/client/plugins/DrawerMenu'),
        SettingsPlugin: require('../MapStore2/web/client/plugins/Settings'),
        ExpanderPlugin: require('../MapStore2/web/client/plugins/Expander'),
        SearchPlugin: require('./plugins/BruSearch/Search'),
        SearchServicesConfig: require('../MapStore2/web/client/plugins/SearchServicesConfig'),
        ScaleBoxPlugin: require('../MapStore2/web/client/plugins/ScaleBox'),
        LocatePlugin: require('../MapStore2/web/client/plugins/Locate'),
        ZoomInPlugin: require('../MapStore2/web/client/plugins/ZoomIn'),
        ZoomOutPlugin: require('../MapStore2/web/client/plugins/ZoomOut'),
        ZoomAllPlugin: require('../MapStore2/web/client/plugins/ZoomAll'),
        MetadataExplorerPlugin: require('../MapStore2/web/client/plugins/MetadataExplorer'),
        OmniBarPlugin: require('../MapStore2/web/client/plugins/OmniBar'),
        BurgerMenuPlugin: require('../MapStore2/web/client/plugins/BurgerMenu'),
        BrugisTreePlugin: require('./plugins/BrugisTree/BrugisTree'),
        LocalMapsPlugin: require('./plugins/LocalMaps/LocalMaps'),
        MeasurePlugin: require('./plugins/Measure/Measure'),
        //  MeasureResultsPlugin: require('../MapStore2/web/client/plugins/MeasureResults'),
        //  MeasureAreaPlugin: require('./plugins/MeasureArea/MeasureArea'),
        //  MeasureLengthPlugin: require('./plugins/MeasureLength/MeasureLength'),
        IdentifyPlugin: require('./plugins/BrugisInfo/IdentifyPlugin'),
        TutorialPlugin: require('../MapStore2/web/client/plugins/Tutorial'),
        BrugisSurveyPlugin: require('./plugins/BrugisSurvey/SurveyPlugin'),
        FullScreenPlugin: require('../MapStore2/web/client/plugins/FullScreen'),
        StreetViewPlugin: require('./plugins/StreetView/StreetViewPlugin'),
        MapFooterPlugin: require('../MapStore2/web/client/plugins/MapFooter'),
        WFSDownloadPlugin: require('../MapStore2/web/client/plugins/WFSDownload'),
        BestEffortPlugin: require('./plugins/BrugisBE/BestEffort'),
        ShapeFilePlugin: require('../MapStore2/web/client/plugins/ShapeFile'),
        TOCItemsSettingsPlugin: require('../MapStore2/web/client/plugins/TOCItemsSettings'),
        NotificationsPlugin: require('../MapStore2/web/client/plugins/Notifications')
    },
    requires: {

    }
};
