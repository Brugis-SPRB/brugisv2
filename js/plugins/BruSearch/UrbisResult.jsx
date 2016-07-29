
var React = require('react');


let UrbisResult = React.createClass({
    propTypes: {
        item: React.PropTypes.object,
        onItemClick: React.PropTypes.func
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
                {item.address.number} {item.address.street.name} / {item.address.street.municipality} : {item.address.street.postCode}
            </div>
        );
    }
});

module.exports = UrbisResult;
