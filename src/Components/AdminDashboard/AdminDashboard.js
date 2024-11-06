import React, { useState } from "react";
import PassengerManagement from "../PassengerManagement/PassengerManagement";
import AddUpdatePassenger from "../AddUpdatePassenger/AddUpdatePassenger";
import AncillaryServicesManagement from "../AncillaryServicesManagement/AncillaryServicesManagement";
import "./AdminDashboard.scss";

const AdminDashboard = () => {
  const [passengers, setPassengers] = useState([
    {
      id: 1,
      name: "John Doe",
      seatNumber: "1A",
      ancillaryServices: ["Meal"],
      passport: "123456",
      address: "123 Main St",
      dob: "1990-01-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      seatNumber: "1B",
      ancillaryServices: ["Wheelchair"],
      passport: "",
      address: "456 Elm St",
      dob: "1985-05-15",
    },
    {
      id: 3,
      name: "Sam Wilson",
      seatNumber: "1C",
      ancillaryServices: ["Infant"],
      passport: "789012",
      address: "",
      dob: "",
    },
    // Add more passengers as needed
  ]);
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [services, setServices] = useState([
    { id: 1, name: "Meal" },
    { id: 2, name: "Wheelchair" },
    { id: 3, name: "Infant" },
    // Add more services as needed
  ]);

  const handleSavePassenger = (passenger) => {
    if (selectedPassenger) {
      setPassengers((prevPassengers) =>
        prevPassengers.map((p) => (p.id === passenger.id ? passenger : p))
      );
    } else {
      setPassengers((prevPassengers) => [
        ...prevPassengers,
        { ...passenger, id: prevPassengers.length + 1 },
      ]);
    }
    setSelectedPassenger(null);
  };

  const handleSaveService = (service) => {
    setServices((prevServices) => [...prevServices, service]);
  };

  const handleDeleteService = (serviceId) => {
    setServices((prevServices) =>
      prevServices.filter((service) => service.id !== serviceId)
    );
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-options">
        <button>Manage Passengers</button>
        <button>Manage Ancillary Services</button>
      </div>
      <PassengerManagement passengers={passengers} />
      <AddUpdatePassenger
        selectedPassenger={selectedPassenger}
        onSave={handleSavePassenger}
      />
      <AncillaryServicesManagement
        services={services}
        onSave={handleSaveService}
        onDelete={handleDeleteService}
      />
    </div>
  );
};

export default AdminDashboard;
