const TravelPlan = require("../models/travelPlans");
const CustomError = require("../utils/customError");

const getAllTravelPlans = async (req, res) => {
  try {
    const allTravelPlans = await TravelPlan.find({});
    res.status(200).json(allTravelPlans);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message, message: "Server Error" });
  }
};

const addNewTravelPlan = async (req, res, next) => {
  try {
    const { destination, startDate, endDate, activities } = req.body;
    const plan = new TravelPlan({
      destination,
      startDate,
      endDate,
      activities,
    });
    await plan.save();
    res.status(201).json(plan);
  } catch (error) {
    next(error);
  }
};

const getATravelPlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plan = await TravelPlan.findById(id);
    if (!plan) {
      next(
        new CustomError("CustomValidationError", "No Item found to fetch", 404)
      );
    }
    res.status(200).json(plan);
  } catch (error) {
    next(error);
  }
};

const editTravelPlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { destination, startDate, endDate, activities } = req.body;
    const editedPlan = await TravelPlan.findByIdAndUpdate(
      id,
      {
        destination,
        startDate,
        endDate,
        activities,
      },
      { new: true, runValidators: true, context: "query" }
    );
    if (!editedPlan) {
      next(
        new CustomError("CustomValidationError", "No Item found to edit", 404)
      );
    }
    res.status(201).json(editedPlan);
  } catch (error) {
    next(error);
  }
};

const deleteTravelPlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPlan = await TravelPlan.findByIdAndDelete(id);
    if (!deletedPlan) {
      next(
        new CustomError("CustomValidationError", "No Item found to delete", 404)
      );
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTravelPlans,
  addNewTravelPlan,
  getATravelPlan,
  editTravelPlan,
  deleteTravelPlan,
};
