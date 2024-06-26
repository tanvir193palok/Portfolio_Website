import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import java from "../assets/java.png";
import tensorflow from "../assets/tf.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CursorContext } from "../context/CursorContext";

const TechStack = () => {
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

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full py-10 md:py-20 px-4 md:px-0"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full text-white">
          <div
            variants={portfolioVariants}
            initial="hidden"
            animate={isInView && "visible"}
          >
            <div className="flex justify-center">
              <p
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="text-2xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
              >
                Skills
              </p>
            </div>
            <p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="py-4 md:py-8 text-sm md:text-lg"
            >

            </p>
          </div>
        </div>
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
                <span className="hidden md:inline text-bold text-lg">
                  {experience} years
                </span>
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

export default TechStack;
