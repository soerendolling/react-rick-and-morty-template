export default function Character({ characterData }) {
  return characterData.map((characterInfo) => (
    <article className="character-box">
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
