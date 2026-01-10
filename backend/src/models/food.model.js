const mongoose = require("mongoose");
const foodItem = new mongoose.Schema(
  {
    name: { type: String, required: true },
    video: { type: String, required: true },
    description: { type: String },
    foodPartner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodPartner",
      required: true,
    },
  },
  { timestamps: true }
);
const FoodItem = mongoose.model("FoodItem", foodItem);
module.exports = FoodItem;
