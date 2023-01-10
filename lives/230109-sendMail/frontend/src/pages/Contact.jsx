import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [send, setSend] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5005/contact", data)
      .then((res) => {
        console.info(res);
      })
      .catch((err) => {
        console.error(err);
      });

    setSend(true);
  };

  return send === false ? (
    <section>
      <h1>Formulaire d'envoi de message</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom:</label>
        <input onChange={handleChange} type="text" name="name" />
        <label htmlFor="surname">Prénom:</label>
        <input onChange={handleChange} type="text" name="surname" />
        <label htmlFor="phone">Téléphone:</label>
        <input onChange={handleChange} type="text" name="phone" />
        <label htmlFor="email">Email:</label>
        <input onChange={handleChange} type="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea onChange={handleChange} name="message" />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  ) : (
    <section className="merci">
      <h1>Merci pour l'envoi de votre message !</h1>
      <p>Nous prendrons contact avec vous très rapidement...</p>
      <button type="button">Retour à l'accueil</button>
    </section>
  );
}
