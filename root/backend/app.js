const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Import routers
const userRouter = require("./Routes/UserRoute"); // User routes
const tripRouter = require("./Routes/TripRoute"); // Trip routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount routers
app.use("/users", userRouter); // Use userRouter for /users
app.use("/trips", tripRouter); // Use tripRouter for /trips

// MongoDB Connection
mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log("MongoDB Connection Error:", err));
