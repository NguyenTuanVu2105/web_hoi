import React, { memo } from "react";
import { Box, makeStyles } from "@material-ui/core";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const OrganizationalRecords = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.boxPara}>
            {
                listData.map((label, index) =>(
                    <Box 
                        key={"OR"+index}
                        className = {classes.boxBody}
                    >
                        <Box className ={classes.boxHeader}>
                            <span className={classes.boxSpan}>
                                {label.name}
                            </span>
                        </Box>
                        {
                            label.child.map((x,index)=>(
                                <a
                                    key = {"OR-C"+index}
                                    id={x.id}
                                    href={x.href}
                                    className ={classes.boxContent}
                                >
                                    <ArrowRightIcon/>
                                    <Box>
                                        {x.name}
                                    </Box>
                                </a>
                            ))
                        }                        
                    </Box>
                ))
            }
        </Box>
    );
};
const listData = [
    {
        name : "HỘI MÁU",
        child : [
            {
                name : "Giới thiệu về Hội",
                href:'/gioi-thieu-ve-hoi',
                id: 'introdule'
            },
            {
                name : "Lịch sử Hội",
                href:'/lich-su-hoi',
                id: 'history'
            },
            {
                name : "Lãnh đạo qua các thời kỳ",
                href : "/lanh-dao-qua-cac-thoi-ky",
                id: 'teamleader'
            },
        ]
    },
    {
        name: "ĐƠN VỊ TRỰC THUỘC",
        child : [
            {
                name : "Hồ sơ đơn vị",
                href : "/ho-so-don-vi",
                id: 'searchunit'
            },
        ]
    }
]
const useStyles = makeStyles({
    boxPara: {
        margin: "0 auto",
        width: "1100px",
        ['@media (min-width:993px) and (max-width:1200px)']:{
            width: "96%",
        },
        ['@media (max-width:992px)']:{
            width: "100%",
        },
    },
    boxBody: {
        borderTop: "none",
        marginTop: "20px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 6px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "8px",
        ['@media (max-width:992px)']:{
            borderRadius: "0px"
        },
    },
    boxHeader: {
        backgroundColor: "#ff4d4d",
        height: "30px",
        display: "flex",
        alignItems: "center",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        ['@media (max-width:992px)']:{
            borderRadius: "0px"
        },
    },
    boxSpan: {
        color:"white",
        marginLeft:15,
        fontWeight:600,
        fontSize:18
    },
    boxContent: {
        paddingLeft: "25px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        transition: ".3s",
        "&:hover": {
            backgroundColor: "rgb(0 0 0 / 0.05)",
            borderRadius: "4px",
            color: "#212529",
            textDecoration: "none",
        }
    },
});
export default memo(OrganizationalRecords);