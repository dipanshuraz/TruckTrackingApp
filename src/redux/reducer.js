import BlueMarker from "../marker/blue.png";
import YellowMarker from "../marker/yellow.png";
import GreenMarker from "../marker/green.png";
import RedMarker from "../marker/red.png";
import getErrorTrucks from "../utils/getTime";

import {
  FETCH_DATA_SUCCESS,
  FETCH_RUNNING_TRUCK,
  FETCH_ERROR_TRUCK,
  FETCH_IDLE_TRUCK,
  FETCH_STOPPED_TRUCK,
  SELECTED_TRUCK,
} from "./actionType";

const initialState = {
  trckDetails: [],
  runningTrck: [],
  stoppedTrck: [],
  idleTruck: [],
  selectedTruck: [],
  isSelected: false,
  idleCount: 0,
  runningCount: 0,
  stoppedCount: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        trckDetails: payload,
        totalCount: payload.length,
      };
    }

    case FETCH_RUNNING_TRUCK: {
      let runningTrck = [];
      runningTrck = state.trckDetails.filter(
        (elem) => elem.lastRunningState.truckRunningState === 1
      );
      runningTrck.forEach((elem) => {
        elem.mapMarker = GreenMarker;
      });
      return {
        ...state,
        runningTrck,
        runningCount: runningTrck.length,
      };
    }
    case FETCH_STOPPED_TRUCK: {
      let stoppedTrck = [];
      stoppedTrck = state.trckDetails.filter(
        (elem) =>
          !elem.lastWaypoint.ignitionOn &&
          elem.lastRunningState.truckRunningState === 0
      );
      stoppedTrck.forEach((elem) => (elem.mapMarker = BlueMarker));
      return {
        ...state,
        stoppedTrck,
        stoppedCount: stoppedTrck.length,
      };
    }

    case FETCH_IDLE_TRUCK: {
      let idleTruck = [];
      idleTruck = state.trckDetails.filter(
        (elem) =>
          elem.lastWaypoint.ignitionOn &&
          elem.lastRunningState.truckRunningState === 0
      );
      idleTruck.forEach((elem) => (elem.mapMarker = YellowMarker));
      return {
        ...state,
        idleTruck,
        idleCount: idleTruck.length,
      };
    }

    case SELECTED_TRUCK: {
      let selectedTruck = [];
      selectedTruck = state.trckDetails.filter((elem) =>
        payload.includes(elem.truckNumber)
      );
      console.log(selectedTruck);
      return {
        ...state,
        isSelected: selectedTruck.length === 0 ? false : true,
        selectedTruck,
      };
    }
    case FETCH_ERROR_TRUCK: {
      let errorTruck = [];
      errorTruck = state.trckDetails.filter((elem) =>
        getErrorTrucks(elem, false)
      );
      errorTruck.forEach((elem) => (elem.mapMarker = RedMarker));
      return {
        ...state,
        errorTruck,
        errorCount: errorTruck.length,
      };
    }
    default:
      return state;
  }
};
