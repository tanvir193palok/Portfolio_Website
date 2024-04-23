import React, { useContext } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "skills",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  const textVariants = {
    initial: {
      y: -200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, type: "linear", staggerChildren: 0.1 },
    },
  };

  return (
    <>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="justify-between px-4 items-center w-full h-20 text-white fixed z-50 hidden md:flex bg-black bg-opacity-50 backdrop-filter backdrop-blur-md"
      >
        <div>
          <h1 className="hidden md:flex text-5xl font-signature ml-2">
            <span
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              Palok
            </span>
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="px-4 cursor-pointer capitalize font-medium text-gray-3gi00 hover:scale-125 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
      <BurgerMenu links={links} />
    </>
  );
};

export default Navbar;
