const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: { type: String },
  full_name: String,
  email: { type: String, unique: true, required: true },
  password_hash: String,
  phone_number: String,
  address: String,
  latitude: Number,
  longitude: Number,
  created_at: { type: Date, default: Date.now },
  last_login: { type: Date, default: null },
  is_active: { type: Boolean, default: true },
  profile_picture: String,
  role: { type: String, enum: ["admin", "driver", "customer"], default: "customer" }
});

module.exports = mongoose.model("User", userSchema);
