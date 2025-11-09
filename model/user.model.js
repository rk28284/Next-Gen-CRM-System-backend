const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, },
    password: { type: String,},
    role: {
      type: String,
    },
    employeeId: { type: String },
    
  },
);

module.exports = mongoose.model("User", userSchema);
