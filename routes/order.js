const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  restaurantId: String,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  customerName: String,
  customerEmail: String,
  customerAddress: String,
  totalCost: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
