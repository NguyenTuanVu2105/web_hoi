import React, {useState, memo } from "react";
import { Box, makeStyles } from "@material-ui/core";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
const MenuItem = ({ className, nameButton, onClick, typeButton }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (
    <Box className={classes.boxTitle}>
        <Box className={classes.boxIcons}>
            <SettingsOutlinedIcon className={classes.icons}/>
        </Box>
        <Box className={`${classes.content} mediaConten`} style={{fontSize:"12px"}}>QUẢN LÝ TÀI KHOẢN
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
        </Box>
        
    </Box>
  );
};

const useStyles = makeStyles({
    boxTitle: {
        display: "inline-flex",
        textTransform: "uppercase",
        cursor: "pointer",
        position: "relative",
    },
    boxImage: {
        height: "50px",
        width: "50px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        marginLeft: "15px",
        position: "relative",
        marginRight: "15px",
        zIndex: "100"
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "50%"
    },
    content: {
        margin: "0",
        lineHeight: "50px",
        position: "relative",
        display: "block",
        height: "auto",
        whiteSpace: "nowrap",
        transition: ".3s ease 0s",
        color: "#2c3e50"
    },
    decoration: {
        margin: "15px",
        width: "calc(100% - 30px)",
        height: "1px",
        // backgroundColor: "hsla(0,0%,100%,.5)"
        backgroundColor: "#2c3e50"
    },
    boxIcons: {
        height: "50px",
        width: "50px",
        marginLeft: "15px",
        position: "relative",
        marginRight: "15px",
        zIndex: "100",
        display: "flex",
        justifyContent: "center"
    },
    icons: {
        fontSize: "2rem",
        color: "#2c3e50",
    }
});
export default memo(MenuItem);