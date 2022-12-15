const Dish = require("../models/Dish");

// @ desc Get dishes
// @route GET /api/dishes
const getDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();

    if (dishes.length < 1) {
      return res.json({ message: `There are currently no dishes available` });
    }
    res.status(200).json({ dishes: dishes });
  } catch (error) {
    res.status(204).json({ message: error });
  }
};

// @ desc Create dish
// @route POST /api/dishes
const createDish = async (req, res) => {
  const dishBody = new Dish({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
  });

  try {
    const createDish = await dishBody.save();
    res.status(201).json(createDish);
  } catch (error) {
    res.status(400).json({
      message: "Could not create the dish",
      errors: error,
    });
  }
};

// @ desc Get dish by id
// @route GET /api/dishes/:id
const getDishById = async (req, res) => {
  const id = req.params.id;

  try {
    const getdish = await Dish.findById(id);
    res.status(200).json(getdish);
  } catch (error) {
    res
      .status(404)
      .json({ message: `Could not find the dish with the id of ${id}` });
  }
};

// @ desc Update dish
// @route PUT /api/dishes/:id
const updateDish = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };

  const updateDocument = {
    $set: {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
    },
  };

  try {
    const updateDish = await Dish.updateOne(filter, updateDocument);
    res.status(200).json(updateDish);
  } catch (error) {
    res
      .status(404)
      .json({ message: `Could not update the dish with the id of ${id}` });
  }
};

// @ desc Delete dish
// @route DELETE /api/dishes/:id
const deleteDish = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteDish = await Dish.findByIdAndDelete(id);
    res.status(200).json({ message: "Dish deleted", dish: deleteDish });
  } catch (error) {
    res
      .status(404)
      .json({ message: `Could not delete the drink with the id of ${id}` });
  }
};

module.exports = {
  getDishes,
  createDish,
  getDishById,
  updateDish,
  deleteDish,
};
