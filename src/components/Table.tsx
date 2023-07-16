import "../styles/table.css";

export function Table({ data }) {
  const sortedCharacters = [...data].sort((a, b) => b.votes - a.votes);
  const topCharacters = sortedCharacters.slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topCharacters.map((character, index) => (
            <tr key={index} className={index % 2 === 0 ? "light" : "dark"}>
              <td>{character.name}</td>
              <td>{character.skillset}</td>
              <td>{character.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
