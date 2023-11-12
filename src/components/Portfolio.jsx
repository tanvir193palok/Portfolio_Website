import React from "react";
import Project1 from "../assets/portfolio/Project-1.png";
import Project2 from "../assets/portfolio/Project-2.png";
import Project3 from "../assets/portfolio/Project-3.png";
import Project4 from "../assets/portfolio/Project-4.png";
import Project5 from "../assets/portfolio/Project-5.png";
import Project6 from "../assets/portfolio/Project-6.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Project1,
      liveUrl: "https://tanvir193palok.github.io/E-commerce-Site/",
      gitUrl: "https://github.com/tanvir193palok/E-commerce-Site",
    },
    {
      id: 2,
      src: Project2,
      liveUrl: "https://tanvir193palok.github.io/login",
      gitUrl: "https://github.com/tanvir193palok/Quiz-Application",
    },
    {
      id: 3,
      src: Project3,
      liveUrl:
        "https://653ebc0b7cf24033aad61f55--deluxe-kitten-e4a77b.netlify.app/",
      gitUrl: "https://github.com/tanvir193palok/ThreeJS-Project",
    },
    {
      id: 4,
      src: Project4,
      liveUrl: "https://tanvir193palok.github.io/MaterialUI-Project/",
      gitUrl: "https://github.com/tanvir193palok/MaterialUI-Project",
    },
    {
      id: 5,
      src: Project5,
      liveUrl: "https://symphonious-genie-d5fd8f.netlify.app/",
      gitUrl:
        "https://github.com/tanvir193palok/Summarizer/tree/main/ai_summarizer",
    },
    {
      id: 6,
      src: Project6,
      liveUrl: "https://chat-gpt-weld-three.vercel.app/",
      gitUrl: "https://github.com/tanvir193palok/ChatGPT",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-xl">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, liveUrl, gitUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => (window.location.href = liveUrl)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => (window.location.href = gitUrl)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
