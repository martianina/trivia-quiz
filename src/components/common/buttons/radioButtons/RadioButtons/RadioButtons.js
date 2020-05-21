import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles, makeStyles } from "@material-ui/core/styles";

export default function RadioButtonsGroup({
  label,
  values,
  value,
  onChange,
  color,
}) {
  const ModifiedRadio = withStyles({
    root: {
      color: "black",
      "&$checked": {
        color: color,
      },
    },
    checked: {},
  })((props) => <Radio {...props} />);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" style={{ color: "black" }}>
        {label}
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={onChange}
      >
        {values.map((_) => (
          <FormControlLabel
            value={_}
            control={<ModifiedRadio />}
            label={_.charAt(0).toUpperCase() + _.slice(1)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
