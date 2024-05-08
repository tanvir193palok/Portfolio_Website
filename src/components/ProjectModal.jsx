import ProjectActions from "./ProjectActions";
import { IoMdCloseCircle } from "react-icons/io";

const ProjectModal = ({ modalInfo, showModal }) => {
  const { image, gitUrl, liveUrl } = modalInfo;

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
          <img src={image} alt="" className="h-[300px] w-full object-cover" />
        </div>

        {/* text */}
        <div className="w-full lg:w-[60%] pt-36 pb-14 md:pb-0 lg:pt-0 flex flex-col justify-center items-center lg:items-start">
          <h1 className="h1 pb-6 text-xl font-bold">LinkLoom</h1>
          <p className="h-20">
            A simple social website for sharing posts about day-to-day life
            containing various features.
          </p>
          <div className="h-[350px]">
            <p className="font-semibold pt-3">Key Features :</p>
            <ul>
              <li>
                ·Handled user login and registration using react-hook-form to
                handle errors, submissions, and JWT authentication.
              </li>
              <li>
                Used Axios to fetch data of auth token and refresh token to use
                it for JWT authentication.
              </li>
              <li>
                To solve props drilling issues, state management from child to
                child implemented different Context APIs, providers, and
                reducers. Further, added some custom hooks to make the code
                readable and reusable.
              </li>
              <li>
                ·Implemented different features like creating posts (text,
                image), editing, deleting, and adding new comments using Axios
                to fetch data from the backend through CRUD operations.
              </li>
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
