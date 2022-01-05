import React, { useState } from "react";
import DarkTheme from "./DarkTheme";

const loadDarkMode = () => {
  if (typeof localStorage === "undefined") {
    return false;
  }
  const value = localStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
};

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };
  console.log("darkmode: ", darkMode);

  const text = darkMode ? "Light Mode" : "Dark Mode";
  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            cursor: pointer;
            color: inherit;
          }
        `}
      </style>
      {darkMode && <DarkTheme></DarkTheme>}
    </>
  );
};

export default ThemeSwitch;
