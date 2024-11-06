import React, { useState } from "react";
import "./AncillaryServicesManagement.scss";

const AncillaryServicesManagement = ({ services, onSave, onDelete }) => {
  const [newService, setNewService] = useState("");

  const handleAddService = () => {
    onSave({ id: services.length + 1, name: newService });
    setNewService("");
  };

  return (
    <div className="ancillary-services-management">
      <h3>Manage Ancillary Services</h3>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name}
            <button onClick={() => onDelete(service.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          placeholder="Add new service"
        />
        <button onClick={handleAddService}>Add Service</button>
      </div>
    </div>
  );
};

export default AncillaryServicesManagement;
