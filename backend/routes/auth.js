const express = require("express");
const router = express.Router();
const User = require("../models/User");


// şimdilik plain login (jwt vs sonra ekleriz)
router.post("/login", async (req,res)=>{
  const { email, password } = req.body;

  const user = await User.findOne({email});
  if(!user) return res.status(404).json({error:"User not found"});

  // sonraki adım: password_hash check eklenecek.
  // şu anda direkt role döndürüyoruz
  return res.json({ role:user.role, full_name:user.full_name });
});

router.post("/register", async (req, res) => {
  const { full_name, email, password, phone_number } = req.body;

  const isExist = await User.findOne({ email });
  if (isExist) return res.status(400).json({ error: "Email already used" });

  const user = new User({
    full_name,
    email,
    password_hash: password, // şimdilik plain, sonra hash yapacağız
    phone_number,
    role: "customer"
  });

  await user.save();
  res.json({ success: true, message: "Registered successfully" });
});





module.exports = router;
