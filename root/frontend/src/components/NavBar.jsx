import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "rgba(0, 0, 0, 0.7)",
      color: "white",
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
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
    authButtons: {
      display: "flex",
      gap: "15px",
    },
    button: {
      padding: "8px 15px",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      transition: "background 0.3s, color 0.3s",
    },
    signup: {
      background: "#FFD700",
      color: "black",
    },
    login: {
      background: "transparent",
      color: "white",
      border: "1px solid white",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>TravelBuddy</div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/Home" style={styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" style={styles.navItem}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Preferences" style={styles.navItem}>
            Preferences
          </Link>
        </li>
      </ul>
      <div style={styles.authButtons}>
        <Link
          to="/SignUp"
          style={{
            ...styles.button,
            ...styles.signup,
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Sign Up
        </Link>
        <Link
          to="/Login"
          style={{
            ...styles.button,
            ...styles.login,
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
