import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const ProjectActions = ({ liveUrl, gitUrl }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className="flex items-center justify-center">
      <button
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={() => (window.location.href = liveUrl)}
        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
      >
        Demo
      </button>
      <button
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={() => (window.location.href = gitUrl)}
        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
      >
        Code
      </button>
    </div>
  );
};

export default ProjectActions;
