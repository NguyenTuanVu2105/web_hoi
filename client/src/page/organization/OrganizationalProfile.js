import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../../context/HomepageContext";
import {OrganizationalProfilesList} from './contant/OrganizationalProfilesList'
import { getUser, checkAuth} from '../../api/auth/auth'
import './/style/OrganizationalProfile.scss'
const OrganizationalProfile = () =>{

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
            ['/ho-so-to-chuc']: 'Hồ sơ tổ chức'
        })
    }, [])

    return(
        <div className = "para-organizational">
            {
                OrganizationalProfilesList.map((label, index) =>(
                    <div key={"OR"+index} className = "divBody">
                        <div  className = "header"><span style={{color:"white", marginLeft:15,fontWeight:600,fontSize:18}}>{label.name}</span></div>
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
export default OrganizationalProfile;