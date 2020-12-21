import React, { memo } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Link} from "react-router-dom";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const ListUnits = () => {
    const classes = useStyles();
    return (
        <Box className={classes.boxPara}>
            <Box className={classes.boxSearch}>khung search</Box>
            <Box className={classes.boxLists}>
                {
                    listData.map((search,index) =>(
                        <Box key={"U-"+index} className={classes.boxBorder}>                       
                            <Link 
                                className={classes.boxHeaderLink}
                                // href={`#${search.Machihoi}`}
                                to = {{pathname:`/ho-so-chi-hoi/${search.Machihoi}`}}
                            >
                                <Box className={classes.boxName}>
                                    {search.Tenchihoi}
                                </Box>
                            </Link>
                            <Box id={search.Machihoi} style={{marginTop:"10px"}}>
                                <ul className={classes.boxUl}>
                                    {
                                        search.clubs.map((child,index) =>(
                                            <li key={"C-"+index} className={classes.boxLi}>
                                                <Link className={classes.boxLink}
                                                    to = {{
                                                        pathname:`/ho-so-doi-mau/${child.Madoi}`
                                                    }}> {child.Tendoi}
                                                    <Box style={{display: 'flex'}}>
                                                        <ArrowRightIcon/>
                                                    </Box>
                                                </Link>
                                            </li>
                                        ))
                                    }                                               
                                </ul>
                            </Box>
                        </Box>                   
                    ))              
                }
            </Box>
            <Box className={classes.boxAnchor}>

            </Box>
        </Box>
    );
};
const listData = [
    {
        Tenchihoi : "Chi hội Thanh niên vận động hiến máu 06/01",
        Machihoi : "0601",
        clubs : [
            {
                Tendoi : "Đội Máu Trường ĐH Công nghệ - Đại học Quốc gia Hà Nội",
                Madoi: 'introdule'
            },
            {
                Tendoi : "Đội Máu Học viện Báo chí & Tuyên truyền",
                Madoi: 'history'
            },
            {
                Tendoi : "Đội Máu Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội",
                Madoi: 'teamleader'
            },
            {
                Tendoi : "Đội Máu Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
                Madoi: 'searchunit'
            },
            {
                Tendoi : "Đội Máu Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
                Madoi: 'searchunit'
            },
            {
                Tendoi : "Đội Máu Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
                Madoi: 'searchunit'
            },
            {
                Tendoi : "Đội Máu Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
                Madoi: 'searchunit'
            },
        ]
    },
    {
        Tenchihoi : "Chi hội Thanh niên vận động hiến máu 06/01",
        Machihoi : "0601",
        clubs : [
            {
                Tendoi : "Đội Máu Trường ĐH Công nghệ - Đại học Quốc gia Hà Nội",
                Madoi: 'introdule'
            },
            {
                Tendoi : "Đội Máu Học viện Báo chí & Tuyên truyền",
                Madoi: 'history'
            },
            {
                Tendoi : "Đội Máu Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội",
                Madoi: 'teamleader'
            },
            {
                Tendoi : "Đội Máu Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
                Madoi: 'searchunit'
            },
            {
                Tendoi : "Đội Máu Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
                Madoi: 'searchunit'
            },
            {
                Tendoi : "Đội Máu Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
                Madoi: 'searchunit'
            },
            {
                Tendoi : "Đội Máu Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
                Madoi: 'searchunit'
            },
        ]
    },
    {
        Tenchihoi: "Chi hội Thanh niên vận động hiến máu 06/01",
        Machihoi : "0601",
        clubs : [
            {
                Tendoi : "Đội Máu Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
                Madoi: 'searchunit'
            },
        ]
    }
]
const useStyles = makeStyles({
    boxPara: {
        margin: "0 auto",
        width: "1100px",
        '@media (min-width:993px) and (max-width:1200px)':{
            width: "96%",
        },
        '@media (max-width:992px)':{
            width: "100%",
        },
        display: "flex",
        flexWrap: "wrap",
    },
    boxSearch: {
        width: "100%",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 6px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "8px",
        padding: "20px",
        '@media (max-width:992px)':{
            borderRadius: "0px"
        },
    },
    boxLists: {
        width: "calc(70% - 20px)",
        marginRight: "20px",
        '@media (max-width:992px)':{
            width: "100%",
            marginRight: "0px"
        },
    },
    boxAnchor: {
        width: "30%",
        height: "500px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 6px 0 rgba(0, 0, 0, 0.19)",
        marginTop: "20px",
        // position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        '@media (max-width:992px)':{
            display: "none",
        },
    },
    boxBorder: {
        borderRadius: "8px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 6px 0 rgba(0, 0, 0, 0.19)",
        marginTop: "20px",
        '@media (max-width:992px)':{
            borderRadius: "0px"
        },
    },
    boxBody: {
        borderTop: "none",
        marginTop: "20px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 6px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "8px",
        '@media (max-width:992px)':{
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
        '@media (max-width:992px)':{
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
    boxHeaderLink: {
        backgroundColor: "#ffffff",
        height: "60px",
        width: "calc(100% - 40px)",
        margin: "0px 20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column-reverse",
        color: "#ff4d4d",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        "&:hover": {
            color: "#ff4d4d"
        },
        '@media (max-width:992px)':{
            margin: "0px 10px",
            width: "calc(100% - 20px)",
        },
    },
    boxName: {
        fontSize: "15px",
        width: "100%",
        display: "flex",
        alignItems: "center"
    },
    boxUl: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "0",
        marginBottom: "0",
    },
    boxLi: {
        width: "100%",
        listStyleType: "none",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderRadius: "8px",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
        }
    },
    boxLink: {
        padding: "0px 20px",
        fontSize: "14px",
        color: "#2c3e50",
        textDecoration: "none",
        width: "100%",
        height: "45px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "&:hover": {
            color: "#2c3e50",
            textDecoration: "none",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderRadius: "8px",
        }
    }
});
export default memo(ListUnits);