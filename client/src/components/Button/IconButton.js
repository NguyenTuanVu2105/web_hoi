import React, { memo } from "react";
import { makeStyles, Button } from "@material-ui/core";

const IconButton = ({ icon, title, onClick, ...props }) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} onClick={onClick} startIcon={icon}>
      {title}
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "unset",
  },
}));

export default memo(IconButton);
