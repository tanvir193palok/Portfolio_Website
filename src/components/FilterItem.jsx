import { useEffect, useState } from "react";
import { getColorByIndex } from "../utils/random-color-picker";
import { getProjectsByCategory } from "../utils/filter-projects";
import { projects } from "../lib/ProjectData";
import { categories } from "../lib/CategoriesData";
import { miniCategories } from "../lib/CategoriesData";

const FilterItem = ({ setProjects, setDescription }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  useEffect(() => {
    setProjects(getProjectsByCategory(selectedCategory));
    setDescription(categories[0]?.description);
  }, []);

  function handleClick(category, description) {
    setSelectedCategory(category);

    if (category === "All Projects") {
      setProjects(projects);
    } else {
      const filteredProjects = getProjectsByCategory(category);
      setProjects(filteredProjects);
      setDescription(description);
    }
  }

  return (
    <div className="relative">
      <ul className="hidden md:flex justify-center pt-2 gap-10 flex-wrap">
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-center cursor-pointer"
            onClick={() => handleClick(category?.name, category?.description)}
          >
            <span
              className={`inline-block whitespace-nowrap rounded-[10px] transition-colors duration-300 ${
                category.name === selectedCategory ? getColorByIndex(index) : ""
              } px-5 py-2 text-lg font-bold tracking-wide capitalize text-white`}
            >
              {category.name}
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex md:hidden justify-center pt-2 gap-1 flex-wrap">
        {miniCategories.map((category, index) => (
          <li
            key={index}
            className="text-center cursor-pointer"
            onClick={() => handleClick(category?.name, category?.description)}
          >
            <span
              className={`inline-block whitespace-nowrap rounded-md transition-colors duration-300 ${
                category.name === selectedCategory ? getColorByIndex(index) : ""
              } px-3 py-1 text-sm tracking-normal capitalize text-white`}
            >
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterItem;
