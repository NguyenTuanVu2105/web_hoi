import React, { memo } from "react";
import { Button, makeStyles } from "@material-ui/core";

const ButtonBox = ({ className, nameButton, onClick, typeButton }) => {
  const classes = useStyles();
  return (
    <Button
      className={`${classes.root} ${className}`}
      onClick={onClick}
      type={typeButton}
    >
      {nameButton}
    </Button>
  );
};

const useStyles = makeStyles({
    root: {
        backgroundColor: "#2c3e50",
        border: 0,
        borderRadius: 4,
        color: "white",
        height: "35px",
        width: "110px",
        fontWeight: 600,
        padding: "0",
        boxShadow: "0 1px 3px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19)",
        "&:hover": {
            backgroundColor: "#ff4d4d",
        },
    },
  });
export default memo(ButtonBox);