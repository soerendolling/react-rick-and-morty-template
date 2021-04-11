import "./MainContent.css";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Character from "./Character";

export default function MainContent() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/";

    fetch(url)
      .then((res) => res.json())
      .then((incomingData) => {
        const newData = incomingData.results;
        setCharacter(newData);
      })
      .catch((error) => {});
  }, []);

  return (
    <main className="body-main">
      <Switch>
        <Route path="/characters">
          <div className="character-layout">
            <Character characterData={character} />
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
