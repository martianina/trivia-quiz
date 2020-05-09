import React from "react";
import Title from "../../components/Title/Title";
import SelectNumberOfQuestions from "../../components/common/inputs/Textfield/Textfield";
import SelectCategory from "../../components/common/inputs/Dropdown/Dropdown";
import styles from "./Menu.module.css";

const Menu = ({ menuActions, menuState }) => {
  return (
    <div className={styles.menu}>
      <Title />
      <SelectNumberOfQuestions
        label="Number of Questions:"
        variant="outlined"
        type="number"
        onChange={menuActions.changeNumberOfQuestions}
        style={{ width: "8.3vw" }}
        value={menuState.numberOfQuestions}
        helperText="Number must be less than or equal to 50."
        error={
          !(
            menuState.numberOfQuestions >= 1 &&
            menuState.numberOfQuestions <= 50
          )
        }
      />
      <SelectCategory
        options={[
          { title: "The Shawshank Redemption", year: 1994 },
          { title: "The Godfather", year: 1972 },
          { title: "The Godfather: Part II", year: 1974 },
        ]}
        label="Select Category:"
        variant="outlined"
        inputStyle={{ width: "11.5vw" }}
        // listboxStyle={{ width: "auto" }}
      />
    </div>
  );
};

export default Menu;
