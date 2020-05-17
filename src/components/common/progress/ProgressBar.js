import React from "react";
import { Progress } from "semantic-ui-react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ value, total }) => {
  return (
    <div className={styles.bar}>
      <div
        style={{
          "--width": `${(value / total) * 100}%`,
          "--backgroundColor": value !== total ? "#4a5bb9" : "#21BA45",
        }}
        className={styles.bar__progress}
      ></div>
      <div className={styles.bar__remainder}></div>
    </div>
  );
};

export default ProgressBar;
