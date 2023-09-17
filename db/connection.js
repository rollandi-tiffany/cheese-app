require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    UseUnifiedTopology: true,
    useNewUrlParser: true,
});


mongoose.connection
  .on("open", () => console.log("Your are connected to mongodb"))
  .on("close", () => console.log("connection close"))
  .on("error", (e) => console.log("error occured", e));

module.exports = mongoose;