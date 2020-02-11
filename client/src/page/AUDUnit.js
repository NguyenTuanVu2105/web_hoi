import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { Select } from 'antd';
import { Input } from 'antd';
import '../css/AUDUnit.css'

const AUDUnit = () => {
    const [inputDisabled, setInputDisabled] = useState(false)
    const [inputDisabledH, setInputDisabledH] = useState(true)
    const { nameMap, setNameMap } = useContext(HomepageContext)

    const { Option } = Select;

    const { Search } = Input;

    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/AUDUnit']: 'Thêm, sửa, xóa đơn vị'
        })
    }, [])

    return (
        <div>
            <div className='changeAddUnit'>
                <form>
                    <Select defaultValue="disabled" style={{ width: 100, marginRight: 5, marginLeft: 20 }}>
                        <Option style={{ textAlign: "center" }} value="disabled" disabled>Tùy chọn</Option>
                        <Option style={{ textAlign: "center" }} value="1" onchange={()=>setInputDisabledH(false)}>Hội</Option>
                        <Option style={{ textAlign: "center" }} value="2" onclick={()=>setInputDisabled(false)}>Chi hội</Option>
                        <Option style={{ textAlign: "center" }} value="3" onclick={()=>setInputDisabled(false)}>Đội</Option>
                    </Select>
                    <Search
                        placeholder="Tìm kiếm"
                        onSearch={value => console.log(value)}
                        style={{ width: 200, height: 30, marginRight: 5 }}
                    />                   
                    <button className="buttonDisable" disabled={inputDisabledH}>Sửa</button>
                    <button className="buttonDisable" disabled={inputDisabledH}>Lưu thay đổi</button>
                    <button className="buttonDisable" disabled={inputDisabled}>Thêm mới</button>
                    <button className="buttonDisable" disabled={inputDisabled}>Xóa</button>

                </form>
            </div>
        </div>
    )
}
export default AUDUnit;

// onClick={() => setchangeInput(false)}