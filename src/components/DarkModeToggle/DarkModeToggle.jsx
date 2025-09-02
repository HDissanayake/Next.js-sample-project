import React, { useState } from "react";
import styles from "./darkModeToggle.module.css";

const DarkModeToggle = () => {
  // create a state for mode (default: light)
  const [mode, setMode] = useState("light");

  // function to toggle mode
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
