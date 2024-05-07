import ProjectActions from "./ProjectActions";
import { IoMdCloseCircle } from "react-icons/io";

const ProjectModal = ({ modalInfo, showModal }) => {
  const { image, gitUrl, liveUrl } = modalInfo;

  return (
    <div className="relative w-[65%] h-[65%] p-4 rounded-xl bg-slate-900 border-cyan-400 border-2 z-20">
      <button
        onClick={() => showModal(false)}
        className="absolute top-3 right-4 flex items-center justify-center text-[30px]"
      >
        <IoMdCloseCircle />
      </button>
      <div
        className="flex flex-col lg:flex-row h-full
   items-center justify-center gap-x-12 text-center lg:text-left lg:pt-16"
      >
        {/* image */}
        <div className="w-[50%] max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden md:pb-20">
          <img src={image} alt="" className="h-[300px] w-[1000px] rounded-md" />
        </div>

        {/* text */}
        <div
          className=" pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col
     justify-center items-center lg:items-start"
        >
          <h1 className="h1 pb-6 text-xl font-bold">Project name</h1>
          <p>
            About A portfolio website for a photographer showcasing her skills
            in photography.
          </p>
          <div className="h-[260px]">
            <p className="font-semibold pt-3">Key Features :</p>
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
            <p className="font-semibold pt-3">Used Technologies :</p>
            <ul>
              <li>tag</li>
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
