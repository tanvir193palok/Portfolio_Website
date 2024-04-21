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
      link: "contact",
    },
  ];

  return (
    <>
      <div className="justify-between px-4 items-center w-full h-20 text-white bg-black fixed z-50 hidden md:flex">
        <div>
          <h1 className="hidden md:flex text-5xl font-signature ml-2">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              Palok
            </motion.span>
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <BurgerMenu links={links} />
    </>
  );
};

export default Navbar;
