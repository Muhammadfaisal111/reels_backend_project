const foodModel = require("../models/food.model");
async function createFoodItem(req, res) {
  console.log(req.foodPartner);
  console.log(req.body);
  console.log(req.file);
  res.send("food item created");
}

module.exports = { createFoodItem };
