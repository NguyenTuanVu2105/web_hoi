import React, { Component } from 'react'
import {SearchUnitList} from '../Component/SearchUnitList'
import '../css/SearchUnit.css'

const SearchUnit = () =>{
    const style = {
        marginLeft : '15px'
    }
    return(
        <div style={style}>
            {
                SearchUnitList.map(unit =>(
                    <div>
                        <div class="panel-heading list-group-blood">
                            <div><a data-toggle="collapse" href={unit.id1} onclick="myFunction('icon10')">{unit.name} <i id="icon10" class="fa fa-angle-down" style={{fontSize:'25px'}}></i></a> </div>
                        </div>
                        <div id={unit.id2} class="panel-collapse collapse">
                            <ul class="list-group">
                                {
                                    unit.child.map(child =>(
                                    <li class="list-group-blood-item"><a class="list-items-a" href="">{child.name}</a></li>
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

export default SearchUnit;