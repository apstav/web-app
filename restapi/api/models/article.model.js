const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let authorSchema = new Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
  },
  { _id: false }
);

let articleSchema = new Schema({
  title: {
    type: String,
    required: [true, "Article title is a required field."],
    max: 140,
    unique: true,
    trim: true,
  },
  body: {
    type: String,
    required: [true, "Article body is a required field."],
    max: 5000,
  },
  author: authorSchema,
});
