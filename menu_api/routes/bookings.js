const express = require("express");
const router = express.Router();
const {
  getBookings,
  createBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

// GET all - POST routes
router.route("/").get(getBookings).post(createBooking);

// GET by ID - PUT - DELETE routes
router
  .route("/:id")
  .get(getBookingById)
  .put(updateBooking)
  .delete(deleteBooking);

module.exports = router;
