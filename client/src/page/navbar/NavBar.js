import React, { useState } from 'react';
// import '../css/style.scss'
import '../navbar/style/NavBar.scss'
import { navs } from './component/nav'
import { getUser, logout, checkAuth } from '../../api/auth/auth';

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
                para.classList.remove("fa-angle-down");
                para.classList.toggle("fa-angle-up");
            }
            else if (para.classList.item(1) === "fa-angle-up") {
                para.classList.remove("fa-angle-up");
                para.classList.toggle("fa-angle-down");
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
        <div className="sidebar-container">
            <button className="sideBarOpen sideBar" onClick={() => setOpen(true)} >&#9776;</button>
            <div className="sticky w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style={{ width: 235, zIndex: 12, display: open ? "block" : "none" }} id="mySidebar" >
                <button className="sideBarClose sideBar" onClick={() => setOpen(false) && roles}>Close X</button>
                <div className="logo-page-blood">
                    <img className="logo-image" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/p960x960/79601448_2757775170941952_3792868997574164480_o.png?_nc_cat=1&_nc_ohc=fgTTjiQRwO8AX_EyHit&_nc_ht=scontent.fhan3-1.fna&oh=0fc38a83e734acec907d4d9d8784b797&oe=5EBB1865"></img>
                </div>
                {
                    navs.map((nav,index) => (
                        <div key={"nav"+index}>
                            <div className="panel-heading drop-menu">
                                <a className="stickyA" data-toggle="collapse" href={nav.Id1} onClick={() => setChangeIcon(nav.IconID)}>
                                    {nav.name}
                                    <div className="items-i"><i id={nav.IconID} className='fa fa-angle-down' style={style}></i></div>
                                </a>
                            </div>
                            <div id={nav.Id2} className="panel-collapse collapse">
                                <ul className="list-group">
                                    {
                                        nav.children.map((x,index) => (
                                            <li key={"navC"+index}  className="list-group-item"><a className="list-items" href={x.href}>{x.name}</a></li>
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
                            <li className="list-group-item"><a className="doiMK" onClick={logout}>ĐĂNG XUẤT</a></li>
                            <li className="list-group-item"><a className="doiMK" data-toggle="modal" data-target="#modalMK">ĐỔI MẬT KHẨU</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;