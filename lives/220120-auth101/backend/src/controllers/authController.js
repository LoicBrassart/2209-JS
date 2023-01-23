const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

const signup = (req, res) => {
  const { email } = req.body;
  let { password } = req.body;
  password = bcrypt.hashSync(password, 10);
  models.user.insert({ email, password });
  const user = { email, id: 1 };
  const token = jwt.sign(user, "toto");
  res.send({ token, user });
};

const login = async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  const [results] = await models.user.findByEmail(email);

  const isPasswordOk = bcrypt.compareSync(password, results[0].password);
  if (isPasswordOk) {
    const [user] = results;
    delete user.password;
    res.send(user);
  } else {
    res.status(401).send("Nope");
  }
};

module.exports = {
  signup,
  login,
};
