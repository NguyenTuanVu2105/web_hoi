
import {SearchUnitList} from '../Component/SearchUnitList'
import '../css/SearchUnit.css'
import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";

const SearchUnit = () =>{

    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ', 
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/SearchUnit']: 'Hồ sơ đơn vị',
        })
    }, [])
    console.log(nameMap)

    return(
        <div className="para">
            {
                SearchUnitList.map(unit =>(
                    <div>
                        <div class="panel-heading list-group-blood">
                            <a data-toggle="collapse" href={unit.id1} onclick="myFunction('icon10')" style={{fontSize:'23px', width:"100%"}}>{unit.name} <i id="icon10" class="fa fa-angle-down" style={{fontSize:'25px'}}></i></a>
                        </div>
                        <div id={unit.id2} class="panel-collapse collapse">
                            <ul class="list-group">
                                {
                                    unit.child.map(child =>(
                                    <li class="list-group-blood-item">
                                        <div style={{width:"100%"}}><a class="list-items-a" title="hihihii" href={child.href}>{child.name}<i class="fa fa-caret-right" style={{fontSize :"20px", marginTop:"3px"}}></i></a></div>
                                        </li>
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