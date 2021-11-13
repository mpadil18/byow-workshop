import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div class="navbar" id="Navbar">
            <div class="left">
                <img src={Logo} alt="Slug site logo"></img>
                <div class="navbar-text">the slug site</div>
            </div>
            <div class="right">
                <div class="navbar-text">about</div>
                <div class="navbar-text">contact me</div>
            </div>
        </div>
    )
}