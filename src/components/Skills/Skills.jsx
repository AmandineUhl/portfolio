import React, { useState, useEffect } from "react";
import Cards from "../Card/Cards";
import './Skills.scss'




function Skills() {
  const skillsData = [
    {
      title: "REACT",
      image: "/react.svg",
      description:
        "React, une bibliothèque JavaScript populaire pour la construction d'interfaces utilisateur interactives et réactives. Je suis capable de créer des composants modulaires, de gérer l'état de l'application de manière efficace et d'optimiser les performances pour une expérience utilisateur fluide.",
    },
    {
      title: "REDUX",
      image: "/redux.svg",
      description:
        "J'intègre habilement les appels d'APIs grâce à des middlewares, permettant ainsi des interactions fluides entre le front-end et le back-end. Ceci garantit des applications réactives et à jour en temps réel.",
    },
    {
      title: "HTML",
      image: "/html.svg",
      description:
        "Maîtrise avancée de HTML, le langage de base pour structurer et organiser le contenu des pages web. Je suis capable de créer des mises en page complexes et d'optimiser le code pour une meilleure performance.",
    },
    {
      title: "SASS",
      image: "/sass.svg",
      description:
        "SASS, une extension de CSS qui facilite la création et la gestion des feuilles de style. J'utilise des variables, des mixins et des fonctions pour améliorer l'efficacité et la maintenabilité du code CSS, ce qui me permet de créer des styles cohérents et réutilisables.",
    },
    {
      title: "JAVASCRIPT",
      image: "/javascript.svg",
      description:
        "Solide compétence en JavaScript, avec une compréhension approfondie des concepts fondamentaux et des fonctionnalités avancées.",
    },
    {
      title: "Responsive-Design",
      iconClass: "",
      description:
        "Je suis capable de créer des mises en page fluides et flexibles, d'utiliser des médias queries et d'optimiser les images pour assurer une expérience utilisateur cohérente et agréable.",
    },
    {
      title: "UI/UX Design",
      iconClass: "",
      description:
        "Je suis compétente en conception d'interfaces utilisateur (UI) et d'expériences utilisateur (UX). Mon expertise réside dans la création d'interfaces esthétiques et fonctionnelles, en harmonie avec les besoins des utilisateurs.",
    },
    {
      title: "Optimisation SEO",
      iconClass: "",
      description:
        "Je maîtrise l'optimisation pour les moteurs de recherche (SEO), améliorant la visibilité en ligne grâce à des stratégies ciblées. Mon expertise comprend l'analyse des mots-clés, l'optimisation des balises et la création de contenu pertinent pour obtenir un meilleur classement sur les moteurs de recherche.",
    },
    
  ];
  const rotateDeg = 360 / skillsData.length;

  const [translateZ, setTranslateZ] = useState(400); 

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 992) {
        setTranslateZ(300);
      } else if (screenWidth < 1200) {
        setTranslateZ(400);
      } else {
        setTranslateZ(500);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


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
              transform: `rotateY(${rotateDeg * index}deg) translateZ(${translateZ}px)`,
              }}
            >
              <Cards
                title={skill.title}
                image={skill.image}
                description={skill.description}
              />
            </div>
          ))}
        </div>
        <div className="skills_mobile">
      {skillsData.map((skill, index) => (
        <div key={index} className="carousel-item">
          <Cards
            title={skill.title}
            image={skill.image}
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