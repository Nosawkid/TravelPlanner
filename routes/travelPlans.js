const travelPlanRoutes = require("express").Router();
const travelPlanControllers = require("../controllers/travelplans");

travelPlanRoutes.get("/", travelPlanControllers.getAllTravelPlans);
travelPlanRoutes.post("/", travelPlanControllers.addNewTravelPlan);
travelPlanRoutes.get("/:id", travelPlanControllers.getATravelPlan);
travelPlanRoutes.put("/:id", travelPlanControllers.editTravelPlan);
travelPlanRoutes.delete("/:id", travelPlanControllers.deleteTravelPlan);

module.exports = travelPlanRoutes;
