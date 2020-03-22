import '../css/SearchUnit.css'
import React, {Component, useContext, useEffect, useState} from 'react'
import HomepageContext from "../context/HomepageContext";
import { getUnitAll } from '../api/base/unit'
import { Select } from 'antd'
import { getClubAll } from '../api/base/admin'
import { BrowserRouter as Router, Route, Link} from "react-router-dom"

const { Option } = Select
const SearchUnit = () =>{
    const {nameMap, setNameMap, setLoading} = useContext(HomepageContext)
    const [unit, setUnit] = useState([])
    const fetchData = async () => {
        setLoading(true)
        const result = await getUnitAll()
        setLoading(false)
        if (result.data.success) {
            setUnit(result.data.data)
        }
    }

    const [club, setClub] = useState([])
    const fetchDataClub = async () => {
        setLoading(true)
        const result = await getClubAll()
        setLoading(false)
        if (result.data.success) {
          setClub(result.data.data)
        }
    }
    useEffect(() => {
        fetchData()
        fetchDataClub()
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
                unit.map((search,index) =>(
                    <div key={"U-"+index}>                       
                        <a className="panel-heading list-group-blood " data-toggle="collapse" href={`#${search.Machihoi}`}>
                            <div className="AFM">{search.Tenchihoi} 
                                <i id="icon10" className="fa fa-angle-down" style={{fontSize:'25px'}}/>
                            </div>
                        </a>
                        <div id={search.Machihoi} className="panel-collapse collapse">
                            <ul className="list-group">
                                {
                                    search.clubs.map((child,index) =>(
                                        <li key={"C-"+index} className="list-group-blood-item">
                                            <div style={{width:"100%"}}>
                                                <Link className="list-items-a"  
                                                    to = {{
                                                        pathname:`/AddUnit/${child.Madoi}`
                                                    }}> {child.Tendoi}
                                                    <div style={{display: 'flex', flexDirection:'column-reverse',justifyContent: 'center'}}>
                                                        <i className="fa fa-caret-right" style={{fontSize :"20px"}}/>
                                                    </div>
                                                </Link>
                                            </div>
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

