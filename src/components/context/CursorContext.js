import React, { createContext, useEffect, useState } from "react";

//create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  //cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  //cursor bg state
  const [cursorBG, setCursorBG] = useState("default");

  const mobileViewportIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (e) => {
        setCursorPosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", move);

      //remove event
      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  });

  //cursor variants
  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: "#fff",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPosition.x - 72,
      y: cursorPosition.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  };

  //mouse enter handler
  const mouseEnterHandler = () => {
    setCursorBG("text");
  };

  //mouse Leave handler
  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
