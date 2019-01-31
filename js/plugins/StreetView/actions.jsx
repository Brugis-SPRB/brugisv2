const UPDATE_POSITION = 'UPDATE_POSITION';

function updateLocation(position) {
    return {
        type: UPDATE_POSITION,
        position
    };
}

module.exports = {
    UPDATE_POSITION,
    updateLocation
};
