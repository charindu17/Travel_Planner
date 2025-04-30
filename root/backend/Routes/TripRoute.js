const express = require("express");
const router = express.Router();

// Import the Trip model
const Trip = require("../Model/TripModel");

// Import the Trip controller
const TripController = require("../Controllers/TripController");

// Define routes for CRUD operations

// 1. Retrieve all trips
router.get("/getTrips", TripController.getAllTrips);

// 2. Add a new trip
router.post("/addTrip", TripController.addTrip);

// 3. Get a trip by ID
router.get("/getTripByID/:id", TripController.getTripByID);

// 4. Update a trip by ID
router.put("/updateTripByID/:id", TripController.updateTrip);

// 5. Delete a trip by ID
router.delete("/deleteTripByID/:id", TripController.deleteTrip);

// Export the router
module.exports = router;
