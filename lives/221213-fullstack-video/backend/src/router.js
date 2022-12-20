const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// -----------------

const videoControllers = require("./controllers/videoControllers");

router.get("/videos", videoControllers.browse);
router.post("/videos", videoControllers.add);

module.exports = router;
