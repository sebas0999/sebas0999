// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import Navbar from "./componentes/Navbar/Navbar";
import Header from "./componentes/Header/Header";
import ServicesSection from "./componentes/ServicesSection/ServicesSection";
import AboutSection from "./componentes/AboutSection/AboutSection";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
