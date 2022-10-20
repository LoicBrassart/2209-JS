export default function Quote({ text, author }) {
  return (
    <li>
      <h2>{text}</h2>
      <p>-- {author}</p>
    </li>
  );
}
