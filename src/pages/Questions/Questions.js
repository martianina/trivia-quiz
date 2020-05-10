import React, { useState, useEffect } from "react";
import Title from "../../components/common/Title/Title";
import AnswerGrid from "../../components/AnswerGrid/AnswerGrid";
import NextButton from "../../components/common/buttons/Button/Button";
import RestartButton from "../../components/common/buttons/Button/Button";
import styles from "./Questions.module.css";

const Questions = ({ quizData, setQuizData, setCurrentPage }) => {
  const [questionId, setQuestionId] = useState(0);
  const incrementQuestionId = () => setQuestionId(questionId + 1);

  // const removeHTMLCharacters = (string, htmlToReplace) => {
  //   let newString = string;
  //   for ([old, new] in Object.entries(htmlToReplace)) {
  //     newString = newString.replace(/${old}/g, new)
  //   }
  // }
  const convertToRegularString = (string) => {
    return string
      .replace(/&#(?:x([\da-f]+)|(\d+));/gi, function (_, hex, dec) {
        return String.fromCharCode(dec || +("0x" + hex));
      })
      .replace(/&quot;/g, `"`)
      .replace(/&amp/g, "&")
      .replace(/&shy;/g, "-")
      .replace(/&eacute;/g, "é")
      .replace(/&Uuml;/g, "Ü")
      .replace(/&ldquo;/g, `"`)
      .replace(/&#039;/g, `'`);
  };

  const onRestart = () => {
    setQuizData(null);
    setCurrentPage("menu");
  };

  return (
    <div>
      {quizData && (
        <div className={styles.questions}>
          <Title
            title={`${questionId + 1}. ${
              quizData[questionId] &&
              convertToRegularString(quizData[questionId].question)
            }`}
          />
          <AnswerGrid
            answers={
              quizData[questionId] &&
              quizData[questionId].answers.map((_) => convertToRegularString(_))
            }
          />
          <div className={styles.questions__buttonsContainer}>
            <RestartButton
              label="RESTART"
              variant="contained"
              color="primary"
              onClick={onRestart}
            />
            <NextButton
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
        </div>
      )}
    </div>
  );
};

export default Questions;
