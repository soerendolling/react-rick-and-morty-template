import "./MainContent.css";
import { Switch, Route } from "react-router-dom";

export default function MainContent() {
  return (
    <main className="body-main">
      <Switch>
        <Route path="/characters">
          <div className="character-content">
            <img></img>
            <p>Name</p>
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route path="/">
          <div className="home-content">
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
