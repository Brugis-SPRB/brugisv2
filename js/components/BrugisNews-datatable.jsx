const React = require('react');
const PropTypes = require('prop-types');
import ReactDataGrid from "react-data-grid";


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
            <ReactDataGrid
                columns={this.props.columns}
                rowGetter={i => this.props.rows[i]}
                rowsCount={3}
                onGridRowsUpdated={this.onGridRowsUpdated}
            />
        );
    }
}

module.exports = BrugisNews;
