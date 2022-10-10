import React from "react";

export default function Main({darkMode}) {
    return <main className={darkMode?"dark":""}>
        <h1>Facts About React</h1>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </main>
}