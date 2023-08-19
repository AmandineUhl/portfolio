import React, { useRef, useState } from "react";
import './Presentation.scss';
import { gsap } from "gsap";

function Presentation() {
  const [showMeText, setShowMeText] = useState(true); 
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const handleImageClick = () => {
    setShowMeText(false); 
    gsap.fromTo(
      imageRef.current,
      { x: 0 },
      {
        x: "100%",
        duration: 0,
        onComplete: () => {
          gsap.fromTo(
            textRef.current,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0 }
          );
        },
      }
    );
  };

  return (
    <section className="presentation" id="presentation">
      {showMeText && (
        <div className="me" onClick={handleImageClick}>
          Qui suis-je ?
        </div>
      )}

      <div className="content-container">
        <div ref={imageRef} className="image-container">
          <img src="../../vaisseau.png" alt="fusee" />
        </div>

        <div ref={textRef} className="text-container">
          <h2>Je me présente</h2>
        <p>
          Forte de plus de 10 ans d'expérience dans l'armée, spécialisée dans la
          programmation des matériels informatiques propres à l'armée, j'ai
          acquis une solide expertise en développement et en résolution de
          problèmes complexes. En reconversion, j'ai obtenu un titre de niveau 4
          en plomberie chauffage, démontrant ma capacité à diversifier mes
          compétences et à m'adapter à différents domaines. Suite à mon
          parcours, j'ai entrepris la création d'une entreprise, mais j'ai
          rapidement réalisé que ce n'était pas le bon timing économique.
          Cependant, cette expérience m'a apporté une précieuse leçon sur la
          persévérance et la recherche de nouvelles opportunités. Avec
          l'opportunité de suivre une formation d'intégratrice web chez
          OpenClassroom, j'ai saisi l'occasion de me réorienter vers ma passion
          pour le développement web. Cette formation, combinée à mon
          apprentissage personnel, m'a permis d'acquérir les compétences
          nécessaires pour devenir une développeuse front-end compétente et
          polyvalente. Je suis désormais prête à mettre à profit mon bagage
          professionnel, ma curiosité et ma passion pour créer des expériences
          utilisateur exceptionnelles et des interfaces web innovantes.
        </p>
      </div>
      </div>
    </section>
  );
}

export default Presentation;
