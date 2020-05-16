import React, { useState } from "react";
import AnswerGrid from "../../components/AnswerGrid/AnswerGrid";
import LeftArrowIconButton from "../../components/common/buttons/iconButtons/LeftArrowIconButton";
import RestartIconButton from "../../components/common/buttons/iconButtons/RestartIconButton";
import RightArrowIconButton from "../../components/common/buttons/iconButtons/RightArrowIconButton";
import LoadingIndicator from "../../components/common/LoadingIndicator/LoadingIndicator";
import Title from "../../components/common/Title/Title";
import ProgressBar from "../../components/common/progress/ProgressBar";
import { convertToRegularString } from "../../modules/StringModifiers";
import styles from "./Questions.module.css";

const Questions = ({ quizData, setQuizData, setCurrentPage }) => {
  const [questionId, setQuestionId] = useState(0);

  const selectedAnswerIndex =
    quizData && quizData[questionId].selectedAnswerIndex;
  const incrementQuestionId = () => setQuestionId(questionId + 1);
  const decrementQuestionId = () => setQuestionId(questionId - 1);

  const onClickBackButton = () => {
    if (
      quizData[questionId].selectedAnswerIndex ||
      quizData[questionId].selectedAnswerIndex === 0
    )
      setSelectedAnswerIndex(quizData[questionId].selectedAnswerIndex);
    else setSelectedAnswerIndex(null);
    decrementQuestionId();
  };

  const onClickNextButton = () => {
    if (
      quizData[questionId].selectedAnswerIndex ||
      quizData[questionId].selectedAnswerIndex === 0
    )
      setSelectedAnswerIndex(quizData[questionId].selectedAnswerIndex);
    else setSelectedAnswerIndex(null);
    incrementQuestionId();
  };

  const setSelectedAnswerIndex = (selectedAnswerIndex) =>
    setQuizData(
      quizData.map((object, index) =>
        index === questionId
          ? { ...quizData[questionId], selectedAnswerIndex }
          : object
      )
    );

  const onClickRestartButton = () => {
    setQuizData(null);
    setCurrentPage("menu");
  };

  const onClickFinishButton = () => {
    setCurrentPage("results");
  };
  return (
    <div>
      {quizData && quizData.length > 0 ? (
        <div className={styles.questionsContainer}>
          <div className={styles.questions__title}>
            <Title
              title={`${questionId + 1}. ${
                quizData[questionId] &&
                convertToRegularString(quizData[questionId].question)
              }`}
            />
          </div>
          <AnswerGrid
            answers={
              quizData[questionId] &&
              quizData[questionId].answers.map((_) => convertToRegularString(_))
            }
            selectedAnswerIndex={selectedAnswerIndex}
            setSelectedAnswerIndex={setSelectedAnswerIndex}
          />
          <div className={styles.questions__buttonsContainer}>
            {questionId !== 0 && (
              <LeftArrowIconButton
                tooltipTitle="Go to previous question"
                color="primary"
                onClick={() => {
                  onClickBackButton();
                }}
                iconStyle={{ fontSize: "4vh" }}
              />
            )}
            <RightArrowIconButton
              tooltipTitle={
                questionId < quizData.length - 1
                  ? "Go to next question"
                  : "Finish quiz"
              }
              color="primary"
              onClick={() => {
                questionId < quizData.length - 1
                  ? selectedAnswerIndex || selectedAnswerIndex === 0
                    ? onClickNextButton()
                    : alert("Please select one answer first!")
                  : selectedAnswerIndex || selectedAnswerIndex === 0
                  ? onClickFinishButton()
                  : alert("Please select one answer first!");
              }}
              iconStyle={{ fontSize: "4vh" }}
            />
            <RestartIconButton
              tooltipTitle="Restart Quiz"
              color="primary"
              onClick={() => onClickRestartButton()}
              iconStyle={{ fontSize: "4vh" }}
            />
          </div>
          <ProgressBar value={questionId + 1} total={quizData.length} />
        </div>
      ) : (
        <LoadingIndicator
          size="10vh"
          label={`${quizData ? "No Questions Available" : "Questions Loading"}`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onRestart={quizData ? onClickRestartButton : null}
        />
      )}
    </div>
  );
};

export default Questions;
