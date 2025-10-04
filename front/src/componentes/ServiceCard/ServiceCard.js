import React from "react";
import "./ServiceCard.css";

function ServiceCard({ title, description }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
