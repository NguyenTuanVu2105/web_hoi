const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "/../client/build")));
require("dotenv").config();

require("./router/router")(app);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
});
const db = require("./config/db.config");

const runSequelize = async () => {
  try {
    let run = await db.sequelize.sync({ alter: true });
    if (run) {
      console.log("Sequelize is Running");
    }
  } catch (err) {
    console.log(err.message);
  }
};

runSequelize();

const port = process.env.PORT;
app.listen(port);
