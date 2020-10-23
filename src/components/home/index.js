import React, { useEffect } from "react";
import { Table } from "../common/table";

import { TABLE_COLUMNS, TABLE_DATA } from "../../mock-data";

import { useSelector, useDispatch } from "react-redux";
import {
  removeRequest,
  updateRequest,
  setRequests
} from "../../redux/actions/wfo-requests";

export const Home = () => {
  const dispatch = useDispatch();

  const { requests } = useSelector(state => ({
    requests: state.wfoRequests.requests
  }));

  useEffect(() => {
    dispatch(setRequests(TABLE_DATA));
  }, []);

  return (
    <Table
      data={requests}
      columns={TABLE_COLUMNS}
      deleteAction={item => {
        dispatch(removeRequest(item.id));
      }}
      editAction={item => {
        dispatch(updateRequest(item));
      }}
    />
  );
};
