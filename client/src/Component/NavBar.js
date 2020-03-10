import React, { useState } from 'react';
import '../css/style.css'
import '../css/NavBar.css'
import { navs } from '../nav'
import { getUser, logout, checkAuth } from '../api/auth/auth';

const NavBar = () => {

    const roles = getUser().then((value) => {
        if (checkAuth()) {
            var para = document.getElementById("tracuu")
            if (para) {
                if (value.role === 'member') {
                    para.style.display = 'none'
                } else {
                    para.style.display = 'block'
                }
            }
        }
    })

    // const [Icon, setIcon] = useState(false)
    const setChangeIcon = (element) => {
        var para = document.getElementById(element);
        if (para) {
            if (para.classList.item(1) === "fa-angle-down") {
                console.log(para.classList.item(1));
                para.classList.remove("fa-angle-down");
                para.classList.toggle("fa-angle-up");
            }
            else if (para.classList.item(1) === "fa-angle-up") {
                para.classList.remove("fa-angle-up");
                para.classList.toggle("fa-angle-down");
                console.log(para.classList);
            }
        }
    }
    const style = {
        fontSize: '24px',
        lineHeight: '35px',
        color: 'white'
    }
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button className="sideBarOpen sideBar" onClick={() => setOpen(true)} >&#9776;</button>
            <div className="sticky w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style={{ width: 235, zIndex: 12, display: open ? "block" : "none" }} id="mySidebar" >
                <button className="sideBarClose sideBar" onClick={() => setOpen(false) && roles}>Close X</button>
                <div className="logoPageBlood">
                </div>
                {
                    navs.map(nav => (
                        <div>
                            <div className="panel-heading drop-menu">
                                <a className="stickyA" data-toggle="collapse" href={nav.Id1} onClick={() => setChangeIcon(nav.IconID)}>
                                    {nav.name}
                                    <div className="items-i"><i id={nav.IconID} className='fa fa-angle-down' style={style}></i></div>
                                </a>
                            </div>
                            <div id={nav.Id2} className="panel-collapse collapse">
                                <ul className="list-group">
                                    {
                                        nav.children.map(x => (
                                            <li id={x.id} className="list-group-item"><a className="list-items" href={x.href}>{x.name}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
                <div>
                    <div className="panel-heading drop-menu">
                        <a className="stickyA" data-toggle="collapse" href="#collapse7" onClick={() => setChangeIcon('icon7')}>
                            QUẢN LÝ TÀI KHOẢN
                            <div className="items-i"><i id='icon7' className='fa fa-angle-down' style={style}  ></i></div>
                        </a>
                    </div>
                    <div id="collapse7" className="panel-collapse collapse">
                        <ul className="list-group">
                            <li className="list-group-item"><a className="doiMK" onClick={logout}>Đăng xuất</a></li>
                            <li className="list-group-item"><a className="doiMK" data-toggle="modal" data-target="#modalMK">Đổi mật khẩu</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
