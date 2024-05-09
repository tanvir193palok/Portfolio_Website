import ProjectActions from "./ProjectActions";
import { IoMdCloseCircle } from "react-icons/io";
import { getColorByIndex } from "../utils/random-color-picker";

const ProjectModal = ({ modalInfo, showModal }) => {
  const {
    name,
    details,
    keyFeatures,
    usedTechnologies,
    concepts,
    image,
    gitUrl,
    liveUrl,
  } = modalInfo;

  return (
    <div className="relative w-[80%] h-[80%] p-4 rounded-xl bg-slate-900 border-cyan-400 border-2 z-20">
      <button
        onClick={() => showModal(false)}
        className="absolute top-3 right-4 flex items-center justify-center text-[30px]"
      >
        <IoMdCloseCircle />
      </button>
      <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-12 text-center lg:text-left">
        {/* image */}
        <div className="w-full lg:w-[40%] h-full bg-white rounded-lg overflow-hidden md:pb-10 md:pt-20">
          <img
            src={image}
            alt={name}
            className="h-[300px] w-full object-cover"
          />
        </div>

        {/* text */}
        <div className="w-full lg:w-[60%] pt-36 pb-14 md:pb-0 lg:pt-0 flex flex-col justify-center items-center lg:items-start">
          <h1 className="pl-60 pb-6 text-3xl font-extrabold tracking-widest">
            {name}
          </h1>
          <p className="pb-3 text-gray-300 text-md font-medium">{details}</p>
          <div className="h-[400px]">
            <p className="font-semibold text-lg pb-2">Key Features :</p>
            <ul className="text-gray-300 text-sm tracking-wide">
              {keyFeatures.map((feature, index) => (
                <li className="pb-1" key={index}>{feature}</li>
              ))}
            </ul>
            <p className="font-semibold pt-2">Used Technologies :</p>
            <ul className="flex pt-2 gap-3 flex-wrap">
              {usedTechnologies.map((tech, index) => (
                <li key={index} className="text-center">
                  <span
                    className={`inline-block whitespace-nowrap rounded-[10px] ${getColorByIndex(
                      index
                    )} px-3 py-1 text-md tracking-wide capitalize text-white`}
                  >
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-semibold pb-2 pt-3">Libraries and Concepts :</p>
            <ul className="flex gap-3 flex-wrap">
              {concepts.map((concept, index) => (
                <li key={index} className="text-center">
                  <span
                    className={`inline-block whitespace-nowrap rounded-[10px] ${getColorByIndex(
                      index
                    )} px-3 py-1 text-md tracking-wide capitalize text-[#F4F5F6]`}
                  >
                    {concept}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 pl-60">
            <ProjectActions liveUrl={liveUrl} gitUrl={gitUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
