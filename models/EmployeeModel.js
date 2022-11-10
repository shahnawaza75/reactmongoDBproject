const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required"],
    minLength: [3, "Minimum Length should be 3 charactors"],
    maxLengthL: [20, "Maximum Length can`t exceed 20 charactors"],
  },
  last_name: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [3, "Minimum Length should be 3 charactors"],
    maxLengthL: [20, "Maximum Length can`t exceed 20 charactors"],
  },
  email: {
    type: String,
    required: [true, "Email name is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    minLength: [10, "Invalid phone number"],
    maxLengthL: [10, "Invalid phone number"],
  },
  address: {
    type: String,
    required: [true, "address number is required"],
    minLength: [10, "Invalid address"],
    maxLengthL: [10, "Invalid address"],
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
