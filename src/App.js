import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import CharacterAll from "./Components/CharacterAll";
import CharacterDetailed from "./Components/CharacterDetailed";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="body-layout">
        <Header />
        <main className="body-main">
          <Switch>
            <Route path="/characters/:id">
              <CharacterDetailed />
            </Route>
            <Route path="/characters">
              <CharacterAll />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
