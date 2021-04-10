import "./MainContent.css";
import { Switch, Route } from "react-router-dom";

export default function MainContent() {
  return (
    <main className="body-main">
      <Switch>
        <Route path="/characters">
          <div className="character-layout">
            <article className="character-box">
              <img
                className="character-box__image"
                src="https://rickandmortyapi.com/api/character/avatar/37.jpeg"
                alt="A bild"
              ></img>
              <div className="character-box__name">
                <p>Name:</p>
                <p>Name</p>
              </div>
            </article>
            <article className="character-box">
              <img
                className="character-box__image"
                src="https://rickandmortyapi.com/api/character/avatar/37.jpeg"
                alt="A bild"
              ></img>
              <div className="character-box__name">
                <p>Name:</p>
                <p>Name</p>
              </div>
            </article>
            <article className="character-box">
              <img
                className="character-box__image"
                src="https://rickandmortyapi.com/api/character/avatar/37.jpeg"
                alt="A bild"
              ></img>
              <div className="character-box__name">
                <p>Name:</p>
                <p>Name</p>
              </div>
            </article>
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
