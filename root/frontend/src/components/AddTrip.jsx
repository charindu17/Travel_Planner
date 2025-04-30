import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddTrip() {
  const [TripID, setTripID] = useState("");
  const [TripName, setTripName] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [Description, setDescription] = useState("");
  const [Status, setStatus] = useState(""); // Default empty for required selection
  const [errorMessage, setErrorMessage] = useState("");

  const sendData = (e) => {
    e.preventDefault();

    setErrorMessage("");

    const start = new Date(StartDate);
    const end = new Date(EndDate);

    if (isNaN(start.getTime())) {
      setErrorMessage("Please enter a valid Start Date.");
      return;
    }

    if (isNaN(end.getTime()) || end < start) {
      setErrorMessage("End Date must be after or equal to Start Date.");
      return;
    }

    const newTrip = {
      TripID,
      TripName,
      Description,
      StartDate,
      EndDate,
      Status,
      CreatedAt: new Date().toISOString(),
      UpdatedAt: new Date().toISOString(),
    };

    axios
      .post("http://localhost:5000/trips/addTrip", newTrip)
      .then(() => {
        alert("Trip Added Successfully");
        setTripID("");
        setTripName("");
        setDescription("");
        setStartDate("");
        setEndDate("");
        setStatus("");
      })
      .catch((err) => {
        setErrorMessage(err.response?.data?.message || "Error adding trip.");
      });
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage:
          "url('https://th.bing.com/th/id/OSK.HEROGUft3FF5iOdbDj5xgp-NbG1nrtj76mK5BNr8aND5O4E?rs=1&pid=ImgDetMain')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px 20px 20px",
      }}
    >
      {/* Home Button */}
      <Link
        className="btn btn-primary ms-4"
        to="/AllTrips"
        style={{
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ← Back to All Trips
      </Link>

      {/* Form Container */}
      <div
        className="container mt-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <h2 style={{ textAlign: "center", color: "#3498db", marginBottom: "20px" }}>
          Add New Trip
        </h2>

        {/* Form */}
        <form onSubmit={sendData}>
          {/* Trip ID */}
          <div className="mb-3">
            <label htmlFor="TripID" style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
              Trip ID
            </label>
            <input
              type="text"
              id="TripID"
              placeholder="Enter Trip ID"
              value={TripID}
              onChange={(e) => setTripID(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #aaa",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Trip Name */}
          <div className="mb-3">
            <label htmlFor="TripName" style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
              Trip Name
            </label>
            <input
              type="text"
              id="TripName"
              placeholder="Enter Trip Name"
              value={TripName}
              onChange={(e) => setTripName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #aaa",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Start Date */}
          <div className="mb-3">
            <label htmlFor="StartDate" style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
              Start Date
            </label>
            <input
              type="date"
              id="StartDate"
              value={StartDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #aaa",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* End Date */}
          <div className="mb-3">
            <label htmlFor="EndDate" style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
              End Date
            </label>
            <input
              type="date"
              id="EndDate"
              value={EndDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #aaa",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="Description" style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
              Description
            </label>
            <input
              type="text"
              id="Description"
              placeholder="Enter Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #aaa",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Status */}
          <div className="mb-3">
            <label htmlFor="Status" style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
              Status
            </label>
            <select
              id="Status"
              value={Status}
              onChange={(e) => setStatus(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #aaa",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              <option value="">Select Status</option>
              <option value="planned">Planned</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
          >
            Add Trip
          </button>
        </form>
      </div>
    </div>
  );
}