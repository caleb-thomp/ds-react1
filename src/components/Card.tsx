import { Character } from "../data/fma-data";

type CardProps = {
  index: number,
  character: Character
}

export function Card({ index, character } : CardProps) {
  return (
    <div key={index} className="card">
      <div className="card-titles">
        <h3>{character.name}</h3>
        <h4>{character.nickName}</h4>
      </div>
      <img src={character.imageUrl} alt="" />
      <p>{character.background}</p>
    </div>
  );
}
