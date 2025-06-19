import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import PrototypeIcon from "./components/prototypeIcon";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <PrototypeIcon />
    </>
  );
}

export default App;
