import React, { useState } from "react";
import Menu from "../pages/Menu/Menu";
import Questions from "../pages/Questions/Questions";
import Results from "../pages/Results/Results";
import styles from "./App.module.css";

function App() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [category, setCategory] = useState({
    name: "Any Category",
    id: null,
  });
  const [difficulty, setDifficulty] = useState({
    name: "Any Difficulty",
    value: null,
  });
  const [type, setType] = useState({
    name: "Any Type",
    value: null,
  });
  const [quizData, setQuizData] = useState(null);
  const [quizDuration, setQuizDuration] = useState(10);
  const [currentPage, setCurrentPage] = useState("menu");

  const changeNumberOfQuestions = (event) =>
    setNumberOfQuestions(parseFloat(event.target.value));

  const changeQuizDuration = (event) =>
    setQuizDuration(parseFloat(event.target.value));

  const changeCategory = (event, selectedOption) => setCategory(selectedOption);

  const changeDifficulty = (event, selectedOption) =>
    setDifficulty(selectedOption);

  const changeType = (event, selectedOption) => setType(selectedOption);

  const isFormValid =
    quizDuration > 0 &&
    numberOfQuestions >= 1 &&
    numberOfQuestions <= 50 &&
    numberOfQuestions % 1 === 0;

  const startQuiz = () => {
    setCurrentPage("questions");
    if (isFormValid) {
      fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}${
          category && category.id ? `&category=${category.id}` : ""
        }${
          difficulty && difficulty.value
            ? `&difficulty=${difficulty.value}`
            : ""
        }${type && type.value ? `&type=${type.value}` : ""}`
      )
        .then((response) => response.json())
        // .then((data) => console.log({ data }));
        .then((data) =>
          setQuizData(
            data.results.map((object, index) => {
              return {
                questionNumber: index,
                question: object.question,
                answers: object.incorrect_answers
                  .concat(object.correct_answer)
                  .sort(),
                correctAnswer: object.correct_answer,
                selectedAnswerIndex: null,
              };
            })
          )
        );
    } else alert("Fix all errors before clicking START.");
  };

  const restartQuiz = () => {
    setQuizData(null);
    setCurrentPage("menu");
  };

  const menuActions = {
    changeNumberOfQuestions,
    changeCategory,
    changeDifficulty,
    changeType,
    setCurrentPage,
    startQuiz,
    changeQuizDuration,
  };
  const menuState = {
    numberOfQuestions,
    category,
    difficulty,
    type,
    isFormValid,
    quizDuration,
  };
  return (
    <div className={styles.App}>
      {currentPage === "menu" && (
        <Menu menuActions={menuActions} menuState={menuState} />
      )}
      {currentPage === "questions" && (
        <Questions
          quizData={quizData}
          setQuizData={setQuizData}
          setCurrentPage={setCurrentPage}
          restartQuiz={restartQuiz}
          quizDuration={quizDuration}
        />
      )}
      {currentPage === "results" && (
        <Results
          quizData={quizData}
          setQuizData={setQuizData}
          setCurrentPage={setCurrentPage}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
