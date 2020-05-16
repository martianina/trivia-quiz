import React from "react";
import { Progress } from "semantic-ui-react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ value, total }) => {
  return (
    <Progress
      className={styles.bar}
      value={value}
      total={total}
      progress="ratio"
      success={true}
    >
      {value === total && `Last question!`}
    </Progress>
  );
};

export default ProgressBar;
