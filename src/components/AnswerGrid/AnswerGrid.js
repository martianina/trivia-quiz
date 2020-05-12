import React from "react";
import AnswerButton from "../common/buttons/Button/Button";
import styles from "./AnswerGrid.module.css";

const AnswerGrid = ({
  answers,
  setSelectedAnswerIndex,
  selectedAnswerIndex,
}) => {
  const isBoolean = answers && answers.length == 2;

  return (
    <div className={styles.answerGrid}>
      <AnswerButton
        label={isBoolean ? answers[1] : answers[0]}
        variant="contained"
        onClick={
          isBoolean
            ? () => setSelectedAnswerIndex(1)
            : () => setSelectedAnswerIndex(0)
        }
        color={`${
          isBoolean
            ? selectedAnswerIndex === 1 && "secondary"
            : selectedAnswerIndex === 0 && "secondary"
        }`}
      />
      <AnswerButton
        label={isBoolean ? answers[0] : answers[1]}
        variant="contained"
        onClick={
          isBoolean
            ? () => setSelectedAnswerIndex(0)
            : () => setSelectedAnswerIndex(1)
        }
        color={`${
          isBoolean
            ? selectedAnswerIndex === 0 && "secondary"
            : selectedAnswerIndex === 1 && "secondary"
        }`}
      />
      {!isBoolean && (
        <AnswerButton
          label={answers[2]}
          variant="contained"
          onClick={() => setSelectedAnswerIndex(2)}
          color={`${selectedAnswerIndex === 2 && "secondary"}`}
        />
      )}
      {!isBoolean && (
        <AnswerButton
          label={answers[3]}
          variant="contained"
          onClick={() => setSelectedAnswerIndex(3)}
          color={`${selectedAnswerIndex === 3 && "secondary"}`}
        />
      )}
    </div>
  );
};

export default AnswerGrid;
