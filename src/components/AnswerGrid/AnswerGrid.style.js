import * as colors from "../../App/standard-colors";

export const nonSelectedButtonStyle = {
  backgroundColor: colors.lightBeige,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: colors.lightBeige,
    color: "black",
    fontWeight: "bold",
  },
};

export const selectedButtonStyle = {
  backgroundColor: colors.pink,
  color: "#FFF",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: colors.pink,
    color: "#FFF",
    fontWeight: "bold",
  },
};
