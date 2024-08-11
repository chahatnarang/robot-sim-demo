import React from "react";

export default function StyledButton({ text, description }) {
  return (
    <div className="buttonMain">
      <div className="button"> {text}</div>
      <div className="buttonDescription">{description} </div>
    </div>
  );
}
