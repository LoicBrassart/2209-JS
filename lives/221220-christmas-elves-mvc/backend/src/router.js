const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const elfControllers = require("./controllers/elfControllers");
const childControllers = require("./controllers/childControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/children", childControllers.browse);
router.get("/children/:id", childControllers.read);
router.post("/children", childControllers.add);
router.put("/children/:id", childControllers.edit);
router.delete("/children/:id", childControllers.destroy);

router.get("/elves", elfControllers.browse);
router.get("/elves/:id", elfControllers.read);
router.post("/elves", elfControllers.add);
router.put("/elves/:id", elfControllers.edit);
router.delete("/elves/:id", elfControllers.destroy);

module.exports = router;
