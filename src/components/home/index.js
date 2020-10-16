import React, { useEffect } from "react";
import { Table } from "../common/table";

import { TABLE_COLUMNS, TABLE_DATA } from "../../mock-data";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteWFORequest,
  editWFORequest,
  setWFORequests
} from "../../redux/actions/wfo-requests";

export const Home = () => {
  const dispatch = useDispatch();

  const { wfoRequests } = useSelector(state => ({
    wfoRequests: state.wfoRequests.wfoRequests
  }));

  useEffect(() => {
    dispatch(setWFORequests(TABLE_DATA));
  }, []);

  return (
    <Table
      data={wfoRequests}
      columns={TABLE_COLUMNS}
      deleteAction={item => {
        dispatch(deleteWFORequest(item.id));
      }}
      editAction={item => {
        dispatch(editWFORequest(item));
      }}
    />
  );
};
