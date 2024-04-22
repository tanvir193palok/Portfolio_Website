import { useContext, useRef } from "react";
import ThesisCover from "../assets/thesis.jpg";
import { motion, useInView } from "framer-motion";
import { CursorContext } from "../context/CursorContext";

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

const imageVariants = {
  initial: {
    x: -50,
    opacity: 1,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};

const ThesisDoc = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
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
          animate="animate"
          className="md:w-2/3 pt-10 z-10 font-md text-lg max-w-[70ch]"
        >
          <p className="md:pt-10 text-sm md:text-lg">
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
            <span className="font-semibold md:font-bold text-md md:text-xl">
              Keywords:
            </span>{" "}
            Misdiagnosis, Deep learning, Ensemble learning, Confusion matrices,
            Selective class-wise voting, Histogram equalization, Adaptive
            histogram equalization, Contrast limited adaptive histogram
            equalization, Transfer learning.
          </motion.p>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
          className="md:w-1/2 md:opacity-[0.6] pt-4"
        >
          <img
            src={ThesisCover}
            alt=""
            className="w-full h-[400px] md:h-[800px] rounded-3xl"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ThesisDoc;
