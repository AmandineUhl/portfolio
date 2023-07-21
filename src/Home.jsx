import react from "react";

function Home() {
  return (
    <div className="home">
      <header>
        <nav>
          <a href="#">A propos</a>
          <a href="#">Mes compétences</a>
          <a href="#">Mes réalisations</a>
          <a href="#">Contact</a>
          <i class="fa-solid fa-chevron-down"></i>
        </nav>
        <div className="welcome">
          <div className="welcome_content">
            <p>Bienvenue, je suis</p>
            <h1>Amandine Uhl</h1>
            <p>Développeuse Front-End</p>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <img src="pc.png" alt="" />
        </div>
      </header>
      <section className="presentation">
        <img src="" alt="" />
        <div className="presentation_content">
          <h2>Je me présente</h2>
          <p>
            Forte de plus de 10 ans d'expérience dans l'armée, spécialisée dans
            la programmation des matériels informatiques propres à l'armée, j'ai
            acquis une solide expertise en développement et en résolution de
            problèmes complexes. En reconversion, j'ai obtenu un titre de niveau
            4 en plomberie chauffage, démontrant ma capacité à diversifier mes
            compétences et à m'adapter à différents domaines. Suite à mon
            parcours, j'ai entrepris la création d'une entreprise, mais j'ai
            rapidement réalisé que ce n'était pas le bon timing économique.
            Cependant, cette expérience m'a apporté une précieuse leçon sur la
            persévérance et la recherche de nouvelles opportunités. Avec
            l'opportunité de suivre une formation d'intégratrice web chez
            OpenClassroom, j'ai saisi l'occasion de me réorienter vers ma
            passion pour le développement web. Cette formation, combinée à mon
            apprentissage personnel, m'a permis d'acquérir les compétences
            nécessaires pour devenir une développeuse front-end compétente et
            polyvalente. Je suis désormais prête à mettre à profit mon bagage
            professionnel, ma curiosité et ma passion pour créer des expériences
            utilisateur exceptionnelles et des interfaces web innovantes.
          </p>
        </div>
      </section>
      <section className="skills">
        <div>
          <h2>Mes compétences</h2>
          <p>
            Voici quelques unes de mes compétences, mais n’hésitez pas à me
            contacter pour en savoir d’avantage
          </p>
        </div>
        <div className="all_cards">
          <div className="card">
            <div>
              <h3>HTML</h3>
              <img src="" alt="" />
            </div>
            <p>
              Maîtrise avancée de HTML, le langage de base pour structurer et
              organiser le contenu des pages web. Je suis capable de créer des
              mises en page complexes et d'optimiser le code pour une meilleure
              performance.
            </p>
            <a href="">En savoir plus</a>
          </div>
          <div className="card">
            <div>
              <h3>CSS</h3>
              <img src="" alt="" />
            </div>
            <p>
              Expertise approfondie en CSS, permettant de styliser les éléments
              HTML avec précision. Je suis passionné par la création de designs
              attrayants et intuitifs, en utilisant les dernières techniques et
              les meilleures pratiques.
            </p>
            <a href="">En savoir plus</a>
          </div>
          <div className="card">
            <div>
              <h3>JAVASCRIPT</h3>
              <img src="" alt="" />
            </div>
            <p>
              Solide compétence en JavaScript, avec une compréhension
              approfondie des concepts fondamentaux et des fonctionnalités
              avancées.{" "}
            </p>
            <a href="">En savoir plus</a>
          </div>
          <div className="card">
            <div>
              <h3>SASS</h3>
              <img src="" alt="" />
            </div>
            <p>
              Fan de SASS, une extension de CSS qui facilite la création et la
              gestion des feuilles de style. J'utilise des variables, des mixins
              et des fonctions pour améliorer l'efficacité et la maintenabilité
              du code CSS, ce qui me permet de créer des styles cohérents et
              réutilisables.
            </p>
            <a href="">En savoir plus</a>
          </div>
          <div className="card">
            <div>
              <h3>REACT</h3>
              <img src="" alt="" />
            </div>
            <p>
              React, une bibliothèque JavaScript populaire pour la construction
              d'interfaces utilisateur interactives et réactives. Je suis
              capable de créer des composants modulaires, de gérer l'état de
              l'application de manière efficace et d'optimiser les performances
              pour une expérience utilisateur fluide.
            </p>
            <a href="">En savoir plus</a>
          </div>
          <div className="card">
            <div>
              <h3>Responsive-Design</h3>
              <img src="" alt="" />
            </div>
            <p>
              Une approche de conception web qui garantit que les sites
              s'adaptent et fonctionnent de manière optimale sur tous les
              appareils et résolutions d'écran. Je suis capable de créer des
              mises en page fluides et flexibles, d'utiliser des médias queries
              et d'optimiser les images pour assurer une expérience utilisateur
              cohérente et agréable.
            </p>
            <a href="">En savoir plus</a>
          </div>
        </div>
      </section>
      <section className="projects">
        <h2>Mes réalisations</h2>
        <div className="carousel"></div>
      </section>
      <footer>
        <div>
          <i class="fa-solid fa-phone-volume"></i>
          <p>06.35.36.66.03</p>
        </div>
        <div>
          <i class="fa-solid fa-envelope"></i>
          <a href="">amandine_uhl@outlook.fr</a>
        </div>
        <div>
          <i class="fa-solid fa-location-dot"></i>
          <p>Le monde !!!</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
