import { motion, useInView } from "framer-motion";
import { useContext, useRef } from "react";
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

const ProjectCard = ({ src, liveUrl, gitUrl }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <motion.div
      variants={portfolioVariants}
      initial="hidden"
      animate={isInView && "visible"}
      ref={ref}
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
  );
};

export default ProjectCard;
