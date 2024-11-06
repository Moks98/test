import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../Redux/Actions/FlightActions";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
} from "@mui/material";
import SeatMap from "../SeatMap/SeatMap";
import PassengerList from "../PassengerList/PassengerList";
import PassengerFilter from "../PassengerFilter/PassengerFilter";
import "./FlightSelection.scss";

const FlightSelection = () => {
  const dispatch = useDispatch();
  const { flights, error } = useSelector((state) => state.flights);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [seats, setSeats] = useState([
    { id: 1, number: "1A", status: "available" },
    { id: 2, number: "1B", status: "checked-in" },
    { id: 3, number: "1C", status: "wheelchair" },
    { id: 4, number: "1D", status: "infant" },
    { id: 5, number: "1E", status: "special-meal" },
    { id: 6, number: "1F", status: "checked-in" },
    // Add more seats as needed
  ]);
  const [passengers, setPassengers] = useState([
    {
      id: 1,
      name: "John Doe",
      seatNumber: "1A",
      ancillaryServices: ["Meal"],
      checkedIn: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      seatNumber: "1B",
      ancillaryServices: ["Wheelchair"],
      checkedIn: true,
    },
    {
      id: 3,
      name: "Sam Wilson",
      seatNumber: "1C",
      ancillaryServices: ["Infant"],
      checkedIn: false,
    },
    {
      id: 4,
      name: "Alice Johnson",
      seatNumber: "1D",
      ancillaryServices: ["Special Meal"],
      checkedIn: true,
    },
    // Add more passengers as needed
  ]);
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [filters, setFilters] = useState({
    checkedIn: false,
    wheelchair: false,
    infant: false,
  });

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };

  const handleSeatSelect = (seat) => {
    const updatedSeats = seats.map((s) =>
      s.id === seat.id
        ? {
            ...s,
            status: s.status === "available" ? "checked-in" : "available",
          }
        : s
    );
    setSeats(updatedSeats);

    const updatedPassengers = passengers.map((p) =>
      p.seatNumber === seat.number ? { ...p, checkedIn: !p.checkedIn } : p
    );
    setPassengers(updatedPassengers);
  };

  const handlePassengerSelect = (passenger) => {
    setSelectedPassenger(passenger);
  };

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const handleSeatChange = (passengerId, newSeatNumber) => {
    const updatedPassengers = passengers.map((p) =>
      p.id === passengerId ? { ...p, seatNumber: newSeatNumber } : p
    );
    setPassengers(updatedPassengers);

    const updatedSeats = seats.map((s) =>
      s.number === newSeatNumber ? { ...s, status: "checked-in" } : s
    );
    setSeats(updatedSeats);
  };

  const handleAddService = (passengerId, newService) => {
    const updatedPassengers = passengers.map((p) =>
      p.id === passengerId
        ? { ...p, ancillaryServices: [...p.ancillaryServices, newService] }
        : p
    );
    setPassengers(updatedPassengers);
  };

  const handleChangeMeal = (passengerId, newMeal) => {
    const updatedPassengers = passengers.map((p) =>
      p.id === passengerId
        ? {
            ...p,
            ancillaryServices: [
              ...p.ancillaryServices.filter(
                (service) => service !== "Special Meal"
              ),
              newMeal,
            ],
          }
        : p
    );
    setPassengers(updatedPassengers);
  };

  const handleAddShopRequest = (passengerId, newShopRequest) => {
    const updatedPassengers = passengers.map((p) =>
      p.id === passengerId
        ? { ...p, ancillaryServices: [...p.ancillaryServices, newShopRequest] }
        : p
    );
    setPassengers(updatedPassengers);
  };

  const filteredPassengers = passengers.filter((passenger) => {
    if (filters.checkedIn && !passenger.checkedIn) return false;
    if (
      filters.wheelchair &&
      !passenger.ancillaryServices.includes("Wheelchair")
    )
      return false;
    if (filters.infant && !passenger.ancillaryServices.includes("Infant"))
      return false;
    return true;
  });

  return (
    <div className="flight-selection">
      <h2>Select Flight</h2>
      {error && (
        <Alert severity="error">Error fetching flights: {error.message}</Alert>
      )}
      {!flights.length ? (
        <CircularProgress />
      ) : (
        <List>
          {flights.map((flight) => (
            <ListItem
              button
              key={flight.id}
              onClick={() => handleFlightSelect(flight)}
            >
              <ListItemText
                primary={`${flight.number} - ${flight.destination}`}
              />
            </ListItem>
          ))}
        </List>
      )}
      {selectedFlight && (
        <div>
          <h3>Selected Flight Details</h3>
          <p>Flight Number: {selectedFlight.number}</p>
          <p>Destination: {selectedFlight.destination}</p>
          <p>Departure Time: {selectedFlight.departureTime}</p>
          <SeatMap seats={seats} onSeatSelect={handleSeatSelect} />
          <PassengerFilter
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          <PassengerList
            passengers={filteredPassengers}
            onPassengerSelect={handlePassengerSelect}
            selectedPassenger={selectedPassenger}
            onSeatChange={handleSeatChange}
            onAddService={handleAddService}
            onChangeMeal={handleChangeMeal}
            onAddShopRequest={handleAddShopRequest}
          />
        </div>
      )}
    </div>
  );
};

export default FlightSelection;
