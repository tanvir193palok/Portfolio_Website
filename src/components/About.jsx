import React from "react";
import CubeAnimation from "./CubeAnimation";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-20 md:pt-32 pb-10 md:pb-64 h-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center px-4 w-full h-full lg:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <div>
            <p className="text-4xl leading-tight font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          <p className="text-xl text-justify max-w-[70ch] leading-normal md:pr-4  mt-10">
            Greetings! I am Palok from Dhaka, Bangladesh, a recent graduate with
            a Bachelor of Science in Computer Science from BRAC University.
            Throughout my academic journey, I have acquired knowledge in various
            technologies and principles.
          </p>
          <p className="text-xl text-justify max-w-[70ch] leading-normal md:pr-4  mt-4">
            My programming foundation began with core Java, where I honed my
            problem-solving skills for data structures and algorithms. As BRACU
            shifted towards Python, I embraced the language, enhancing my
            problem-solving proficiency in both Java and Python. During the
            pandemic, I delved into web development, mastering HTML, CSS, and a
            touch of Javascript. I applied these skills to create single-page
            websites, showcasing my capabilities. Additionally, I integrated web
            development into group projects for courses like Database
            Management, System Analysis and Design.
          </p>
          <p className="text-xl text-justify max-w-[70ch] leading-normal md:pr-4 mt-4">
            In the realm of Software Engineering, I ventured into React,
            broadening my expertise. Simultaneously, my academic exploration led
            me to the fascinating world of Data Science. This passion steered me
            towards selecting Data Science and Image Processing for my thesis. I
            pursued various courses on Data Camp and elected subjects in Data
            Science and Image Processing to achieve excellence in my thesis.
            This journey not only fueled my passion but also served as a
            constant source of motivation and personal growth.
            <br />
          </p>
        </div>
        <div className="md:h-full md:w-full ">
          <p
            className="text-xl
           max-w-[70ch] md:pl-4  text-justify leading-normal"
          >
            Currently, I am elevating my expertise in frontend development,
            mastering React, Tailwind CSS, and exploring exciting tools like
            ThreeJS, Framer Motion, and React Beautiful Dnd. However, my future
            aspirations are set on transitioning to a full-stack path, steering
            my career towards becoming a MERN stack developer. I'm open to
            acquiring additional skills, considering Django and Spring Boot.
            Maintaining my current level of motivation, I envision delving into
            Data Science down the road.
          </p>
          <p
            className="text-xl
         max-w-[70ch] md:pl-4  text-justify leading-normal mt-4"
          >
            Despite being a fresher without prior work experience, I am
            enthusiastic about the prospect of showcasing my skills in these
            fields. Given the opportunity, I am eager to contribute and grow in
            a dynamic work environment.
          </p>
          <div className="h-[600px] md:h-full md:w-full ">
            <CubeAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
