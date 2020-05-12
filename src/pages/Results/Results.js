import React from "react";
import Title from "../../components/common/Title/Title";
import Button from "../../components/common/buttons/Button/Button";
import styles from "./Results.module.css";

const Results = ({ quizData, setQuizData, setCurrentPage }) => {
  const onRestart = () => {
    setQuizData(null);
    setCurrentPage("menu");
  };

  let finalScore = 0;
  for (let _ of quizData) {
    if (_.answers[_.selectedAnswerIndex] == _.correctAnswer) finalScore += 1;
  }

  return (
    <div className={styles.results}>
      <Title title={`Final Score: ${finalScore}/${quizData.length}`} />
      <Button
        label={"Restart"}
        variant="contained"
        color="primary"
        onClick={() => onRestart()}
      />
    </div>
  );
};

export default Results;
