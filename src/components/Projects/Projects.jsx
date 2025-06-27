import "./Projects.css";

import { useEffect, useState } from "react";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import { fetchRepos } from "../../api/github";
import projectMeta from "../../data/projectMeta";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const username = "taxidriver802";

  useEffect(() => {
    fetchRepos(username)
      .then((data) => {
        const mappedProjects = data.map((repo) => {
          const meta = projectMeta[repo.name] || {};

          return {
            title: repo.name,
            description: repo.description,
            img: meta.img || "",
            technologies: meta.technologies || [],
            links: {
              live: meta.links?.live || repo.homepage || "",
              source: meta.links?.source || repo.html_url,
            },
          };
        });
        setRepos(mappedProjects);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="projects">
      <ProjectContainer projects={repos} />
    </div>
  );
};

export default Projects;
