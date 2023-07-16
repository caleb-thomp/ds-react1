import React from "react";
import { Card } from "./Card";
import "../styles/cards.css";

export class Cards extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <section id="character-cards">
          {data.map((character, index) => (
            <Card character={character} index={index} />
          ))}
        </section>
      </>
    );
  }
}
