// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";

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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button{" "}
        <svg
          class="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        class="z-10  bg-dark divide-y divide-gray-500 rounded-lg shadow w-44 dark:bg-gray-500"
      >
        <ul
          class="py-2 text-sm text-gray-100 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>

      {/* <DarkThemeProvider /> */}
    </div>
  );
}

export default App;
