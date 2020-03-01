import React, {Component,useState , useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
import {AddUnitChild, ItemUnit} from '../Component/AddUnitChild'
import '../css/AddUnit.css'
import { getUser, checkAuth} from '../api/auth/auth'
import { getClub } from '../api/base/club'

const AddUnit = (props) => {
    const { madoi } = props
    const [changeInput, setchangeInput] = useState(true)
    const [changeButton, setchangeButton] = useState(false)
    const {nameMap, setNameMap} = useContext(HomepageContext)
    
    const fetchData = async () => {
        const result = await getClub()

    }

    const roles = getUser().then((value) => {
        if (checkAuth()) {
            var edit = document.getElementById('roleedit')
            var save = document.getElementById('rolesave')
            if (value.role === 'member') {
                edit.style.display='none'
                save.style.display='none'
            } else {
                edit.style.display='block'
                save.style.display='block'
            }
        }
    })

    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/searchUnit']:'Hồ sơ đơn vị',
            ['/AddUnit']: 'Hồ sơ đơn vị(Đội)'
        })
    }, [])
    const handleUp = ()=>{
        window.confirm('Bạn có chắc muốn lưu thay đổi!');
        setchangeInput(true)
    }
    const handleCa = ()=>{
        window.confirm('Bạn có chắc muốn Hủy thay đổi!');
        setchangeInput(true)
    }
    const handleDe = ()=>{
        window.confirm('Bạn có chắc muốn xóa!');
    }
    return (
        <div className = "para">
            <div className="ButtonForMobileAdd">
                <button className="buttonDisable" id='roleedit' onClick={() => setchangeInput(false)&&roles}>Sửa</button>                
                {/* <button className="buttonDisable" id='roledelete' onClick={() => handleDe()&&roles} disabled={changeButton}>Xóa</button> */}
            </div>
            {
                AddUnitChild.map(label => (
                    <div>
                        <span className="spanLabel">{label.name}</span>
                        <input type="text" className="inputDisable" placeholder='1234' onChange={(e) => console.log(e.target.value)} defaultValue="1234" disabled={changeInput} />
                    </div>
                ))
            }
            <div>
            <span className = "spanLabel">Thành viên hiện tại: </span>
            </div>
            <div className='row rowTable'>
                <table className='col-4 tableAddUnit' border={'1px'} cellpadding={'2px'}>
                    <tr>
                        <th>
                            Cảm tình viên
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" type="number" min="0" className="inputDisable" style={{width:35}} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Tình nguyện viên
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" className="inputDisable" style={{width:35}} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Hội viên
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" className="inputDisable" style={{width:35}} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                </table>

                <table className='col-4 tableAddUnit' border={'1px'} cellpadding={'2px'}>
                    <tr>
                        <th>
                            Hướng dẫn viên/Cán bộ tăng cường
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" className="inputDisable" style={{width:35}} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Huấn luyện viên
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" className="inputDisable" style={{width:35}} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Cán bộ
                        </th>
                        <th className="inputTH">
                            <input id="inputDisbleA" className="inputDisable" style={{width:35}} placeholder='1234' disabled={changeInput} />
                        </th>
                    </tr>
                </table>
            </div>
            <div>
                <span className = "spanLabel">Số cơ sở trực thuộc Hội:</span><br/>
                {
                    ItemUnit.map(name =>(
                        <div style={{paddingLeft:'20px'}}>
                            <a>{name.name}</a><br/>
                        </div>
                    ))
                }
            </div>
            <span className = "spanLabel">Tổng số thành viên:</span><br/>
            <span className = "spanLabel">Điểm hiến máu thường xuyên tổ chức:</span><br/>
            <span className = "spanLabel">Kết quả hoạt động:</span>
            <div className="buttonSubmitForMobile">
                <button id='rolesave' className="buttonS" onClick={() => handleUp()&&roles}>Lưu thay đổi</button>
                {/* <button id='rolecancel' className="buttonS"  onClick={() => handleCa()&&roles}>Hủy</button> */}
            </div>
        </div>
    )
}

export default AddUnit;