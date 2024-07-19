import React, { useState, useEffect } from "react";
// import "./Circle.css";

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX - 25, // Adjusting for half the circle's width
        y: event.clientY - 25, // Adjusting for half the circle's height
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="circle"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Circle;
