import React, { memo, useState } from "react";
import {Box, makeStyles } from "@material-ui/core";
import "./style.scss"
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import MenuItem from "./Components/menuItem"
const MenuBar = () => {
    const classes = useStyles();
    const setChangeIcon = (element) => {
        var para = document.getElementById(element);
        if (para) {
            if (para.classList.item(1) === "fa-caret-down") {
                para.classList.remove("fa-caret-down");
                para.classList.toggle("fa-caret-up");
            }
            else if (para.classList.item(1) === "fa-caret-up") {
                para.classList.remove("fa-caret-up");
                para.classList.toggle("fa-caret-down");
            }
        }
    }
    const style = {
        fontSize: '14px',
        lineHeight: '35px',
        color: 'white'
    }
    const [open, setOpen] = useState(false)
    return (
        <Box className="sidebar-container">
            <button className="sideBarOpen sideBar" onClick={() => setOpen(true)} >&#9776;</button>
            <Box 
                className="sticky w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left"
                style={{ width: 235, zIndex: 12, display: open ? "block" : "none" }}
                id="mySidebar"
            >
                <button
                    className="sideBarClose sideBar"
                    onClick={() => setOpen(false)}
                >
                    Close X
                </button>
                <Box
                    className="logo-page-blood"
                >
                    <img
                        className="logo-image"
                        src="/img/logomau.png"
                        alt="logo"
                    />
                </Box>
                {
                    navs.map((nav,index) => (
                        <Box key={"nav"+index} id={nav.id}>
                            <Box className="panel-heading drop-menu">
                                <a className="stickyA" data-toggle="collapse" href={nav.Id1} onClick={() => setChangeIcon(nav.IconID)}>
                                    {nav.name}
                                    <Box className="items-i"><i id={nav.IconID} className='fa fa-caret-down' style={style}></i></Box>
                                </a>
                            </Box>
                            <Box id={nav.Id2} className="panel-collapse collapse">
                                <ul className="list-group" style={{paddingLeft:"5%", paddingRight:"5%"}}>
                                    {
                                        nav.children.map((x,index) => (
                                            <li key={"navC"+index} id={x.id}  className="list-group-item"><a className="list-items" href={x.href}>{x.name}</a></li>
                                        ))
                                    }
                                </ul>
                            </Box>
                        </Box>
                    ))
                }
                <Box>
                    <Box className="panel-heading drop-menu">
                        <a className="stickyA" data-toggle="collapse" href="#collapse7" onClick={() => setChangeIcon('icon7')}>
                            QUẢN LÝ TÀI KHOẢN
                            <Box className="items-i"><i id='icon7' className='fa fa-caret-down' style={style}  ></i></Box>
                        </a>
                    </Box>
                    <Box id="collapse7" className="panel-collapse collapse">
                        <ul className="list-group" style={{paddingLeft:"5%", paddingRight:"5%"}}>
                            <li className="list-group-item">
                                <a 
                                    className="list-items"
                                    // onClick={logout}
                                    style={{color:"#ff4d4d"}}>ĐĂNG XUẤT</a>
                                </li>
                            <li className="list-group-item"><a className="list-items" data-toggle="modal" data-target="#modalMK"  style={{color:"#ff4d4d"}}>ĐỔI MẬT KHẨU</a></li>
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles({

});
const navs = [
    {
        Id1: "#collapse1",
        Id2: "collapse1",
        name: "HỒ SƠ TỔ CHỨC",   
        IconID: 'icon1',     
        children: [
            {
                // id: "1",
                name: "HỒ SƠ TỔ CHỨC",
                href : "/ho-so-to-chuc",
            }
        ]
    },
    {
        Id1: "#collapse2",
        Id2: "collapse2",
        name: "HỒ SƠ THÀNH VIÊN",
        IconID: 'icon2', 
        children: [
            {
                // id: "hoso",
                name: "HỒ SƠ CÁ NHÂN",
                href: "/ho-so-ca-nhan"
            }, 
            {
                // id: "hoctap",
                name: "HỌC TẬP VÀ HOẠT ĐỘNG",
                href:"/hoc-tap-va-hoat-dong"
            }
        ]
    },
    {
        Id1: "#collapse3",
        Id2: "collapse3",
        name: "ĐÁNH GIÁ NĂNG LỰC",
        IconID: 'icon3', 
        children: [
            {
                // id: "1",
                name: "KIỂM TRA",
                href:"/kiem-tra-danh-gia"
            },

        ]
    },
    // {
    //     Id1: "#collapse4",
    //     Id2: "collapse4",
    //     name: "TỔ CHỨC SỰ KIỆN",
    //     IconID: 'icon4', 
    //     children: [
    //         {
    //             // id: "1",
    //             name: ""
    //         },

    //     ]
    // },
    // {
    //     Id1: "#collapse5",
    //     Id2: "collapse5",
    //     name: "HỌC TẬP VÀ VIỆC LÀM",
    //     IconID: 'icon5', 
    //     children: [
    //         {
    //             // id: "1",
    //             name: ""
    //         },

    //     ]
    // },
    // {
    //     Id1: "#collapse6",
    //     Id2: "collapse6",
    //     name: "Ý TƯỞNG VÀ GÓP Ý",
    //     IconID: 'icon6', 
    //     children: [
    //         {
    //             // id: "1",
    //             name: ""
    //         },

    //     ]
    // },
    {
        Id1: "#collapse8",
        Id2: "collapse8",
        id: "admin",
        name: "ADMIN",
        IconID: 'icon8', 
        children: [
            {
                // id: "1",
                id: "tracuu",
                name: "TRA CỨU THÀNH VIÊN",
                href: "/tra-cuu-thanh-vien"
            },
            {
                // id: "2",
                id: "themdonvi",
                name: "THÊM ĐƠN VỊ",
                href: '/them-don-vi'
            },
            {
                // id: "3",
                id: "quanlybackground",
                name: "THAY ĐỔI BACKGROUND",
                href: '/thay-doi-background'
            },
            {
                // id: "3",
                id: "quanlybackground",
                name: "QUẢN LÝ ĐỀ THI",
                href: '/quan-ly-de-thi'
            }
        ]
    },
]
export default memo(MenuBar);