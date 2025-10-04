import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">





    
      <h2>¿Por qué elegir nuestra clínica veterinaria?</h2>
      
      <div className="why-content">
        <div className="why-image">
          <img 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500&h=500&fit=crop" 
            alt="Veterinarios profesionales"
          />
        </div>

        <div className="why-text">
          <p>
            En momentos de emergencia, es esencial contar con un equipo de 
            profesionales dedicados y apasionados por las mascotas, que estén listos 
            para actuar de inmediato. Nuestra clínica está equipada con las últimas 
            tecnologías y recursos para brindar ayudas diagnósticas precisas y 
            tratamientos efectivos. Además, nuestros servicios no se limitan a 
            situaciones de emergencia; también ofrecemos consultas veterinarias, 
            hospitalización, cirugía veterinaria, laboratorio clínico y asistencia en 
            trámites de viaje.
          </p>

          <p>
            En cada paso del camino, tu mascota será tratada con el respeto y el 
            cariño que se merece. Sabemos que, para todos nosotros, las mascotas 
            son parte fundamental de la familia, y es un honor para VetAmigos ser 
            parte del cuidado de tu compañero de 4 patas. Al elegir nuestra clínica 
            veterinaria, no solo estás eligiendo experiencia y conocimiento, sino 
            también el amor y el respeto que sentimos por cada ser peludo que cruza 
            nuestras puertas.
          </p>

          <button className="btn-agenda">
            📞 ¡Agenda tu cita!
          </button>
        </div>
      </div>



        



      
      <div className="about-team">
        <h3>Nuestro Equipo</h3>
        <p className="team-intro">
          Contamos con un equipo multidisciplinario de profesionales apasionados por los animales.

          <br></br>
          <br></br>

          En VetAmigos cuidamos a tus mascotas con amor y profesionalismo.
          Contamos con más de 10 años de experiencia ofreciendo servicios de
          salud, peluquería y atención personalizada para tus peludos.

        </p>
        <div className="team-stats">
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">Veterinarios Certificados</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Especialistas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Años de Experiencia</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Mascotas Atendidas</span>
          </div>
        </div>
      </div>



    

            <div className="about-content">
        <div className="about-mission">
          <h3>Nuestra Misión</h3>
          <p>
            Proporcionar atención veterinaria de excelencia, basada en el respeto, 
            la empatía y el compromiso con la salud integral de cada mascota. 
            Buscamos crear un vínculo de confianza con cada familia, siendo su 
            aliado en el cuidado y bienestar de sus compañeros de vida.
          </p>
        </div>

        <div className="about-vision">
          <h3>Nuestra Visión</h3>
          <p>
            Ser la clínica veterinaria de referencia en la región, reconocida por 
            nuestra calidez humana, innovación tecnológica y resultados excepcionales. 
            Aspiramos a establecer nuevos estándares en medicina veterinaria preventiva 
            y curativa.
          </p>
        </div>

        <div className="about-values">
          <h3>Nuestros Valores</h3>
          <ul>
            <li><strong>Compasión:</strong> Tratamos a cada mascota como si fuera nuestra.</li>
            <li><strong>Excelencia:</strong> Nos capacitamos constantemente para ofrecer lo mejor.</li>
            <li><strong>Honestidad:</strong> Comunicación clara y transparente con nuestros clientes.</li>
            <li><strong>Compromiso:</strong> Disponibles cuando más nos necesitan.</li>
            <li><strong>Respeto:</strong> Por los animales, sus familias y el medio ambiente.</li>
          </ul>
        </div>
      </div>

    </section>
  );
}

export default AboutSection;