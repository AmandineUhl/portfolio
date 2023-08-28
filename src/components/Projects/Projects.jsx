import React, { useState } from "react";
import "./Projects.scss";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const projectsData = [
    {
      title: "Portfolio Architecte",
      imageSrc: "sophie.webp",
      description:
        "Création d'un page web dynamique avec JS. la page de présentation des travaux de l'architecte avec filtre, la page de connexion de l'administrateur du site ainsi que la modale permettant d'uploader de nouveaux médias",
      link: "https://github.com/AmandineUhl/Projet-6",
    },
    {
      title: "Print It",
      imageSrc: "print-it.webp",
      description:
        "l'incontournable carousel en JS, ce projet avait pour but de rendre un site dynamique en ajoutant un carousel sur la bannière",
      link: "https://amandineuhl.github.io/Print-it-JS/",
    },
    {
      title: "Oh my food",
      imageSrc: "ohmyfood.webp",
      description:
        "Intégration d'un site responsive en mobile first. Utilisation du css pour créer un site animé !!!",
      link: "https://amandineuhl.github.io/oh-my-food/",
    },
    {
      title: "Nina Carducci",
      imageSrc: "Nina-Carducci.webp",
      description:
        "Optimisation SEO du site de Nina Carducci. J'ai utilisé les outils d'audit google light house, wave et Google Rich Snippet pour orienter les améliorations à apporter",
      link: "https://amandineuhl.github.io/nina_carducci/",
    },
    {
      title: "Kasa",
      imageSrc: "kasa.webp",
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