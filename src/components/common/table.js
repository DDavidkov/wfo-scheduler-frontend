import React from "react";
import "./table.scss";

export const Table = ({
  data = [],
  columns = [],
  editAction,
  deleteAction
}) => {
  return <table cellPadding="0" cellSpacing="0"></table>;
};
