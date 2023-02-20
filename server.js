// Add Express
const express = require("express");
require("dotenv").config();

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

const PORT = process.env.PORT

app.listen(PORT,()=>
console.log(`server running on port ${PORT}` ))

