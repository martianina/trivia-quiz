import React from "react";
import AnswerButton from "../common/buttons/Button/Button";
import styles from "./AnswerGrid.module.css";

const AnswerGrid = ({ answers }) => {
  return (
    <div className={styles.answerGrid}>
      <AnswerButton
        label={answers && answers.length !== 2 ? answers[0] : answers[1]}
        variant="contained"
      />
      <AnswerButton
        label={answers && answers.length !== 2 ? answers[1] : answers[0]}
        variant="contained"
      />
      {answers && answers.length === 4 && (
        <AnswerButton label={answers && answers[2]} variant="contained" />
      )}
      {answers && answers.length === 4 && (
        <AnswerButton label={answers && answers[3]} variant="contained" />
      )}
    </div>
  );
};

export default AnswerGrid;
