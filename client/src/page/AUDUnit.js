import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { Select } from 'antd';
import { Input } from 'antd';
import '../css/AUDUnit.css'
import '../api/base/club'
import { getClub, editClub } from '../api/base/club';
const AUDUnit = (props) => {
    const { nameMap, setNameMap } = useContext(HomepageContext)

    const { Option } = Select;

    const { Search } = Input;

    const handleDe = () => {
        const a = window.confirm('Bạn có chắc muốn xóa!');
    }
    const handleAd = () => {
        console.log(props.form)
        const a = window.confirm('Bạn có chắc muốn Thêm mới!');

    }

    const handleUp = () => {
        const a = window.confirm('Bạn có chắc muốn thêm mới!');
        if (a) {
            editClub()
        }
    }

    const [name, setName] = useState(true)

    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/AUDUnit']: 'Thêm đơn vị'
        })
    }, [])

    return (
        <div className="para">
            <div className=' row changeAUDUnit'>
                <div className="ButtonForMobile">
                    <button className="buttonD" onClick={() => setName(true)}>Chi Hội</button>
                    <button className="buttonD" onClick={() => setName(false)}>Đội</button>
                </div>
            </div>
            <form className="para" style={{ display: name? 'block' : 'none' }}>
                <h4>Chi Hội</h4>
                <div>
                    <span className="spanLabel">Đơn vị:</span>
                    <input type="text" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Mã Đơn vị:</span>
                    <input type="number" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Địa chỉ:</span>
                    <input type="text" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Đơn vị trực thuộc quản lý:</span>
                    <input type="text" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Phụ trách đơn vị hiện tại:</span>
                    <input type="text" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Năm thành lập:</span>
                    <input type="number" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Ngày truyền thống:</span>
                    <input type="date" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Số cơ sở trực thuộc chi Hội:</span>
                    <input type="text" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                </div>
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
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='200' />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Tình nguyện viên
                            </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='300' />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Hội viên
                            </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='400' />
                            </th>
                        </tr>
                    </table>

                    <table className='tableAddUnit' border={'1px'} cellpadding={'2px'}>
                        <tr>
                            <th>
                                Hướng dẫn viên/Cán bộ tăng cường
                        </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='10' />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Huấn luyện viên
                            </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='12' />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Cán bộ
                            </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='34' />
                            </th>
                        </tr>
                    </table>
                </div>

                <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span><br />
                <span className="spanLabel">Kết quả hoạt động:</span>

            </form>
            <form className="para" style={{ display: name?'none':'block' }}>
                <h4>Đội</h4>
                <div>
                    <span className="spanLabel">Đơn vị:</span>
                    <input type="text" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Mã Đơn vị:</span>
                    <input type="number" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Địa chỉ:</span>
                    <input type="text" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Đơn vị trực thuộc quản lý:</span>
                    <input type="text" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Phụ trách đơn vị hiện tại:</span>
                    <input type="text" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Năm thành lập:</span>
                    <input type="number" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />
                    <span className="spanLabel">Ngày truyền thống:</span>
                    <input type="date" className="inputDisable" placeholder="" onChange={(e) => console.log(e.target.value)} defaultValue="" /><br />                    
                </div>
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
                                <input id="inputDisbleA" type='number' min="0" className="inputDisable" style={{ width: 50 }} placeholder='1234' />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Tình nguyện viên
                            </th>
                            <th className="inputTH">
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' />
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
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' />
                            </th>
                        </tr>
                    </table>
                </div>
                <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span><br />
                <span className="spanLabel">Kết quả hoạt động:</span>
            </form>
            <div className="buttonSubmitForMobile">
                <button className="buttonS" onClick={() => handleUp()}>Thêm mới</button>
            </div>
        </div>
    )
}
export default AUDUnit;
 