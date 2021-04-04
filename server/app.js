const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");

require("./models/product");

app.use(express.json());
app.use(require("./routes/products"));

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("ERROR connecting to MongoDB", err);
});

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
