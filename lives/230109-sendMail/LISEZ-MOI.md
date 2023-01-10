# Configuration de Nodemailer pour ajouter une fonction d'envoi d'e-mail à une application

Cet atelier vous montrera comment configurer Nodemailer sur le modèle Wild Code School. Vous serez en mesure d'envoyer un email à partir d'un formulaire utilisateur.

## Configuration du projet

Premièrement, clonez ce projet et exécutez `npm run setup`. La partie FRONT est déjà installée : dans le composant `frontend/src/pages/Contact.jsx`, vous pouvez trouver le formulaire.

Allez dans le dossier backend et installez la dépendance nodemailer :
`npm install nodemailer`.

## Créer un compte sur Sendinblue

Sendinblue est une plateforme d'emailing française. En vous inscrivant, vous pourrez utiliser leurs paramètres SMTP pour envoyer des emails depuis votre application.

Créez un compte sur ce site : https://app.sendinblue.com/account/profile/

Ajoutez toutes les informations nécessaires. Vous recevrez un email de confirmation pour terminer la création du compte. (Sendingblue vous recommande d'utiliser un email professionnel, mais vous pouvez utiliser un email classique comme celui de Gmail).

Sur votre compte, naviguez dans la rubrique `Transactionel`. Vous y trouverez ces informations :

- Serveur SMTP
- Port
- identifiant
- Clé SMTP (vous devrez peut-être la générer)

## Mise en place du fichier .env

Dans le dossier du backend, créez un fichier .env s'il n'existe pas et ajoutez les informations suivantes :

```
APP_PORT=5005
FRONTEND_URL=http://localhost:3000
SMTP_SENDIN=(le serveur SMTP de sendinblue)
SMTP_PORT_SENDIN=(le prot de sendinblue)
SMTP_SENDIN_USER=(l'identifiant de sendinblue)
SMTP_SENDIN_PASSWORD=(la clé de sendinblue)
```

## Créer le contrôleur de messagerie

Allez dans le dossier controllers et créez un fichier `mailControllers.js`.

Importez nodemailer et dotenv :

```js
const nodemailer = require("nodemailer") ;
require("dotenv").config() ;
```

Ajoutez et exportez une fonction `sendContactMail`. Rappelez-vous : une fonction qui accepte une requête et renvoit une réponse prend en paramètre `req` et `res`.
Nous allons récupérer quelques informations à partir du `req.body`.

```js
const sendContactMail = (req, res) => {
  const {nom, prénom, téléphone, email, message } = req.body ;
} ;

module.exports = {
  sendContactMail,
} ;
```

Ensuite, nous devons créer un transporteur dans lequel nous allons mettre en place notre serveur SMTP :

```js
const sendContactMail = (req, res) => {
  const {nom, prénom, téléphone, email, message} = req.body ;

  const transporter = nodemailer.createTransport({
    host : process.env.SMTP_SENDIN,
    port : process.env.SMTP_PORT_SENDIN,
    secure : false,
    auth : {
      user : process.env.SMTP_SENDIN_USER,
      pass : process.env.SMTP_SENDIN_PASSWORD,
    },
  }) ;
}
```

NB : la clé de sécurité doit être configurée à false pour 587 PORT, et true pour 465 PORT. Par défaut, sendinBlue vous donne un PORT 587.

Maintenant, nous pouvons configurer le corps de notre mail :

``js
const sendContactMail = (req, res) => {
  const {nom, prénom, téléphone, email, message} = req.body ;

  const transporter = nodemailer.createTransport({
    host : process.env.SMTP_SENDIN,
    port : process.env.SMTP_PORT_SENDIN,
    secure : false,
    auth : {
      user : process.env.SMTP_SENDIN_USER,
      pass : process.env.SMTP_SENDIN_PASSWORD,
    },
  }) ;

  const mailOptions = {
    from : email, // c'est l'adresse à partir de laquelle l'email sera envoyé
    to : process.env.SMTP_SENDIN_USER, // c'est l'adresse à laquelle l'e-mail sera envoyé
    sujet : "Nouveau message du formulaire de contact",
    texte : `${message} \n\n Téléphone : ${phone} \n\n Nom : ${name} \n\n\n Nom : ${surname} \n\n\n Email : ${email}`,
    html : `<p>${message}</p> <p>Téléphone : ${téléphone}</p> <p>Nom : ${name}</p> <p>Nom de famille : ${surname}</p> <p>Email : ${email}</p>`,
  } ;
}
```

Enfin, nous utilisons la méthode `sendMail` du transporteur :

``js
const sendContactMail = (req, res) => {
  const {nom, prénom, téléphone, email, message} = req.body ;

  const transporter = nodemailer.createTransport({
    host : process.env.SMTP_SENDIN,
    port : process.env.SMTP_PORT_SENDIN,
    secure : false,
    auth : {
      user : process.env.SMTP_SENDIN_USER,
      pass : process.env.SMTP_SENDIN_PASSWORD,
    },
  }) ;

  const mailOptions = {
    from : email, // c'est l'adresse à partir de laquelle l'email sera envoyé
    to : process.env.SMTP_SENDIN_USER, // c'est l'adresse à laquelle l'e-mail sera envoyé
    sujet : "Nouveau message du formulaire de contact",
    texte : `${message} \n\n Téléphone : ${phone} \n\n Nom : ${name} \n\n\n Nom : ${surname} \n\n\n Email : ${email}`,
    html : `<p>${message}</p> <p>Téléphone : ${téléphone}</p> <p>Nom : ${name}</p> <p>Nom de famille : ${surname}</p> <p>Email : ${email}</p>`,
  } ;

  transporteur
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info) ;
      res.status(200).send("Message envoyé") ;
    })
    .catch((err) => {
      console.warn(err) ;
      res.status(500).send("Quelque chose a mal tourné") ;
    }) ;
}
```

## Ajouter une route

Dans le fichier router.js, nous devons ajouter une route pour envoyer notre email :

```js
const mailControllers = require("./controllers/mailControllers") ;

router.post("/contact", mailControllers.sendContactMail) ;
```

Vous pouvez tester votre route avec Postman, ou tout autre client HTTP.
Lancez d'abord le serveur avec `npm run dev`. Dans Postman, dans le corps, onglet Raw, format JSON, ajoutez
