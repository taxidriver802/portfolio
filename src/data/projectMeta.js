import calculator from "../assets/image/calculator.webp";
import firstProject from "../assets/image/firstProject.webp";
import chatapp from "../assets/image/chatapp.webp";
import newsExplorer from "../assets/image/newsExplorer.webp";
import portfolio from "../assets/image/portfolio.webp";
import pythonGames from "../assets/image/pythonGames.webp";
import movie from "../assets/image/movie.webp";
import coffee from "../assets/image/coffee.webp";
import wear from "../assets/image/wear.webp";
import around from "../assets/image/around.webp";

const projectMeta = {
  se_project_react: {
    img: wear,
    technologies: [
      "React 18",
      "Vite",
      "React Router v6",
      "JavaScript (ESModules)",
      "Prettier",
      "ESLint",
      "Custom Deployment via SCP",
    ],
    links: {
      live: "https://wearwithweather.jumpingcrab.com",
    },
  },
  se_project_express: {
    img: wear,
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "ESLint",
      "Prettier",
      "GitHub Actions",
    ],
    links: {
      live: "https://wearwithweather.jumpingcrab.com",
    },
  },
  se_project_coffeeshop: {
    img: coffee,
    technologies: ["HTML", "CSS"],
  },
  se_project_aroundtheus: {
    img: around,
    technologies: [
      "JavaScript (ES6+)",
      "Webpack 5",
      "Babel",
      "PostCSS",
      "CSS Modules",
      "HTML5",
      "Core-JS (Polyfills)",
    ],
  },
  React_Movie_List: {
    img: movie,
    technologies: [
      "React 19",
      "React Router v7",
      "Vite",
      "ESLint",
      "Modern JavaScript (ESModules)",
    ],
  },
  "python-practice-games": {
    img: pythonGames,
    technologies: [
      "Python 3",
      "Object-Oriented Programming (OOP)",
      "Standard Library (e.g., random, time)",
      "Command-line Interface (CLI)",
    ],
  },
  portfolio: {
    img: portfolio,
    technologies: [
      "React 19",
      "Vite",
      "Typed.js",
      "ESLint",
      "JavaScript (ESModules)",
    ],
    links: {
      live: "https://taxidriver802.github.io/portfolio/",
    },
  },

  newsExplorerBackend: {
    img: newsExplorer,
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "CORS"],
  },
  newsExplorer: {
    img: newsExplorer,
    technologies: [
      "React",
      "Vite",
      "React Router",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  "my-chat-frontend": {
    img: chatapp,
    technologies: [
      "React",
      "Vite",
      "Socket.io",
      "Tailwind CSS",
      "Zustand",
      "Axios",
    ],
  },
  "my-chat-backend": {
    img: chatapp,
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Cloudinary",
      "bcrypt",
    ],
  },
  first_project: {
    img: firstProject,
    technologies: ["HTML", "CSS"],
  },
  first_calculator: {
    img: calculator,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
};

export default projectMeta;
