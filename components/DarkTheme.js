import React from "react";

const DarkTheme = () => {
  return (
    <style jsx global>{`
      :root {
        --background-color: rgb(27, 27, 27);
        --link-color: rgb(219, 186, 0);
        --text-color: rgb(230, 230, 230);
      }
    `}</style>
  );
};

export default DarkTheme;
