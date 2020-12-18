import React, { memo } from "react";
import MainLayout from "../../layouts/MainLayout";
import {Box, makeStyles } from "@material-ui/core";
import {
  ButtonBox,
  MenuBar
} from "../../components"
const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <MenuBar/>
      <MainLayout>
      <h1 className={classes.root}>This is dashboard page</h1>
      <ButtonBox nameButton="click" />
      
      </MainLayout>
    </Box>
    
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.mainRed,
  },
}));

export default memo(Dashboard);
