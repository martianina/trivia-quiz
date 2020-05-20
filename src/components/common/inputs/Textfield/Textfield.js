import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const Textfield = ({
  label,
  variant,
  onChange,
  type,
  style,
  value,
  helperText,
  error,
  className,
  labelStyle,
}) => {
  const styles = {
    cssLabel: {
      "&$cssFocused": {
        color: "red",
      },
    },
    // cssOutlinedInput: {
    //   "&$cssFocused $notchedOutline": {
    //     borderColor: purple[500],
    //   },
    // },
    cssFocused: {},
    notchedOutline: {},
  };

  const useStyles = makeStyles(style);

  const classes = useStyles();
  return (
    <div>
      <TextField
        className={`${classes.root} ${className}`}
        error={error}
        label={label}
        InputLabelProps={{
          classes: {
            root: styles.cssLabel,
            focused: styles.cssFocused,
          },
        }}
        variant={variant}
        onChange={onChange}
        type={type}
        value={value}
        helperText={error ? helperText : ""}
      />
    </div>
  );
};

export default Textfield;
