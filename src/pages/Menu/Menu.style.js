export const difficulties = [
  { name: "Any Difficulty", value: null },
  { name: "Easy", value: "easy" },
  { name: "Medium", value: "medium" },
  { name: "Hard", value: "hard" },
];

export const types = [
  { name: "Any Type", value: null },
  { name: "Multiple Choice", value: "multiple" },
  { name: "True / False", value: "boolean" },
];

export const textFieldStyle = {
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fd5660",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fd5660",
      borderWidth: "medium",
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "&:hover .MuiInputLabel-root": {
      borderColor: "#fd5660",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      borderColor: "#fd5660",
      borderWidth: "medium",
    },
  },
};
export const dropdownStyle = {};
