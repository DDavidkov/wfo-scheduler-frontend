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

  const { wfoRequests } = useSelector(state => ({
    wfoRequests: state.wfoRequests.wfoRequests
  }));

  useEffect(() => {
    dispatch(setRequests(TABLE_DATA));
  }, []);

  return (
    <Table
      data={wfoRequests}
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
