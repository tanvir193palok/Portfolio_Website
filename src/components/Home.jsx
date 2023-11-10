import React from "react";
import myImage from "../assets/Polock.jpeg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl  sm:text-7xl font-bold text-white">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-500 mr-4 py-4 mx-w-md">
            Certainly! Here's a sample text for your frontend developer about .
            Whether it's leveraging React for dynamic user interfaces or
            optimizing performance with efficient code, I thrive on turning
            challenges into opportunities. Let's collaborate and bring your
            digital vision to reality! 🌐✨
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardDoubleArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={myImage}
            alt="Profile Pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
