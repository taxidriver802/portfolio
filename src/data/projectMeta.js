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
import retroArcadeMenu from "../assets/image/retroarcademenu.webp";

const projectMeta = {
  chatty: {
    title: "Chatty - Full Stack Application",
    description: "A real-time full stack chat application.",
    img: chatapp,
    technologies: {
      frontend: [
        "React",
        "Vite",
        "Socket.io",
        "Tailwind CSS",
        "Zustand",
        "Axios",
      ],
      backend: [
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Cloudinary",
        "bcrypt",
      ],
    },
    links: {
      live: "https://fullstack-chat-app-1x3z.onrender.com/",
      frontend: "https://github.com/taxidriver802/my-chat-frontend",
      backend: "https://github.com/taxidriver802/my-chat-backend",
    },
  },

  newsExplorer: {
    title: "News Explorer - Full Stack Application - Demo",
    description: "A news aggregator with authentication and saved articles.",
    img: newsExplorer,
    technologies: {
      frontend: ["React", "Vite", "React Router", "JavaScript", "HTML", "CSS"],
      backend: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "CORS"],
    },
    links: {
      frontend: "https://github.com/taxidriver802/newsExplorer",
      backend: "https://github.com/taxidriver802/newsExplorerBackend",
    },
  },

  wearWithWeather: {
    title: "Wear with Weather - Full Stack Application",
    description: "A clothing recommendation app based on weather data.",
    img: wear,
    technologies: {
      frontend: [
        "React 18",
        "Vite",
        "React Router v6",
        "JavaScript (ESModules)",
        "Prettier",
        "ESLint",
        "Custom Deployment via SCP",
      ],
      backend: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "ESLint",
        "Prettier",
        "GitHub Actions",
      ],
    },
    links: {
      live: "https://wearwithweather.jumpingcrab.com",
      frontend: "https://github.com/taxidriver802/se_project_react",
      backend: "https://github.com/taxidriver802/se_project_express",
    },
  },
  se_project_coffeeshop: {
    title: "Coffee Shop - HTML Demo",
    img: coffee,
    technologies: ["HTML", "CSS"],
  },
  se_project_aroundtheus: {
    title: "Around the US - React Demo",
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
    title: "Movie List - React Demo",
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
    title: "Retro Games - Python Terminal Demo",
    img: pythonGames,
    technologies: [
      "Python 3",
      "Object-Oriented Programming (OOP)",
      "Standard Library (e.g., random, time)",
      "Command-line Interface (CLI)",
    ],
  },
  portfolio: {
    title: "Portfolio",
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

  first_project: {
    title: "First Project - About Me",
    img: firstProject,
    technologies: ["HTML", "CSS"],
  },
  first_calculator: {
    title: "Calculator - JavaScript Demo",
    img: calculator,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  JSGames: {
    title: "Retro Games - React Demo",
    img: retroArcadeMenu,
    description: "A collection of retro games refactored to React.",
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "CSS Modules",
      "React Router",
      "LocalStorage API",
      "Vite",
    ],
    links: {
      live: "https://taxidriver802.github.io/JSGames/",
    },
  },
};

export default projectMeta;
