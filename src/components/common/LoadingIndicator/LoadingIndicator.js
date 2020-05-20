import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import RestartButton from "../../common/buttons/Button/Button";

const LoadingIndicator = ({
  size,
  style,
  label,
  onRestart,
  titleClassName,
}) => {
  const useStyles = makeStyles((theme) => ({
    root: style,
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={titleClassName}>{label}</h1>
      {!onRestart ? (
        <CircularProgress size={size} />
      ) : (
        <RestartButton
          label="RESTART"
          variant="contained"
          color="primary"
          onClick={onRestart}
        />
      )}
    </div>
  );
};

export default LoadingIndicator;
