import React, { useContext, useRef } from "react";
import CubeAnimation from "./CubeAnimation";
import { motion, useInView } from "framer-motion";
import { CursorContext } from "./context/CursorContext";
import { transition1 } from "./Transitions";

const textVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, type: "linear", staggerChildren: 0.2 },
  },
};

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <>
      <div
        name="about"
        className="w-full pt-20 md:pt-60 pb-10 md:pb-64 h-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView && "visible"}
          ref={ref}
          transition={transition1}
          className="max-w-screen-xl mx-auto flex flex-col justify-center px-4 w-full h-full lg:flex-row"
        >
          <motion.div
            variants={textVariants}
            className="flex flex-col justify-center h-full w-full"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <motion.div variants={textVariants}>
              <p className="text-4xl leading-tight font-bold inline border-b-4 border-gray-500">
                About
              </p>
            </motion.div>
            <motion.p
              variants={textVariants}
              className="text-lg text-justify max-w-[70ch] leading-normal md:pr-4 mt-8"
            >
              Greetings! I am Palok from Dhaka, Bangladesh, a recent graduate
              with a Bachelor of Science in Computer Science from BRAC
              University. Throughout my academic journey, I have acquired
              knowledge in various technologies and principles.
            </motion.p>
            <motion.p
              variants={textVariants}
              className="text-lg text-justify max-w-[70ch] leading-normal md:pr-4 mt-4"
            >
              My programming foundation began with core Java, where I honed my
              problem-solving skills for data structures and algorithms. As
              BRACU shifted towards Python, I embraced the language, enhancing
              my problem-solving proficiency in both Java and Python. During the
              pandemic, I delved into web development, mastering HTML, CSS, and
              a touch of Javascript. I applied these skills to create
              single-page websites, showcasing my capabilities. Additionally, I
              integrated web development into group projects for courses like
              Database Management, System Analysis and Design.
            </motion.p>
            <motion.p
              variants={textVariants}
              className="text-lg text-justify max-w-[70ch] leading-normal md:pr-4 mt-4"
            >
              In the realm of Software Engineering, I ventured into React,
              broadening my expertise. Simultaneously, my academic exploration
              led me to the fascinating world of Data Science. This passion
              steered me towards selecting Data Science and Image Processing for
              my thesis. I pursued various courses on Data Camp and elected
              subjects in Data Science and Image Processing to achieve
              excellence in my thesis. This journey not only fueled my passion
              but also served as a constant source of motivation and personal
              growth.
              <br />
            </motion.p>
          </motion.div>
          <motion.div variants={textVariants} className="md:h-full md:w-full ">
            <motion.p
              variants={textVariants}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="text-lg max-w-[70ch] mt-4 md:mt-0 md:pl-4 text-justify leading-normal"
            >
              Currently, I am elevating my expertise in frontend development,
              mastering React, Tailwind CSS, and exploring exciting tools like
              ThreeJS, Framer Motion, and React Beautiful Dnd. However, my
              future aspirations are set on transitioning to a full-stack path,
              steering my career towards becoming a MERN stack developer. I'm
              open to acquiring additional skills, considering Django and Spring
              Boot. Maintaining my current level of motivation, I envision
              delving into Data Science down the road. Despite being a fresher
              without prior work experience, I am enthusiastic about the
              prospect of showcasing my skills in these fields. Given the
              opportunity, I am eager to contribute and grow in a dynamic work
              environment.
            </motion.p>
            <div className="h-[600px] md:w-full">
              <CubeAnimation />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
