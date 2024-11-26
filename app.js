require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const config = require("./utils/config");
const travelPlanRoute = require("./routes/travelPlans");
const { unknownEndPoint, errorHandler } = require("./utils/middleware");

mongoose.set("strictQuery", false);

mongoose
  .connect(config.mongoUrl)
  .then(() => {
    console.log("Connected to MONGO DB");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`
    <div>
      <h1>Welcome to Travel Planner</h1>
      <a href="/api/travelplans">View All plans at "/api/travelplans"</a>
    </div>`);
});
app.use("/api/travelplans", travelPlanRoute);
app.use(unknownEndPoint);
app.use(errorHandler);

module.exports = app;
