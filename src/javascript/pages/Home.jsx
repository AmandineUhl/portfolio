import react from "react";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Carousel from "../components/Carousel";

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
