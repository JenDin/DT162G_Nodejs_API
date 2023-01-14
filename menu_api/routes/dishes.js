const express = require("express");
const router = express.Router();
const {
  getDishes,
  createDish,
  getDishById,
  updateDish,
  deleteDish,
} = require("../controllers/dishController");

// GET all - POST routes
router.route("/").get(getDishes).post(createDish);

// GET by ID - PUT - DELETE routes
router.route("/:id").get(getDishById).put(updateDish).delete(deleteDish);

module.exports = router;
