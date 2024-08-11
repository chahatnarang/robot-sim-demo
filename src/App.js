import React, { useState } from "react";
import StyledGrid from "./components/StyledGrid";
import StyledButton from "./components/StyledButton";
import StyledHeading from "./components/StyledHeading";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <StyledHeading text="Robot Simulation Demo" />
      <div className="buttonGroup">
        <StyledButton text="&#x21BA;" description="Rotate Left" />
        <StyledButton text="&#9206;" description="Move Forward" />
        <StyledButton text="&#x21BB;" description="Rotate Right" />
      </div>
    </div>
  );
};

export default App;
