import React, { useState } from "react";
import "./Projects.scss";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const projectsData = [
    {
      title: "Booki",
      imageSrc: "booki.png",
      description:
        "Lorem ipsum dolor sit amet. Ut ipsum modi vel assumenda dolorum eos ullam numquam. Ut dicta quaerat a dolores illo qui mollitia ratione id repudiandae consequatur aut enim quaerat. Et internos nihil eos nemo voluptatem rem beatae laudantium eos tempore cupiditate aut expedita iure qui temporibus praesentium.",
      link: "https://amandineuhl.github.io/booki/",
    },
    {
      title: "Print It",
      imageSrc: "print it.png",
      description:
        "l'incontournable carousel en JS, ce projet avait pour but de rendre un site dynamique en ajoutant un carousel sur la banner",
      link: "https://amandineuhl.github.io/Print-it-JS/",
    },
    {
      title: "Oh my food",
      imageSrc: "ohmyfood.png",
      description:
        "Lorem ipsum dolor sit amet. Ut ipsum modi vel assumenda dolorum eos ullam numquam. Ut dicta quaerat a dolores illo qui mollitia ratione id repudiandae consequatur aut enim quaerat. Et internos nihil eos nemo voluptatem rem beatae laudantium eos tempore cupiditate aut expedita iure qui temporibus praesentium.",
      link: "https://amandineuhl.github.io/oh-my-food/",
    },
    {
      title: "Nina Carducci",
      imageSrc: "Nina Carducci.png",
      description:
        "Optimisation SEO du site de Nina Carducci. J'ai utilisé les outils d'audit google light house, wave et Google Rich Snippet pour orienter les améliorations à apporter",
      link: "https://amandineuhl.github.io/nina_carducci/",
    },
    {
      title: "Kasa",
      imageSrc: "kasa.png",
      description:
        "Ce projet avait pour but la refonte de la plateform Kasa.Mon rôle a consisté à mettre en œuvre les maquettes Figma avec React, en créant des composants et des routes. Mon travail a contribué à moderniser l'expérience utilisateur de cette plateforme de location. ",
      link: "https://github.com/AmandineUhl/kasa",
    },
  ];

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects">
      <h2>Mes réalisations</h2>
      <div className="projects button" id="one">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <button className="button" onClick={() => openModal(project)}>
                Voir plus
              </button>
            </div>
          </div>
        ))}
      </div>
      {activeProject && (
        <div className="modal-container active">
          <div className="modal-background" onClick={closeModal}>
            <div className="modal">
              <img
                className="project-image"
                src={activeProject.imageSrc}
                alt={activeProject.title}
              />
              
              <p className="project-text">{activeProject.description}</p>
              <a className="project-link" href={activeProject.link}>
                <i className="fa-solid fa-link"></i> lien
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;