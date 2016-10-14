const axios = require('axios');

let localXmlTree = 'wmsaatl.xml';

const BRUGIS_TREE_LOAD_START = 'BRUGIS_TREE_LOAD_START';
const BRUGIS_TREE_LOADED = 'BRUGIS_TREE_LOADED';
const BRUGIS_TREE_LOAD_ERROR = 'BRUGIS_TREE_LOAD_ERROR';
const BRUGIS_TREE_NODE_TOGGLE = 'BRUGIS_TREE_NODE_TOGGLE';

function brugisTreeLoaded(info) {
    return {
        type: BRUGIS_TREE_LOADED,
        info
    };
}
function brugisTreeLoadError(error) {
    return {
        type: BRUGIS_TREE_LOAD_ERROR,
        error
    };
}
function brugisTreeLoadStart() {
    return {
        type: BRUGIS_TREE_LOAD_START
    };
}
function brugisTreeNodeToggle(node) {
    return {
        type: BRUGIS_TREE_NODE_TOGGLE,
        node
    };
}

function loadBrugisTreeConfig() {
    return (dispatch) => {
        dispatch(brugisTreeLoadStart());
        return axios.get(localXmlTree).then((response) => {
            if (typeof response.data === 'object') {
                dispatch(brugisTreeLoaded(response.data));
            } else {
                try {
                    require.ensure(['../../../MapStore2/web/client/utils/ogc/WMS'], () => {
                        const {unmarshaller} = require('../../../MapStore2/web/client/utils/ogc/WMS');
                        let json = unmarshaller.unmarshalString(response.data);
                        dispatch(brugisTreeLoaded(json));
                    });
                } catch(e) {
                    dispatch(brugisTreeLoadError('Configuration file broken (' + localXmlTree + '): ' + e.message));
                }
            }
        }).catch((e) => {
            dispatch(brugisTreeLoadError(e));
        });
    };
}

module.exports = {
    BRUGIS_TREE_LOAD_START,
    BRUGIS_TREE_LOADED,
    BRUGIS_TREE_LOAD_ERROR,
    BRUGIS_TREE_NODE_TOGGLE,
    loadBrugisTreeConfig,
    brugisTreeNodeToggle
};
