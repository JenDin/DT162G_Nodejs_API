const express = require("express");
const router = express.Router();
const {
  getBookings,
  createBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

router.route("/").get(getBookings).post(createBooking);
router
  .route("/:id")
  .get(getBookingById)
  .put(updateBooking)
  .delete(deleteBooking);

module.exports = router;
