import React, { memo } from "react";
import MainLayout from "../../layouts/MainLayout";
import { makeStyles } from "@material-ui/core";

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <MainLayout>
      <h1 className={classes.root}>This is dashboard page</h1>
    </MainLayout>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.mainRed,
  },
}));

export default memo(Dashboard);
