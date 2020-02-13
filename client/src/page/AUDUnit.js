import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { AddUnitChild, ItemUnit } from '../Component/AddUnitChild'

import { Select } from 'antd';
import { Input } from 'antd';
import '../css/AUDUnit.css'

const AUDUnit = () => {
    const [changeInput, setchangeInput] = useState(true)
    const [changeButton, setchangeButton] = useState(false)
    const [inputDisabledH, setInputDisabledH] = useState(true)
    const { nameMap, setNameMap } = useContext(HomepageContext)

    const { Option } = Select;

    const { Search } = Input;

    const handleDe = ()=>{
        window.confirm('Bạn có chắc muốn xóa!');
    }
    const handleAd = ()=>{
        window.confirm('Bạn có chắc muốn Thêm mới!');
    }

    const handleUp = ()=>{
        window.confirm('Bạn có chắc muốn lưu thay đổi!');
        setchangeInput(true)
    }
    const handleCa = ()=>{
        window.confirm('Bạn có chắc muốn Hủy thay đổi!');
        setchangeInput(true)
    }

    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/AUDUnit']: 'Thêm, sửa, xóa đơn vị'
        })
    }, [])

    return (
        <div>
            <div className=' row changeAUDUnit'>
                <form className="searchForMobile">
                    <Search
                        placeholder="Tìm kiếm"
                        onSearch={value => console.log(value)}
                        style={{ height: 30, marginRight: 5 }}
                    />
                </form>
                <div className="ButtonForMobile">
                    <button className="buttonD" onClick={() => setchangeButton(true)}>Hội</button>
                    <button className="buttonD" onClick={() => setchangeButton(false)}>Chi Hội</button>
                    <button className="buttonD" onClick={() => setchangeButton(false)}>Đội</button>
                </div>
                
                <div className="ButtonForMobile">
                    <button className="buttonDisable" onClick={() => setchangeInput(false)}>Sửa</button>                
                    <button className="buttonDisable" onClick={() => handleAd()} disabled={changeButton}>Thêm mới</button>
                    <button className="buttonDisable" onClick={() => handleDe()} disabled={changeButton}>Xóa</button>
                </div>
                





            </div>
            <form className="para">

                {
                    AddUnitChild.map(label => (
                        <div>
                            <span className="spanLabel">{label.name}</span>
                            <input id="inputDisbleA" className="inputDisable" placeholder='1234' value="1234" disabled={changeInput} />
                        </div>
                    ))
                }
                <div>
                    <span className="spanLabel">Thành viên hiện tại: </span>
                </div>
                <div className='row rowTable'>
                    <table className='tableAddUnit' border={'1px'} cellpadding={'2px'}>
                        <tr>
                            <th>
                                Cảm tình viên
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' disabled={changeInput} />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Tình nguyện viên
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' disabled={changeInput} />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Hội viên
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' disabled={changeInput} />
                            </th>
                        </tr>
                    </table>

                    <table className='tableAddUnit' border={'1px'} cellpadding={'2px'}>
                        <tr>
                            <th>
                                Hướng dẫn viên/Cán bộ tăng cường
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' disabled={changeInput} />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Huấn luyện viên
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' disabled={changeInput} />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Cán bộ
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' disabled={changeInput} />
                            </th>
                        </tr>
                    </table>
                </div>
                <span className="spanLabel">Tổng số thành viên:</span><br />
                <div>
                    <span className="spanLabel">Số đơn vị trực thuộc Chi Hội:</span><br />
                    {
                        ItemUnit.map(name => (
                            <div style={{ paddingLeft: '20px' }}>
                                <a>{name.name}</a><br />
                            </div>
                        ))
                    }
                </div>

                <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span><br />
                <span className="spanLabel">Kết quả hoạt động:</span>
                
            </form>
            <div className="buttonSubmitForMobile">
                <button className="buttonS" style={{marginBottom:30, backgroundColor:'rgb(245, 245, 245)'}} onClick={() => handleUp()}>Lưu thay đổi</button>
                <button className="buttonS" style={{marginBottom:30, backgroundColor:'rgb(245, 245, 245)'}} onClick={() => handleCa()}>Hủy</button>
            </div>
            
        </div>
    )
}
export default AUDUnit;

// onClick={() => setchangeInput(false)}