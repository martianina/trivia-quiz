import React, { useState, useEffect } from "react";
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
      // .then((data) => console.log({ data }));
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
      {categories && (
        <div className={styles.menu}>
          <div className={styles.menu__item_centered}>
            <Title title="Welcome to Anthony Hien Vu's Quiz!" />
          </div>
          <div className={styles.menu__item_left}>
            <NumberOfQuestionsField
              label="Number of Questions:"
              variant="outlined"
              type="number"
              onChange={menuActions.changeNumberOfQuestions}
              style={style.textFieldStyle}
              value={menuState.numberOfQuestions}
              helperText="Error: Number must be an integer less than or equal to 50."
              error={!menuState.isFormValid}
            />
          </div>
          <div className={styles.menu__item_left}>
            <CategoryDropdown
              options={categories}
              label="Select Category:"
              variant="outlined"
              inputStyle={style.dropdownStyle}
              onChange={menuActions.changeCategory}
              value={menuState.category}
            />
          </div>
          <div className={styles.menu__item_left}>
            <DifficultyDropdown
              options={style.difficulties}
              label="Select Difficulty:"
              variant="outlined"
              inputStyle={style.dropdownStyle}
              onChange={menuActions.changeDifficulty}
              value={menuState.difficulty}
            />
          </div>
          <div className={styles.menu__item_left}>
            <TypeDropdown
              options={style.types}
              label="Select Type:"
              variant="outlined"
              inputStyle={style.dropdownStyle}
              onChange={menuActions.changeType}
              value={menuState.type}
            />
          </div>
          <div className={styles.menu__item_centered}>
            <StartQuizButton
              label="START"
              variant="contained"
              onClick={menuActions.startQuiz}
              color="primary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
