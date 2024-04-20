import React, { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CursorContext } from "../context/CursorContext";

const contactVariants = {
  initial: {
    y: -30,
    opacity: 0,
  },
  final: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.25 },
  },
};

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <div
      name="contact"
      className="w-full h-full pt-24 md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <motion.div
        variants={contactVariants}
        initial="initial"
        animate={isInView && "final"}
        ref={ref}
        className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
      >
        <motion.div variants={contactVariants} className="pb-8">
          <motion.p
            variants={contactVariants}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-4xl  font-bold inline border-b-4 border-gray-500"
          >
            Contact
          </motion.p>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            variants={contactVariants}
            className="py-6 text-xl"
          >
            Submit the form below to get in touch with me
          </motion.p>
        </motion.div>

        <motion.div
          variants={contactVariants}
          className="flex justify-center items-center"
        >
          <motion.form
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            action="https://getform.io/f/b1be36f6-5358-41f9-a47f-66dac8555815"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent rounded-md border-2 text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 my-4 bg-transparent rounded-md border-2 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <motion.button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
