import "./Character.css";

export default function Character({ characterData }) {
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
  console.log(classForStatus);

  return characterData.map((characterInfo) => (
    <article className={`character-box ${getStatus(characterInfo.status)}`}>
      <img
        className="character-box__image"
        src={characterInfo.image}
        alt={characterInfo.name}
      ></img>
      <div className="character-box__name">
        <p>Name:</p>
        <p>{characterInfo.name}</p>
      </div>
    </article>
  ));
}
