import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { Select } from 'antd';
import { Input,Form, } from 'antd';
import '../css/AUDUnit.css'
import '../api/base/club'
import { getClub, editClub } from '../api/base/club';
const AUDUnit = (props) => {
    const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)

    const { Option } = Select;

    const { Search } = Input;

    const handleAdd = () => {
        const a = window.confirm('Bạn có chắc muốn thêm mới!');
        if (a) {
            setLoading(true)
            editClub()
        }
        setLoading(false)
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
            <div className="para" style={{ display: name? 'block' : 'none' }}>
            <Form >
            <Form.Item>
                <h4>Chi Hội</h4>
                <div>
                    <span className="spanLabel">Đơn vị:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Mã Đơn vị:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Địa chỉ:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Đơn vị trực thuộc quản lý:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Phụ trách đơn vị hiện tại:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Năm thành lập:</span>
                    <Input type="number" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Ngày truyền thống:</span>
                    <Input type="date" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Số cơ sở trực thuộc chi Hội:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                </div>
                <div>
                    <span className="spanLabel">Thành viên hiện tại: </span>
                </div>
                <div className="unit-table-infor">
                        <div className="unit-column-infor">
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Cảm tình viên</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }} />
                                
                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Tình nguyện viên</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }} />
                                
                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Hội viên</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }}/>
                                
                                </div>
                            </div>
                        </div>{/*unit-column-infor*/}

                        <div className="unit-column-infor">
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Hướng dẫn viên/Cán bộ tăng cường</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }} />
                                
                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Huấn luyện viên</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }} />
                                 
                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Cán bộ</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }} />
                                
                                </div>
                            </div>
                        </div>{/*unit-column-infor*/}
                    </div>{/*---------------unit-table-infor-------------------------*/}

                {/* <div className='row rowTable'>
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
                </div> */}

                <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span>
                <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                <span className="spanLabel">Kết quả hoạt động:</span>
                <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                </Form.Item>
                </Form>
            </div>
            <div className="para" style={{ display: name? 'none' : 'block' }}>
            <Form >
            <Form.Item>
                <h4>Đội</h4>
                <div>
                    <span className="spanLabel">Đơn vị:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Mã Đơn vị:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Địa chỉ:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Đơn vị trực thuộc quản lý:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Phụ trách đơn vị hiện tại:</span>
                    <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Năm thành lập:</span>
                    <Input type="number" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                    <span className="spanLabel">Ngày truyền thống:</span>
                    <Input type="date" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                </div>
                <div>
                    <span className="spanLabel">Thành viên hiện tại: </span>
                </div>
                <div className="unit-table-infor">
                        <div className="unit-column-infor">
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Cảm tình viên</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }} />
                                
                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Tình nguyện viên</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }} />
                                
                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Hội viên</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }}/>
                                
                                </div>
                            </div>
                        </div>{/*unit-column-infor*/}

                        <div className="unit-column-infor">
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Hướng dẫn viên/Cán bộ tăng cường</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }} />
                                
                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Huấn luyện viên</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }} />
                                 
                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Cán bộ</span>
                                </div>
                                <div className="unit-div2-infor">
                                
                                    <Input type="number" min="0" style={{width:"100%", color:"red", border:"none", backgroundColor:"white",height:28 }} />
                                
                                </div>
                            </div>
                        </div>{/*unit-column-infor*/}
                    </div>{/*---------------unit-table-infor-------------------------*/}
                <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span>
                <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                <span className="spanLabel">Kết quả hoạt động:</span>
                <Input type="text" style={{width:"60%",backgroundColor:"white", color:"red", border:"none", borderBottom:"1px solid grey", borderRadius:0, marginBottom:2}}/><br/>
                </Form.Item>
                </Form>
            </div>
            <div className="buttonSubmitForMobile">
                <button className="buttonS" onClick={() => handleAdd()}>Thêm mới</button>
            </div>
        </div>
    )
}
export default AUDUnit;
 