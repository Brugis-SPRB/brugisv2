
var React = require('react');
const PropTypes = require('prop-types');

let UrbisResult = React.createClass({
    propTypes: {
        item: PropTypes.object,
        onItemClick: PropTypes.func
    },
    onClick() {
        let item = this.props.item;
        this.props.onItemClick(item);
    },
    render() {
        if (this.props.item === undefined) {
            return null;
        }
        let item = this.props.item;
        return (
            <div className="search-result NominatimResult" onClick={this.onClick}>
                <div className="icon"></div>
                {item.address.number} {item.address.street.name} {item.address.street.postCode} {item.address.street.municipality} 
            </div>
        );
    }
});

module.exports = UrbisResult;
