import React, { useState, useEffect } from "react";
import Cards from "../Card/Cards";
import './Skills.scss'

function Skills() {
  const skillsData = [
    {
      title: "HTML",
      imgClass: "",
      description:
        "Maîtrise avancée de HTML, le langage de base pour structurer et organiser le contenu des pages web. Je suis capable de créer des mises en page complexes et d'optimiser le code pour une meilleure performance.",
    },
    {
      title: "CSS",
      imgClass: "t",
      description:
        "Expertise approfondie en CSS, permettant de styliser les éléments HTML avec précision. Je suis passionné par la création de designs attrayants et intuitifs, en utilisant les dernières techniques et les meilleures pratiques.",
    },
    {
      title: "JAVASCRIPT",
      imgClass: "",
      description:
        "Solide compétence en JavaScript, avec une compréhension approfondie des concepts fondamentaux et des fonctionnalités avancées.",
    },
    {
      title: "SASS",
      imgClass: "",
      description:
        "Fan de SASS, une extension de CSS qui facilite la création et la gestion des feuilles de style. J'utilise des variables, des mixins et des fonctions pour améliorer l'efficacité et la maintenabilité du code CSS, ce qui me permet de créer des styles cohérents et réutilisables.",
    },
    {
      title: "REACT",
      imgClass: "",
      description:
        "React, une bibliothèque JavaScript populaire pour la construction d'interfaces utilisateur interactives et réactives. Je suis capable de créer des composants modulaires, de gérer l'état de l'application de manière efficace et d'optimiser les performances pour une expérience utilisateur fluide.",
    },
    {
      title: "Responsive-Design",
      imgClass: "",
      description:
        "Je suis capable de créer des mises en page fluides et flexibles, d'utiliser des médias queries et d'optimiser les images pour assurer une expérience utilisateur cohérente et agréable.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % skillsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Changement automatique toutes les 3 secondes
    return () => clearInterval(interval);
  }, []);

  const rotateDeg = 360 / skillsData.length;

  return (
    <section className="skills">
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
                transform: `rotateY(${(360 / skillsData.length) * index}deg) translateZ(300px)`,
              }}
            >
              <Cards
                title={skill.title}
                imgClass={skill.imgClass}
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