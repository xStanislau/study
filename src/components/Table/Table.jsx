import React from "react";
import PropTypes from "prop-types";

const Table = ({ cols, rows }) => {
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-row">
          {cols.map(col => (
            <th className="table-head-cell" key={col.name}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {rows.map(row => (
          <tr className="table-row" key={row.id}>
            {cols.map(col => {
              return (
                <td className="table-cell" key={col.name}>
                  {row[col.name]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  cols: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
};

export default Table;
