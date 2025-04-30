const Trip = require("../Model/TripModel");

// Retrieve all trips
const getAllTrips = async (req, res, next) => {
  let trips;
  try {
    trips = await Trip.find(); // Fetch all trips from the database
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" }); // Handle errors properly
  }

  // If no trips are found
  if (!trips || trips.length === 0) {
    return res.status(404).json({ message: "No trips found" });
  }

  // Return the list of trips
  return res.status(200).json({ trips });
};

// Insert a new trip
const addTrip = async (req, res, next) => {
  const {
    TripID,
    TripName,
    StartDate,
    EndDate,
    Description,
    Status,
    CreatedAt,
    UpdatedAt,
  } = req.body;

  let trip;
  try {
    trip = new Trip({
      TripID,
      TripName,
      StartDate,
      EndDate,
      Description,
      Status,
      CreatedAt,
      UpdatedAt,
    });
    await trip.save(); // Save the new trip to the database
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" }); // Handle errors properly
  }

  // If the trip was not created successfully
  if (!trip) {
    return res.status(404).json({ message: "Unable to add trip" });
  }

  // Return success message
  return res.status(201).json({ message: "Trip added successfully", trip });
};

// Get a trip by ID
const getTripByID = async (req, res, next) => {
  const id = req.params.id; // Extract trip ID from request parameters

  let trip;
  try {
    trip = await Trip.findById(id); // Find trip by ID
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" }); // Handle errors properly
  }

  // If no trip is found with the given ID
  if (!trip) {
    return res.status(404).json({ message: "Trip not found" });
  }

  // Return the trip details
  return res.status(200).json({ trip });
};

// Update a trip by ID
const updateTrip = async (req, res, next) => {
  const id = req.params.id; // Extract trip ID from request parameters
  const {
    TripID,
    TripName,
    StartDate,
    EndDate,
    Description,
    Status,
    UpdatedAt,
  } = req.body;

  let trip;
  try {
    trip = await Trip.findByIdAndUpdate(
      id,
      {
        TripID,
        TripName,
        StartDate,
        EndDate,
        Description,
        Status,
        UpdatedAt,
      },
      { new: true } // Return the updated document
    );
    if (trip) await trip.save(); // Save the updated trip
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" }); // Handle errors properly
  }

  // If the trip was not updated successfully
  if (!trip) {
    return res.status(404).json({ message: "Unable to update trip" });
  }

  // Return success message
  return res.status(200).json({ message: "Trip updated successfully", trip });
};

// Delete a trip by ID
const deleteTrip = async (req, res, next) => {
  const id = req.params.id; // Extract trip ID from request parameters

  let trip;
  try {
    trip = await Trip.findByIdAndDelete(id); // Find and delete trip by ID
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" }); // Handle errors properly
  }

  // If no trip is found with the given ID
  if (!trip) {
    return res.status(404).json({ message: "Unable to delete trip" });
  }

  // Return success message
  return res.status(200).json({ message: "Trip deleted successfully" });
};

// Export all controller functions
exports.getAllTrips = getAllTrips;
exports.addTrip = addTrip;
exports.getTripByID = getTripByID;
exports.updateTrip = updateTrip;
exports.deleteTrip = deleteTrip;
