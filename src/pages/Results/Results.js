import React from "react";
import Title from "../../components/common/Title/Title";
import Button from "../../components/common/buttons/Button/Button";
import styles from "./Results.module.css";

const Results = ({ quizData, setQuizData, setCurrentPage }) => {
  const onRestart = () => {
    setQuizData(null);
    setCurrentPage("menu");
  };

  console.log({ quizData });
  return (
    <div className={styles.results}>
      <Title title={"Placeholder Results Title"} />
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
