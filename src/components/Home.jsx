import React, { useContext } from "react";
import myImage from "../assets/Polock.jpeg";
import Polock from "../assets/polock.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, type: "linear", staggerChildren: 0.1 },
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
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <>
      <div
        name="home"
        className="h-full md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
      >
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 py-4 md:py-10 md:flex-row"
        >
          <motion.div
            variants={textVariants}
            className="flex mr-4 flex-col justify-center h-full"
          >
            <h2
              variants={textVariants}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex flex-col tracking-tight md:mr-10 mb-4 md:mb-16 leading-tight font-bold text-white"
            >
              <p className="flex justify-center md:justify-start text-2xl md:text-6xl mb-2 md:mb-6">
                Welcome
              </p>
              <p className="flex justify-center md:justify-start text-xl md:text-5xl">
                I'm Tanvir Ahmed Palok
              </p>
            </h2>
            <p
              variants={textVariants}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="text-gray-500 text-sm md:text-xl font-medium md:font-semibold text-center md:text-left leading-snug md:max-w-[70ch]"
            >
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product.
            </p>
            <p
              variants={textVariants}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="text-[#2E8A99] text-xl font-bold mb-6 mt-4 leading-normal hidden md:flex"
            >
              Enthusiastic Frontend Developer | javascript | React.js | Next.js
              | Java | Python
            </p>
            <p className="flex justify-center md:hidden text-[#2E8A99] text-sm mt-2 leading-normal">
              Enthusiastic Frontend Developer
            </p>
            <p className="flex justify-center md:hidden text-[#2E8A99] text-sm mb-4 leading-normal">
              javascript | React.js | Next.js | Java | Python
            </p>
            <motion.div
              className="flex justify-center md:justify-start md:mr-10"
              variants={textVariants}
            >
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="text-white group w-fit px-2 md:px-6 py-2 md:py-3 md:my-2 text-sm md:text-lg flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer"
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
              src={Polock}
              alt="Profile Pic"
              className="rounded-md md:rounded-2xl mx-auto w-full md:h-[600px] h-[300px] mt-8 md:mt-0 mb-4"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
