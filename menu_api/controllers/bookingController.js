const Booking = require("../models/Booking");

// @ desc Get bookings
// @route GET /api/bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    if (bookings.length < 1) {
      return res.json({
        message: `There are currently no bookings in the system`,
      });
    }
    res.status(200).json(bookings);
  } catch (error) {
    res.status(204).json({ message: error });
  }
};

// @ desc Create booking
// @route POST /api/bookings
const createBooking = async (req, res) => {
  const bookingBody = new Booking({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    guestAmount: req.body.guestAmount,
    date: req.body.date,
    time: req.body.time,
  });

  try {
    const createBooking = await bookingBody.save();
    res.status(201).json(createBooking);
  } catch (error) {
    res.status(400).json({
      message: "Could not create the booking",
      errors: error,
    });
  }
};

// @ desc Get booking by id
// @route GET /api/bookings/:id
const getBookingById = async (req, res) => {
  const id = req.params.id;

  try {
    const getBooking = await Booking.findById(id);
    res.status(200).json(getBooking);
  } catch (error) {
    res
      .status(404)
      .json({ message: `Could not find the booking with the id of ${id}` });
  }
};

// @ desc Update booking
// @route PUT /api/bookings/:id
const updateBooking = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };

  const updateDocument = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    guestAmount: req.body.guestAmount,
    date: req.body.date,
    time: req.body.time,
  };

  try {
    const updateBooking = await Booking.updateOne(filter, updateDocument);
    res.status(200).json(updateBooking);
  } catch (error) {
    res
      .status(404)
      .json({ message: `Could not update the booking with the id of ${id}` });
  }
};

// @ desc Delete booking
// @route DELETE /api/bookings/:id
const deleteBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteBooking = await Booking.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Booking deleted", booking: deleteBooking });
  } catch (error) {
    res
      .status(404)
      .json({ message: `Could not delete the booking with the id of ${id}` });
  }
};

module.exports = {
  getBookings,
  createBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
};
