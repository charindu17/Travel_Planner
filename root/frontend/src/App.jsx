import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Header from "./components/Header";
import Preferences from "./components/Preferences";
import AllTrips from "./components/AllTrips";
import AddTrip from "./components/AddTrip";
import EditTrip from "./components/EditTrip";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Preferences" element={<Preferences />} />
        <Route path="/AllTrips" element={<AllTrips />} />
        <Route path="/addTrip" element={<AddTrip />} />
        <Route path="/editTrip/:id" element={<EditTrip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;