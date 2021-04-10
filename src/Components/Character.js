export default function Character({ characterData }) {
  let classForStatus;

  if (characterData.status === "Alive") {
    classForStatus = "character--alive";
  } else if (characterData.status === "Dead") {
    classForStatus = "character--dead";
  } else {
    classForStatus = "character--unknown";
  }

  console.log(classForStatus);

  return characterData.map((characterInfo) => (
    <article className={`character-box ${classForStatus}`}>
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
