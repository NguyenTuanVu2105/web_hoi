import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { AddUnitChild, ItemUnit } from '../Component/AddUnitChild'

import { Select } from 'antd';
import { Input } from 'antd';
import '../css/AUDUnit.css'
import '../api/base/club'
import { getClub, delClub , postClub} from '../api/base/club';
const AUDUnit = (props) => {
    const [changeInput, setchangeInput] = useState(true)
    const [changeButton, setchangeButton] = useState(false)
    const [inputDisabledH, setInputDisabledH] = useState(true)
    const { nameMap, setNameMap } = useContext(HomepageContext)

    const { Option } = Select;

    const { Search } = Input;

    const handleDe = ()=>{
        const a = window.confirm('Bạn có chắc muốn xóa!');
        if(a){
            delClub()
        }
    }
    const handleAd = ()=>{
        console.log(props.form)
        const a = window.confirm('Bạn có chắc muốn Thêm mới!');
        // if(a){
        //     getClub()
        // }
    }

    const handleUp = ()=>{
        const a =  window.confirm('Bạn có chắc muốn lưu thay đổi!');
        if(a){
            postClub()
        }
    }
    const handleCa = ()=>{
        window.confirm('Bạn có chắc muốn Hủy thay đổi!');
    }

    const openChiHoi = ()=>{
        var para = document.getElementById("chiHoiA");
        para.style.display="block";
        var para1 = document.getElementById("DoiA");
        para1.style.display="none";
    }
    const openDoi = ()=>{
        var para = document.getElementById("chiHoiA");
        para.style.display="none";
        var para1 = document.getElementById("DoiA");
        para1.style.display="block";
    }
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/AUDUnit']: 'Thêm đơn vị'
        })
    }, [])

    return (
        <div>
            <div className=' row changeAUDUnit'>
                {/* <form className="searchForMobile">
                    <Search
                        placeholder="Tìm kiếm"
                        onSearch={value => console.log(value)}
                        style={{ height: 30, marginRight: 5 }}
                    />
                </form> */}
                <div className="ButtonForMobile">
                    {/* <button className="buttonD" onClick={() => setchangeButton(true)}>Hội</button> */}
                    <button className="buttonD" onClick={() => openChiHoi()}>Chi Hội</button>
                    <button className="buttonD" onClick={() => openDoi()}>Đội</button>
                    {/* <button className="buttonDisable" onClick={() => handleAd()} disabled={changeButton}>Thêm mới</button> */}
                </div>
                
                <div className="ButtonForMobile">
                    {/* <button className="buttonDisable" onClick={() => setchangeInput(false)}>Sửa</button>                 */}
                    
                    {/* <button className="buttonDisable" onClick={() => handleDe()} disabled={changeButton}>Xóa</button> */}
                </div>
                
            </div>
            <form className="para" id="chiHoiA">
                <h4>Chi Hội</h4>
                {
                    AddUnitChild.map(label => (
                        <div>
                            <span className="spanLabel">{label.name}</span>
                            <input type="text" className="inputDisable" placeholder='1234' onChange={(e) => console.log(e.target.value)} defaultValue="1234"/>
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
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234'/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Tình nguyện viên
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234'/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Hội viên
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' />
                            </th>
                        </tr>
                    </table>

                    <table className='tableAddUnit' border={'1px'} cellpadding={'2px'}>
                        <tr>
                            <th>
                                Hướng dẫn viên/Cán bộ tăng cường
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Huấn luyện viên
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Cán bộ
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234'/>
                            </th>
                        </tr>
                    </table>
                </div>
                {/* <span className="spanLabel">Tổng số thành viên:</span><br /> */}
                {/* <div>
                    <span className="spanLabel">Số đơn vị trực thuộc Chi Hội:</span><br />
                    {
                        ItemUnit.map(name => (
                            <div style={{ paddingLeft: '20px' }}>
                                <a>{name.name}</a><br />
                            </div>
                        ))
                    }
                </div> */}

                <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span><br />
                <span className="spanLabel">Kết quả hoạt động:</span>
                
            </form>
            <form className="para" id="DoiA">
                <h4>Đội</h4>
                {
                    AddUnitChild.map(label => (
                        <div>
                            <span className="spanLabel">{label.name}</span>
                            <input type="text" className="inputDisable" placeholder='1234' onChange={(e) => console.log(e.target.value)} defaultValue="1234"/>
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
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234'/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Tình nguyện viên
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234'/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Hội viên
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' />
                            </th>
                        </tr>
                    </table>

                    <table className='tableAddUnit' border={'1px'} cellpadding={'2px'}>
                        <tr>
                            <th>
                                Hướng dẫn viên/Cán bộ tăng cường
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234'/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Huấn luyện viên
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234'/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Cán bộ
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234'/>
                            </th>
                        </tr>
                    </table>
                </div>
                {/* <span className="spanLabel">Tổng số thành viên:</span><br /> */}


                <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span><br />
                <span className="spanLabel">Kết quả hoạt động:</span>
                
            </form>
            <div className="buttonSubmitForMobile">
                <button className="buttonS" onClick={() => handleUp()}>Lưu thay đổi</button>
                <button className="buttonS"  onClick={() => handleCa()}>Hủy</button>
            </div>
            
        </div>
    )
}
export default AUDUnit;

// onClick={() => setchangeInput(false)}
// disabled={changeInput} 