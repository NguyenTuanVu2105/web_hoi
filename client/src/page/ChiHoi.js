import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import '../css/AddUnit.css'
import { getUser, checkAuth } from '../api/auth/auth'
import { getClub } from '../api/base/club'

const ChiHoi = (props) => {

    const [changeInput, setchangeInput] = useState(true)

    const { nameMap, setNameMap } = useContext(HomepageContext)

    const fetchData = async () => {
        const result = await getClub()

    }

    const roles = getUser().then((value) => {
        if (checkAuth()) {
            var edit = document.getElementById('roleedit')
            var save = document.getElementById('rolesave')
            if (value.role === 'member') {
                edit.style.display = 'none'
                save.style.display = 'none'
            } else {
                edit.style.display = 'block'
                save.style.display = 'block'
            }
        }
    })

    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/introduleBlood']: 'Giới thiệu về Hội',
            ['/AddUnit']: 'Hồ sơ đơn vị(Chi Hội)'
        })
    }, [])
    const handleUp = () => {
        window.confirm('Bạn có chắc muốn lưu thay đổi!');
        setchangeInput(true)
    }
    const handleCa = () => {
        window.confirm('Bạn có chắc muốn Hủy thay đổi!');
        setchangeInput(true)
    }
    const handleDe = () => {
        window.confirm('Bạn có chắc muốn xóa!');
    }
    return (
        <div className="para">
            <div className="ButtonForMobileAdd">
                <button className="buttonDisable" id='roleedit' onClick={() => setchangeInput(false) && roles}>Sửa</button>
                {/* <button className="buttonDisable" id='roledelete' onClick={() => handleDe()&&roles} disabled={changeButton}>Xóa</button> */}
            </div>
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
            <div>
                <span className="spanLabel">Tổng số thành viên:</span><br />
            </div>
            <div className='row rowTable'>
                <table className='col-4 tableAddUnit' border={'1px'} cellpadding={'2px'}>
                    <tr>
                        <th>
                            Cảm tình viên
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" type="number" min="0" className="inputDisable" style={{ width: 35 }} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Tình nguyện viên
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" className="inputDisable" style={{ width: 35 }} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Hội viên
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" className="inputDisable" style={{ width: 35 }} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                </table>

                <table className='col-4 tableAddUnit' border={'1px'} cellpadding={'2px'}>
                    <tr>
                        <th>
                            Hướng dẫn viên/Cán bộ tăng cường
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" className="inputDisable" style={{ width: 35 }} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Huấn luyện viên
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" className="inputDisable" style={{ width: 35 }} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Cán bộ
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" className="inputDisable" style={{ width: 35 }} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                </table>
            </div>
            <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span><br />
            <span className="spanLabel">Kết quả hoạt động:</span>
            <div className="buttonSubmitForMobile">
                <button id='rolesave' className="buttonS" onClick={() => handleUp() && roles}>Lưu thay đổi</button>

            </div>
        </div>
    )
}

export default ChiHoi;