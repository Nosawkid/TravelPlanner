const mongoose = require("mongoose");
const { Schema } = mongoose;

const travelPlanSchema = new Schema({
  destination: {
    type: String,
    required: [true, "Destination cannot be blank"],
  },
  startDate: {
    type: Date,
    required: [true, "Start date cannot be blank"],
  },
  endDate: {
    type: Date,
    default: null,
  },
  activities: [String],
});

travelPlanSchema.set("toJSON", {
  transform: (document, returnObj) => {
    returnObj.id = returnObj._id;
    delete returnObj._id;
    delete returnObj.__v;
  },
});

const TravelPlan = mongoose.model("travelPlan", travelPlanSchema);

module.exports = TravelPlan;
