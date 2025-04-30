import React from "react";
import Header from "./Header";

function Preferences() {
  const styles = {
    container: {
      background: "rgba(255, 255, 255, 0.9)",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      width: "100%",
      maxWidth: "1200px",
      textAlign: "center",
      margin: "20px auto",
      marginTop: "80px", // Match the height of the navbar
    },
    h2: {
      marginBottom: "20px",
      fontSize: "24px",
    },
    destinationCards: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "20px",
    },
    destinationCard: {
      width: "calc(25% - 20px)",
      background: "white",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
    },
    destinationCardHover: {
      transform: "scale(1.05)",
    },
    destinationImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    destinationInfo: {
      padding: "15px",
    },
    destinationName: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    destinationLocation: {
      color: "#aaa",
      marginBottom: "5px",
    },
    destinationRating: {
      fontSize: "14px",
      marginBottom: "5px",
    },
    destinationPrice: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
    },
  };

  return (
    <div>
      {/* Header Component */}
      {/* <Header /> */}

      {/* Preferences Section */}
      <div style={styles.container}>
        <h2 style={styles.h2}>Top Trending Destinations Worldwide</h2>
        <p>Discover the most popular destinations worldwide for an unforgettable experience.</p>

        <div style={styles.destinationCards}>
          {/* Destination Card 1 */}
          <div style={styles.destinationCard}>
            <img
              src="https://th.bing.com/th/id/OIP.VJyQEg-Xn7mbhLDsimzUFAHaE8?rs=1&pid=ImgDetMain"
              alt="Sigiriya, Sri Lanka"
              style={styles.destinationImage}
            />
            <div style={styles.destinationInfo}>
              <h3 style={styles.destinationName}>Sigiriya, Sri Lanka</h3>
              <p style={styles.destinationLocation}>Sigiriya, Sri Lanka</p>
              <p style={styles.destinationRating}>⭐️ 4.9 (2,578 Reviews)</p>
              <p style={styles.destinationPrice}>$160</p>
            </div>
          </div>

          {/* Destination Card 2 */}
          <div style={styles.destinationCard}>
            <img
              src="https://th.bing.com/th/id/OIP.FbNcTeaK3smMH8-QvH5ihQHaDe?rs=1&pid=ImgDetMain"
              alt="Kandy, Sri Lanka"
              style={styles.destinationImage}
            />
            <div style={styles.destinationInfo}>
              <h3 style={styles.destinationName}>Kandy, Sri Lanka</h3>
              <p style={styles.destinationLocation}>Kandy, Sri Lanka</p>
              <p style={styles.destinationRating}>⭐️ 4.7 (2,578 Reviews)</p>
              <p style={styles.destinationPrice}>$160</p>
            </div>
          </div>

          {/* Destination Card 3 */}
          <div style={styles.destinationCard}>
            <img
              src="https://th.bing.com/th/id/OIP.qqXMwO-g8HTT5Lti6pPBuAHaFQ?rs=1&pid=ImgDetMain"
              alt="Paris, France"
              style={styles.destinationImage}
            />
            <div style={styles.destinationInfo}>
              <h3 style={styles.destinationName}>Paris, France</h3>
              <p style={styles.destinationLocation}>Paris, France</p>
              <p style={styles.destinationRating}>⭐️ 4.7 (2,578 Reviews)</p>
              <p style={styles.destinationPrice}>$160</p>
            </div>
          </div>

          {/* Destination Card 4 */}
          <div style={styles.destinationCard}>
            <img
              src="https://th.bing.com/th/id/OIP.Zk3krZupGsLNdYWPnt09QQHaE5?rs=1&pid=ImgDetMain"
              alt="Sydney, Australia"
              style={styles.destinationImage}
            />
            <div style={styles.destinationInfo}>
              <h3 style={styles.destinationName}>Sydney, Australia</h3>
              <p style={styles.destinationLocation}>Sydney, Australia</p>
              <p style={styles.destinationRating}>⭐️ 4.8 (1,023 Reviews)</p>
              <p style={styles.destinationPrice}>$200</p>
            </div>
          </div>

          {/* Destination Card 5 */}
          <div style={styles.destinationCard}>
            <img
              src="https://th.bing.com/th/id/R.56c4a88fef9641fcd56f58053c037918?rik=lL54rcnnA8R9Ww&pid=ImgRaw&r=0"
              alt="Tokyo, Japan"
              style={styles.destinationImage}
            />
            <div style={styles.destinationInfo}>
              <h3 style={styles.destinationName}>Tokyo, Japan</h3>
              <p style={styles.destinationLocation}>Tokyo, Japan</p>
              <p style={styles.destinationRating}>⭐️ 4.6 (875 Reviews)</p>
              <p style={styles.destinationPrice}>$180</p>
            </div>
          </div>

          {/* Destination Card 6 */}
          <div style={styles.destinationCard}>
            <img
              src="https://th.bing.com/th/id/R.e5de414db1c90d3a7beb06218fb2e3e8?rik=qfUq4E5X27J4vw&riu=http%3a%2f%2fwww.thepersonaltravelagents.co.uk%2fuploads%2fEurope%2fUK%2fLondon%2f_thumbs%2fiStock_000020660067Large-2000x1332.jpg&ehk=RLVgXhB8n3EnQ1OGhheiLPZftf6ty24cWVX6%2fuIb%2bDs%3d&risl=&pid=ImgRaw&r=0"
              alt="London, UK"
              style={styles.destinationImage}
            />
            <div style={styles.destinationInfo}>
              <h3 style={styles.destinationName}>London, UK</h3>
              <p style={styles.destinationLocation}>London, UK</p>
              <p style={styles.destinationRating}>⭐️ 4.7 (1,100 Reviews)</p>
              <p style={styles.destinationPrice}>$190</p>
            </div>
          </div>
          <div style={styles.destinationCard}>
            <img
              src="https://th.bing.com/th/id/R.e5de414db1c90d3a7beb06218fb2e3e8?rik=qfUq4E5X27J4vw&riu=http%3a%2f%2fwww.thepersonaltravelagents.co.uk%2fuploads%2fEurope%2fUK%2fLondon%2f_thumbs%2fiStock_000020660067Large-2000x1332.jpg&ehk=RLVgXhB8n3EnQ1OGhheiLPZftf6ty24cWVX6%2fuIb%2bDs%3d&risl=&pid=ImgRaw&r=0"
              alt="London, UK"
              style={styles.destinationImage}
            />
            <div style={styles.destinationInfo}>
              <h3 style={styles.destinationName}>London, UK</h3>
              <p style={styles.destinationLocation}>London, UK</p>
              <p style={styles.destinationRating}>⭐️ 4.7 (1,100 Reviews)</p>
              <p style={styles.destinationPrice}>$190</p>
            </div>
          </div>
          <div style={styles.destinationCard}>
            <img
              src="https://th.bing.com/th/id/R.e5de414db1c90d3a7beb06218fb2e3e8?rik=qfUq4E5X27J4vw&riu=http%3a%2f%2fwww.thepersonaltravelagents.co.uk%2fuploads%2fEurope%2fUK%2fLondon%2f_thumbs%2fiStock_000020660067Large-2000x1332.jpg&ehk=RLVgXhB8n3EnQ1OGhheiLPZftf6ty24cWVX6%2fuIb%2bDs%3d&risl=&pid=ImgRaw&r=0"
              alt="London, UK"
              style={styles.destinationImage}
            />
            <div style={styles.destinationInfo}>
              <h3 style={styles.destinationName}>London, UK</h3>
              <p style={styles.destinationLocation}>London, UK</p>
              <p style={styles.destinationRating}>⭐️ 4.7 (1,100 Reviews)</p>
              <p style={styles.destinationPrice}>$190</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preferences;