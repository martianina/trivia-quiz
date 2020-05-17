import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup({ label, values, value, onChange }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={onChange}
      >
        {values.map((_) => (
          <FormControlLabel
            value={_}
            control={<Radio />}
            label={_.charAt(0).toUpperCase() + _.slice(1)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
