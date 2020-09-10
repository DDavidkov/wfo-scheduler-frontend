import React, { useState, useEffect } from "react";
import "./grid-template.scss";
import { Grid } from "./grid";
import { TextInput } from "./inputs";
import { Button } from "./button";
import { Popup } from "./popup";

export const GridTemplate = ({
  data,
  searchPlaceholder,
  addText,
  searchField,
  addContent,
  allowAdd = true,
  ...rest
}) => {
  const [searchText, setSearchText] = useState();
  const [gridData, setGridData] = useState(data);
  const [addDialogVisible, setAddDialogVisible] = useState();

  useEffect(() => {
    if (!searchField || !searchText) {
      setGridData(data);
    } else {
      setGridData(
        data.filter((d) =>
          (d[searchField] || "").toLowerCase().includes(searchText)
        )
      );
    }
  }, [searchText, data, searchField]);

  return (
    <>
      <div className="grid-template-container">
        <div className="grid-template-action-bar">
          <TextInput
            placeholder={searchPlaceholder}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {allowAdd && (
            <Button
              text={addText}
              onClick={() => {
                setAddDialogVisible(true);
              }}
            />
          )}
        </div>
        <Grid data={gridData} {...rest} />
      </div>
      {addDialogVisible && (
        <Popup
          content={addContent}
          onHide={() => {
            setAddDialogVisible(false);
          }}
        />
      )}
    </>
  );
};
