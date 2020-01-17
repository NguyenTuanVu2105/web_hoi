import React, { Component } from 'react'
import './style.css'
import {navs} from '../nav'

const NavBar = () => {
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
                        <a class="" data-toggle="collapse" href={nav.Id1}>
                            {nav.name}
                            <div className="items-i"><i className="fa fa-angle-down" style={style}></i></div>
                        </a>

                    </div>
                    <div id={nav.Id2} class="panel-collapse collapse">
                        <ul class="list-group">
                            {
                                nav.children.map(x => (
                            <li className="list-group-item"><a className="list-items" href="">{x.name}</a></li>
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