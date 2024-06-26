import { useContext, useRef } from "react";
import ThesisCover from "../assets/thesis.jpg";
import { motion, useInView } from "framer-motion";
import { CursorContext } from "../context/CursorContext";
import { transition1 } from "./Transitions";

const textVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, type: "linear", staggerChildren: 0.2 },
  },
};

const ThesisDoc = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={isInView && "animate"}
        ref={ref}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="font-semibold md:font-bold"
      >
        <p className="flex justify-center text-xl md:text-3xl leading-tight">
          Undergraduate Thesis
        </p>
        <motion.p
          variants={textVariants}
          className="text-center text-lg md:text-2xl"
        >
          Medical Image Reader powered by Artificial Intelligence
        </motion.p>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-center w-full h-auto md:py-10 md:-space-x-20 leading-normal">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate={isInView && "animate"}
          ref={ref}
          className="md:w-2/3 pt-10 z-10 font-md text-lg max-w-[70ch]"
        >
          <p className="md:pt-10 text-sm md:text-lg tracking-wide">
            <span className="font-semibold md:font-bold text-md md:text-xl">
              Abstract:{" "}
            </span>
            Misdiagnosis in medical imaging is a critical concern, risking
            patients’ health due to the pivotal role of radiologists’ accuracy
            in diagnostics. Current cross-checking methods for radiologists’
            decisions are limited, potentially leading to errors and treatment
            delays. This study introduces a data processing technique and an
            advanced prediction system for improving disease detection accuracy
            in medical images. Our main goal is to contribute to healthcare by
            developing a system capable of achieving human-level or higher
            accuracy in disease detection across diverse medical image types. To
            achieve this, we utilize deep learning techniques, specifically
            Convolutional Neural Networks (CNNs), and leverage Transfer Learning
            with pre-trained models. Data processing plays a crucial role, given
            the importance of image availability and quality. We apply image
            enhancement techniques such as Histogram Equalization, Adaptive
            Histogram Equalization (AHE), and Contrast Limited Adaptive
            Histogram Equalization (CLAHE) to enhance image quality and augment
            a limited training dataset. The advanced ensemble approach
            significantly enhances the overall accuracy and reduces individual
            model variance. Validation of our approach using confusion matrices
            reveals that selective class-wise voting achieves the highest
            accuracy at 95.27% on the testing dataset. Additionally, our
            customized weighted voting approach achieves an accuracy of 94.07%
            on the test set. These results emphasize the effectiveness of our
            ensemble techniques in improving disease detection accuracy. Our
            ensemble techniques offer substantial accuracy improvements,
            promising more accurate and reliable medical diagnoses.
          </p>
          <motion.p
            variants={textVariants}
            className="pt-4 md:pt-10 text-sm md:text-lg"
          >
            <span className="font-semibold md:font-bold text-md md:text-xl tracking-wide">
              Keywords:
            </span>{" "}
            Misdiagnosis, Deep learning, Ensemble learning, Confusion matrices,
            Selective class-wise voting, Histogram equalization, Adaptive
            histogram equalization, Contrast limited adaptive histogram
            equalization, Transfer learning.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView && { scale: 1 }}
          ref={ref}
          transition={transition1}
          className="flex justify-center md:w-1/2 md:opacity-[0.6] pt-4"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={transition1}
            src={ThesisCover}
            alt=""
            className="w-[80%] md:w-full h-[350px] md:h-[800px] rounded-3xl"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ThesisDoc;
