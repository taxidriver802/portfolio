import Header from "../Header/Header";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default App;
