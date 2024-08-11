import React from "react";

export default function StyledGrid({ position }) {
  const createGrid = () => {
    const grid = [];
    const totalRows = 5;
    const totalColumns = 5;
    
    for (let row = 0; row < totalRows; row++) {
      for (let col = 0; col < totalColumns; col++) {
        // X, Y coordinates of the robots location === row, col of the grid
        const robotLocation = position.x === col && position.y === row;
        
        grid.push(
        <div key={`${row}-${col}`} className={`cell ${robotLocation && "robot"}`}>
          {robotLocation && (
            <span className="robot-icon" style={{ transform: `rotate(${position.direction*90}deg)` }}>
              &#129302;
            </span>
          )}
        </div>
      )}
    }
    return grid;
  };
  
  return <div className="grid">{createGrid()}</div>;
}