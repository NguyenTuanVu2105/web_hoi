import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { AddUnitChild, ItemUnit } from '../Component/AddUnitChild'

import { Select } from 'antd';
import { Input } from 'antd';
import '../css/AUDUnit.css'
import '../api/base/club'
import { getClub, delClub, postClub } from '../api/base/club';
const AUDUnit = (props) => {
    const [changeInput, setchangeInput] = useState(true)
    const [changeButton, setchangeButton] = useState(false)
    const [inputDisabledH, setInputDisabledH] = useState(true)
    const { nameMap, setNameMap } = useContext(HomepageContext)

    const { Option } = Select;

    const { Search } = Input;

    const handleDe = () => {
        const a = window.confirm('Bạn có chắc muốn xóa!');
        if (a) {
            delClub()
        }
    }
    const handleAd = () => {
        console.log(props.form)
        const a = window.confirm('Bạn có chắc muốn Thêm mới!');
        // if(a){
        //     getClub()
        // }
    }

    const handleUp = () => {
        const a = window.confirm('Bạn có chắc muốn lưu thay đổi!');
        if (a) {
            postClub()
        }
    }
    const handleCa = () => {
        window.confirm('Bạn có chắc muốn Hủy thay đổi!');
    }

    const openChiHoi = () => {
        setName({
            ChiHoi: true,
            Doi: false,
        })
    }
    const openDoi = () => {
        setName({
            ChiHoi: false,
            Doi: true,
        })
    }
    const [name, setName] = useState({
        ChiHoi: true,
        Doi: false
    })

    // const changeBackgroudHeader = (event) => {
    //     var target= event.target;
    //     var name = target.name;
    //     var value = target.value;
    //     setInf({...inf,
    //         [name]: value
    //     })
    // }
    // const [inf, setInf] = useState({
    //     name: 'Người Việt Trẻ 3000',
    //     link: 'https://www.facebook.com/',
    //     time: '30/2/3000-31/2/3000',
    //     place: 'Hà Nội-Việt Nam',
    //     background: 'rgb(87, 78, 78)',
    //     color: ''

    // })

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
                    {/* <button className="buttonD" onClick={() => openDoi()}><a className="doiBackground" data-toggle="modal" data-target="#modalBackground"> background</a></button> */}
                    
                    {/* <div className="modal fade AA" id="modalBackground" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Chỉnh sửa background</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <input type="text" name="name" className="changeBackground" placeholder="Tên chương trình" onChange={e=>changeBackgroudHeader(e)} />
                                    <input type="text" name="link" className="changeBackground" placeholder="Link chương trình" onChange={e=>changeBackgroudHeader(e)} />
                                    <input type="text" name="time" className="changeBackground" placeholder="Ngày diễn ra" onChange={e=>changeBackgroudHeader(e)}/>
                                    <input type="text" name="place" className="changeBackground" placeholder="Địa điểm tổ chức" onChange={e=>changeBackgroudHeader(e)} />
                                    <label className="changeColor">Màu nền: </label>
                                    <input name="background" type="color" className="Ccolor" defaultValue="#ff0000" onChange={e=>changeBackgroudHeader(e)}/><br />
                                    <label className="changeColor">Màu chữ: </label>
                                    <input name="color" type="color" className="Ccolor"defaultValue="#ff0000" onChange={e=>changeBackgroudHeader(e)} /><br />
                                    <label className="changeColor">Background: </label>
                                    <input type="file" style={{ marginLeft: 5 }} /><br />
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="footerButton" data-dismiss="modal">Lưu thay đổi</button>
                            </div>
                        </div>
                    </div>
                </div>modal */}

                    {/* <button className="buttonDisable" onClick={() => handleAd()} disabled={changeButton}>Thêm mới</button> */}
                </div>

                <div className="ButtonForMobile">
                    {/* <button className="buttonDisable" onClick={() => setchangeInput(false)}>Sửa</button>                 */}

                    {/* <button className="buttonDisable" onClick={() => handleDe()} disabled={changeButton}>Xóa</button> */}
                </div>

            </div>
            <form className="para" style={{ display: name.ChiHoi ? 'block' : 'none' }}>
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
                    <span className="spanLabel">Số cơ sở trực thuộc Hội:</span>
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
            <form className="para" style={{ display: name.Doi ? 'block' : 'none' }}>
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
                                <input id="inputDisbleA" type='number' className="inputDisable" style={{ width: 50 }} placeholder='1234' />
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
                {/* <span className="spanLabel">Tổng số thành viên:</span><br /> */}


                <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span><br />
                <span className="spanLabel">Kết quả hoạt động:</span>

            </form>
            <div className="buttonSubmitForMobile">
                <button className="buttonS" onClick={() => handleUp()}>Lưu thay đổi</button>
                <button className="buttonS" onClick={() => handleCa()}>Hủy</button>
            </div>

        </div>
    )
}
export default AUDUnit;

// onClick={() => setchangeInput(false)}
// disabled={changeInput} 