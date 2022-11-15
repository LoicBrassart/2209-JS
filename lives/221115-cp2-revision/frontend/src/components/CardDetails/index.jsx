import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardDetails() {
  const [cardDetails, setCardDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.magicthegathering.io/v1/cards/${id}`)
      .then(({ data }) => {
        setCardDetails(data.card);
      });
  }, []);
  return (
    <>
      <p>Oh hi ! I'm {id}!</p>
      <p>People call me {cardDetails.name}</p>
      <img src={cardDetails.imageUrl} alt={cardDetails.name} />
      <p>
        {cardDetails.types} - {cardDetails.subtypes.join(" ")}
      </p>
    </>
  );
}
