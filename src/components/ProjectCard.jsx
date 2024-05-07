import { motion, useInView } from "framer-motion";
import ProjectActions from "./ProjectActions";
import { useRef } from "react";

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

const ProjectCard = ({ project, showModal, updateModalInfo }) => {
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });

  const { image, gitUrl, liveUrl } = project;

  const handleClick = () => {
    showModal(true);
    updateModalInfo(project);
  };

  return (
    <motion.div
      variants={portfolioVariants}
      initial="hidden"
      animate={isInView && "visible"}
      ref={ref}
      onClick={handleClick}
      className="shadow-md shadow-gray-600 rounded-lg"
    >
      <img
        src={image}
        alt=""
        className="rounded-md duration-200 hover:scale-105"
      />
      <ProjectActions gitUrl={gitUrl} liveUrl={liveUrl} />
    </motion.div>
  );
};

export default ProjectCard;
