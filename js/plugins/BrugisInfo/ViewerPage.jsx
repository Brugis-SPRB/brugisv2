/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');

module.exports = React.createClass({
    propTypes: {
        format: PropTypes.string,
        viewers: PropTypes.object,
        layers: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        response: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
        onChangeDrawingStatus: PropTypes.func,
        locale: PropTypes.string
    },

    onTouchStart(event) {
        const touch = event.touches[0];
        this.startX = touch.pageX;
        this.startY = touch.pageY;
        this.setState({scrolling: false});
    },
    onTouchMove(event) {
        const touch = event.touches[0];
        const div = event.currentTarget;
        if (this.state.scrolling) {
            event.stopPropagation();
            return;
        }
        // identify direction
        if (Math.abs(this.startY - touch.pageY) > Math.abs(this.startX - touch.pageX)) {
            // vertical scrolling
            event.stopPropagation();
            return;
        }
        // > 0 left, < 0
        const dir = this.startX < touch.pageX ? "left" : "right";

        if (div && dir === "left" && ((div.clientWidth < div.scrollWidth && div.scrollLeft !== 0) )) {
            // left border not reached
            this.setState({scrolling: true});
            event.stopPropagation();

        } else if (div && dir === "right" && (div.clientWidth + div.scrollLeft !== div.scrollWidth) ) {
            // right border not reached
            this.setState({scrolling: true});
            event.stopPropagation();
        }

    },
    onTouchEnd() {
        this.setState({scrolling: false});
    },
    renderPage(response) {
        const Viewer = this.props.viewers[this.props.format];
        if (Viewer) {
            return <Viewer response={response} layers={this.props.layers} locale={this.props.locale} onChangeDrawingStatus={this.props.onChangeDrawingStatus} />;
        }
        return null;
    },
    render() {
        return (<div
            style={{width: "100%", height: "100%", overflow: "auto"}}
            onTouchMove={this.onTouchMove}
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}>
                {this.renderPage(this.props.response)}
        </div>);
    }
});
