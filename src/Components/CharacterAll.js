import "./CharacterAll.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CharacterAll() {
  const [character, setCharacter] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((incomingData) => {
        const newData = incomingData.results;
        setCharacter(newData);
        setTotalPages(incomingData.info.pages);
      })

      .catch((error) => {});
  }, [page]);

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

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function renderCharacter() {
    return character.map((characterInfo) => (
      <article
        key={characterInfo.id}
        className={`character-box ${getStatus(characterInfo.status)}`}
      >
        <img
          className="character-box__image"
          src={characterInfo.image}
          alt={characterInfo.name}
        ></img>

        <div className="character-box__name">
          <NavLink to={`/characters/${characterInfo.id}`}>
            <p>Name:</p>
            <p>{characterInfo.name}</p>
          </NavLink>
        </div>
      </article>
    ));
  }

  return (
    <div className="character-main">
      <div className="character-layout">{renderCharacter()}</div>
      {page < totalPages && (
        <button className="character-button__load" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
