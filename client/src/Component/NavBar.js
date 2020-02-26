
import React, { useState } from 'react';
import './style.css'
import '../css/NavBar.css'
import { navs } from '../nav'
import { getUser, logout, checkAuth} from '../api/auth/auth';

const NavBar = () => {

    const roles = getUser().then((value) => {
        if (checkAuth()) {
            var para = document.getElementById("tracuu")
            if (value.role === 'member') {
                para.style.display='none'
            } else {
                para.style.display='block'
            }
        }
    })

    // const [Icon, setIcon] = useState(false)
    const setChangeIcon = (element) => {
        var para = document.getElementById(element);
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
    const style = {
        fontSize: '24px',
        lineHeight: '35px',
        color: 'white'
    }

    const navbarClose = () => {
        var para = document.getElementById("mySidebar");
        para.style.display="none";
    }

    const navbarOpen = () => {
        var para = document.getElementById("mySidebar");
        para.style.display="block";
    }
    
    return (
        <div>
            <button className="sideBarOpen sideBar" onClick={()=>navbarOpen()} >&#9776;</button>
            <div className="sticky w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style={{ width: 235 }} id="mySidebar" >
                <button className="sideBarClose sideBar" onClick={()=>navbarClose()&&roles}>Close X</button>
                <div className="logoPageBlood">
                </div>
                {
                    navs.map(nav => (
                        <div>
                            <div className="panel-heading drop-menu">
                                <a className="stickyA" data-toggle="collapse" href={nav.Id1} onClick={() => setChangeIcon(nav.IconID)}>
                                    {nav.name}
                                    <div className="items-i"><i id={nav.IconID} className='fa fa-angle-down' style={style}  ></i></div>
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
                <a style={{ borderBottom: '1px solid black', marginLeft:15,marginTop:15}} onClick={logout}>Đăng xuất</a>
            </div>
        </div>

    )
}

export default NavBar;

{/* <a className="stickyA" data-toggle="collapse" href={nav.Id1} onClick={()=> setIcon(!Icon)}>
                            {nav.name}
                            <div className="items-i"><i className={Icon?'fa fa-angle-up':'fa fa-angle-down'} style={style}  ></i></div>
                        </a> */}




                        // return (
                        //     <div className="sticky w3-sidebar w3-collapse w3-white w3-animate-left " >
                        //         {
                        //             navs.map(nav => (
                        //             <div>
                        //                 <div className="panel-heading drop-menu">
                        //                     <a className="stickyA" data-toggle="collapse" href={nav.Id1} onClick={()=> setChangeIcon(nav.IconID)}>
                        //                         {nav.name}
                        //                         <div className="items-i"><i id={nav.IconID} className='fa fa-angle-down' style={style}  ></i></div>
                        //                     </a>

                        //                 </div>
                        //                 <div id={nav.Id2} class="panel-collapse collapse">
                        //                     <ul class="list-group">
                        //                         {
                        //                             nav.children.map(x => (
                        //                                 <li className="list-group-item"><a className="list-items" href={x.href}>{x.name}</a></li>
                        //                             ))
                        //                         }
                        //                     </ul>
                        //                 </div>
                        //             </div>

                        //             ))
                        //         }
                        //         <a style={{borderBottom:'1px solid black'}}>Đăng suất</a>
                        //     </div>
                        // )