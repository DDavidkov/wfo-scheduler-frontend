import React, { useState } from "react";
import "./grid.scss";
import { YesNoDialog } from "./yes-no-dialog";
import { EditForm } from "./edit-form";

export const Grid = ({
  data = [],
  columns = [],
  onEdit,
  onDelete,
  editFields,
  actions = [],
  canEdit = true,
  canDelete = true
}) => {
  const [deleteItem, setDeleteItem] = useState();
  const [editItem, setEditItem] = useState();

  const getValue = (value) => {
    const valueType = typeof value;

    if (valueType === "boolean") {
      return value ? "Yes" : "No";
    } else if (valueType === "string") {
      const date = new Date(value);
      const isValidDate = !Number.isNaN(date.getMilliseconds());
      return isValidDate ? date.toDateString() : value;
    } else {
      return value;
    }
  };

  const getColumnCount = () => {
    const editCount = canEdit ? 1 : 0;
    const deleteCount = canDelete ? 1 : 0;
    const actionsCount = actions.length;

    return columns.length + editCount + deleteCount + actionsCount;
  };

  return (
    <>
      <table cellPadding="0" cellSpacing="0" className="table">
        <thead>
          <tr className="header-row">
            {columns.map((column) => (
              <th key={column.header} className="header-cell">
                {column.header}
              </th>
            ))}
            {canEdit && <th className="header-cell" />}
            {canDelete && <th className="header-cell" />}
            {actions.map((action) => (
              <th
                key={"action-header-" + action.header}
                className="header-cell"
              >
                {action.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((row, i) => (
              <tr key={"row-" + i} className="table-row">
                {columns.map((column, j) => (
                  <td key={"cell-" + i + "-" + j} className="table-cell">
                    {getValue(row[column.field])}
                  </td>
                ))}
                {canEdit && (
                  <td
                    className="table-cell edit-cell fa-icon"
                    onClick={() => {
                      setEditItem(row);
                    }}
                  ></td>
                )}
                {canDelete && (
                  <td
                    className="table-cell delete-cell fa-icon"
                    onClick={() => {
                      setDeleteItem(row);
                    }}
                  ></td>
                )}
                {actions.map((action) => (
                  <td
                    key={"action-cell-" + action.header}
                    className="table-cell"
                    onClick={() => {
                      if (action.isDelete) {
                        setDeleteItem(row);
                      } else {
                        action.action(row);
                      }
                    }}
                  >
                    {action.template}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="table-row">
              <td className="table-cell empty-cell" colSpan={getColumnCount()}>
                There is no data to be shown.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {deleteItem && (
        <YesNoDialog
          onYes={() => {
            onDelete && onDelete(deleteItem);
          }}
          onHide={() => {
            setDeleteItem(undefined);
          }}
          header="Are you sure you want to delete this item?"
          text={`By clicking "Yes" you will permanently delete this item.`}
        />
      )}
      {editItem && (
        <EditForm
          initialValue={editItem}
          fields={editFields}
          submit={(value) => {
            onEdit && onEdit(value);
          }}
          onHide={() => {
            setEditItem(undefined);
          }}
        />
      )}
    </>
  );
};
