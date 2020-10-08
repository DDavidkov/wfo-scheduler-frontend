import React, { useState } from "react";
import "./table.scss";

import EditForm from "./edit-form";
import YesNoDialog from "./yes-no-dialog";

export const Table = ({
  data = [],
  columns = [], // type, header, field
  editAction,
  deleteAction
}) => {
  const [deleteItem, setDeleteItem] = useState(undefined);
  const [editItem, setEditItem] = useState(undefined);

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
    <>
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
              {editAction && (
                <td
                  className="edit-cell fa-icon"
                  onClick={() => {
                    setEditItem(item);
                  }}
                />
              )}
              {deleteAction && (
                <td
                  className="delete-cell fa-icon"
                  onClick={() => {
                    setDeleteItem(item);
                  }}
                />
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {deleteItem && (
        <YesNoDialog
          header="Do you want to delete this item"
          text="If you click yes the item will be deleted"
          onYes={() => {
            deleteAction(deleteItem);
            setDeleteItem(undefined);
          }}
          onHide={() => {
            setDeleteItem(undefined);
          }}
        />
      )}
      {editItem && (
        <EditForm
          onHide={() => {
            setEditItem(undefined);
          }}
          initialValue={editItem}
          onSubmit={value => {
            editAction(value);
            console.log(value);
            setEditItem(undefined);
          }}
          fields={columns.map(column => ({
            name: column.field,
            required: true,
            label: column.header,
            placeholder: "Enter " + column.header.toLowerCase()
          }))}
        />
      )}
    </>
  );
};
