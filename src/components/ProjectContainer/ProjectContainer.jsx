import { useState, useEffect } from "react";
import "./ProjectContainer.css";

const ProjectContainer = ({ projects }) => {
  const [flippedStates, setFlippedStates] = useState({});

  const handleFlip = (idx) => {
    setFlippedStates((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  useEffect(() => {
    console.log("Projects loaded:", projects);
  }, [projects]);

  return (
    <div className="project__container">
      {projects.map((project, index) => {
        const { title, img, description, technologies, links = {} } = project;
        const { live, source } = links;
        const isFlipped = Boolean(flippedStates[index]);

        return (
          <div
            className={`project__card ${isFlipped ? "flipped" : ""}`}
            key={index}
            onClick={() => handleFlip(index)}
          >
            {/* Front Face */}
            <div className="project__face project__front">
              <div className="project__title">{title || "My project"}</div>

              <div className="project__img">
                {img ? (
                  <img src={img} alt={`${title}  screenshot`} loading="lazy" />
                ) : (
                  "No project image"
                )}
              </div>

              <div className="project__description">
                {description || "There is no project description"}
              </div>
            </div>

            {/* Back Face */}
            <div className="project__face project__back">
              {technologies?.length > 0 && (
                <ul className="project__tech-list">
                  {technologies.map((tech, i) => (
                    <li className="project__tech-item" key={i}>
                      {tech}
                    </li>
                  ))}
                </ul>
              )}

              <div className="project__links">
                {live ? (
                  <a
                    href={live}
                    className="project__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="project__link disabled">No demo link</span>
                )}

                {source ? (
                  <a
                    href={source}
                    className="project__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Source Code
                  </a>
                ) : (
                  <span className="project__link disabled">No source link</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectContainer;
