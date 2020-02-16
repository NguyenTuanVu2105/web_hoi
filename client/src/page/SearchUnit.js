import {SearchUnitList} from '../Component/SearchUnitList'
import '../css/SearchUnit.css'
import React, {Component, useContext, useEffect, useState} from 'react'
import HomepageContext from "../context/HomepageContext";
import { getUnitAll } from '../api/base/unit'

const SearchUnit = () =>{
    const {nameMap, setNameMap} = useContext(HomepageContext)
    const [unit, setUnit] = useState([])
    const fetchData = async () => {
        const result = await getUnitAll()
        if (result.success) {
            setUnit(result.data.data)
        }
    }


    // const [club, setClub] = useState([])
    // const fetchDataClub = async () => {
    //     const result = await getClubAll()
    //     if (result.success) {
    //       setClub(result.data.data)
    //     }
    //   }


    useEffect(() => {
        // fetchDataClub()
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ', 
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/SearchUnit']: 'Hồ sơ đơn vị',
        })
    }, [])

    console.log(unit)


    return(
        <div className="para">
            {
                unit.map(search =>(
                    <div>
                        {/* <Select defaultValue="Tên đội" style={{ width: '100%' }}>
                {club.map(club => (
                  <Option style={{ textAlign: "center" }} key={club.id}>{club.Tendoi}</Option>
                ))}
              </Select> */}
                        <div class="panel-heading list-group-blood">
                            <a className="AFM" data-toggle="collapse" href={`#${search.Machihoi}`}>{search.Tenchihoi} 
                                <i id="icon10" class="fa fa-angle-down" style={{fontSize:'25px'}}/>
                            </a>
                        </div>
                        <div id={search.Machihoi} class="panel-collapse collapse">
                            <ul class="list-group">
                                {
                                    search.clubs.map(child =>(
                                    <li class="list-group-blood-item">
                                        <div style={{width:"100%"}}><a class="list-items-a"  href="/AddUnit">{child.Tendoi}
                                        <div style={{display: 'flex', flexDirection:'column-reverse',justifyContent: 'center'}}>
                                            <i class="fa fa-caret-right" style={{fontSize :"20px"}}/>
                                        </div>
                                        
                                        </a></div>
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