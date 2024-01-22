import React, { useContext, useRef } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import java from "../assets/java.png";
import tensorflow from "../assets/tf.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import { motion, useInView } from "framer-motion";
import { CursorContext } from "./context/CursorContext";

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
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      text: "text-orange-500",
      experience: "3+",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      text: "text-blue-500",
      experience: "3+",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      text: "text-yellow-500",
      experience: "3+",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      text: "text-blue-600",
      experience: "2+",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      text: "text-sky-400",
      experience: "2+",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-rose-500",
      text: "text-rose-500",
      experience: "2+",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-[#2E8A99]",
      text: "text-[#2E8A99]",
      experience: "4+",
    },
    {
      id: 8,
      src: tensorflow,
      title: "Tensorflow",
      style: "shadow-[#F05941]",
      text: "text-[#F05941]",
      experience: "2+",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
      text: "text-gray-400",
      experience: "2+",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-20 md:pt-40"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div
          variants={portfolioVariants}
          initial="hidden"
          animate={isInView && "visible"}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-8 text-xl">Following are my tech stack with years of experience.</p>
        </motion.div>

        <motion.div
          variants={variants}
          initial="initial"
          animate={isInView && "final"}
          ref={ref}
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0"
        >
          {techs.map(({ id, src, title, style, text, experience }) => (
            <motion.div
              variants={variants}
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <div
                className={`flex items-center justify-end pr-2 md:pr-5 text-z-50 ${text}`}
              >
                <span className="hidden md:inline text-bold text-lg">{experience} years</span>
                <span className="md:hidden">{experience}</span>
              </div>
              <img src={src} alt="experience" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
