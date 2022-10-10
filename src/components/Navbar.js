import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ toggler, darkMode }) {
    return <nav className={darkMode ? "navbar dark" : "navbar"}>
        <div className="brand">
            <img src="./images/react-icon-small.png" alt="logo" />
            <h2>ReactFacts</h2>
        </div>
        <div className="theme" onClick={toggler} style={{ cursor: "pointer" }}>
            <p style={{ color: "#c2c1c1" }}>light</p>
            <div className="toggler" >
                {darkMode ? <FontAwesomeIcon style={{ color: darkMode ? "#ffd43b" : "black" }} icon={faSun} /> : ""}
                <div className="circle"></div>
                {darkMode ? "" : <FontAwesomeIcon icon={faMoon} />}
            </div>
            <p style={{ color: "black" }}>dark</p>
        </div>
    </nav>
}