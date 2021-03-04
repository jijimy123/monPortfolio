import "./Accueil.scss";
import { Contact } from "./Contact";
import Aprops from "./Aprops";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Projets } from "./Projets";

function Accueil() {
  return (
    <div className="pagePrincipale">
      <Nav />
      <Header />
      <Projets />
      <Aprops />
      <Contact />
    </div>
  );
}

export default Accueil;
