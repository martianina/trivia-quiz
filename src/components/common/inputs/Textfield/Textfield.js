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
  className,
}) => {
  return (
    <div>
      <TextField
        className={className}
        error={error}
        label={label}
        variant={variant}
        onChange={onChange}
        inputProps={{ style: style }}
        type={type}
        value={value}
        helperText={error ? helperText : ""}
      />
    </div>
  );
};

export default Textfield;
