const express = require("express");
const router = express.Router();
const {
  getDrinks,
  createDrink,
  getDrinkById,
  updateDrink,
  deleteDrink,
} = require("../controllers/drinkController");

// GET all - POST routes
router.route("/").get(getDrinks).post(createDrink);

// GET by ID - PUT - DELETE routes
router.route("/:id").get(getDrinkById).put(updateDrink).delete(deleteDrink);

module.exports = router;
