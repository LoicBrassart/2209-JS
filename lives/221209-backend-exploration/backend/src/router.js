const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const trailControllers = require("./controllers/trailControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/trails", trailControllers.browse);

module.exports = router;
