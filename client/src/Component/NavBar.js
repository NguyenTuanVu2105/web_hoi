
import React, { useState } from 'react';
import './style.css'
import {navs} from '../nav'

const NavBar = () => {
    const [Icon, setIcon] = useState('fa fa-angle-down')
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
                        <a className="stickyA" data-toggle="collapse" href={nav.Id1}>
                            {nav.name}
                            <div className="items-i"><i className={Icon} style={style} onClick={()=> setIcon(Icon =>{
                                console.log(Icon)
                                if (Icon == 'fa fa-angle-down'){
                                    Icon += 'fa fa-angle-up'
                                    Icon -= 'fa fa-angle-down'
                                    console.log(Icon)
                                    return Icon
                                }
                                if (Icon == 'fa fa-angle-up'){
                                    Icon = 'fa fa-angle-down'
                                    return Icon
                                }
                            })} ></i></div>
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
        </div>
    )
}

export default NavBar;