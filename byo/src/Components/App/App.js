import React, { useState, useEffect } from "react";
import "./App.css"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Footer from "../Footer/Footer"

function App() {

    return (
        <div className="App">
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default App;
