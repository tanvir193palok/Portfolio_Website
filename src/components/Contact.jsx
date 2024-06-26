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
      className="w-full h-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white py-10 md:py-20 px-4 md:px-0"
    >
      <motion.div
        variants={contactVariants}
        initial="initial"
        animate={isInView && "final"}
        ref={ref}
        className="flex flex-col justify-center max-w-screen-lg mx-auto h-full"
      >
        <motion.div variants={contactVariants} className="flex justify-center">
          <motion.p
            variants={contactVariants}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-2xl md:text-4xl font-bold border-b-4 border-gray-500"
          >
            Contact
          </motion.p>
        </motion.div>
        <motion.p
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          variants={contactVariants}
          className="md:flex md:justify-center py-4 md:py-8 text-sm md:text-lg"
        >
          Submit the form below to get in touch with me
        </motion.p>

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
