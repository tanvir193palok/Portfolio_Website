import React, { useContext, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CursorContext } from "../context/CursorContext";
import ProjectCard from "./ProjectCard";
import { projects } from "../lib/ProjectData";
import ProjectModal from "./ProjectModal";

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
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-10 md:py-20 px-4 md:px-0 relative" // Add relative positioning
    >
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={isInView && "animate"}
        ref={ref}
        className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full md:pt-40"
      >
        <motion.div
          variants={textVariants}
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
          variants={textVariants}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4 md:pt-6 sm:px-0"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              showModal={setShowModal}
              updateModalInfo={setModalInfo}
            />
          ))}
        </motion.div>
      </motion.div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-70">
          <ProjectModal modalInfo={modalInfo} showModal={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
