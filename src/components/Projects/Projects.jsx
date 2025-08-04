import { useEffect, useState } from "react";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import { fetchRepos } from "../../api/github";
import projectMeta from "../../data/projectMeta";

import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const username = "taxidriver802";

  useEffect(() => {
    fetchRepos(username)
      .then((data) => {
        const fullStackKeys = ["chatty", "newsExplorer", "wearWithWeather"];
        const fullStackProjects = fullStackKeys.map((key) => {
          const meta = projectMeta[key];
          return {
            title: meta.title,
            description: meta.description || "",
            img: meta.img || "",
            technologies: meta.technologies || {},
            links: meta.links || {},
          };
        });

        const usedRepos = new Set([
          "my-chat-frontend",
          "my-chat-backend",
          "newsExplorer",
          "newsExplorerBackend",
          "se_project_react",
          "se_project_express",
        ]);

        const standaloneProjects = data
          .filter((repo) => !usedRepos.has(repo.name))
          .map((repo) => {
            const meta = projectMeta[repo.name] || {};
            return {
              title: meta.title || repo.name,
              description: meta.description || repo.description,
              img: meta.img || "",
              technologies:
                meta.technologies && !Array.isArray(meta.technologies)
                  ? meta.technologies
                  : { frontend: meta.technologies || [] },
              links: {
                live: meta.links?.live || repo.homepage || "",
                source: meta.links?.source || repo.html_url,
              },
            };
          });

        setProjects([...fullStackProjects, ...standaloneProjects]);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="projects">
      <ProjectContainer projects={projects} />
    </div>
  );
};

export default Projects;
