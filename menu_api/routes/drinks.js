const express = require("express");
const router = express.Router();
const {
  getDrinks,
  createDrink,
  getDrinkById,
  updateDrink,
  deleteDrink,
} = require("../controllers/drinkController");

router.route("/").get(getDrinks).post(createDrink);
router.route("/:id").get(getDrinkById).put(updateDrink).delete(deleteDrink);

module.exports = router;
