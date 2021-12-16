const mongoose = require("mongoose");

const { Schema } = mongoose;

const inversionSchema = new Schema({
  coin_name: { type: String, required: true },
  curr_inversion: { type: Number, required: true },
  coins: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Inversion = mongoose.model("Inversion", inversionSchema);

module.exports = Inversion;
