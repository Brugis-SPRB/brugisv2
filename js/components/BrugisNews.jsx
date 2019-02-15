const React = require('react');
const PropTypes = require('prop-types');
const {Accordion, Panel, Grid, Row} = require('react-bootstrap');

class BrugisNews extends React.Component {
    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string,
        rows: PropTypes.array,
        columns: PropTypes.array
    };

    static defaultProps = {
        name: 'Brugis',
        className: 'bg-news',
        style: {},
        rows: [
            { id: 0, title: "Le P.R.A.S.S est recalé en URBIS3.1", link: "http://www.google.be" },
            { id: 1, title: "URBIS est maintenant complètement intégré à OSM", link: "http://www.google.be" },
            { id: 2, title: "Fait pas l'con marcel", link: "http://www.google.be" }
        ],
        columns: [
            { key: "id", name: "ID", editable: true },
            { key: "title", name: "Title", editable: true },
            { key: "complete", name: "Complete", editable: true }
        ]
    };

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
      this.setState(state => {
        const rows = state.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
          rows[i] = { ...rows[i], ...updated };
        }
        return { rows };
      });
    };

    render() {
        return (
                <Row>
                    <Accordion>
                            <Panel header="Collapsible Group Item #1" eventKey="1">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </Panel>
                            <Panel header="Collapsible Group Item #2" eventKey="2">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </Panel>
                            <Panel header="Collapsible Group Item #3" eventKey="3">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </Panel>
                    </Accordion>
                </Row>
        );
    }
}

module.exports = BrugisNews;
