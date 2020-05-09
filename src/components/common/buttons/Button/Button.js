import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const GenericButton = ({ label, variant, color, onClick }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      // backgroundColor: "green",
    },
    label: { fontWeight: "bold" },
  }));

  const classes = useStyles();
  return (
    <div>
      <Button
        variant={variant}
        classes={classes}
        color={color}
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
};

export default GenericButton;
