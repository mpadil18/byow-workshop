import { useEffect, useState } from "react";

import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="Navbar">
            <img src="#" alt="Slug site logo"></img>
            <h1>the slug site</h1>
            <p>about</p>
            <a href="mailto:slug@yoursite.com">contact me</a>
        </div>
    )
}