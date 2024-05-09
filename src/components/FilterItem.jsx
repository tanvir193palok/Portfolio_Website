import { useEffect, useState } from "react";
import { getColorByIndex } from "../utils/random-color-picker";
import { getProjectsByCategory } from "../utils/filter-projects";
import { projects } from "../lib/ProjectData";

const FilterItem = ({ setProjects }) => {
  const categories = [
    "Featured",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Material UI",
    "Axios",
    "All Projects",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    setProjects(getProjectsByCategory(selectedCategory));
  }, []);

  function handleClick(category) {
    setSelectedCategory(category);

    if (category === "All Projects") {
      setProjects(projects);
    } else {
      const filteredProjects = getProjectsByCategory(category);
      setProjects(filteredProjects);
    }
  }

  return (
    <div>
      <ul className="hidden md:flex justify-center pt-2 gap-10 flex-wrap">
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-center cursor-pointer"
            onClick={() => handleClick(category)}
          >
            <span
              className={`inline-block whitespace-nowrap rounded-[10px] transition-colors duration-300 ${
                category === selectedCategory ? getColorByIndex(index) : ""
              } px-5 py-2 text-md tracking-wide capitalize text-white`}
            >
              {category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterItem;
