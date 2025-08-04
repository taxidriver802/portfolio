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

  return (
    <div className="project__container">
      {projects.map((project, index) => {
        const { title, img, description, technologies, links = {} } = project;
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
              {technologies.frontend && (
                <>
                  <h4>Frontend</h4>
                  <ul className="project__tech-list">
                    {technologies.frontend.map((tech, i) => (
                      <li className="project__tech-item" key={i}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {technologies.backend && (
                <>
                  <h4>Backend</h4>
                  <ul className="project__tech-list">
                    {technologies.backend.map((tech, i) => (
                      <li className="project__tech-item" key={i}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="project__links">
                {links.live && (
                  <a
                    href={links.live}
                    className="project__link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}

                {links.frontend && (
                  <a
                    href={links.frontend}
                    className="project__link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend Repo
                  </a>
                )}

                {links.backend && (
                  <a
                    href={links.backend}
                    className="project__link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Backend Repo
                  </a>
                )}

                {/* Fallback source link for standalone projects */}
                {!links.frontend && !links.backend && links.source && (
                  <a
                    href={links.source}
                    className="project__link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
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
