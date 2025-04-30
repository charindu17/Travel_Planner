import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditTrip() {
  const { id } = useParams(); // TripID passed as route param
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    TripID: "",
    TripName: "",
    Description: "",
    StartDate: "",
    EndDate: "",
    Status: "planned",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/trips/getTripByID/${id}`)
      .then((response) => {
        const tripData = response.data.trip;

        setTrip({
          TripID: tripData.TripID,
          TripName: tripData.TripName,
          Description: tripData.Description,
          StartDate: tripData.StartDate.slice(0, 10), // trimming time
          EndDate: tripData.EndDate.slice(0, 10),
          Status: tripData.Status,
        });
      })
      .catch((error) => {
        alert("Failed to fetch trip details: " + error.message);
      });
  }, [id]);

  function sendData(e) {
    e.preventDefault();

    // Clear previous error messages
    setErrorMessage("");

    // Get form values
    const start = new Date(trip.StartDate);
    const end = new Date(trip.EndDate);

    // Validate start date
    if (isNaN(start.getTime())) {
      setErrorMessage("Please enter a valid Start Date.");
      return;
    }

    // Validate end date
    if (isNaN(end.getTime()) || end < start) {
      setErrorMessage("End Date must be after or equal to Start Date.");
      return;
    }

    const updatedTrip = {
      ...trip,
      UpdatedAt: new Date().toISOString(),
    };

    axios.put(`http://localhost:5000/trips/updateTrip/${id}`, updatedTrip)
      .then(() => {
        alert("Trip updated successfully");
        navigate("/Trip_Management/");
      })
      .catch((err) => {
        setErrorMessage(err.response?.data?.message || "Error updating trip.");
      });
  }

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
      {/* Form Container */}
      <div
        className="container mt-5"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          margin: "0 auto",
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

        {/* Form */}
        <form onSubmit={sendData}>
          {/* Header */}
          <h2 style={{ textAlign: "center", color: "#3498db", marginBottom: "20px" }}>
            Edit Trip
          </h2>

          {/* Trip ID */}
          <div className="mb-3">
            <label htmlFor="TripID" style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
              Trip ID
            </label>
            <input
              type="text"
              id="TripID"
              value={trip.TripID}
              disabled
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #aaa",
                borderRadius: "5px",
                fontSize: "14px",
                backgroundColor: "#f0f0f0",
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
              value={trip.TripName}
              onChange={(e) => setTrip({ ...trip, TripName: e.target.value })}
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
              value={trip.Description}
              onChange={(e) => setTrip({ ...trip, Description: e.target.value })}
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
              value={trip.StartDate}
              onChange={(e) => setTrip({ ...trip, StartDate: e.target.value })}
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
              value={trip.EndDate}
              onChange={(e) => setTrip({ ...trip, EndDate: e.target.value })}
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
              value={trip.Status}
              onChange={(e) => setTrip({ ...trip, Status: e.target.value })}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #aaa",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
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
            Update Trip
          </button>
        </form>
      </div>
    </div>
  );
}