import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
import {OrganizationalRecordsList} from '../Component/OrganizationalRecordsList'
import '../css/OrganizationalRecords.css'

const OrganizationalRecords = () =>{

    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            '': 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức'
        })
    }, [])

    return(
        <div className = "para">
            {
                OrganizationalRecordsList.map(label =>(
                    <div className = "divBody">
                        <div className = "header"><h4>{label.name}</h4></div>
                        {
                            label.child.map(x=>(
                                <div className = "tagA"><i class='fas fa-angle-double-right' style={{fontSize:'15px',color:"red",marginRight:'10px'}}></i><a>{x.name}</a></div>
                            ))
                        }                        
                    </div>
                ))
            }
        </div>
    )
}
export default OrganizationalRecords;