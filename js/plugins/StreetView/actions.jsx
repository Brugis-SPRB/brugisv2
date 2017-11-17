
const SHOW_STREETVIEW = 'SHOW_STREETVIEW';
const HIDE_STREETVIEW = 'HIDE_STREETVIEW';

function showStreetView(info) {
    return {
        type: SHOW_STREETVIEW,
        info
    };
}

function hideStreetView(info) {
    return {
        type: HIDE_STREETVIEW,
        info
    };
}

module.exports = {
    SHOW_STREETVIEW,
    HIDE_STREETVIEW,
    showStreetView,
    hideStreetView
};
