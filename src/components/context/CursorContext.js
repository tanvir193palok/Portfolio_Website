import React, { createContext, useEffect, useState } from "react";
import { debounce } from "lodash";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = useState("default");
  const mobileViewportIsActive = window.innerWidth < 768;

  useEffect(() => {
    // Define the debounced handleMouseMove function
    const handleMouseMove = debounce((e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }, 16);

    if (!mobileViewportIsActive) {
      // Attach the debounced event listener
      window.addEventListener("mousemove", handleMouseMove);

      // Cleanup: Remove the event listener
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      setCursorBG("none");
    }
  }, [mobileViewportIsActive]);

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

  const mouseEnterHandler = () => {
    setCursorBG("text");
  };

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
