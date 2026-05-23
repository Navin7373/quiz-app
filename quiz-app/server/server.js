const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const authRoute = require("./routes/auth");
const resultRoute = require("./routes/result");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/results", resultRoute);

mongoose.connect(process.env.MONGO_URL)

.then(() => console.log("MongoDB Connected"))

.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});