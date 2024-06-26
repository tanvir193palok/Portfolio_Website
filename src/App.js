import { useContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { motion } from "framer-motion";

//import cursor context
import { CursorContext } from "./context/CursorContext";
import TechStack from "./components/TechStack";

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <TechStack />
      <Contact />
      <SocialLinks />
      {/* 
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-[32px] h-[32px] bg-white fixed top-0
      left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
      */}
    </div>
  );
};
export default App;
