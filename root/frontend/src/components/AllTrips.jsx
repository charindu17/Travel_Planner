import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { GrDocumentPdf } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default function AllTrips() {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch all trips from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/trips/getTrips")
      .then((res) => {
        setTrips(res.data.trips); // assuming your backend responds with { trips: [...] }
      })
      .catch((err) => {
        alert("Error fetching trips: " + err.message);
      });
  }, []);

  // Delete trip
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      axios
        .delete(`http://localhost:5000/trips/deleteTripByID/${id}`)
        .then((res) => {
          alert(res.data.message);
          setTrips(trips.filter((trip) => trip._id !== id));
        })
        .catch((err) => {
          alert("Error deleting trip: " + err.message);
        });
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter trips by TripName or TripID
  const filteredTrips = trips.filter(
    (trip) =>
      trip.TripName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.TripID?.toString().includes(searchTerm)
  );

  // Generate Trip Report PDF
  const generateReport = () => {
    const doc = new jsPDF("p", "mm", "a4");
  
    const companyName = "Paradise Travel Agency";
    const companyAddress = "Cool Beach Road, Paradise Island";
  
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Travel Agency Management", doc.internal.pageSize.width / 2, 20, {
      align: "center",
    });
  
    doc.setFontSize(15);
    doc.text("Trip Inventory Report", doc.internal.pageSize.width / 2, 30, {
      align: "center",
    });
  
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(companyName, 10, 50);
    doc.text(companyAddress, 10, 55);
  
    doc.autoTable({
      startY: 65,
      head: [
        [
          "Trip ID",
          "Trip Name",
          "Start Date",
          "End Date",
          "Description",
          "Status",
          "Created At",
        ],
      ],
      body: filteredTrips.map((trip) => [
        trip.TripID,
        trip.TripName,
        new Date(trip.StartDate).toLocaleDateString(),
        new Date(trip.EndDate).toLocaleDateString(),
        trip.Description,
        trip.Status,
        new Date(trip.CreatedAt).toLocaleString(),
      ]),
      margin: { top: 65 },
    });
  
    const y = doc.lastAutoTable.finalY + 10;
    doc.text(`Total Trips: ${filteredTrips.length}`, 10, y);
    doc.text(`Generated On: ${new Date().toLocaleDateString()}`, 10, y + 10);
    doc.text("Prepared by: Nirmani K M I", 10, y + 20);
  
    doc.save("trip_report.pdf");
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
      {/* Container */}
      <div
        className="container mt-5"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Header */}
        <div
          className="d-flex justify-content-between align-items-center mb-4"
          style={{ color: "#3498db" }}
        >
          <h2>All Trips</h2>
          <Link
            className="btn btn-success"
            to="/addTrip"
            style={{
              backgroundColor: "#2ecc71",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "white",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#27ae60",
              },
            }}
          >
            <MdAdd style={{ marginRight: "5px" }} /> Add New Trip
          </Link>
        </div>

        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-end">
            <div className="input-group w-50">
              <input
                type="text"
                placeholder="Search by Trip Name or ID..."
                className="form-control"
                value={searchTerm}
                onChange={handleSearch}
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "200px",
                }}
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                style={{
                  backgroundColor: "#3498db",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#2980b9",
                  },
                }}
              >
                <IoSearchSharp />
              </button>
            </div>
          </div>
        </div>

        {/* Trips Table */}
        <table
          className="table table-striped table-hover"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead
            style={{
              backgroundColor: "#3498db",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <tr>
              <th>Trip ID</th>
              <th>Trip Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody
            style={{
              fontSize: "14px",
            }}
          >
            {filteredTrips.length > 0 ? (
              filteredTrips.map((trip) => (
                <tr
                  key={trip._id}
                  style={{
                    "&:nth-child(even)": {
                      backgroundColor: "#f2f2f2",
                    },
                    "&:hover": {
                      backgroundColor: "#e0ebeb",
                    },
                  }}
                >
                  <td>{trip.TripID}</td>
                  <td>{trip.TripName}</td>
                  <td>{new Date(trip.StartDate).toLocaleDateString()}</td>
                  <td>{new Date(trip.EndDate).toLocaleDateString()}</td>
                  <td>{trip.Description.slice(0, 30)}...</td>
                  <td>{trip.Status}</td>
                  <td>{new Date(trip.CreatedAt).toLocaleDateString()}</td>
                  <td
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <Link
                      to={`/editTrip/${trip._id}`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <button
                        className="btn btn-success"
                        style={{
                          backgroundColor: "#2ecc71",
                          color: "white",
                          border: "none",
                          padding: "10px 20px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#27ae60",
                          },
                        }}
                      >
                        <AiFillEdit style={{ marginRight: "5px" }} />
                      </button>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(trip._id)}
                      style={{
                        backgroundColor: "#e74c3c",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#c0392b",
                        },
                      }}
                    >
                      <MdDelete style={{ marginRight: "5px" }} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No trips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Total Trips Listed */}
        <div className="mt-3">
          <strong>Total Trips Listed:</strong> {filteredTrips.length}
        </div>

        {/* Generate Trip Report Button */}
        <div className="mt-4">
          <button
            className="btn btn-primary"
            onClick={generateReport}
            style={{
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#2980b9",
              },
            }}
          >
            <GrDocumentPdf style={{ marginRight: "5px" }} /> Generate Trip Report
          </button>
        </div>
      </div>
    </div>
  );
}