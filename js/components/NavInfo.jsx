
const React = require('react');
const PropTypes = require('prop-types');
const {trimStart} = require('lodash');
const {Nav, NavItem} = require('react-bootstrap');

class NavInfo extends React.Component {
   static propTypes = {
       src: PropTypes.string,
       link: PropTypes.string,
       label: PropTypes.node,
       style: PropTypes.object,
       items: PropTypes.array,
       links: PropTypes.array,
       navProps: PropTypes.object,
       minWidth: PropTypes.number
   };

   static defaultProps = {
       link: 'https://www.brugis.be/',
       label: 'BruGIS',
       style: {
           position: "absolute",
           width: "124px",
           left: 0,
           bottom: 0
       },
       navProps: {
           className: "justify-content-center"
       },
       minWidth: 768
   };

   render() {
       return (
            <Nav {...this.props.navProps} justified bsStyle="pills">
                <NavItem onClick={() => this.scroolIntoView("newsId") }>
                        News !
                </NavItem>
                <NavItem onClick={() => this.scroolIntoView("contentId") }>
                        Content
                </NavItem>
                <NavItem onClick={() => this.scroolIntoView("contactId") }>
                        Contact
                </NavItem>
            </Nav>
       );
   }

   scroolIntoView = linkId => {
       const node = document.getElementById(trimStart(linkId, '#'));
       if (node && node.scrollIntoView) {
           node.scrollIntoView({behavior: 'smooth', block: 'start'});
       }
   };
}

module.exports = NavInfo;
