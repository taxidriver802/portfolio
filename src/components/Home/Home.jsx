import "./Home.css";

import profileImg from "../../assets/image/IMG_2608.JPG";
import TypingHeader from "../TypingHeader/TypingHeader";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">
        I Am <TypingHeader />
      </h1>
      <div className="home__body">
        <img src={profileImg} alt="A picture of me" className="home__image" />
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
    </div>
  );
};

export default Home;
