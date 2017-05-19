/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {Button, Form, FormGroup, FormControl, InputGroup} = require('react-bootstrap');


const SaveButton = React.createClass({
    propTypes: {
        onSave: React.PropTypes.func,
        onLoad: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            onSave: () => {},
            onLoad: () => {}
        };
    },
    getInitialState() {
        return {
            savename: '',
            loadname: ''
        };
    },
    onChangeSaveName(e) {
        this.setState({savename: e.target.value});
    },
    onChangeLoadName(e) {
        this.setState({loadname: e.target.options[e.target.selectedIndex].value});
    },
    renderSaved() {
        return [<option key="---" value="">---</option>, ...Object.keys(localStorage).filter((key) => key.indexOf('mapstore.localmaps.') === 0)
            .map((key) => key.substring('mapstore.localmaps.'.length))
            .map((name) => <option key={name} value={name}>{name}</option>)];
    },
    render() {
        return (<div className="save">
            <Form>
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" placeholder="Map Name" onChange={this.onChangeSaveName} />
                    <InputGroup.Button>
                        <Button
                          id="input-dropdown-addon"
                          title="Save Map"
                          onClick={this.save}
                          style={this.buttonStyle(this.state.savename === '')}
                          disabled={this.state.savename === ''}
                        >
                        Save
                        </Button>
                    </InputGroup.Button>
                  </InputGroup>
                  <InputGroup>
                      <FormControl componentClass="select" placeholder="Map Name" onChange={this.onChangeLoadName}>
                          {this.renderSaved()}
                      </FormControl>
                      <InputGroup.Button>
                        <Button onClick={this.load}
                            style={this.buttonStyle(this.state.loadname === '')}
                            disabled={this.state.loadname === ''}>
                            Load
                        </Button>
                      </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
             </Form>
            </div>);
    },
    buttonStyle: function(disabled) {
        return {
            "color": disabled ? "grey" : "inherit"
        };
    },
    inputStyle: function() {
        return {
            border: "1px solid"
        };
    },
    load() {
        this.props.onLoad(this.state.loadname);
    },
    save() {
        this.props.onSave(this.state.savename);
    }
});

module.exports = SaveButton;
