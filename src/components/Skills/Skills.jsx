import React, { useState, useEffect } from "react";
import Cards from "../Card/Cards";
import './Skills.scss'

function Skills() {
  const skillsData = [
    {
      title: "HTML",
      iconClass: "fa-html5",
      description:
        "Maîtrise avancée de HTML, le langage de base pour structurer et organiser le contenu des pages web. Je suis capable de créer des mises en page complexes et d'optimiser le code pour une meilleure performance.",
    },
    {
      title: "CSS",
      iconClass: "fa-css3-alt",
      description:
        "Expertise approfondie en CSS, permettant de styliser les éléments HTML avec précision. Je suis passionné par la création de designs attrayants et intuitifs, en utilisant les dernières techniques et les meilleures pratiques.",
    },
    {
      title: "JAVASCRIPT",
      iconClass: "fa-js",
      description:
        "Solide compétence en JavaScript, avec une compréhension approfondie des concepts fondamentaux et des fonctionnalités avancées.",
    },
    {
      title: "SASS",
      iconClass: "fa-sass",
      description:
        "Fan de SASS, une extension de CSS qui facilite la création et la gestion des feuilles de style. J'utilise des variables, des mixins et des fonctions pour améliorer l'efficacité et la maintenabilité du code CSS, ce qui me permet de créer des styles cohérents et réutilisables.",
    },
    {
      title: "REACT",
      iconClass: "fa-react",
      description:
        "React, une bibliothèque JavaScript populaire pour la construction d'interfaces utilisateur interactives et réactives. Je suis capable de créer des composants modulaires, de gérer l'état de l'application de manière efficace et d'optimiser les performances pour une expérience utilisateur fluide.",
    },
    {
      title: "Responsive-Design",
      iconClass: "",
      description:
        "Je suis capable de créer des mises en page fluides et flexibles, d'utiliser des médias queries et d'optimiser les images pour assurer une expérience utilisateur cohérente et agréable.",
    },
    
  ];

  const rotateDeg = 360 / skillsData.length;

  return (
    <section className="skills" id="skills">
      <div className="skills_content">
        <h2>Mes compétences</h2>
        <p>
          Voici quelques-unes de mes compétences, mais n’hésitez pas à me
          contacter pour en savoir davantage.
        </p>
      </div>
      <div className="slider-container">
        <div className="slider-circle">
          {skillsData.map((skill, index) => (
            <div
            key={index}
            className="slider-item"
            style={{
              transform: `rotateY(${rotateDeg * index}deg) translateZ(400px)`,
              }}
            >
              <Cards
                title={skill.title}
                iconClass={skill.iconClass}
                description={skill.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;