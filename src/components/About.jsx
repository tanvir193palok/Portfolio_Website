import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          🚀 Constantly exploring the ever-evolving landscape of frontend
          technologies, I stay up-to-date with the latest trends to deliver
          modern and scalable solutions. Whether it's leveraging React for
          dynamic user interfaces or optimizing performance with efficient code,
          I thrive on turning challenges into opportunities. 🎨 Design
          aesthetics and user experience are at the forefront of my development
          approach. I believe that a well-crafted website not only looks good
          but also functions flawlessly. Clean code, accessibility, and
          performance optimization are key aspects I prioritize in every
          project. 🛠️ When I'm not immersed in code, you'll find me
          experimenting with new frameworks, contributing to the developer
          community, or enjoying a cup of coffee while sketching out the next
          big idea.
        </p>

        <br />

        <p className="text-xl">
          👋 Hey there! I'm [Your Name], a passionate frontend developer with a
          keen eye for crafting engaging and user-friendly digital experiences.
          💻 Armed with a strong foundation in HTML, CSS, and JavaScript, I
          transform design concepts into fully functional and responsive
          websites. My goal is to bring ideas to life on the web, creating
          seamless and intuitive user interfaces.
        </p>
      </div>
    </div>
  );
};

export default About;
