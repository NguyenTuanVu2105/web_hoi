
import React, { useState } from 'react';
import './style.css'
import {navs} from '../nav'

const NavBar = () => {

    const [Icon, setIcon] = useState(false)
    const style = {
        fontSize : '25px',
        paddingTop: '45%',
        color: 'white'
    }
    console.log(Icon)
    return (
        <div className="sticky" >
            {
                navs.map(nav => (
                <div>
                    <div className="panel-heading drop-menu">
                        <a className="stickyA" data-toggle="collapse" href={nav.Id1} onClick={()=> setIcon(!Icon)}>
                            {nav.name}
                            <div className="items-i"><i className={Icon?'fa fa-angle-up':'fa fa-angle-down'} style={style}  ></i></div>
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