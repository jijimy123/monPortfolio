import { Contact } from "./Contact";
import Aprops from "./Aprops";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Projets } from "./Projets";
import { Projet } from "./Projet";

function Accueil() {
  return (
    <div className="pagePrincipale">
      <Nav />
      <Header />
      <Aprops />
      <Projets />
      <Projet />
      <Contact />
    </div>
  );
}

export default Accueil;
