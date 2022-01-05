import React, { useState } from "react";
import DarkTheme from "./DarkTheme";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log("darkmode: ", darkMode);

  const text = darkMode ? "Light Mode" : "Dark Mode";
  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>{text}</button>
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