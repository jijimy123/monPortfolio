import "./Accueil.scss";
import Entete from "./Entete";
import Projets from "./Projets";
import Contact from "./Contact";
import Aprops from "./Aprops";

function Accueil() {
  return (
    <div className="pagePrincipale">
      <Entete />
      <h1>Chen Haoyang</h1>
      <h3>
        Étudiant en Techniques d'Intégration Multimédia avec un intérêt en
        programmation front-end, j'aime apprendre des nouvelles technologies...
      </h3>
      <Projets />
      <Aprops />
      <Contact />
    </div>
  );
}

export default Accueil;
