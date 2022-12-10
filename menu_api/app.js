const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = require("./config/db");

const indexRouter = require("./routes/index");
const drinksRouter = require("./routes/drinks");
const dishesRouter = require("./routes/dishes");
const bookingsRouter = require("./routes/bookings");

// Database connection to 'menuDB' from config/db.js
connectDB();

const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Custom middlewares
app.use("/", indexRouter);
app.use("/api/drinks", drinksRouter);
app.use("/api/dishes", dishesRouter);
app.use("/api/bookings", bookingsRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

module.exports = app;
