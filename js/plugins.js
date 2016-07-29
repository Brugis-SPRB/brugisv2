/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    plugins: {
        MapPlugin: require('../MapStore2/web/client/plugins/Map'),
        HomePlugin: require('../MapStore2/web/client/plugins/Home'),
        TOCPlugin: require('./plugins/BrugisTOC/TOC'),
        ScaleBoxPlugin: require('../MapStore2/web/client/plugins/ScaleBox'),
        ZoomAllPlugin: require('../MapStore2/web/client/plugins/ZoomAll'),
        ToolbarPlugin: require('../MapStore2/web/client/plugins/Toolbar'),
        BackgroundSwitcherPlugin: require('../MapStore2/web/client/plugins/BackgroundSwitcher'),
        IdentifyPlugin: require('../MapStore2/web/client/plugins/Identify'),
        MeasurePlugin: require('../MapStore2/web/client/plugins/Measure'),
        SettingsPlugin: require('../MapStore2/web/client/plugins/Settings'),
        MousePositionPlugin: require('../MapStore2/web/client/plugins/MousePosition'),
        LocatePlugin: require('../MapStore2/web/client/plugins/Locate'),
        //SearchPlugin: require('../MapStore2/web/client/plugins/Search'),
        SearchPlugin: require('./plugins/BruSearch/Search'),
    },
    requires: {}
};
