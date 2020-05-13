import React, { useState, useEffect } from "react";
import LoadingIndicator from "../../components/common/LoadingIndicator/LoadingIndicator";
import Title from "../../components/common/Title/Title";
import NumberOfQuestionsField from "../../components/common/inputs/Textfield/Textfield";
import CategoryDropdown from "../../components/common/inputs/Dropdown/Dropdown";
import DifficultyDropdown from "../../components/common/inputs/Dropdown/Dropdown";
import TypeDropdown from "../../components/common/inputs/Dropdown/Dropdown";
import StartQuizButton from "../../components/common/buttons/Button/Button";
import styles from "./Menu.module.css";
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
      {categories ? (
        <div className={styles.menu}>
          <div className={styles.menu__itemContainer}>
            <Title title="Welcome to Anthony Hien Vu's Quiz!" />
          </div>
          <div className={styles.menu__itemContainer}>
            <NumberOfQuestionsField
              label="Number of Questions:"
              variant="outlined"
              type="number"
              onChange={menuActions.changeNumberOfQuestions}
              style={style.textFieldStyle}
              value={menuState.numberOfQuestions}
              helperText="Error: Number must be an integer less than or equal to 50."
              error={!menuState.isFormValid}
              className={styles.menu__input}
            />
          </div>
          <div className={styles.menu__itemContainer}>
            <CategoryDropdown
              options={categories}
              label="Select Category:"
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
              label="Select Difficulty:"
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
              label="Select Type:"
              variant="outlined"
              inputStyle={style.dropdownStyle}
              onChange={menuActions.changeType}
              value={menuState.type}
              className={styles.menu__input}
            />
          </div>
          <div className={styles.menu__itemContainer}>
            <StartQuizButton
              label="START"
              variant="contained"
              onClick={menuActions.startQuiz}
              color="primary"
            />
          </div>
        </div>
      ) : (
        <LoadingIndicator
          size="10vh"
          label="Menu Loading"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        />
      )}
    </div>
  );
};

export default Menu;
