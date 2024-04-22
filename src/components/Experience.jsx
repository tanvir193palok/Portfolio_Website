import React, { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CursorContext } from "../context/CursorContext";
import ThesisDoc from "./ThesisDoc";

const experienceVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      type: "linear",
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
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full py-10 md:py-20 px-4 md:px-0"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full text-white">
        <motion.div
          variants={experienceVariants}
          initial="hidden"
          animate={isInView && "visible"}
          ref={ref}
        >
          <div className="flex justify-center">
            <p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="text-2xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
            >
              Experience
            </p>
          </div>
          <motion.p
            variants={experienceVariants}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="py-4 md:py-8 text-sm md:text-lg"
          >
            As a fresher, I do not possess any prior experience of working in
            any Software Company rather I have gained a research experience of
            almost 1.5 years in the field of Data Science, conducting a team of
            5 members as a first author.
          </motion.p>
        </motion.div>
        <ThesisDoc />
      </div>
    </div>
  );
};

export default Experience;
