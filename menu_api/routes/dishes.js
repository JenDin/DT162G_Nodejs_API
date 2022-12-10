const express = require("express");
const router = express.Router();
const {
  getDishes,
  createDish,
  getDishById,
  updateDish,
  deleteDish,
} = require("../controllers/dishController");

router.route("/").get(getDishes).post(createDish);
router.route("/:id").get(getDishById).put(updateDish).delete(deleteDish);

module.exports = router;
