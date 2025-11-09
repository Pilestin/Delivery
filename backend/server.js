const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");



const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json());


/* Swagger Dökümantasyonu */
const swaggerDocs = require("./swagger");
swaggerDocs(app);





/* MongoDB Bağlantısı */
mongoose.connect("mongodb://127.0.0.1:27017/delivery")
.then(()=> console.log("MongoDB connected (local)"))
.catch(err=> console.log(err));

// test endpoint
app.get("/", (req,res)=>{
  res.json({status:"Delivery backend is running"});
});

app.get("/health", (req,res)=>{
    res.json({status:"OK"});
});


app.listen(PORT, ()=> console.log(`API running on http://localhost:${PORT}`));
