import "./CharacterDetailed.css";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetailed() {
  const { id } = useParams();
  const history = useHistory();
  const [character, setCharacter] = useState({});

  console.log(id);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((incomingData) => {
        console.log(incomingData);
        setCharacter(incomingData);
      })
      .catch((error) => {});
  }, [id]);

  console.log(character);
  return (
    <div className="character-detailed__layout">
      <article className="character-detailed__box">
        <p>{character.name}</p>
        <img
          src={character.image}
          alt="character avatar"
          className="character-detailed__image"
        ></img>
        <p>{`Status:${character.status}`}</p>
        <p>{`Gender:${character.gender}`}</p>
        <p>{`Species: ${character.species}`}</p>
        <p>{`Type: ${character.type}`}</p>

        <button onClick={() => history.goBack()}>Back</button>
      </article>
    </div>
  );
}
