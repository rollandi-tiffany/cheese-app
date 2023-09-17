require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
const cheeseController = require("./controllers/cheeseController");
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) =>{
    res.send("Its working!")
});

app.use("/cheese", cheeseController);

app.listen(PORT, () => console.log("Hello from port", PORT));