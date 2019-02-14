
const React = require('react');
const PropTypes = require('prop-types');
const {isString, trimStart} = require('lodash');
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
           pullLeft: true
       },
       minWidth: 768
   };

   getLinks = () => {
       return (<NavItem
            key="nv1"
            target="_blank"
            href="www.google.be"
            onClick={isString(item.linkId) ? () => this.scroolIntoView(item.linkId) : () => {}}>
            {"Marcel"}
        </NavItem>);
   };

   render() {
       return (
            <Nav {...this.props.navProps}>
                <NavItem>
                        News !
                </NavItem>
                <NavItem>
                        WebServices
                </NavItem>
                <NavItem>
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
