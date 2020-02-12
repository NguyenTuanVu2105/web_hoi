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

    const handleOk = e => {
        console.log(e);
        prompt('a');
    };

    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/AUDUnit']: 'Thêm, sửa, xóa đơn vị'
        })
    }, [])

    return (
        <div>
            <div className='changeAUDUnit'>
                <form>

                    <Search
                        placeholder="Tìm kiếm"
                        onSearch={value => console.log(value)}
                        style={{ width: 200, height: 30, marginRight: 5 }}
                    />


                </form>
                <button className="buttonD" onClick={() => setchangeButton(true)}>Hội</button>
                <button className="buttonD" onClick={() => setchangeButton(false)}>Chi Hội</button>
                <button className="buttonD" onClick={() => setchangeButton(false)}>Đội</button>

                <button className="buttonDisable" onClick={() => setchangeInput(false)}>Sửa</button>
                <button className="buttonDisable" onClick={() => setchangeInput(true)}>Lưu thay đổi</button>
                <button className="buttonDisable" onClick={() => setchangeInput(false)} disabled={changeButton}>Thêm mới</button>
                <button className="buttonDisable" onClick={()=>handleOk()} disabled={changeButton}>Xóa</button>
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
                    <table className='col-4 tableAddUnit' border={'1px'} cellpadding={'2px'}>
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
                                <input id="inputDisbleA"  type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' disabled={changeInput} />
                            </th>
                        </tr>
                    </table>

                    <table className='col-4 tableAddUnit' border={'1px'} cellpadding={'2px'}>
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
                <div></div>
            </form>
        </div>
    )
}
export default AUDUnit;

// onClick={() => setchangeInput(false)}