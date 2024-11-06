import React, { useState } from "react";
import "./PassengerManagement.scss";

const PassengerManagement = ({ passengers }) => {
  const [filters, setFilters] = useState({
    passport: false,
    address: false,
    dob: false,
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const filteredPassengers = passengers.filter((passenger) => {
    if (filters.passport && !passenger.passport) return true;
    if (filters.address && !passenger.address) return true;
    if (filters.dob && !passenger.dob) return true;
    return false;
  });

  return (
    <div className="passenger-management">
      <h3>Passenger Management</h3>
      <div className="filters">
        <label>
          <input
            type="checkbox"
            checked={filters.passport}
            onChange={() => handleFilterChange("passport")}
          />
          Missing Passport
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.address}
            onChange={() => handleFilterChange("address")}
          />
          Missing Address
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.dob}
            onChange={() => handleFilterChange("dob")}
          />
          Missing Date of Birth
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Seat Number</th>
            <th>Ancillary Services</th>
            <th>Passport</th>
            <th>Address</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {filteredPassengers.map((passenger) => (
            <tr key={passenger.id}>
              <td>{passenger.name}</td>
              <td>{passenger.seatNumber}</td>
              <td>{passenger.ancillaryServices.join(", ")}</td>
              <td>{passenger.passport || "N/A"}</td>
              <td>{passenger.address || "N/A"}</td>
              <td>{passenger.dob || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PassengerManagement;
