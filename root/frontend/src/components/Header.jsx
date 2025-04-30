import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "rgba(0, 0, 0, 0.7)",
      color: "white",
      position: "relative",
      width: "100%",
      zIndex: 1000,
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navItem: {
      cursor: "pointer",
      fontSize: "16px",
      textDecoration: "none",
      color: "white",
      transition: "color 0.3s",
    },
    navItemHover: {
      color: "#FFD700",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>TravelBuddy</div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/Home" style={styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Preferences" style={styles.navItem}>
            Preferences
          </Link>
        </li>
        <li>
          <Link to="/AllTrips" style={styles.navItem}>
            Your Trips
          </Link>
        </li>
        <li>
          <Link to="/BookingReservations" style={styles.navItem}>
            Booking & Reservations
          </Link>
        </li>
        <li>
          <Link to="/ExpenseTracking" style={styles.navItem}>
            Expense Tracking
          </Link>
        </li>
        <li>
          <Link to="/BudgetPlanning" style={styles.navItem}>
            Budget Planning
          </Link>
        </li>
        <li>
          <Link to="/UserReviewFeedback" style={styles.navItem}>
            User Review & Feedback
          </Link>
        </li>
        <li>
          <Link to="/Profile" style={styles.navItem}>
            Profile
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;