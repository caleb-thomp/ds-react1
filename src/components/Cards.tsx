import React from "react";
import { Card } from "./Card";
import { Character } from "../data/fma-data";
import "../styles/cards.css";

type CardsProps = {
  characters : Character[]
}

export class Cards extends React.Component <CardsProps>{
  render() {
    const { characters } = this.props;

    return (
      <>
        <section id="character-cards">
          {characters.map((character, index) => (
            <Card character={character} index={index} />
          ))}
        </section>
      </>
    );
  }
}
