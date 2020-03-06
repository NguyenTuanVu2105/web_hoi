import {SearchUnitList} from '../Component/SearchUnitList'
import '../css/SearchUnit.css'
import React, {Component, useContext, useEffect, useState} from 'react'
import HomepageContext from "../context/HomepageContext";
import { getUnitAll } from '../api/base/unit'
import { Select } from 'antd'
import { getClubAll } from '../api/base/admin'


const { Option } = Select
const SearchUnit = () =>{
    const {nameMap, setNameMap} = useContext(HomepageContext)
    const [unit, setUnit] = useState([])
    const fetchData = async () => {
        const result = await getUnitAll()
        if (result.success) {
            setUnit(result.data.data)
        }
    }

    const [club, setClub] = useState([])
    const fetchDataClub = async () => {
        const result = await getClubAll()
        if (result.success) {
          setClub(result.data.data)
        }
    }
    useEffect(() => {
        fetchDataClub()
        
    }, [])
    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ', 
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/SearchUnit']: 'Hồ sơ đơn vị',
        })
    }, [])
    return(
        <div className="para">
            <Select
              showSearch
              placeholder="Tên đội..."
              style={{ width: '40%', height: 30, marginLeft: 5 }}
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {club.map(club => (
                <Option style={{ textAlign: "center" }} key={club.id}>{club.Tendoi}</Option>
              ))}
            </Select>
            {
                unit.map(search =>(
                    <div>
                        
                        <a class="panel-heading list-group-blood " data-toggle="collapse" href={`#${search.Machihoi}`}>
                            <div className="AFM">{search.Tenchihoi} 
                                <i id="icon10" class="fa fa-angle-down" style={{fontSize:'25px'}}/>
                            </div>
                        </a>
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


{/* <div class="panel-heading list-group-blood">
                            <a className="AFM" data-toggle="collapse" href={`#${search.Machihoi}`}>{search.Tenchihoi} 
                                <i id="icon10" class="fa fa-angle-down" style={{fontSize:'25px'}}/>
                            </a>
                        </div> */}