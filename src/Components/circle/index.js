import React, { useState, useEffect } from "react";
// import "./Circle.css";

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const circleElement = document.getElementsByClassName(`circle`);
      for (let index = 0; index < circleElement.length; index++) {
        const element = circleElement[index];
        element.style.height = "20px";
        element.style.width = "20px";
        element.style.transition = "height 0.5s ease,width 0.5s ease";
      }
      const x = (event.clientX - 10 )+ window.scrollX;
      const y = (event.clientY - 10)+ window.scrollY;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove,{passive : true});
    window.addEventListener("scroll",(event)=>{
      const circleElement = document.getElementsByClassName(`circle`);
      for (let index = 0; index < circleElement.length; index++) {
        const element = circleElement[index];
        element.style.height = "0px";
        element.style.width = "0px";
        element.style.transition = "height 0.5s ease,width 0.5s ease";

      }
    },{
      passive : true
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="circle"
      style={{ left: `${position.x}px`, top: `${position.y}px`,zIndex : 100 }}
    />
  );
};

export default Circle;
