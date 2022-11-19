const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  uId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  isHaving: {
    type: Boolean,
    default: true,
  },
});
const BookModel = mongoose.model("Book", schema);
module.exports = BookModel;
