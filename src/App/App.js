import React, { useState } from "react";
import Menu from "../pages/Menu/Menu";
import styles from "./App.module.css";

function App() {
  const [numberOfQuestions, setNumberOfQuestions] = useState("10");

  const changeNumberOfQuestions = (event) =>
    setNumberOfQuestions(event.target.value);

  const menuActions = { changeNumberOfQuestions };
  const menuState = { numberOfQuestions };
  return (
    <div className={styles.App}>
      <Menu menuActions={menuActions} menuState={menuState} />
    </div>
  );
}

export default App;
