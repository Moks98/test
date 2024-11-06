import axios from "axios";
import {
  fetchFlightsSuccess,
  fetchFlightsFailure,
} from "../Reducers/FlightReducer";

export const fetchFlights = () => async (dispatch) => {
  try {
    const response = await axios.get("/flights.json");
    dispatch(fetchFlightsSuccess(response.data));
  } catch (error) {
    dispatch(fetchFlightsFailure(error.toString()));
    console.error("Error fetching flights", error);
  }
};
