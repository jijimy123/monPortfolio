import { Contact } from "./Contact";
import { Apropos } from "./Apropos";
import { Header } from "./Header";
import { Projets } from "./Projets";
import { Projet } from "./Projet";

function Accueil() {
  return (
    <div className="pagePrincipale">
      <Header />
      <Apropos />
      <Projets />
      <Projet />
      <Contact />
    </div>
  );
}

export default Accueil;
