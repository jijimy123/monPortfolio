// Importation des composants
import { Contact } from "./Contact";
import { Apropos } from "./Apropos";
import { Header } from "./Header";
import { Projets } from "./Projets";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

// Importation des projets
import { Projet1 } from "./Projets/Projet1";
import { Projet2 } from "./Projets/Projet2";
import { Projet3 } from "./Projets/Projet3";
import { Projet4 } from "./Projets/Projet4";
import { Projet5 } from "./Projets/Projet5";
import { Projet6 } from "./Projets/Projet6";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Accueil() {
  return (
    <div style={{ backgroundColor: "#9CA3AF", paddingBottom: "0.3%" }}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/apropos">
            <Apropos />
          </Route>
          <Route exact path="/projets">
            <Projets />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>

          {/* =========================== Projets ========================== */}

          <Route path="/Projets/Projet1">
            <Projet1 />
          </Route>

          <Route path="/Projets/Projet2">
            <Projet2 />
          </Route>

          <Route path="/Projets/Projet3">
            <Projet3 />
          </Route>

          <Route path="/Projets/Projet4">
            <Projet4 />
          </Route>

          <Route path="/Projets/Projet5">
            <Projet5 />
          </Route>

          <Route path="/Projets/Projet6">
            <Projet6 />
          </Route>

          {/* ============================= END ============================ */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Accueil;
