import React, {Component,useState , useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
import {AddUnitChild, ItemUnit} from '../Component/AddUnitChild'
import '../css/AddUnit.css'
const AddUnit = () => {
    const [changeInput, setchangeInput] = useState(true)
    const [changeButton, setchangeButton] = useState(false)
    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/AddUnit']: 'Hồ sơ đơn vị'
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
                <button className="buttonDisable" onClick={() => setchangeInput(false)}>Sửa</button>                
                <button className="buttonDisable" onClick={() => handleDe()} disabled={changeButton}>Xóa</button>
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
                            <input id="inputDisbleA" className="inputDisable" style={{width:35}} placeholder='1234' disabled={changeInput} />
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
                <button className="buttonS" onClick={() => handleUp()}>Lưu thay đổi</button>
                <button className="buttonS"  onClick={() => handleCa()}>Hủy</button>
            </div>
        </div>
    )
}

export default AddUnit;