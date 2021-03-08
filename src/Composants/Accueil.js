import { Contact } from "./Contact";
import { Apropos } from "./Apropos";
import { Header } from "./Header";
import { Projets } from "./Projets";
import { Projet1 } from "./Projet1";
import { Nav } from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/projet1">
            <Projet1 />
          </Route>
          {/* <Route path="/projet2">
            <Projet2 />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default Accueil;
