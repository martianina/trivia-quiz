import React, { useState, useEffect } from "react";
import Menu from "../pages/Menu/Menu";
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

  const [currentPage, setCurrentPage] = useState("menu");

  const changeNumberOfQuestions = (event) =>
    setNumberOfQuestions(parseFloat(event.target.value));

  const changeCategory = (event, selectedOption) => setCategory(selectedOption);

  const changeDifficulty = (event, selectedOption) =>
    setDifficulty(selectedOption);

  const changeType = (event, selectedOption) => setType(selectedOption);

  const isFormValid =
    numberOfQuestions >= 1 &&
    numberOfQuestions <= 50 &&
    numberOfQuestions % 1 == 0;

  const startQuiz = () => {
    if (isFormValid) {
      fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}${"&category=19"}&difficulty=medium&type=multiple`
      )
        .then((response) => response.json())
        // .then((data) => console.log({ data }));
        .then((data) => console.log({ data }));
    }
  };
  const menuActions = {
    changeNumberOfQuestions,
    changeCategory,
    changeDifficulty,
    changeType,
    setCurrentPage,
  };
  const menuState = {
    numberOfQuestions,
    category,
    difficulty,
    type,
    isFormValid,
  };
  return (
    <div className={styles.App}>
      <Menu menuActions={menuActions} menuState={menuState} />
    </div>
  );
}

export default App;
