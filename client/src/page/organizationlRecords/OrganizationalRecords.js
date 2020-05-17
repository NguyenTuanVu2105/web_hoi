import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../../context/HomepageContext";
import {OrganizationalRecordsList} from './component/OrganizationalRecordsList'
import { getUser, checkAuth} from '../../api/auth/auth'
import '../organizationlRecords/style/OrganizationalRecords.scss'
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
                OrganizationalRecordsList.map((label,index) =>(
                    <div key={"OR"+index} className = "divBody">
                        <div  className = "header"><h4>{label.name}</h4></div>
                        {
                            label.child.map((x,index)=>(
                                <div key = {"OR-C"+index} id={x.id} className = "tagA">
                                    <i className='fas fa-angle-double-right' style={{fontSize:'15px',color:"#ff4d4d",marginRight:'10px'}}/>
                                    <a className="tag-a-OR" href={x.href}>{x.name}</a>
                                </div>
                            ))
                        }                        
                    </div>
                ))
            }
        </div>
    )
}
export default OrganizationalRecords;