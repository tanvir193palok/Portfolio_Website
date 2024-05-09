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
  const miniCategories = ["Featured", "React", "Next.js", "All Projects"];

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
    <div className="relative">
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
      <ul className="flex md:hidden justify-center pt-2 gap-1 flex-wrap">
        {miniCategories.map((category, index) => (
          <li
            key={index}
            className="text-center cursor-pointer"
            onClick={() => handleClick(category)}
          >
            <span
              className={`inline-block whitespace-nowrap rounded-md md:rounded-[10px] transition-colors duration-300 ${
                category === selectedCategory ? getColorByIndex(index) : ""
              } px-3 md:px-5 py-1 md:py-2 text-sm md:text-md tracking-normal md:tracking-wide capitalize text-white`}
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
