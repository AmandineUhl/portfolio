import React from "react";
import "./Projects.scss";

function Projects() {
  const projectsData = [
    {
      title: "Booki",
      imageSrc: "booki.png",
      description: "Lorem ipsum dolor sit amet. Ut ipsum modi vel assumenda dolorum eos ullam numquam. Ut dicta quaerat a dolores illo qui mollitia ratione id repudiandae consequatur aut enim quaerat. Et internos nihil eos nemo voluptatem rem beatae laudantium eos tempore cupiditate aut expedita iure qui temporibus praesentium.",
      link: "lien_projet1",
    },
    {
      title: "Print It",
      imageSrc: "print it.png",
      description: "Lorem ipsum dolor sit amet. Ut ipsum modi vel assumenda dolorum eos ullam numquam. Ut dicta quaerat a dolores illo qui mollitia ratione id repudiandae consequatur aut enim quaerat. Et internos nihil eos nemo voluptatem rem beatae laudantium eos tempore cupiditate aut expedita iure qui temporibus praesentium.",
      link: "lien_projet2",
    },
    {
      title: "Oh my food",
      imageSrc: "ohmyfood.png",
      description: "Lorem ipsum dolor sit amet. Ut ipsum modi vel assumenda dolorum eos ullam numquam. Ut dicta quaerat a dolores illo qui mollitia ratione id repudiandae consequatur aut enim quaerat. Et internos nihil eos nemo voluptatem rem beatae laudantium eos tempore cupiditate aut expedita iure qui temporibus praesentium.",
      link: "lien_projet3",
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