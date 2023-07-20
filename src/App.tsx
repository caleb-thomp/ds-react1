import { characters } from "../src/data/fma-data";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Cards } from "./components/Cards";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Table characters={characters}></Table>
      <Cards characters={characters} />
    </>
  );
}

export default App;
