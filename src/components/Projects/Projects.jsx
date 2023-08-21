import React from "react";
import "./Projects.scss";

function Projects() {
  const projectsData = [
    {
      title: "Booki",
      imageSrc: "booki.png",
      description: "Lorem ipsum dolor sit amet. Ut ipsum modi vel assumenda dolorum eos ullam numquam. Ut dicta quaerat a dolores illo qui mollitia ratione id repudiandae consequatur aut enim quaerat. Et internos nihil eos nemo voluptatem rem beatae laudantium eos tempore cupiditate aut expedita iure qui temporibus praesentium.",
      link: "https://amandineuhl.github.io/booki/",
    },
    {
      title: "Print It",
      imageSrc: "print it.png",
      description: "l'incontournable carousel en JS, ce projet avait pour but de rendre un site dynamique en ajoutant un carousel sur la banner",
      link: "https://amandineuhl.github.io/Print-it-JS/",
    },
    {
      title: "Oh my food",
      imageSrc: "ohmyfood.png",
      description: "Lorem ipsum dolor sit amet. Ut ipsum modi vel assumenda dolorum eos ullam numquam. Ut dicta quaerat a dolores illo qui mollitia ratione id repudiandae consequatur aut enim quaerat. Et internos nihil eos nemo voluptatem rem beatae laudantium eos tempore cupiditate aut expedita iure qui temporibus praesentium.",
      link: "https://amandineuhl.github.io/oh-my-food/",
    },
    {
      title: "Nina Carducci",
      imageSrc: "Nina Carducci.png",
      description: "Optimisation SEO du site de Nina Carducci. J'ai utilisé les outils d'audit google light house, wave et Google Rich Snippet pour orienter les améliorations à apporter",
      link: "https://amandineuhl.github.io/nina_carducci/",
    },
    {
      title: "Kasa",
      imageSrc: "kasa.png",
      description: "Ce projet avait pour but la refonte de la plateform Kasa.Mon rôle a consisté à mettre en œuvre les maquettes Figma avec React, en créant des composants et des routes. Mon travail a contribué à moderniser l'expérience utilisateur de cette plateforme de location. ",
      link: "https://github.com/AmandineUhl/kasa",
    },
    
  ];

  return (
    <section id="projects">
     <h2>Mes réalisations</h2>
      <div className="projects">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-hover">
                <p className="project-text">{project.description}</p>
              </div>
            </div>
            <img
              className="project-image"
              src={project.imageSrc}
              alt={project.title}
            />
            <a className="project-link" href={project.link}>
                <i className="fa-solid fa-link"></i> lien
                </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;