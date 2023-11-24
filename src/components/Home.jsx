import React from "react";
import myImage from "../assets/Polock.jpeg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.15 },
  },
};

const imageVariants = {
  initial: {
    x: 1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Home = () => {
  return (
    <div
      name="home"
      className="h-full md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <motion.div
          variants={textVariants}
          className="flex mr-4 flex-col justify-center h-full"
        >
          <motion.h2
            variants={textVariants}
            className="text-4xl tracking-tight leading-tight pt-24 font-bold text-white"
          >
            Welcome <p>I'm Tanvir Ahmed Palok</p>
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-gray-400 text-xl leading-snug py-4 max-w-[70ch]"
          >
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </motion.p>
          <motion.p
            variants={textVariants}
            className="text-[#2E8A99] text-xl mt-2 mb-2 md:mt-4 leading-normal"
          >
            Enthusiastic Frontend Developer | javascript | React | Java | Python
          </motion.p>
          <motion.div variants={textVariants}>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white group w-fit px-6 py-3 mb-4 md:my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardDoubleArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div variants={imageVariants}>
          <img
            src={myImage}
            alt="Profile Pic"
            className="rounded-2xl mx-auto w-2/3 mt-10 md:mt-0 md:w-[50%]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
