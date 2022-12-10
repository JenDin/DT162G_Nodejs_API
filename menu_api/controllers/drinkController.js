const Drink = require("../models/Drink");

// @ desc Get drinks
// @route GET /api/drinks
const getDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find();

    if (drinks.length < 1) {
      return res.json({ message: "There are currently no drinks available" });
    }
    res.status(200).json({ drinks: drinks });
  } catch (error) {
    res.status(204).json({ message: error });
  }
};

// @ desc Create drink
// @route POST /api/drinks
const createDrink = async (req, res) => {
  const drinkBody = new Drink({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
  });

  try {
    const createDrink = await drinkBody.save();
    res.status(201).send(createDrink);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not create the drink", errors: error });
  }
};

// @ desc Get drink by id
// @route GET /api/drinks/:id
const getDrinkById = async (req, res) => {
  const id = req.params.id;

  try {
    const getDrink = await Drink.findById(id);
    res.status(200).send(getDrink);
  } catch (error) {
    res
      .status(404)
      .json({ message: `Could not find the drink with the id of ${id}` });
  }
};

// @ desc Update drink
// @route PUT /api/drinks/:id
const updateDrink = async (req, res) => {
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
    const updateDrink = await Drink.updateOne(filter, updateDocument);
    res.status(200).send(updateDrink);
  } catch (error) {
    res
      .status(404)
      .json({ message: `Could not update the drink with the id of ${id}` });
  }
};

// @ desc Delete drink
// @route DELETE /api/drinks/:id
const deleteDrink = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteDrink = await Drink.findByIdAndDelete(id);
    res.status(200).json({ message: "Drink deleted", drink: deleteDrink });
  } catch (error) {
    res
      .status(404)
      .json({ message: `Could not delete the drink with the id of ${id}` });
  }
};

module.exports = {
  getDrinks,
  createDrink,
  getDrinkById,
  updateDrink,
  deleteDrink,
};
