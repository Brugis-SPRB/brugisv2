/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
const PropTypes = require('prop-types');
var Node = require('../../../MapStore2/web/client/components/TOC/Node');
var VisibilityCheck = require('../../../MapStore2/web/client/components/TOC/fragments/VisibilityCheck');
var Title = require('../../../MapStore2/web/client/components/TOC/fragments/Title');
var InlineSpinner = require('../../../MapStore2/web/client/components/misc/spinners/InlineSpinner/InlineSpinner');
var WMSLegend = require('../../../MapStore2/web/client/components/TOC/fragments/WMSLegend');
const LayersTool = require('../../../MapStore2/web/client/components/TOC/fragments/LayersTool');
const SettingsModal = require('../../../MapStore2/web/client/components/TOC/fragments/SettingsModal');
var GroupTitle = require('../../../MapStore2/web/client/components/TOC/fragments/GroupTitle');
var GroupChildren = require('../../../MapStore2/web/client/components/TOC/fragments/GroupChildren');

var DefaultLayer = require('../../../MapStore2/web/client/components/TOC/DefaultLayer');

const Message = require('../../../MapStore2/web/client/plugins/locale/Message');

var GroupOrLayer = React.createClass({
    propTypes: {
        node: PropTypes.object,
        settings: PropTypes.object,
        groupPropertiesChangeHandler: PropTypes.func,
        groupVisibilityCheckbox: PropTypes.bool,
        propertiesChangeHandler: PropTypes.func,
        onSort: PropTypes.func,
        onToggle: PropTypes.func,
        onToggleGroup: PropTypes.func,
        onSettings: PropTypes.func,
        style: PropTypes.object,
        sortableStyle: PropTypes.object,
        hideSettings: PropTypes.func,
        updateSettings: PropTypes.func,
        updateNode: PropTypes.func,
        activateLegendTool: PropTypes.bool,
        activateSettingsTool: PropTypes.bool,
        opacityText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        saveText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        modalOptions: PropTypes.object,
        settingsOptions: PropTypes.object,
        visibilityCheckType: PropTypes.string
    },
    getDefaultProps() {
        return {
            sortableStyle: {},
            propertiesChangeHandler: () => {},
            groupPropertiesChangeHandler: () => {},
            onToggle: () => {},
            onToggleGroup: () => {},
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
        if (this.props.node) {
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

                        <DefaultLayer
                                settingsOptions={this.props.settingsOptions}
                                onToggle={this.props.onToggle}
                                onSettings={this.props.onSettings}
                                propertiesChangeHandler={this.props.propertiesChangeHandler}
                                hideSettings={this.props.hideSettings}
                                settings={this.props.settings}
                                updateSettings={this.props.updateSettings}
                                updateNode={this.props.updateNode}
                                visibilityCheckType={this.props.visibilityCheckType}
                                activateLegendTool={this.props.activateLegendTool}
                                activateSettingsTool={this.props.activateSettingsTool}
                                opacityText={<Message msgId="opacity"/>}
                                saveText={<Message msgId="save"/>}
                                closeText={<Message msgId="close"/>}/>
                        </GroupChildren>
                    </Node>
                    /*
                    <DefaultGroup onSort={this.props.onSort}
                        propertiesChangeHandler={this.props.groupPropertiesChangeHandler}
                        onToggle={this.props.onToggleGroup}
                        style={this.props.groupStyle}
                        groupVisibilityCheckbox={true}
                        visibilityCheckType={this.props.visibilityCheckType}>

                        <DefaultLayer
                                settingsOptions={this.props.settingsOptions}
                                onToggle={this.props.onToggleLayer}
                                onSettings={this.props.onSettings}
                                propertiesChangeHandler={this.props.layerPropertiesChangeHandler}
                                hideSettings={this.props.hideSettings}
                                settings={this.props.settings}
                                updateSettings={this.props.updateSettings}
                                updateNode={this.props.updateNode}
                                visibilityCheckType={this.props.visibilityCheckType}
                                activateLegendTool={this.props.activateLegendTool}
                                activateSettingsTool={this.props.activateSettingsTool}
                                opacityText={<Message msgId="opacity"/>}
                                saveText={<Message msgId="save"/>}
                                closeText={<Message msgId="close"/>}/>

                    </DefaultGroup>
                    */
                );
                /*
                return (
                    <Node className="toc-default-group" sortableStyle={this.props.sortableStyle} style={this.props.style} type="group" {...other}>
                        { this.props.groupVisibilityCheckbox &&
                          <VisibilityCheck
                                    key="visibility"
                                    checkType={this.props.visibilityCheckType}
                                    propertiesChangeHandler={this.props.groupPropertiesChangeHandler}/>}
                        <GroupTitle onClick={this.props.onToggleGroup}/>
                        <GroupChildren onSort={this.props.onSort} position="collapsible">
                            <Node type="layer" >
                                <VisibilityCheck checkType={this.props.visibilityCheckType} propertiesChangeHandler={this.props.propertiesChangeHandler}/>
                                <Title onClick={this.props.onToggle}/>
                                <InlineSpinner loading={this.props.node.loading}/>
                                {this.renderCollapsible()}
                                {this.renderTools()}
                            </Node>
                        </GroupChildren>
                    </Node>
                );
                */
                /*
                return (
                    <Node className="toc-default-group" sortableStyle={this.props.sortableStyle} style={this.props.style} type="group" {...other}>
                        { this.props.groupVisibilityCheckbox &&
                          <VisibilityCheck
                                    key="visibility"
                                    checkType={this.props.visibilityCheckType}
                                    propertiesChangeHandler={this.props.groupPropertiesChangeHandler}/>}
                        <GroupTitle onClick={this.props.onToggleGroup}/>
                        <GroupChildren onSort={this.props.onSort} position="collapsible">
                            <Node type="layer" >
                                <VisibilityCheck checkType={this.props.visibilityCheckType} propertiesChangeHandler={this.props.propertiesChangeHandler}/>
                                <Title onClick={this.props.onToggle}/>
                                <InlineSpinner loading={this.props.node.loading}/>
                                {this.renderCollapsible()}
                                {this.renderTools()}
                            </Node>
                        </GroupChildren>
                    </Node>
                );
                */
            }
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
        return null;
    }
});

module.exports = GroupOrLayer;
