import "./CharacterAll.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CharacterAll() {
  const [character, setCharacter] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((incomingData) => {
        const newData = incomingData.results;
        setCharacter((prevCharacters) => {
          return [...prevCharacters, ...newData];
        });
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

  let filteredCharacter;
  if (filter === "Dead") {
    filteredCharacter = character.filter(
      (characterInfo) => characterInfo.status === "Dead"
    );
  } else if (filter === "Alive") {
    filteredCharacter = character.filter(
      (characterInfo) => characterInfo.status === "Alive"
    );
  } else if (filter === "unknown") {
    filteredCharacter = character.filter(
      (characterInfo) => characterInfo.status === "unknown"
    );
  } else {
    filteredCharacter = character;
  }

  function handleAllFilter() {
    setFilter("");
  }

  function handleDeadFilter() {
    setFilter("Dead");
  }
  function handleAliveFilter() {
    setFilter("Alive");
  }
  function handleUnknownFilter() {
    setFilter("unknown");
  }

  function renderCharacter() {
    return filteredCharacter.map((characterInfo) => (
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
      <div>
        <button onClick={handleAllFilter}>All</button>
        <button onClick={handleDeadFilter}>Dead</button>
        <button onClick={handleAliveFilter}>Alive</button>
        <button onClick={handleUnknownFilter}>unknown</button>
      </div>
      <div className="character-layout">{renderCharacter()}</div>
      {page < totalPages && (
        <button className="character-button__load" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
