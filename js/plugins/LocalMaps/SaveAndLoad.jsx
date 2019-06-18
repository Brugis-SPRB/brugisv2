
const React = require('react');
const PropTypes = require('prop-types');
const {Form, FormGroup, FormControl, InputGroup, ControlLabel, Button} = require('react-bootstrap');
const FileSaver = require('file-saver');
const LOCAL_MAPS_PREFIX = 'mapstore.localmaps.';
// const Message = require('../../../MapStore2/web/client/plugins/locale/Message');
const saveIcon = require('./img/noun_Save_2433496.svg');
const importIcon = require('./img/noun_Download_2603364.svg');
const loadIcon = require('./img/noun_loader_2514093.svg');
const deleteIcon = require('./img/noun_Delete_2595537.svg');
const exportIcon = require('./img/noun_Upload_2603385.svg');

class SaveButton extends React.Component {

    static propTypes = {
        onSave: PropTypes.func,
        onLoad: PropTypes.func,
        onDel: PropTypes.func,
        onImport: PropTypes.func
    };

    static contextTypes = {
     intl: PropTypes.object.isRequired
    };

    static defaultProps = {
        onSave: () => {},
        onLoad: () => {},
        onDel: () => {},
        onImport: () => {}
    };

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
                <FormGroup
                 id="saveAndImportFormGroup">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Map Name"
                      onChange={this.onChangeSaveName.bind(this)} />
                    <InputGroup.Addon
                      id="savAndImportInputGroup">
                        <Button
                          id="saveButton"
                          title={this.context.intl.formatMessage({id: 'localmaps.save'})}
                          bsStyle="primary"
                          onClick={this.save.bind(this)}
                          style={this.buttonStyle(this.state.savename === '')}>
                            <img src={saveIcon} height="38" width="38"></img>
                        </Button>


                        &nbsp;&nbsp;
                        <ControlLabel
                            htmlFor="fileUpload"
                            style={{ cursor: "pointer" }}
                            title={this.context.intl.formatMessage({id: 'localmaps.import'})}>
                              <img src={importIcon} height="38" width="38"></img>
                            <FormControl
                                id="fileUpload"
                                type="file"
                                accept=".brugis"
                                onChange={this.importMap.bind(this)}
                                style={{
                                  width: "0.1px",
                                  height: "0.1px",
                                  opacity: 0,
                                  overflow: "hidden",
                                  position: "absolute",
                                  "z-index": -1
                                 }}
                            />
                        </ControlLabel>
                    </InputGroup.Addon>
                  </InputGroup><br/>
                  <InputGroup>
                      <FormControl componentClass="select" placeholder="Map Name" onChange={this.onChangeLoadName.bind(this)}>
                          {this.renderSaved()}
                      </FormControl>

                      <InputGroup.Addon>
                        <Button
                          id="loadButton"
                          disabled={this.state.loadname === ''}
                          title={this.context.intl.formatMessage({id: 'localmaps.load'})}
                          bsStyle="primary"
                          onClick={this.load.bind(this)}
                          style={this.buttonStyle(this.state.loadname === '')}>
                            <img src={loadIcon} height="38" width="38"></img>
                        </Button>
                        <Button
                          id="deleteButton"
                          disabled={this.state.loadname === ''}
                          title={this.context.intl.formatMessage({id: 'localmaps.delete'})}
                          bsStyle="primary"
                          onClick={this.del.bind(this)}
                          style={this.buttonStyle(this.state.loadname === '')}>
                            <img src={deleteIcon} height="38" width="38"></img>
                        </Button>
                        <Button
                          id="exportButton"
                          disabled={this.state.loadname === ''}
                          title={this.context.intl.formatMessage({id: 'localmaps.export'})}
                          bsStyle="primary"
                          onClick={this.exportMap.bind(this)}
                          style={this.buttonStyle(this.state.loadname === '')}>
                            <img src={exportIcon} height="38" width="38"></img>
                        </Button>
                      </InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
             </Form>
            </div>);
    }

    buttonStyle = (disabled) => {
        return {
            "color": disabled ? "grey" : "inherit",
            "cursor": "pointer"
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
        FileSaver.saveAs(blob, this.state.loadname + ".brugis");
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
}

module.exports = SaveButton;
