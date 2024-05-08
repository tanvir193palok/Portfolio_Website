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
          <h1 className="h1 pb-4 text-xl font-bold">{name}</h1>
          <p className="pb-3">{details}</p>
          <div className="h-[350px]">
            <p className="font-semibold">Key Features :</p>
            <ul>
              {keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className="font-semibold pt-3">Used Technologies :</p>
            <ul className="flex pt-3 gap-3 flex-wrap">
              {usedTechnologies.map((tech, index) => (
                <li key={index} className="text-center">
                  <span
                    className={`inline-block whitespace-nowrap rounded-[10px] ${getColorByIndex(
                      index
                    )} px-3 py-1 text-md capitalize text-[#F4F5F6]`}
                  >
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-semibold py-3">Libraries and Concepts :</p>
            <ul className="flex gap-3">
              {concepts.map((concept, index) => (
                <li key={index}>{concept}</li>
              ))}
            </ul>
          </div>
          <div className="pt-4 pl-28">
            <ProjectActions liveUrl={liveUrl} gitUrl={gitUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
