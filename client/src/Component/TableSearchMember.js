import React, { useState } from 'react'
import { Select } from 'antd'
import '../css/TableSearchMember.css'
const { Option } = Select
const TableSearchMember = () => {
    function handleChange(value) {
        console.log(`selected ${value}`)
    }
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
                        <Select style={{ width: '24%', height: 30, marginLeft: 5, marginBottom:7 }} defaultValue="Chi Hội" onChange={handleChange}>
                            <Option style={{ textAlign: "center" }} value="Chi Hội">Chi Hội</Option>
                            <Option style={{ textAlign: "center" }} value="2">2</Option>
                            <Option style={{ textAlign: "center" }} value="3">3</Option>
                            <Option style={{ textAlign: "center" }} value="4">4</Option>
                        </Select>
                        <Select placeholder="Tên đội" style={{ width: '24%', height: 30, marginLeft: 5, marginBottom:7 }}>

                        </Select>
                        <Select style={{ width: '15%', height: 30, marginLeft: 5, marginBottom:7 }} defaultValue="Nhóm máu" onChange={handleChange}>
                            <Option style={{ textAlign: "center" }} value="Default">Nhóm máu</Option>
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
                            style={{ width: '24%', height: 30, marginLeft: 5 }}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >

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