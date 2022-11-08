import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

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
    </div>
  );
}

export default App;
