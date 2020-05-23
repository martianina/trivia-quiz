import React, { useState, useEffect } from "react";
import LoadingIndicator from "../../components/common/LoadingIndicator/LoadingIndicator";
import Title from "../../components/common/Title/Title";
import NumberOfQuestionsField from "../../components/common/inputs/Textfield/Textfield";
import CategoryDropdown from "../../components/common/inputs/Dropdown/Dropdown";
import DifficultyDropdown from "../../components/common/inputs/Dropdown/Dropdown";
import TypeDropdown from "../../components/common/inputs/Dropdown/Dropdown";
import ToggleDuration from "../../components/common/buttons/radioButtons/RadioButtons/RadioButtons";
import DurationInput from "../../components/common/inputs/Textfield/Textfield";
import StartQuizButton from "../../components/common/buttons/Button/Button";
import styles from "./Menu.module.css";
import * as appStyle from "../../App/App.style";
import * as style from "./Menu.style";

const Menu = ({ menuActions, menuState }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) =>
        setCategories(
          [
            {
              name: "Any Category",
              id: null,
            },
          ].concat(data.trivia_categories)
        )
      );
  }, []);

  return (
    <div>
      <div>
        {categories ? (
          <div className={styles.menu}>
            <div className={styles.menu__itemContainer}>
              <Title
                className={styles.menu__title}
                title="Welcome to Anthony Hien Vu's Quiz!"
              />
            </div>
            <div className={styles.menu__itemContainer}>
              <NumberOfQuestionsField
                label="Number of questions"
                variant="outlined"
                type="number"
                onChange={menuActions.changeNumberOfQuestions}
                style={style.textFieldStyle}
                inputProps={{
                  height: "3vh",
                  fontSize: "clamp(10px, 2vh, 15px)",
                }}
                value={menuState.numberOfQuestions}
                helperText="Error: Number must be an integer less than or equal to 50."
                error={!menuState.isNumberOfQuestionsValid}
                className={styles.menu__input}
              />
            </div>
            <div className={styles.menu__itemContainer}>
              <CategoryDropdown
                options={categories}
                label="Category"
                variant="outlined"
                inputStyle={style.dropdownStyle}
                onChange={menuActions.changeCategory}
                value={menuState.category}
                className={styles.menu__input}
              />
            </div>
            <div className={styles.menu__itemContainer}>
              <DifficultyDropdown
                options={style.difficulties}
                label="Difficulty"
                variant="outlined"
                inputStyle={style.dropdownStyle}
                onChange={menuActions.changeDifficulty}
                value={menuState.difficulty}
                className={styles.menu__input}
              />
            </div>
            <div className={styles.menu__itemContainer}>
              <TypeDropdown
                options={style.types}
                label="Question type"
                variant="outlined"
                inputStyle={style.dropdownStyle}
                onChange={menuActions.changeType}
                value={menuState.type}
                className={styles.menu__input}
              />
            </div>
            <div className={styles.menu__itemContainerForSetTimeLimit}>
              <ToggleDuration
                label="Set time limit?"
                values={["yes", "no"]}
                value={menuState.useDuration}
                onChange={menuActions.changeUseDuration}
                color={style.highlightedPink}
              />
            </div>
            {menuState.useDuration === "yes" && (
              <div className={styles.menu__itemContainer}>
                <DurationInput
                  label="Time limit (in minutes)"
                  variant="outlined"
                  type="number"
                  onChange={menuActions.changeQuizDuration}
                  style={style.textFieldStyle}
                  value={menuState.quizDuration}
                  helperText="Error: Number must be greater than 0."
                  error={!(menuState.quizDuration > 0)}
                  className={styles.menu__input}
                  inputProps={{
                    height: "3vh",
                    fontSize: "clamp(10px, 2vh, 15px)",
                  }}
                />
              </div>
            )}
            <div className={styles.menu__itemContainer}>
              <StartQuizButton
                label="Start"
                variant="contained"
                onClick={menuActions.startQuiz}
                style={appStyle.buttonStyle}
              />
            </div>
          </div>
        ) : (
          <div className={styles.menu__loadingIndicator}>
            <LoadingIndicator
              size="10vh"
              label="Menu Loading"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
