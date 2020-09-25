import React from "react";
import { Table } from "../common/table";

import { TABLE_DATA, TABLE_COLUMNS } from "../../mock-data";

export const Home = () => (
  <div className="application-background">
    <div className="main-container">
      <Table
        data={TABLE_DATA}
        columns={TABLE_COLUMNS}
        deleteAction={() => {}}
        editAction={() => {}}
      />
    </div>
  </div>
);
