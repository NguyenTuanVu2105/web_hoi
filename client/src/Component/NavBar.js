
import React, { useState } from 'react';
import './style.css'
import {navs} from '../nav'

const NavBar = () => {

    // const [Icon, setIcon] = useState(false)
    const setChangeIcon = (element) => {
        var para = document.getElementById(element);
        if (para.classList.item(1)==="fa-angle-down") {
            console.log(para.classList.item(1));
            para.classList.remove("fa-angle-down");
            para.classList.toggle("fa-angle-up");
        }
        else if(para.classList.item(1)==="fa-angle-up"){
            para.classList.remove("fa-angle-up");
            para.classList.toggle("fa-angle-down");
            console.log(para.classList);
        }
    }
    const style = {
        fontSize : '25px',
        paddingTop: '45%',
        color: 'white'
    }
    return (
        <div className="sticky" >
            {
                navs.map(nav => (
                <div>
                    <div className="panel-heading drop-menu">
                        <a className="stickyA" data-toggle="collapse" href={nav.Id1} onClick={()=> setChangeIcon(nav.IconID)}>
                            {nav.name}
                            <div className="items-i"><i id={nav.IconID} className='fa fa-angle-down' style={style}  ></i></div>
                        </a>

                    </div>
                    <div id={nav.Id2} class="panel-collapse collapse">
                        <ul class="list-group">
                            {
                                nav.children.map(x => (
                                    <li className="list-group-item"><a className="list-items" href={x.href}>{x.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                    
                ))
            }
            <a style={{borderBottom:'1px solid black'}}>Đăng suất</a>
        </div>
    )
}

export default NavBar;

{/* <a className="stickyA" data-toggle="collapse" href={nav.Id1} onClick={()=> setIcon(!Icon)}>
                            {nav.name}
                            <div className="items-i"><i className={Icon?'fa fa-angle-up':'fa fa-angle-down'} style={style}  ></i></div>
                        </a> */}