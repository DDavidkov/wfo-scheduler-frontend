import React from "react";
import "./table.scss";

export const Table = ({
  data = [],
  columns = [], // type, header, field
  editAction,
  deleteAction
}) => {
  const getValue = (value, type = "text") => {
    switch (type) {
      case "date":
        return value.toLocaleString();
      case "bool":
        return value ? "Yes" : "No";
      case "text":
      default:
        return value;
    }
  };

  return (
    <table className="table text-centered" cellPadding="0" cellSpacing="0">
      <thead>
        <tr className="header-row">
          {columns.map(column => (
            <th
              key={column.field}
              className="header-cell contrast-color primary-background"
            >
              {column.header}
            </th>
          ))}
          {editAction && (
            <th className="header-cell contrast-color primary-background">
              Edit
            </th>
          )}
          {deleteAction && (
            <th className="header-cell contrast-color primary-background">
              Delete
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr className="table-row" key={item.id}>
            {columns.map(column => (
              <td key={column.field} className="table-cell">
                {getValue(item[column.field], column.type)}
              </td>
            ))}
            {editAction && <td className="edit-cell fa-icon" />}
            {deleteAction && <td className="delete-cell fa-icon" />}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
