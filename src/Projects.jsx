import React from "react";
import { useFetchProjects } from "./FetchProjects";
const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <div className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { title, img, id, url } = project;
          return (
            <a
              href={url}
              className="project"
              target="_blank"
              rel="noreferrer"
              key={id}
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
