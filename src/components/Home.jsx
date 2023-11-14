import React from "react";
import myImage from "../assets/Polock.jpeg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex mr-4 flex-col justify-center h-full">
          <h2 className="text-4xl tracking-tight leading-tight pt-24 font-bold text-white">
            Welcome <p>I'm Tanvir Ahmed Palok</p>
          </h2>
          <p className="text-gray-400 text-xl leading-snug py-4 max-w-[70ch]">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
          <p className="text-[#2E8A99] text-xl mt-2 mb-2 md:mt-4 leading-normal">
            Enthusiastic Frontend Developer | javascript | React | Java | Python
          </p>
          <div>
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
          </div>
        </div>
        <div>
          <img
            src={myImage}
            alt="Profile Pic"
            className="rounded-2xl mx-auto w-2/3 mt-10 md:mt-0 md:w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
