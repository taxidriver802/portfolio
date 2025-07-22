import { ArrowDown, Pin } from "lucide-react";

import "./Home.css";

import profileImg from "../../assets/image/IMG_2608.webp";

const Home = () => {
  return (
    <div className="home">
      <div className="home__body">
        <div className="home__body-img-container">
          <img src={profileImg} alt="A picture of me" className="home__image" />
          <div className="home__body-img-container-text">
            <h1 className="home__body-img-container-text-title">
              Hi, I'm Jason Cox
            </h1>
            <h2 className="home__body-img-container-text-subtitle">
              A Full-Stack Web Developer
            </h2>
            <h3 className="home__body-img-container-text-subtitle">
              <Pin width={18} height={18} /> Minneapolis, MN, USA
            </h3>
          </div>
        </div>
        <h3 className="home__description">
          Hi, I'm Jason Cox — a passionate Full-Stack Web Developer with
          experience in building dynamic, responsive web applications using
          technologies like React, Node.js, and MongoDB. My projects often
          incorporate foundational tools such as HTML, CSS, and JavaScript, and
          are powered by modern build tools like Vite to ensure fast, efficient
          development. I've also explored Python through scripting and small
          automation projects, further expanding my problem-solving toolkit.
          This portfolio showcases some of the work I’ve created to solve
          real-world problems, experiment with new ideas, and continuously grow
          as a developer. I’m always looking for opportunities to learn,
          collaborate, and take on new challenges. Feel free to explore and see
          the work I'm proud of and the tools I enjoy working with.
        </h3>
      </div>
      <h2 className="home__project-preview-title">
        <ArrowDown className="bobbing-arrow" />
        Scroll down to see some of my work
        <ArrowDown className="bobbing-arrow" />
      </h2>
    </div>
  );
};

export default Home;
