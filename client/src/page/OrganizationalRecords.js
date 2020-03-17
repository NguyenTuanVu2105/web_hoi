import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
import {OrganizationalRecordsList} from '../Component/OrganizationalRecordsList'
import '../css/OrganizationalRecords.css'
import { getUser, checkAuth} from '../api/auth/auth'

const OrganizationalRecords = () =>{

    // const roles = getUser().then((value) => {
    //     if (checkAuth()) {
    //         var para = document.getElementById('addunit')
    //         if (value.role === 'admin' || value.role === 'hoitruong') {
    //             para.style.display='block'
    //         } else {
    //             para.style.display='none'
    //         }
    //     }
    // })

    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức'
        })
    }, [])

    return(
        <div className = "para">
            {
                OrganizationalRecordsList.map(label =>(
                    <div key={label.key} className = "divBody">
                        <div  className = "header"><h4>{label.name}</h4></div>
                        {
                            label.child.map(x=>(
                                <div key = {x.key} id={x.id} className = "tagA"><i className='fas fa-angle-double-right' style={{fontSize:'15px',color:"red",marginRight:'10px'}}></i><a href={x.href}>{x.name}</a></div>
                            ))
                        }                        
                    </div>
                ))
            }
        </div>
    )
}
export default OrganizationalRecords;