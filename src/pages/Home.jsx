import react from "react";
import Presentation from "../components/Presentation/Presentation";
import Skills from "../components/Skills/Skills";
import Carousel from "../components/Carousel/Carousel";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <main>
        <Presentation />
        <Skills />
        <Carousel />
      </main>
    </div>
  );
}

export default Home;
