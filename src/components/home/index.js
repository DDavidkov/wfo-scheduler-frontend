import React, { useEffect } from "react";
import { Table } from "../common/table";

import { TABLE_COLUMNS } from "../../mock-data";

import { useSelector, useDispatch } from "react-redux";
import {
  removeRequest,
  updateRequest,
  fetchRequests
} from "../../redux/actions/wfo-requests";

export const Home = () => {
  const dispatch = useDispatch();

  const { requests } = useSelector(state => ({
    requests: state.wfoRequests.requests
  }));

  useEffect(() => {
    dispatch(fetchRequests());
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
