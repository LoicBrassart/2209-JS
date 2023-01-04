import "./App.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "@services/UserContext";

function App() {
  const [user, setUser] = useState({});
  const { userId } = useContext(UserContext);

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${userId}`).then(({ data }) => {
      setUser(data);
    });
  }, []);

  const hChange = (evt) => {
    setUser({
      id: user.id,
      firstname: evt.target.value,
    });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();

    axios
      .put(`http://localhost:5000/users/${user.id}`, user)
      .then(({ data }) => {
        console.log("Yay!");
      })
      .catch((err) => {
        console.warn("Ohnoez!");
      });
  };

  return (
    <div className="App">
      <h1>Mon profil</h1>
      {user.id && (
        <form onSubmit={hSubmit}>
          <input type="hidden" name="id" value={user.id} />
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={hChange}
          />
          <input type="submit" value="Save" />
        </form>
      )}
    </div>
  );
}

export default App;
