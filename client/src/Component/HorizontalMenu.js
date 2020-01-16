import React, { Component } from 'react'
import '../css/HorizontalMenu.css'
import {menuChild} from '../Component/MenuChild'

const HorizontalMenu = () => {
    const style = {
        height : '40px',
        width : '100%',
        border: '1px solid red',
    }
    const menu = {menuChild}
    let className = 'styleA';
    if(menu.name==false){
        className += ' displayVisible';
    }

    return(
        <div style = {style}>
            <nav>
                <ul>
                    {
                        menuChild.map(menu =>(
                            <li><a href='' className='displayVisible'>{menu.name}<i class="fa fa-angle-double-right" style={{fontSize:'18px'}} /></a></li>
                        ))                      
                    }
                </ul>
            </nav>
        </div>
    )
}

export default HorizontalMenu;