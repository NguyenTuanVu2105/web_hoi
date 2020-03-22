import React, { useState, useEffect } from 'react'
import { Select } from 'antd'
import '../css/TableSearchMember.css'
import { getClubAll } from '../api/base/admin'
import {regionList} from '../Component/regionList'
import { getUnitAll } from '../api/base/unit'
const TableSearchMember = () => {
    const { Option } = Select
    const [club, setClub] = useState([])
    function handleChange(value) {
        console.log(`selected ${value}`)
    }
    const fetchDataClub = async () => {
        const result = await getClubAll()
        if (result.data.success) {
          setClub(result.data.data)
        }
      }
      const [unit, setUnit] = useState([])
    const fetchData = async () => {
        const result = await getUnitAll()
        if (result.data.success) {
            setUnit(result.data.data)
        }
    }
    useEffect(() => {
        fetchData()
        fetchDataClub()
        
    }, [])
    const [open, setOpen] = useState(false)
    return (
        <div className="div1">
            <button className="searchOC" style={{ display: open ? "none" : 'block' }} onClick={() => setOpen(true)} style={{}}>Tìm kiếm >>></button>
            <div style={{ display: open ? "block" : 'none' }} className=" row formSearch">
                <div className="divA">
                    <a className="tagA" onClick={() => setOpen(false)}>X</a>
                </div>

                <form className='menuSearch'>
                    <div>
                        <Select
                            showSearch
                            placeholder="Họ và tên..."
                            style={{ width: '24%', height: 30, marginLeft: 5, marginBottom:7 }}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >

                        </Select>
                        <Select placeholder="Tên Chi Hội" style={{ width: '24%', height: 30, marginLeft: 5, marginBottom:7 }}>
                            {unit.map(unit => (
                                <Option style={{ textAlign: "center" }} key={unit.id}>{unit.Tenchihoi}</Option>
                            ))}
                        </Select>
                        <Select placeholder="Tên đội" style={{ width: '24%', height: 30, marginLeft: 5, marginBottom:7 }}>
                            {club.map(club => (
                                <Option style={{ textAlign: "center" }} key={club.id}>{club.Tendoi}</Option>
                            ))}
                        </Select>
                        <Select style={{ width: '15%', height: 30, marginLeft: 5, marginBottom:7 }} defaultValue="default" onChange={handleChange}>
                            <Option style={{ textAlign: "center" }} value="default">Nhóm máu</Option>
                            <Option style={{ textAlign: "center" }} value="O">O</Option>
                            <Option style={{ textAlign: "center" }} value="A">A</Option>
                            <Option style={{ textAlign: "center" }} value="B">B</Option>
                            <Option style={{ textAlign: "center" }} value="AB">AB</Option>
                        </Select>
                    </div>
                    <div>
                        {/* ======que quan====== */}
                        <Select
                            showSearch
                            placeholder="Quê quán"
                            style={{ width: '24%', height: 30, marginLeft: 5, textAlign:"center" }}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {regionList.map((region) => (
                                <Option style={{ textAlign: "center" }} key={region.name} >{region.name}</Option>
                            ))}

                        </Select>

                        {/* ======trường====== */}
                        <Select
                            showSearch
                            placeholder="Trường"
                            style={{ width: '24%', height: 30, marginLeft: 5 }}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >

                        </Select>

                        {/* ======Năm sinh====== */}
                        <Select
                            showSearch
                            placeholder="Năm sinh"
                            style={{ width: '24%', height: 30, marginLeft: 5 }}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >

                        </Select>

                        {/* ======họ và tên====== */}

                        <button className='buttonSearch'><i className="fa fa-search"></i></button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default TableSearchMember;