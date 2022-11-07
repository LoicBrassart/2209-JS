require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_SCHEMA,
  password: process.env.DB_PASSWORD,
});

module.exports = db;
