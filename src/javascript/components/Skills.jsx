import React from "react";
import Cards from "./Cards";

function Skills() {
  const skillsData = [
    {
      title: "HTML",
      iconClass: "fa-html5", // Assuming this is the correct class for the HTML icon
      description:
        "Maîtrise avancée de HTML, le langage de base pour structurer et organiser le contenu des pages web. Je suis capable de créer des mises en page complexes et d'optimiser le code pour une meilleure performance.",
    },
    {
      title:"CSS",
      iconClass:"fa-brands fa-css3-alt",
      description:"Expertise approfondie en CSS, permettant de styliser les éléments HTML avec précision. Je suis passionné par la création de designs attrayants et intuitifs, en utilisant les dernières techniques et les meilleures pratiques."
  },
  {
      title:"JAVASCRIPT",
      iconClass:"fa-brands fa-js",
      description:"Solide compétence en JavaScript, avec une compréhension approfondie des concepts fondamentaux et des fonctionnalités avancées."
  },
  {
      title:"SASS",
      iconClass:"fa-brands fa-sass",
      description:"Fan de SASS, une extension de CSS qui facilite la création et la gestion des feuilles de style. J'utilise des variables, des mixins et des fonctions pour améliorer l'efficacité et la maintenabilité du code CSS, ce qui me permet de créer des styles cohérents et réutilisables."
  },
  {
      title:"REACT",
      iconClass:"fa-brands fa-react",
      description:"React, une bibliothèque JavaScript populaire pour la construction d'interfaces utilisateur interactives et réactives. Je suis capable de créer des composants modulaires, de gérer l'état de l'application de manière efficace et d'optimiser les performances pour une expérience utilisateur fluide."
  },
  {
      title:"Responsive-Design",
      iconClass:"",
      description:"Une approche de conception web qui garantit que les sites s'adaptent et fonctionnent de manière optimale sur tous les appareils et résolutions d'écran. Je suis capable de créer des mises en page fluides et flexibles, d'utiliser des médias queries et d'optimiser les images pour assurer une expérience utilisateur cohérente et agréable."
  }
  ];

  return (
    <section className="skills">
      <div className="skills_content">
        <h2>Mes compétences</h2>
        <p>
          Voici quelques-unes de mes compétences, mais n’hésitez pas à me
          contacter pour en savoir davantage.
        </p>
      </div>
      <div className="all_cards">
        {skillsData.map((skill, index) => (
          <Cards
            key={index}
            title={skill.title}
            iconClass={skill.iconClass}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
