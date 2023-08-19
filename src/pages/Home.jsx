import react from "react";
import Presentation from "../components/Presentation/Presentation";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <main>
        <Presentation />
        <Skills />
        <Projects />
        <Contact/>
      </main>
    </div>
  );
}

export default Home;
