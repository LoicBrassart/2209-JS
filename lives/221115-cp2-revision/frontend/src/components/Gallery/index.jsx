import Card from "@components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("https://api.magicthegathering.io/v1/cards").then(({ data }) => {
      setCards(data.cards);
    });
  }, []);

  return (
    <ul>
      {cards
        .filter((card) => {
          if (card.name) return true;
          return false;
        })
        .map((card) => {
          return (
            <li key={card.id}>
              <Card cardData={card} />
            </li>
          );
        })}
    </ul>
  );
}
