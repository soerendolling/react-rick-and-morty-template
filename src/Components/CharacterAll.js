import "./CharacterAll.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CharacterAll() {
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

  let classForStatus;
  function getStatus(status) {
    if (status === "Alive") {
      classForStatus = "character--alive";
    } else if (status === "Dead") {
      classForStatus = "character--dead";
    } else {
      classForStatus = "character--unknown";
    }
    return classForStatus;
  }

  return character.map((characterInfo) => (
    <article className={`character-box ${getStatus(characterInfo.status)}`}>
      <img
        className="character-box__image"
        src={characterInfo.image}
        alt={characterInfo.name}
      ></img>

      <div className="character-box__name">
        <NavLink to="/character-page">
          <p>Name:</p>
          <p>{characterInfo.name}</p>
        </NavLink>
      </div>
    </article>
  ));
}
