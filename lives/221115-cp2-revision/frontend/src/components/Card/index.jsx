import PropTypes from "prop-types";

export default function Card({ cardData }) {
  return (
    <article>
      <h2>{cardData.name}</h2>
      <img src={cardData.imageUrl} alt={cardData.name} />
    </article>
  );
}

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};
