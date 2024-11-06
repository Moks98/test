import React from "react";
import "./SeatMap.scss";

const SeatMap = ({ seats, onSeatSelect }) => {
  return (
    <div className="seat-map">
      {seats.map((seat) => (
        <div
          key={seat.id}
          className={`seat ${seat.status}`}
          onClick={() => onSeatSelect(seat)}
        >
          {seat.number}
        </div>
      ))}
    </div>
  );
};

export default SeatMap;
