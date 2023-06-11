const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
// import {hashPassword} from '../utils';

const Schema = mongoose.Schema;
const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

let articleSchema = new Schema({
  title: { type: String },
  body: { type: String },
});

let commentSchema = new Schema({
  body: { type: String },
  article: { type: String },
});
let productSchema = new Schema(
  {
    product: { type: String },
    cost: { type: Number },
    quantity: { type: Number },
    date: { type: Date, dafault: Date.now },
  },
  { _id: false }
);

let userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required field"],
      max: 100,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required Field"],
      max: 100,
    },
    name: {
      type: String,
      max: 100,
    },
    surname: {
      type: String,
      max: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required field"],
      max: 100,
      unique: true,
      trim: true,
      lowercase: true,
      //validate: [validateEmail, 'Email adress is not valid']
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email adress is not valid",
      ],
    },
    articles: { type: [articleSchema], null: true },
    products: { type: [productSchema], null: true },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
