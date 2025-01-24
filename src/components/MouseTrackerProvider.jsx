import React, { createContext, useState, useContext, useEffect } from "react";

const MouseTrackerContext = createContext();

export const MouseTrackerProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <MouseTrackerContext.Provider value={position}>
      {children}
      <MouseTracker />
    </MouseTrackerContext.Provider>
  );
};

const MouseTracker = () => {
  const position = useContext(MouseTrackerContext);
  return (
    <div
      className="absolute w-16 h-16 rounded-full bg-white opacity-50 pointer-events-none"
      style={{
        left: position.x, // No offset here, exactly under the mouse
        top: position.y, // Same here
        transform: "translate(-50%, -50%)", // Center it around the cursor
        position: "fixed", // Always on top
        filter: "blur(6px)", // Slight blur for a soft, wispy effect
        opacity: 0.4, // Light opacity to simulate smoke
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)", // Subtle shadow to create depth
        animation: "drift 3s infinite ease-in-out", // Animation to simulate smoke drifting
      }}
    ></div>
  );
};

export const useMouseTracker = () => useContext(MouseTrackerContext);
