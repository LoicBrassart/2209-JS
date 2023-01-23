const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hashSync(password, 10);
  res.send(`Hello ${email}, you're authed via the password ${password}`);
});

module.exports = router;
