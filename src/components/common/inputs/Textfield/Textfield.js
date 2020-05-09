import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const Textfield = ({
  label,
  variant,
  onChange,
  type,
  style,
  value,
  helperText,
  error,
}) => {
  const useStyles = makeStyles((theme) => ({
    root: style,
  }));

  const classes = useStyles();
  return (
    <div>
      <TextField
        error={error}
        label={label}
        variant={variant}
        classes={classes}
        onChange={onChange}
        type={type}
        value={value}
        helperText={error ? helperText : ""}
      />
    </div>
  );
};

export default Textfield;
