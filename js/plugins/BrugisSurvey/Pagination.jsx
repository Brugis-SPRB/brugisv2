import React, { PropTypes } from 'react';
var {ButtonGroup, Button} = require('react-bootstrap');
var _ = require('lodash');
const firstIcon = require('./img/noun_arrow first_839194.svg');
const priorIcon = require('./img/noun_arrow prior_839193.svg');
const nextIcon = require('./img/noun_Arrow next_839191.svg');
const lastIcon = require('./img/noun_arrow last_839192.svg');
// const Message = require('../../../MapStore2/web/client/plugins/locale/Message');

class BrugisPagination extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        onChangePage: PropTypes.func.isRequired,
        initialPage: PropTypes.number,
        surveyUpdate: PropTypes.number,
        bsSize: PropTypes.string
    };

    static contextTypes = {
      intl: PropTypes.object.isRequired
    };

    static defaultProps = {
        initialPage: 1,
        bsSize: "small"
    };

    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        this.setPage(this.props.initialPage);
    }

    componentWillReceiveProps(newProps) {
        if ( this.props.surveyUpdate < newProps.surveyUpdate ) {
            this.updatePage(this.state.pager.currentPage);
        }
    }

    getPager(totalItems, currentPageParam, pageSizeParam) {
        var totalPages;
        var startPage;
        var endPage;
        var startIndex;
        var endIndex;
        var pages;
        var currentPage;
        var pageSize;

        // default to first page
        currentPage = currentPageParam || 1;

        // default page size is 10
        pageSize = pageSizeParam || 5;

        // calculate total pages
        totalPages = Math.ceil(totalItems / pageSize);


        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        startIndex = (currentPage - 1) * pageSize;
        endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        pages = _.range(startPage, endPage + 1);
        // create an array of pages to ng-repeat in the pager control

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;

        return (
          <ButtonGroup block id="paginationButtons">
            <Button
              bsSize={this.props.bsSize}
              bsStyle="primary"
              title={this.context.intl.formatMessage({id: 'brugisSurvey.first'})}
              disabled={pager.currentPage === 1 ? true : false}
              onClick={() => this.setPage(1)}>
              <img src={firstIcon} height="45" width="38"></img>
            </Button>
            <Button
              bsSize={this.props.bsSize}
              bsStyle="primary"
              title={this.context.intl.formatMessage({id: 'brugisSurvey.prev'})}
              disabled={pager.currentPage === 1 ? true : false}
              onClick={() => this.setPage(pager.currentPage - 1)}>
              <img src={priorIcon} height="45" width="38"></img>
            </Button>
            {pager.pages.map((page, index) =>
                <Button
                  bsSize={this.props.bsSize}
                  bsStyle="primary"
                  active={pager.currentPage === page ? true : false}
                  onClick={() => this.setPage(page)} >{index + 1}</Button>
            )}
            <Button
              bsSize={this.props.bsSize}
              bsStyle="primary"
              title={this.context.intl.formatMessage({id: 'brugisSurvey.next'})}
              disabled={pager.currentPage === pager.totalPages ? true : false}
              onClick={() => this.setPage(pager.currentPage + 1)}>
              <img src={nextIcon} height="45" width="38"></img>
            </Button>
            <Button
              bsSize={this.props.bsSize}
              bsStyle="primary"
              title={this.context.intl.formatMessage({id: 'brugisSurvey.last'})}
              disabled={pager.currentPage === pager.totalPages ? true : false}
              onClick={() => this.setPage(pager.totalPages)}>
              <img src={lastIcon} height="45" width="38"></img>
            </Button>
          </ButtonGroup>
        );
    }

    updatePage(page) {
        var items = this.props.items;
        var pager = this.state.pager;
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        // get new pager object for specified page
        pager = this.getPager(items.length, page);

        // get new page of items from items array

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        this.props.onChangePage(pageOfItems);
    }

    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items.length, page);

        // get new page of items from items array

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        this.props.onChangePage(pageOfItems);
    }
}

module.exports = BrugisPagination;
