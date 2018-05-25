
const React = require('react');
const PropTypes = require('prop-types');
const {Button, Form, FormGroup, FormControl, InputGroup, ControlLabel, Label} = require('react-bootstrap');
const FileSaver = require('file-saver');
const LOCAL_MAPS_PREFIX = 'mapstore.localmaps.';
const Message = require('../../../MapStore2/web/client/plugins/locale/Message');

class SaveButton extends React.Component {
  
    static propTypes = {
        onSave: PropTypes.func,
        onLoad: PropTypes.func,
        onDel: PropTypes.func,
        onImport: PropTypes.func
    }

    static defaultProps = {
        onSave: () => {},
        onLoad: () => {},
        onDel: () => {},
        onImport: () => {}
    }

    constructor(props) {
      super(props);
      this.state = {
        savename: '',
        loadname: ''
      };
    }

    onChangeSaveName(e) {
        this.setState({savename: e.target.value});
    }

    onChangeLoadName(e) {
        this.setState({loadname: e.target.options[e.target.selectedIndex].value});
    }

    renderSaved() {
        return [<option key="---" value="">---</option>, ...Object.keys(localStorage).filter((key) => key.indexOf('mapstore.localmaps.') === 0)
            .map((key) => key.substring('mapstore.localmaps.'.length))
            .map((name) => <option key={name} value={name}>{name}</option>)];
    }

    render() {
        return (<div className="save">
            <Form>
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" placeholder="Map Name" onChange={this.onChangeSaveName.bind(this)} />
                    <InputGroup.Button>
                        <Button
                          id="input-dropdown-addon"
                          title="Save Map"
                          onClick={this.save.bind(this)}
                          style={this.buttonStyle(this.state.savename === '')}
                          disabled={this.state.savename === ''}
                        >
                        <Message msgId="Save"/>
                        </Button>
                    </InputGroup.Button>
                  </InputGroup>
                  <InputGroup>
                      <FormControl componentClass="select" placeholder="Map Name" onChange={this.onChangeLoadName.bind(this)}>
                          {this.renderSaved()}
                      </FormControl>
                      <InputGroup.Button>
                        <Button onClick={this.load.bind(this)}
                            style={this.buttonStyle(this.state.loadname === '')}
                            disabled={this.state.loadname === ''}>
                            <Message msgId="Load"/>
                        </Button>
                        <Button onClick={this.del.bind(this)}
                            style={this.buttonStyle(this.state.loadname === '')}
                            disabled={this.state.loadname === ''}>
                            <Message msgId="Del"/>
                        </Button>
                        <Button onClick={this.exportMap.bind(this)}
                            style={this.buttonStyle(this.state.loadname === '')}
                            disabled={this.state.loadname === ''}>
                            <Message msgId="Export"/>
                        </Button>
                        <Button
                          title="Import Map"
                        >
                          <ControlLabel htmlFor="fileUpload" style={{ cursor: "pointer" }}><Message msgId="Import"/>
                              <FormControl
                                  id="fileUpload"
                                  type="file"
                                  accept=".brugis"
                                  onChange={this.importMap.bind(this)}
                                  style={{ display: "none" }}
                              />
                          </ControlLabel>
                        </Button>
                      </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
             </Form>
            </div>);
    }

    buttonStyle = (disabled) => {
        return {
            "color": disabled ? "grey" : "inherit"
        };
    }

    inputStyle = () => {
        return {
            border: "1px solid"
        };
    }

    load() {
        this.props.onLoad(this.state.loadname);
    }

    save() {
        this.props.onSave(this.state.savename);
    }

    del() {
        this.props.onDel(this.state.loadname);
        this.setState({key: Math.random()});
    }

    exportMap() {
      const loaded = localStorage.getItem(LOCAL_MAPS_PREFIX + this.state.loadname);
      var blob = new Blob([loaded], {type: "application/json;charset=utf-8"});
      FileSaver.saveAs(blob, this.state.loadname +".brugis");
    }

    importMap(event) {
      var fr = new FileReader();
      var filename = event.target.files[0].name;
      fr.onload = (e) => {
        this.props.onImport(filename, e.target.result);
        this.setState({key: Math.random()});
      };
      fr.readAsText(event.target.files[0]);
    }
};

module.exports = SaveButton;
