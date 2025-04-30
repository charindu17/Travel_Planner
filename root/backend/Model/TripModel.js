const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Trip Schema
const tripSchema = new Schema({
  TripID: {
    type: String,
    required: true,
    // Adding a custom validator to ensure TripID follows a specific format (e.g., alphanumeric)
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9]+$/.test(v); // Example: Only alphanumeric characters allowed
      },
      message: (props) =>
        `${props.value} is not a valid TripID! TripID must be alphanumeric.`,
    },
  },
  TripName: {
    type: String,
    required: true,
    // Adding a custom validator to ensure the TripName contains only letters, spaces, and numbers
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9\s]+$/.test(v); // Example: Only alphanumeric characters and spaces allowed
      },
      message: (props) =>
        `${props.value} is not a valid Trip Name! Trip Name must contain only letters, numbers, and spaces.`,
    },
  },
  StartDate: {
    type: Date,
    required: true,
    // Adding a custom validator to ensure the date is valid
    validate: {
      validator: function (v) {
        return !isNaN(Date.parse(v)); // Check if the value is a valid date
      },
      message: (props) =>
        `${props.value} is not a valid Start Date! Please provide a valid date in ISO format.`,
    },
  },
  EndDate: {
    type: Date,
    required: true,
    // Adding a custom validator to ensure the date is valid and after StartDate
    validate: {
      validator: function (v) {
        const startDate = this.StartDate; // Access the StartDate field
        return !isNaN(Date.parse(v)) && v >= startDate; // Ensure EndDate is after or equal to StartDate
      },
      message: (props) =>
        `${props.value} is not a valid End Date! End Date must be on or after the Start Date.`,
    },
  },
  Description: {
    type: String,
    required: true,
    // Adding a custom validator to ensure the description is not empty
    validate: {
      validator: function (v) {
        return v.trim().length > 0; // Ensure the description is not just whitespace
      },
      message: (props) =>
        `Description cannot be empty! Please provide a valid description.`,
    },
  },
  Status: {
    type: String,
    required: true,
    // Adding a custom validator to ensure the status is one of the predefined values
    validate: {
      validator: function (v) {
        return ["planned", "ongoing", "completed", "cancelled"].includes(
          v.toLowerCase()
        ); // Example: Only these statuses are allowed
      },
      message: (props) =>
        `${props.value} is not a valid Status! Allowed statuses are: planned, ongoing, completed, cancelled.`,
    },
  },
  CreatedAt: {
    type: Date,
    required: true,
    default: Date.now, // Automatically set the current date/time when the record is created
    // Adding a custom validator to ensure the date is valid
    validate: {
      validator: function (v) {
        return !isNaN(Date.parse(v)); // Check if the value is a valid date
      },
      message: (props) =>
        `${props.value} is not a valid Created At date! Please provide a valid date in ISO format.`,
    },
  },
  UpdatedAt: {
    type: Date,
    required: true,
    default: Date.now, // Automatically set the current date/time when the record is updated
    // Adding a custom validator to ensure the date is valid
    validate: {
      validator: function (v) {
        return !isNaN(Date.parse(v)); // Check if the value is a valid date
      },
      message: (props) =>
        `${props.value} is not a valid Updated At date! Please provide a valid date in ISO format.`,
    },
  },
});

// Create and export the Trip model
module.exports = mongoose.model("TripModel", tripSchema);
