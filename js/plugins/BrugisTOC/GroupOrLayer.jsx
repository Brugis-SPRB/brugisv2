/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
var Node = require('../../../MapStore2/web/client/components/TOC/Node');
var VisibilityCheck = require('../../../MapStore2/web/client/components/TOC/fragments/VisibilityCheck');
var Title = require('../../../MapStore2/web/client/components/TOC/fragments/Title');
var InlineSpinner = require('../../../MapStore2/web/client/components/misc/spinners/InlineSpinner/InlineSpinner');
var WMSLegend = require('../../../MapStore2/web/client/components/TOC/fragments/WMSLegend');
const LayersTool = require('../../../MapStore2/web/client/components/TOC/fragments/LayersTool');
const SettingsModal = require('../../../MapStore2/web/client/components/TOC/fragments/SettingsModal');
var GroupTitle = require('../../../MapStore2/web/client/components/TOC/fragments/GroupTitle');
var GroupChildren = require('../../../MapStore2/web/client/components/TOC/fragments/GroupChildren');

const DefaultGroup = require('../../../MapStore2/web/client/components/TOC/DefaultGroup');
const DefaultLayer = require('../../../MapStore2/web/client/components/TOC/DefaultLayer');

var GroupOrLayer = React.createClass({
    propTypes: {
        node: React.PropTypes.object,
        settings: React.PropTypes.object,
        groupPropertiesChangeHandler: React.PropTypes.func,
        groupVisibilityCheckbox: React.PropTypes.bool,
        propertiesChangeHandler: React.PropTypes.func,
        style: React.PropTypes.object,
        onSort: React.PropTypes.func,
        onToggle: React.PropTypes.func,
        onToggleGroup: React.PropTypes.func,
        onSettings: React.PropTypes.func,
        style: React.PropTypes.object,
        sortableStyle: React.PropTypes.object,
        hideSettings: React.PropTypes.func,
        updateSettings: React.PropTypes.func,
        updateNode: React.PropTypes.func,
        activateLegendTool: React.PropTypes.bool,
        activateSettingsTool: React.PropTypes.bool,
        opacityText: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
        saveText: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
        closeText: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
        modalOptions: React.PropTypes.object,
        settingsOptions: React.PropTypes.object,
        visibilityCheckType: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            style: {},
            sortableStyle: {},
            propertiesChangeHandler: () => {},
            groupPropertiesChangeHandler: () => {},
            onToggle: () => {},
            onToggleGroup:  () => {},
            onSettings: () => {},
            activateLegendTool: false,
            activateSettingsTool: false,
            modalOptions: {},
            settingsOptions: {},
            style: {
                marginBottom: "16px",
                cursor: "pointer"
            },
            visibilityCheckType: "glyph"
        };
    },
    renderCollapsible() {
        if (this.props.node && this.props.node.type === 'wms') {
            return <WMSLegend position="collapsible"/>;
        }
        return [];
    },
    renderTools() {
        const tools = [];
        if (this.props.activateSettingsTool) {
            tools.push(
                <LayersTool key="toolsettings"
                        style={{"float": "right", cursor: "pointer"}}
                        glyph="adjust"
                        onClick={(node) => this.props.onSettings(node.id, "layers",
                            {opacity: parseFloat(node.opacity !== undefined ? node.opacity : 1)})}/>
            );
            if (this.props.settings && this.props.settings.node === this.props.node.id) {
                tools.push(
                    <SettingsModal key="toolsettingsmodal" options={this.props.modalOptions}
                               {...this.props.settingsOptions}
                               hideSettings={this.props.hideSettings}
                               settings={this.props.settings}
                               updateSettings={this.props.updateSettings}
                               updateNode={this.props.updateNode}
                               opacityText={this.props.opacityText}
                               saveText={this.props.saveText}
                               closeText={this.props.closeText}/>
                );
            }
        }
        if (this.props.activateLegendTool) {
            tools.push(
                <LayersTool key="toollegend"
                        ref="target"
                        style={{"float": "right", cursor: "pointer"}}
                        glyph="list"
                        onClick={(node) => this.props.onToggle(node.id, node.expanded)}/>
                );
        }
        return tools;
    },
    render() {
        let {children, propertiesChangeHandler, onToggle, ...other } = this.props;

        if (this.props.node.type === 'group') {
            return (
                <Node className="toc-default-group" sortableStyle={this.props.sortableStyle} style={this.props.style} type="group" {...other}>
                    { this.props.groupVisibilityCheckbox &&
                      <VisibilityCheck
                                key="visibility"
                                checkType={this.props.visibilityCheckType}
                                propertiesChangeHandler={this.props.groupPropertiesChangeHandler}/>}
                    <GroupTitle onClick={this.props.onToggleGroup}/>
                    <GroupChildren onSort={this.props.onSort} position="collapsible">
                        <Node type="layer" style={{marginLeft: "9px"}}>
                            <VisibilityCheck checkType={this.props.visibilityCheckType} propertiesChangeHandler={this.props.propertiesChangeHandler}/>
                            <Title onClick={this.props.onToggle}/>
                            <InlineSpinner loading={this.props.node.loading}/>
                            {this.renderCollapsible()}
                            {this.renderTools()}
                        </Node>
                    </GroupChildren>
                </Node>
            );
        } else {
            return (
                <Node className="toc-default-layer" sortableStyle={this.props.sortableStyle} style={this.props.style} type="layer" {...other}>
                    <VisibilityCheck checkType={this.props.visibilityCheckType} propertiesChangeHandler={this.props.propertiesChangeHandler}/>
                    <Title onClick={this.props.onToggle}/>
                    <InlineSpinner loading={this.props.node.loading}/>
                    {this.renderCollapsible()}
                    {this.renderTools()}
                </Node>
            );
        }
    }
});

module.exports = GroupOrLayer;
