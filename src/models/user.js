const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error(" Email is not valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error(`Password should  not include the text "password" `);
      }
      // if (!value.length > 6) {
      //     throw new Error( ` Password should have length grater than 6`)
      // }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error(" Age cannot be a  negative number");
      }
    },
  },
});

module.exports = User;
