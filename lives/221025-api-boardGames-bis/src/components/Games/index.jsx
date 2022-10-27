import Game from "@components/Game";
import axios from "axios";
import { useState } from "react";
import Styled from "./style";

export default function Games() {
  const [gamesData, setGamesData] = useState([]);
  const [currPlayers, setCurrPlayers] = useState(1);
  const [currTime, setCurrTime] = useState(120);

  const hChangePlayers = (evt) => {
    setCurrPlayers(evt.target.value);
  };
  const hChangeTime = (evt) => {
    setCurrTime(evt.target.value);
  };

  const fetchGames = () => {
    axios
      .get(
        "https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&client_id=JLBr5npPhV"
      )
      .then((response) => {
        setGamesData(response.data.games);
      });
  };

  return (
    <Styled>
      <h2>Games !</h2>
      <input
        type="number"
        value={currPlayers}
        onChange={hChangePlayers}
        name="players"
      />
      <input
        type="number"
        value={currTime}
        onChange={hChangeTime}
        name="time"
      />
      <button type="button" onClick={fetchGames}>
        Fetch games !
      </button>
      <ul>
        {gamesData
          .filter((elt) => {
            return (
              elt.min_players <= currPlayers &&
              elt.max_players >= currPlayers &&
              elt.max_playtime <= currTime
            );
          })
          .map((elt) => {
            return <Game {...elt} />;
          })}
      </ul>
    </Styled>
  );
}
