import { Contact } from "./Contact";
import { Apropos } from "./Apropos";
import { Header } from "./Header";
import { Projets } from "./Projets";
import { Projet1 } from "./Projets/Projet1";
import { Projet2 } from "./Projets/Projet2";
import { Projet3 } from "./Projets/Projet3";
import { Nav } from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./Footer";

function Accueil() {
  return (
    <div className="pagePrincipale">
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

          {/* ============================= END ============================ */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Accueil;
