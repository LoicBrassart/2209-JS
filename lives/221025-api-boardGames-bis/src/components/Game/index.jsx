import Styled from "./style";

export default function Game(props) {
  return (
    <Styled>
      <article>
        <img src={props.thumb_url} alt={props.name} />
        <h2>{props.name}</h2>
        <div className="flexer">
          <p>{props.players} joueurs</p>
          <p>{props.playtime} minutes</p>
        </div>
      </article>
    </Styled>
  );
}
