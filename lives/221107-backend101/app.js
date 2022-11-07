const express = require('express');
const app = express();
const db = require('./database');

app.get('/characters', (req, res) => {
  db.query('select * from characters')
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get('/async/characters', async (req, res) => {
  try {
    const characters = await db.query(
      `select * from characters where name like ?`,
      [`%${req.query.needle}%`]
    );
    res.send(characters[0]);
  } catch (err) {
    console.error(err);
  }
});

app.listen(5555, () => {
  console.log('API is now really up!');
});
