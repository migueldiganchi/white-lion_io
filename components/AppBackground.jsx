import React from "react";

export default function AppBackground() {
  return (
    <div className="lines">
      {Array.from({ length: 9 }, (_, i) => (
        <div className="line" key={i}></div>
      ))}
    </div>
  );
}
