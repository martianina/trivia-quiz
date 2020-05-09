import React, { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
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
          <Title />
          <NumberOfQuestionsField
            label="Number of Questions:"
            variant="outlined"
            type="number"
            onChange={menuActions.changeNumberOfQuestions}
            style={{ width: "8.3vw" }}
            value={menuState.numberOfQuestions}
            helperText="Error: Number must be an integer less than or equal to 50."
            error={!menuState.isFormValid}
          />
          <CategoryDropdown
            options={categories}
            label="Select Category:"
            variant="outlined"
            inputStyle={style.dropdownStyle}
            onChange={menuActions.changeCategory}
            value={menuState.category}
          />
          <DifficultyDropdown
            options={style.difficulties}
            label="Select Difficulty:"
            variant="outlined"
            inputStyle={style.dropdownStyle}
            onChange={menuActions.changeDifficulty}
            value={menuState.difficulty}
          />
          <TypeDropdown
            options={style.types}
            label="Select Type:"
            variant="outlined"
            inputStyle={style.dropdownStyle}
            onChange={menuActions.changeType}
            value={menuState.type}
          />
          <StartQuizButton
            label="START"
            variant="contained"
            onClick={menuActions.startQuiz}
            color="primary"
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
