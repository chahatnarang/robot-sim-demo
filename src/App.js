import React, { useState } from "react";
import StyledGrid from "./components/StyledGrid";
import StyledButton from "./components/StyledButton";
import StyledHeading from "./components/StyledHeading";
import "./App.css";

const App = () => {
  const cardinalDirections = ["NORTH", "EAST", "SOUTH", "WEST"];
  const [position, setPosition] = useState({ x: 0, y: 0, direction: 0 });

  const moveForward = () => {
    setPosition((prev) => {
      const { x, y, direction } = prev;
      let newX = x;
      let newY = y;

      switch (cardinalDirections[direction]) {
        case "NORTH":
          newY = Math.max(y - 1, 0);
          break;
        case "EAST":
          newX = Math.min(x + 1, 4);
          break;
        case "SOUTH":
          newY = Math.min(y + 1, 4);
          break;
        case "WEST":
          newX = Math.max(x - 1, 0);
          break;
        default:
          break;
      }

      return { x: newX, y: newY, direction };
    });
  };

  const rotateLeft = () => {
    setPosition((prev) => ({
      ...prev,
      direction: (prev.direction + 3) % 4,
    }));
  };

  const rotateRight = () => {
    setPosition((prev) => ({
      ...prev,
      direction: (prev.direction + 1) % 4,
    }));
  };

  return (
    <div className="App">
      <StyledHeading text="Robot Simulation Demo" />
      <StyledGrid position={position} />
      <div className="buttonGroup">
        <StyledButton text="&#x21BA;" description="Rotate Left" onClick={rotateLeft} />
        <StyledButton text="&#9206;" description="Move Forward" onClick={moveForward} />
        <StyledButton text="&#x21BB;" description="Rotate Right" onClick={rotateRight} />
      </div>
    </div>
  );
};

export default App;
