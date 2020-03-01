import React, {Component,useState , useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
import {introduleBloodList, ItemUnit} from '../Component/introduleBloodList'
import '../css/AddUnit.css'
import '../css/introduleBlood.css'
const IntroduleBlood = () => {
    const [changeInput, setchangeInput] = useState(true)
    const {nameMap, setNameMap, isLoading, setLoading} = useContext(HomepageContext)

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
            ['/introduleBlood']: 'Giới thiệu về Hội'
        })
    }, [])
    

    return (
        <div className = "para">
            <div className="ButtonForMobileAdd">
                <button className="buttonDisable" onClick={() => setchangeInput(false)}>Sửa</button>                
            </div>
            <h4><a style={{color:'red'}} href='/introduleBloodDisplay'>Phần I: Giới thiệu về Hội >>></a></h4>
            {
                introduleBloodList.map(label => (
                    <div>
                        <span className = "spanLabel">{label.name}</span>
                        <input id="inputDisbleA" className="inputDisable"  placeholder='1234' disabled={changeInput} />                         
                    </div>
                ))
            }
            <div>
            <div>
                <span className = "spanLabel">Các đơn vị trực thuộc Hội:</span><br/>
                {
                    ItemUnit.map(name =>(
                        <div style={{paddingLeft:'20px'}}>
                            <a href={name.href}>{name.name}</a><br/>
                        </div>
                    ))
                }
            </div>
            <span className = "spanLabel">Thành viên hiện tại: </span>
            </div>
            <div className='row rowTable'>
                <table className='tableAddUnit' border={'1px'} cellpadding={'2px'}>
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

                <table className='tableAddUnit' border={'1px'} cellpadding={'2px'}>
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
            <span className = "spanLabel">Tổng số thành viên:</span><br/>
            
            <div className="buttonSubmitForMobile">
                <button className="buttonS" onClick={() => handleUp()}>Lưu thay đổi</button>
                <button className="buttonS"  onClick={() => handleCa()}>Hủy</button>
            </div>
        </div>
    )
}

export default IntroduleBlood;