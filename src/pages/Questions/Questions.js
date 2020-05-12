import React, { useState, useEffect } from "react";
import Title from "../../components/common/Title/Title";
import AnswerGrid from "../../components/AnswerGrid/AnswerGrid";
import NextButton from "../../components/common/buttons/Button/Button";
import RestartButton from "../../components/common/buttons/Button/Button";
import styles from "./Questions.module.css";
import * as style from "./Questions.style";
import _ from "lodash";

const Questions = ({ quizData, setQuizData, setCurrentPage }) => {
  const [questionId, setQuestionId] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const incrementQuestionId = () => setQuestionId(questionId + 1);

  const removeHTMLCharacters = (string, htmlToReplace) => {
    let modifiedString = string;
    for (let [html, replacementString] of Object.entries(htmlToReplace)) {
      modifiedString = _.replace(
        modifiedString,
        new RegExp(html, "g"),
        replacementString
      );
    }
    return modifiedString;
  };

  const convertToRegularString = (string) => {
    return removeHTMLCharacters(
      string.replace(/&#(?:x([\da-f]+)|(\d+));/gi, function (_, hex, dec) {
        return String.fromCharCode(dec || +("0x" + hex));
      }),
      style.htmlsToReplace
    );
  };

  const onClickNextButton = () => {
    setSelectedAnswerIndex(null);
    incrementQuestionId();
  };

  const onClickRestartButton = () => {
    setQuizData(null);
    setCurrentPage("menu");
  };

  useEffect(() => {
    let modifiedQuizData = quizData;
    if (questionId) {
      modifiedQuizData[questionId].selectedAnswerIndex = selectedAnswerIndex;
      setQuizData(modifiedQuizData);
    }
  }, [selectedAnswerIndex]);

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
            selectedAnswerIndex={selectedAnswerIndex}
            setSelectedAnswerIndex={setSelectedAnswerIndex}
          />
          <div className={styles.questions__buttonsContainer}>
            <RestartButton
              label="RESTART"
              variant="contained"
              color="primary"
              onClick={onClickRestartButton}
            />
            <NextButton
              label={questionId < quizData.length - 1 ? "NEXT" : "FINISH"}
              variant="contained"
              color="primary"
              onClick={() => {
                questionId <= quizData.length - 1
                  ? selectedAnswerIndex || selectedAnswerIndex === 0
                    ? onClickNextButton()
                    : alert("Please select one answer first!")
                  : setCurrentPage("results");
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
