require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

const { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD } = process.env;

const db = mysql.createPool({
  host: DB_HOST,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
});

app.get('/elves', (req, res) => {
  db.query('select * from elf').then(([rows]) => {
    res.send(rows);
  });
});

app.get('/children', async (req, res) => {
  const [rows] = await db.query('select * from child');
  res.send(rows);
});

app.listen(5000, () => {
  console.log('Backend available on http://localhost:5000');
});

/*
// Ex with callbacks
addEventListener('click', () => {
  // error management
  if (status === '4xx' || status === '5xx') {
    //manage my error
    return console.error('Something went wrong :(');
  }
  console.log('Yay! <3');
});

// Ex with Promises
addEventListener('click')
  .then(() => {
    console.log('Yay! <3');
  })
  .catch(() => {
    return console.error('Something went wrong :(');
  })
  .finally(() => {
    console.log("J'AI FINIIIIII !!!!");
  });

// Ex with async/await
const superToto = async () => {
  try {
    await addEventListener('click');
    console.log('Yay! <3');
  } catch (err) {
    return console.error('Something went wrong :(');
  }
};
*/
