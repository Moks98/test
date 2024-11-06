import React from "react";
import "./PassengerFilter.scss";

const PassengerFilter = ({ filters, onFilterChange }) => {
  return (
    <div className="passenger-filter">
      <h3>Filter Passengers</h3>
      <div>
        <label>
          <input
            type="checkbox"
            checked={filters.checkedIn}
            onChange={() => onFilterChange("checkedIn")}
          />
          Checked In
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.wheelchair}
            onChange={() => onFilterChange("wheelchair")}
          />
          Wheelchair
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.infant}
            onChange={() => onFilterChange("infant")}
          />
          Infant
        </label>
      </div>
    </div>
  );
};

export default PassengerFilter;
