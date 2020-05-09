import React from "react";
import Title from "../../components/common/Title/Title";
import Button from "../../components/common/buttons/Button/Button";

const Results = ({ quizData, setQuizData, setCurrentPage }) => {
  const onRestart = () => {
    setQuizData(null);
    setCurrentPage("menu");
  };

  return (
    <div>
      <Title title={"Placeholder Results Title"} />
      <Button
        label={"Restart"}
        variant="contained"
        color="primary"
        onClick={() => onRestart()}
      />
    </div>
  );
};

export default Results;
