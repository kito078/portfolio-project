// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

// function DarkThemeProvider() {
// const [theme, setTheme] = useState("dark");

// useEffect(() => {
//   if (theme === "dark") {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// }, [theme]);

// const toggleTheme = () => {
//   if (theme === "dark") {
//     setTheme("light");
//     localStorage.setItem("theme", "light"); // Optional: Save user preference in local storage
//   } else {
//     setTheme("dark");
//     localStorage.setItem("theme", "dark"); // Optional: Save user preference in local storage
//   }
// };

//   return (
//     <div>
//       {/* Your app content here */}
//       <button onClick={toggleTheme}>
//         Switch to {theme === "dark" ? "Light" : "Dark"} Theme
//       </button>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
