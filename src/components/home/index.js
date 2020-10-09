import React, { useState } from "react";
import { Table } from "../common/table";

import { TABLE_DATA, TABLE_COLUMNS } from "../../mock-data";

export const Home = () => {
  const [data, setData] = useState([...TABLE_DATA]);
  return (
    <Table
      data={data}
      columns={TABLE_COLUMNS}
      deleteAction={item => {
        setData(data.filter(d => d.id !== item.id));
      }}
      editAction={item => {
        setData(data.map(d => (d.id !== item.id ? d : item)));
      }}
    />
  );
};
