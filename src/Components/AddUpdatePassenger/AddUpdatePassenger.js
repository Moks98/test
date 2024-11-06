import React, { useState, useEffect } from "react";
import "./AddUpdatePassenger.scss";

const AddUpdatePassenger = ({ selectedPassenger, onSave }) => {
  const [passenger, setPassenger] = useState({
    name: "",
    passport: "",
    address: "",
    dob: "",
  });

  useEffect(() => {
    if (selectedPassenger) {
      setPassenger(selectedPassenger);
    }
  }, [selectedPassenger]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassenger((prevPassenger) => ({
      ...prevPassenger,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(passenger);
    setPassenger({ name: "", passport: "", address: "", dob: "" });
  };

  return (
    <div className="add-update-passenger">
      <h3>{selectedPassenger ? "Update" : "Add"} Passenger</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={passenger.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Passport:
          <input
            type="text"
            name="passport"
            value={passenger.passport}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={passenger.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={passenger.dob}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">
          {selectedPassenger ? "Update" : "Add"} Passenger
        </button>
      </form>
    </div>
  );
};

export default AddUpdatePassenger;
