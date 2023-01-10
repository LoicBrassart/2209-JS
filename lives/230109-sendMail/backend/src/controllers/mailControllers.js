const nodemailer = require("nodemailer");
require("dotenv").config();

const sendContactMail = (req, res) => {
  const { name, surname, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: false,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });

  const mailOptions = {
    from: email || "default@spamland.com", // this is the address from which the email will be sent
    to: process.env.SMTP_SENDIN_USER, // this is the address to which the email will be sent
    subject: "New message from contact form",
    text: `${message} \n\n Phone: ${phone} \n\n Name: ${name} \n\n Surname: ${surname} \n\n Email: ${email}`,
    html: `<p>${message}</p> <p>Phone: ${phone}</p> <p>Name: ${name}</p> <p>Surname: ${surname}</p> <p>Email: ${email}</p>`,
  };

  transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info);
      res.status(200).send("Message sent");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Something went wrong");
    });
};

module.exports = {
  sendContactMail,
};
