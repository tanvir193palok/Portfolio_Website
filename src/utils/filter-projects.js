import { projects } from "../lib/ProjectData";

export const getProjectsByCategory = (category) => {
  if (category === "Featured") {
    return projects.filter((project) => {
      return project.isFeatured === true;
    });
  } else {
    return projects.filter((project) =>
      project.usedTechnologies.includes(category)
    );
  }
};
