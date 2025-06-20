import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import PrototypeIcon from "./components/PrototypeIcon";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Services from "./Pages/Services"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero /> <PrototypeIcon />{" "}
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
