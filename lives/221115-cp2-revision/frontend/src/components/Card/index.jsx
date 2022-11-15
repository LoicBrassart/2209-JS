import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card({ cardData }) {
  return (
    <Link to={`/cards/${cardData.id}`}>
      <img src={cardData.imageUrl} alt={cardData.name} />
    </Link>
  );
}

Card.defaultProps = {
  cardData: {
    id: "",
    name: "",
    imageUrl:
      "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013",
  },
};
Card.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};
