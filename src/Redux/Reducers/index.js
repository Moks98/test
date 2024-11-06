import { combineReducers } from "@reduxjs/toolkit";
import FlightReducer from "./FlightReducer";

const rootReducer = combineReducers({
  flights: FlightReducer,
});

export default rootReducer;
