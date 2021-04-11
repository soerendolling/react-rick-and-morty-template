import "./MainContent.css";
import { Switch, Route } from "react-router-dom";
import CharacterAll from "./CharacterAll";
import CharacterDetailed from "./CharacterDetailed";

export default function MainContent() {
  return (
    <main className="body-main">
      <Switch>
        <Route path="/characters">
          <div className="character-layout">
            <CharacterAll />
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route path="/characters/:id">
          <div className="character-page-layout">
            <CharacterDetailed />
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <div className="home-layout">
            <h3>Welcome to my Rick and Morty App</h3>
            <div className="home-box__image">
              <p>Static Image of Rick and Morty</p>
            </div>
            <p>Developed by Me during the neuefische bootcamp</p>
          </div>
        </Route>
      </Switch>
    </main>
  );
}
