import React from "react";

const Table = props => {
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-row">
          {props.cols.map(col => (
            <th className="table-head-cell" key={col.name}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {props.rows.map(row => (
          <tr className="table-row" key={row.id}>
            {props.cols.map(col => {
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

export default Table;
