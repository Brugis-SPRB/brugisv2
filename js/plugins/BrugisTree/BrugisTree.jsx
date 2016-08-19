const React = require('react');
const assign = require('object-assign');
const {connect} = require('react-redux');
const layersIcon = require('../../../MapStore2/web/client/plugins/toolbar/assets/img/layers.png');
const {loadBrugisTreeConfig} = require('./actions');

const BrugisTree = React.createClass({
    propTypes: {
        expanded: React.PropTypes.bool,
        loadTreeData: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            expanded: true,
            loadTreeData: () => {}
        };
    },
    componentWillMount() {
        this.props.loadTreeData();
    },
    render() {
        if (!this.props.brugistreedata) {
            return (
                <ul>
                    <li>NO DATA</li>
                </ul>
            )
        }
        return (
            <ul>
                {
                    this.props.brugistreedata.map((alayer) => {
                        return <li>alayer</li>;
                    })
                }
            </ul>
        );
    }
});


const BrugisTreePlugin = connect(() => ({}), {
    loadTreeData: loadBrugisTreeConfig
})(BrugisTree);

module.exports = {
    BrugisTreePlugin: assign(BrugisTreePlugin, {
        OmniBar: {
            name: 'Tree',
            position: 1,
            tool: true,
            priority: 1
        },
        Toolbar: {
            name: 'brugistree',
            position: 9,
            exclusive: true,
            panel: true,
            tooltip: "brugistree",
            wrap: true,
            title: 'BrugisTree',
            icon: <img src={layersIcon}/>,
            hide: true
        }
    }),
    reducers: {
        brugisTree : require('./reducers')
    }
};
