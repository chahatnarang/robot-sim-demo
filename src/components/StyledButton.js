import React from "react";

export default function StyledButton({ text, onClick, description }) {
  return (
    <div className="buttonMain">
      <div className="button" onClick={onClick}> {text}</div>
      <div className="buttonDescription">{description} </div>
    </div>
  );
}
