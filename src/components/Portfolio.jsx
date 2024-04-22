import React, { useContext } from "react";
import Project1 from "../assets/portfolio/Project-1.png";
import Project2 from "../assets/portfolio/Project-2.png";
import Project3 from "../assets/portfolio/Project-3.png";
import Project4 from "../assets/portfolio/Project-4.png";
import Project5 from "../assets/portfolio/Project-5.png";
import Project6 from "../assets/portfolio/Project-6.png";
import Project7 from "../assets/portfolio/Project7.jpg";
import Project8 from "../assets/portfolio/Project8.jpg";
import Project9 from "../assets/portfolio/Project9.jpg";
import Project10 from "../assets/portfolio/Project10.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CursorContext } from "../context/CursorContext";

const portfolioVariants = {
  hidden: { x: -50, y: -50, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      type: "linear",
    },
  },
};

const textVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, type: "linear", staggerChildren: 0.1 },
  },
};

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });

  const portfolios = [
    {
      id: 1,
      src: Project7,
      liveUrl: "https://bistro-cafe.netlify.app/",
      gitUrl: "https://github.com/tanvir193palok/Restaurant_Website",
    },
    {
      id: 2,
      src: Project8,
      liveUrl: "https://palok-gym.netlify.app/",
      gitUrl: "https://github.com/tanvir193palok/Gym_Website",
    },
    {
      id: 3,
      src: Project9,
      liveUrl: "https://tanvir-ahmed-palok-portfolio.netlify.app/",
      gitUrl: "https://github.com/tanvir193palok/Portfolio_Website",
    },
    {
      id: 4,
      src: Project1,
      liveUrl: "https://tanvir193palok.github.io/E-commerce-Site/",
      gitUrl: "https://github.com/tanvir193palok/E-commerce-Site",
    },
    {
      id: 5,
      src: Project2,
      liveUrl: "https://tanvir193palok.github.io/Quiz-Application/",
      gitUrl: "https://github.com/tanvir193palok/Quiz-Application",
    },
    {
      id: 6,
      src: Project10,
      liveUrl: "https://recipe-app2x4.netlify.app/",
      gitUrl: "https://github.com/tanvir193palok/Recipe_App",
    },
    {
      id: 7,
      src: Project6,
      liveUrl: "https://shimmering-wisp-8a5007.netlify.app/",
      gitUrl: "https://github.com/tanvir193palok/PixelHarmony",
    },
    {
      id: 8,
      src: Project3,
      liveUrl:
        "https://653ebc0b7cf24033aad61f55--deluxe-kitten-e4a77b.netlify.app/",
      gitUrl: "https://github.com/tanvir193palok/ThreeJS-Project",
    },
    {
      id: 9,
      src: Project4,
      liveUrl: "https://tanvir193palok.github.io/MaterialUI-Project/",
      gitUrl: "https://github.com/tanvir193palok/MaterialUI-Project",
    },
    // {
    //   id: 10,
    //   src: Project5,
    //   liveUrl: "https://symphonious-genie-d5fd8f.netlify.app/",
    //   gitUrl:
    //     "https://github.com/tanvir193palok/Summarizer/tree/main/ai_summarizer",
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-10 md:py-20 px-4 md:px-0"
    >
      <motion.div
        variants={portfolioVariants}
        initial="hidden"
        animate={isInView && "visible"}
        ref={ref}
        className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full md:pt-40"
      >
        <motion.div
          variants={portfolioVariants}
          className="flex justify-center md:pb-8"
        >
          <p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-2xl md:text-4xl font-bold border-b-4 border-gray-500"
          >
            Portfolio
          </p>
        </motion.div>
        <p
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="py-4 md:py-6 text-sm md:text-lg"
        >
          Check out some of my work.
        </p>

        <motion.div
          variants={portfolioVariants}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4 md:pt-6 sm:px-0"
        >
          {portfolios.map(({ id, src, liveUrl, gitUrl }) => (
            <motion.div
              variants={portfolioVariants}
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                  onClick={() => (window.location.href = liveUrl)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                  onClick={() => (window.location.href = gitUrl)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
