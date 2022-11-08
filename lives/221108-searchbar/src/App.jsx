import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Style from "./style";

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
    <Style>
      <header>
        <h1>Characters gallery !</h1>
        <div>
          <input
            type="search"
            placeholder="Amina, Olber, Nazuna, ..."
            value={query}
            onChange={hChangeQuery}
          />
          <ul className={query.length === 0 && "hidden"}>
            {characters.map((character) => {
              return <li>{character.name}</li>;
            })}
          </ul>
        </div>
      </header>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam,
      suscipit magni cumque non quasi expedita voluptatum, corrupti veniam error
      recusandae, laborum nihil iure necessitatibus sunt aliquid ipsa ipsam
      veritatis.
    </Style>
  );
}

export default App;
