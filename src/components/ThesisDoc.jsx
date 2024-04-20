import ThesisCover from "../assets/thesis.jpg";

const ThesisDoc = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-x-10 w-full h-auto py-10">
      <div className="w-1/2 pt-10">
        <p className="text-4xl font-bold">Medical Image Reader powered by Artificial Intelligence</p>
        <p className="pt-10 text-justify">
        <span  className="font-bold">Abstract: </span>
          Misdiagnosis in medical imaging is a critical concern, risking
          patients’ health due to the pivotal role of radiologists’ accuracy in
          diagnostics. Current cross-checking methods for radiologists’
          decisions are limited, potentially leading to errors and treatment
          delays. This study introduces a data processing technique and an
          advanced prediction system for improving disease detection accuracy in
          medical images. Our main goal is to contribute to healthcare by
          developing a system capable of achieving human-level or higher
          accuracy in disease detection across diverse medical image types. To
          achieve this, we utilize deep learning techniques, specifically
          Convolutional Neural Networks (CNNs), and leverage Transfer Learning
          with pre-trained models. Data processing plays a crucial role, given
          the importance of image availability and quality. We apply image
          enhancement techniques such as Histogram Equalization, Adaptive
          Histogram Equalization (AHE), and Contrast Limited Adaptive Histogram
          Equalization (CLAHE) to enhance image quality and augment a limited
          training dataset. The advanced ensemble approach significantly
          enhances the overall accuracy and reduces individual model variance.
          Validation of our approach using confusion matrices reveals that
          selective class-wise voting achieves the highest accuracy at 95.27% on
          the testing dataset. Additionally, our customized weighted voting
          approach achieves an accuracy of 94.07% on the test set. These results
          emphasize the effectiveness of our ensemble techniques in improving
          disease detection accuracy. Our ensemble techniques offer substantial
          accuracy improvements, promising more accurate and reliable medical
          diagnoses.
        </p>
        <p className="pt-10">
          <span className="font-bold">Keywords:</span> Misdiagnosis, Deep
          learning, Ensemble learning, Confusion matrices, Selective class-wise
          voting, Histogram equalization, Adaptive histogram equalization,
          Contrast limited adaptive histogram equalization, Transfer learning.
        </p>
      </div>
      <div className="w-1/2">
        <img src={ThesisCover} alt="" className="w-full h-[800px] rounded-3xl" />
      </div>
    </div>
  );
};

export default ThesisDoc;
