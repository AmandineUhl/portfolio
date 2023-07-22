import React from "react";
import Cards from "./Cards";

function Skills() {
  return (
    <section className="skills">
      <div className="skills_content">
        <h2>Mes compétences</h2>
        <p>
          Voici quelques unes de mes compétences, mais n’hésitez pas à me
          contacter pour en savoir d’avantage
        </p>
      </div>
      <div className="all_cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </section>
  );
}

export default Skills;
