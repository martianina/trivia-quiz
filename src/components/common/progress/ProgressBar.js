import React from "react";
import { Progress } from "semantic-ui-react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ value, total, color }) => {
  return (
    <Progress
      className={styles.bar}
      value={value}
      total={total}
      // progress
      // success={true}
      color={color}
      // style={{ fontSize: 10 }}
    >
      {value === total && `Last question!`}
      {/* <div className="progressText">{`${value}/${total}`}</div> */}
    </Progress>
  );
};

export default ProgressBar;
