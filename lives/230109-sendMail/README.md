# Setting up Nodemailer to add emailing function on an App

This workshop will show you how to setting up Nodemailer on the Wild Code School template. You will be able to send an email from a user form.

## Setup the project

First, clone this project and run `npm run setup`. The front part is already setup: in the `frontend/src/pages/Contact.jsx` component, you can find the form.

Move to the backend folder and install the nodemailer dependency:
`npm install nodemailer`.

## Creating an account on Sendinblue

Sendinblue is a french emailing plateform. By using it, you will be able to use their SMTP parameters to send email from your app.

Create an account on this website : https://app.sendinblue.com/account/profile/

Add all informations needed. You will receive a confirmation email to finish the account creation. (Sendingblue recommends you to use a professionnal email, but you can use a classical email like a gmail one).

On your account, navigate to `Transactionel`. You will find these informations :

- SMTP server
- Port
- id
- SMTP key (you maybe need to generate it)

## Setting up the .env file

On the backend folder, create a .env file if does not exist and add these informations :

```
APP_PORT=5005
FRONTEND_URL=http://localhost:3000
SMTP_SENDIN=(the SMTP server from sendinblue)
SMTP_PORT_SENDIN=(the prot from sendinblue)
SMTP_SENDIN_USER=(the id from sendinblue)
SMTP_SENDIN_PASSWORD=(the key from sendinblue)
```

## Create the mail controller

Move to controllers folder and create a `mailControllers.js` file.

Import nodemailer and dotenv :

```js
const nodemailer = require("nodemailer");
require("dotenv").config();
```

Add and export a `sendContactMail` middleware. Remember: a middleware function takes in parameters `req` and `res`.
We will get some informations from the `req.body`.

```js
const sendContactMail = (req, res) => {
  const { name, surname, phone, email, message } = req.body;
};

module.exports = {
  sendContactMail,
};
```

Next, we need to create a transporter in which we will setting up our SMTP server :

```js
const sendContactMail = (req, res) => {
  const {name, surname, phone, email, message} = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: false,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });
}
```

NB : the secure key must be setting up to false for 587 PORT, and true for 465 PORT. By default, sendinBlue give you a 587 PORT.

Now, we can set up the body of our mail :

```js
const sendContactMail = (req, res) => {
  const {name, surname, phone, email, message} = req.body;

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
    from: email, // this is the address from which the email will be sent
    to: process.env.SMTP_SENDIN_USER, // this is the address to which the email will be sent
    subject: "New message from contact form",
    text: `${message} \n\n Phone: ${phone} \n\n Name: ${name} \n\n Surname: ${surname} \n\n Email: ${email}`,
    html: `<p>${message}</p> <p>Phone: ${phone}</p> <p>Name: ${name}</p> <p>Surname: ${surname}</p> <p>Email: ${email}</p>`,
  };
}
```

Finally, we use the `sendMail` method of the transporter:

```js
const sendContactMail = (req, res) => {
  const {name, surname, phone, email, message} = req.body;

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
    from: email, // this is the address from which the email will be sent
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
}
```

## Add a route

In the router.js file, we need to add a route for sending our email :

```js
const mailControllers = require("./controllers/mailControllers");

router.post("/contact", mailControllers.sendContactMail);
```

You can test your route with Postman, or any other HTTP client.
First launch the server with `npm run dev`. In Postman, in the body, Raw tab, JSON format, add an object :

```json
{
  "name": "Doe",
  "surname": "John",
  "phone": "+33 6 14 55 23 58",
  "email": "johndoe@email.com",
  "message": "Hello ! i need some extra informations about your amazing website !"
}
```

💪 Well done, you should receive a message on the email address that you put into the "to" key in the mailOptions variable. If not, look into your spams !

## Front

Go back to the front folder, in the `frontend/src/pages/Contact.jsx` file. On the `handleSubmit` function, look at the `axios.post` method, and make sure the port of the `axios.post` method is the same as your backend port.

Now, if you go to http://localhost:3000 on your web browser, you can see the form. You can test by writting a new message a click the send button.

You should receive a message on the email address that you put into the "to" key in the mailOptions variable. If not, look into your spams !

## Special thanks

* [**Guilhem SEYVET**](https://github.com/guilhemcv), who created the original version of this workshop.
