import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./ServicesSection.css";

function ServicesSection() {
  return (
    <section className="services-section">
      <h2>Nuestros Servicios</h2>
      <div className="services-container">
        <ServiceCard title="Vacunación" description="Protegemos a tus mascotas con vacunas seguras." />
        <ServiceCard title="Peluquería" description="Corte, baño y arreglo de tus peludos." />
        <ServiceCard title="Consultas" description="Atención médica profesional." />
        <ServiceCard title="Cirugías" description="Procedimientos con total seguridad." />
      </div>
    </section>
  );
}

export default ServicesSection;
