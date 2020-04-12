import axios from "axios";

import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  FETCH_RUNNING_TRUCK,
  FETCH_ERROR_TRUCK,
  FETCH_STOPPED_TRUCK,
  FETCH_IDLE_TRUCK,
  SELECTED_TRUCK,
} from "./actionType";

export function fetchDataStart() {
  return {
    type: FETCH_DATA_START,
  };
}
export function fetchDataSuccess(payload) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload,
  };
}
export function fetchDataFail() {
  return {
    type: FETCH_DATA_FAIL,
  };
}
export const fetchData = (payload) => (dispatch) => {
  return axios
    .get(
      "https://api.mystral.in/tt/mobile/logistics/searchTrucks?auth-company=PCH&companyId=33&deactivated=false&key=g2qb5jvucg7j8skpu5q7ria0mu&q-expand=true&q-include=lastRunningState,lastWaypoint"
    )
    .then((res) => {
      dispatch(fetchDataSuccess(res.data.data));
      dispatch(fetchRunning());
      dispatch(fetchStopped());
      dispatch(fetchError());
      dispatch(fetchIdle());
    })
    .catch((err) => {
      dispatch(fetchDataFail());
    });
};

// Filter Data Actions
export const fetchRunning = () => ({ type: FETCH_RUNNING_TRUCK });

export const fetchError = () => ({ type: FETCH_ERROR_TRUCK });

export const fetchStopped = () => ({ type: FETCH_STOPPED_TRUCK });

export const fetchIdle = () => ({ type: FETCH_IDLE_TRUCK });

// Selected Data Actions

export const selectTruck = (payload) => ({ type: SELECTED_TRUCK, payload });
