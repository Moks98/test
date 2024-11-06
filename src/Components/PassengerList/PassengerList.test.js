import React, { useState } from "react";
import "./PassengerList.scss";

const PassengerList = ({
  passengers,
  onPassengerSelect,
  selectedPassenger,
  onSeatChange,
  onAddService,
  onChangeMeal,
  onAddShopRequest,
}) => {
  const [newService, setNewService] = useState("");
  const [newMeal, setNewMeal] = useState("");
  const [newShopRequest, setNewShopRequest] = useState("");

  const handleAddService = () => {
    onAddService(selectedPassenger.id, newService);
    setNewService("");
  };

  const handleChangeMeal = () => {
    onChangeMeal(selectedPassenger.id, newMeal);
    setNewMeal("");
  };

  const handleAddShopRequest = () => {
    onAddShopRequest(selectedPassenger.id, newShopRequest);
    setNewShopRequest("");
  };

  return (
    <div className="passenger-list">
      <h3>Passenger List</h3>
      <ul>
        {passengers.map((passenger) => (
          <li key={passenger.id} onClick={() => onPassengerSelect(passenger)}>
            <span>
              {passenger.name} - {passenger.seatNumber}
            </span>
            <span>{passenger.ancillaryServices.join(", ")}</span>
          </li>
        ))}
      </ul>
      {selectedPassenger && (
        <div className="passenger-details">
          <h4>Passenger Details</h4>
          <p>
            <strong>Name:</strong> {selectedPassenger.name}
          </p>
          <p>
            <strong>Seat Number:</strong> {selectedPassenger.seatNumber}
          </p>
          <p>
            <strong>Ancillary Services:</strong>{" "}
            {selectedPassenger.ancillaryServices.join(", ")}
          </p>
          <p>
            <strong>Checked In:</strong>{" "}
            {selectedPassenger.checkedIn ? "Yes" : "No"}
          </p>
          <div>
            <label htmlFor="seatNumber">Change Seat:</label>
            <input
              type="text"
              id="seatNumber"
              value={selectedPassenger.seatNumber}
              onChange={(e) =>
                onSeatChange(selectedPassenger.id, e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="newService">Add Ancillary Service:</label>
            <input
              type="text"
              id="newService"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
            />
            <button onClick={handleAddService}>Add Service</button>
          </div>
          <div>
            <label htmlFor="newMeal">Change Meal Preference:</label>
            <input
              type="text"
              id="newMeal"
              value={newMeal}
              onChange={(e) => setNewMeal(e.target.value)}
            />
            <button onClick={handleChangeMeal}>Change Meal</button>
          </div>
          <div>
            <label htmlFor="newShopRequest">Add In-Flight Shop Request:</label>
            <input
              type="text"
              id="newShopRequest"
              value={newShopRequest}
              onChange={(e) => setNewShopRequest(e.target.value)}
            />
            <button onClick={handleAddShopRequest}>Add Request</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerList;
