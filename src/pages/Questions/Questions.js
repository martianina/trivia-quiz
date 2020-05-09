import React, { useState, useEffect } from "react";
import Title from "../../components/common/Title/Title";
import Button from "../../components/common/buttons/Button/Button";

import styles from "./Questions.module.css";

const Questions = ({ quizData, setCurrentPage }) => {
  const [questionId, setQuestionId] = useState(0);
  const incrementQuestionId = () => setQuestionId(questionId + 1);

  return (
    <div>
      {quizData && (
        <div className={styles.questions}>
          <Title
            title={`${questionId + 1}. ${
              quizData[questionId] && quizData[questionId].question
            }`}
          />
          <Button
            label={questionId < quizData.length - 1 ? "NEXT" : "FINISH"}
            variant="contained"
            color="primary"
            onClick={
              questionId <= quizData.length - 1
                ? incrementQuestionId
                : setCurrentPage("results")
            }
          />
        </div>
      )}
    </div>
  );
};

export default Questions;
