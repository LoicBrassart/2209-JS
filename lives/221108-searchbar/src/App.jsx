import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5555/async/characters?needle=${query}`)
      .then(({ data }) => {
        setCharacters(data);
      });
  }, [query]);

  const hChangeQuery = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <div>
      <h1>Characters gallery !</h1>
      <input
        type="search"
        placeholder="Amina, Olber, Nazuna, ..."
        value={query}
        onChange={hChangeQuery}
      />
      <ul>
        {characters.map((character) => {
          return <li>{character.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
