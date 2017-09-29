
const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');
const {createSelector} = require('reselect');

const assign = require('object-assign');

const HelpWrapper = require('../../../MapStore2/web/client/plugins/help/HelpWrapper');
const Message = require('../../../MapStore2/web/client/plugins/locale/Message');

const {resultsPurge, resetSearch, addMarker, searchTextChanged} = require("../../../MapStore2/web/client/actions/search");

const {textSearch} = require("./urbis_search_api");
const {changeMapView} = require('../../../MapStore2/web/client/actions/map');

const searchSelector = createSelector([
    state => state.search || null
], (searchState) => ({
    searchText: searchState ? searchState.searchText : ""
}));

const SearchBar = connect(searchSelector, {
    onSearch: textSearch,
    onPurgeResults: resultsPurge,
    onSearchReset: resetSearch,
    onSearchTextChange: searchTextChanged
})(require("../../../MapStore2/web/client/components/mapcontrols/search/SearchBar"));

const {mapSelector} = require('../../../MapStore2/web/client/selectors/map');
const {isArray} = require('lodash');

const MediaQuery = require('react-responsive');

const selector = createSelector([
    mapSelector,
    state => state.search || null
], (mapConfig, searchState) => ({
    mapConfig,
    results: searchState ? searchState.results : null
}));

const UrbisResultList = connect(selector, {
    onItemClick: changeMapView,
    addMarker: addMarker,
    afterItemClick: resultsPurge
})(require('./UrbisResultList'));

const ToggleButton = require('../../../MapStore2/web/client/plugins/searchbar/ToggleButton');

const SearchPlugin = connect((state) => ({
    enabled: state.controls && state.controls.search && state.controls.search.enabled || false
}))(React.createClass({
    propTypes: {
        withToggle: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
        enabled: PropTypes.bool
    },
    getDefaultProps() {
        return {
            withToggle: false,
            enabled: true
        };
    },
    getSearchAndToggleButton() {
        const search = <SearchBar key="seachBar" {...this.props}/>;
        if (this.props.withToggle === true) {
            return [<ToggleButton/>].concat(this.props.enabled ? [search] : null);
        }
        if (isArray(this.props.withToggle)) {
            return (
                    <span><MediaQuery query={"(" + this.props.withToggle[0] + ")"}>
                        <ToggleButton/>
                        {this.props.enabled ? search : null}
                    </MediaQuery>
                    <MediaQuery query={"(" + this.props.withToggle[1] + ")"}>
                        {search}
                    </MediaQuery>
                </span>
            );
        }
        return search;
    },
    render() {
        return (<span>
            <HelpWrapper
                id="search-help"
                key="seachBar-help"
                    helpText={<Message msgId="helptexts.searchBar"/>}>
                    {this.getSearchAndToggleButton()}
                </HelpWrapper>
                <UrbisResultList key="nominatimresults"/>
            </span>
        );
    }
}));

module.exports = {
    SearchPlugin: assign(SearchPlugin, {
        OmniBar: {
            name: 'search',
            position: 1,
            tool: true,
            priority: 1
        }
    }),
    reducers: {
        search: require('../../../MapStore2/web/client/reducers/search'),
        mapInfo: require('../../../MapStore2/web/client/reducers/mapInfo')
    }
};
