import React, { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CursorContext } from "../context/CursorContext";
import TechStack from "./TechStack";
import ThesisDoc from "./ThesisDoc";

const variants = {
  initial: { opacity: 0, scale: 0.2 },
  final: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 120,
    },
  },
};

const portfolioVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      type: "tween",
    },
  },
};

const Experience = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-20 md:pt-40"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div
          variants={portfolioVariants}
          initial="hidden"
          animate={isInView && "visible"}
        >
          <p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
          >
            Experience
          </p>
          <p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="py-8 text-xl"
          >
            Following are my tech stack with years of experience.
          </p>
        </div>
        <ThesisDoc />

        <TechStack variants={variants} />
      </div>
    </div>
  );
};

export default Experience;
