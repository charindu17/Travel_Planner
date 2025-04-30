import React from "react";

import Header from "./Header";
//import { useState } from "react";

function Home() {
  const styles = {
    navBar: {
      position: "fixed", // Fix the navbar at the top of the viewport
      top: 0,
      left: 0,
      width: "100%", // Span the full width of the browser
      zIndex: 1000, // Ensure the navbar stays above other content
      background: "white", // Add a background color (customize as needed)
      padding: "10px 20px", // Add some padding for spacing
      boxSizing: "border-box", // Include padding in the width calculation
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow
    },
    hero: {
        position: "relative",
        height: "calc(100vh - 80px)", // Subtract the height of the navbar
        background:
          "url('https://th.bing.com/th/id/OSK.HEROGUft3FF5iOdbDj5xgp-NbG1nrtj76mK5BNr8aND5O4E?rs=1&pid=ImgDetMain') no-repeat center center/cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        paddingTop: "80px", // Match the height of the navbar
      },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
    },
    heroContent: {
      position: "relative",
      maxWidth: "600px",
    },
    h1: {
      fontSize: "40px",
      marginBottom: "10px",
    },
    p: {
      fontSize: "18px",
      marginBottom: "20px",
    },
    searchBar: {
      display: "flex",
      background: "rgba(247, 233, 233, 0.2)",
      backdropFilter: "blur(10px)",
      padding: "10px",
      borderRadius: "30px",
      width: "100%",
      maxWidth: "500px",
    },
    input: {
      flex: 1,
      border: "none",
      padding: "10px",
      fontSize: "16px",
      background: "transparent",
      outline: "none",
      color: "white",
      caretColor: "white", // Cursor color
    },
    button: {
      background: "black",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "30px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    buttonHover: {
      background: "#333",
    },
  };

  return (
    <div>
      {/* Apply the navBar styles to the NavBar component */}
      <nav style={styles.navBar}>
        <Header />
      </nav>

      <header style={styles.hero}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.h1}>Find Your Destination</h1>
          <p style={styles.p}>
            Describe your dream destination and experience, and we'll find the
            perfect place for you.
          </p>
          <div style={styles.searchBar}>
            <>
              <style>
                {`
                  #search-input::placeholder {
                    color: rgba(255, 255, 255, 0.7);
                  }
                `}
              </style>

              <input
                type="text"
                id="search-input"
                placeholder="Describe your destination, experience, or hotel..."
                style={styles.input}
              />
            </>
            <button id="ai-search-btn" style={styles.button}>
              <i className="fas fa-magic"></i> AI Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
