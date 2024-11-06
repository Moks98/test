import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flights",
  initialState: {
    flights: [],
    error: null,
  },
  reducers: {
    fetchFlightsSuccess(state, action) {
      state.flights = action.payload;
      state.error = null;
    },
    fetchFlightsFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const { fetchFlightsSuccess, fetchFlightsFailure } = flightSlice.actions;
export default flightSlice.reducer;
