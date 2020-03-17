import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import '../css/AddUnit.css'
import { getUser, checkAuth } from '../api/auth/auth'
import { getClub } from '../api/base/club'
import { Button, Input, Form, } from 'antd';
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
    // const handleCa = () => {
    //     window.confirm('Bạn có chắc muốn Hủy thay đổi!');
    //     setchangeInput(true)
    // }
    // const handleDe = () => {
    //     window.confirm('Bạn có chắc muốn xóa!');
    // }



    return (
        <div className="para">
            <div className="ButtonForMobileAdd">
                <Button className="buttonDisable" id='roleedit' onClick={() => setchangeInput(false) && roles}>Sửa</Button>
                {/* <button className="buttonDisable" id='roledelete' onClick={() => handleDe()&&roles} disabled={changeButton}>Xóa</button> */}
            </div>
            <Form >
                <Form.Item>
                    <h4>Chi Hội</h4>
                    <div>
                        <span className="spanLabel">Đơn vị:</span>
                        <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
                        <span className="spanLabel">Mã Đơn vị:</span>
                        <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
                        <span className="spanLabel">Địa chỉ:</span>
                        <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
                        <span className="spanLabel">Đơn vị trực thuộc quản lý:</span>
                        <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
                        <span className="spanLabel">Phụ trách đơn vị hiện tại:</span>
                        <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
                        <span className="spanLabel">Năm thành lập:</span>
                        <Input type="number" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
                        <span className="spanLabel">Ngày truyền thống:</span>
                        <Input type="date" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
                        <span className="spanLabel">Số cơ sở trực thuộc chi Hội:</span>
                        <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
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

                                    <Input type="number" min="0" style={{ width: "100%", color: "red", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />

                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Tình nguyện viên</span>
                                </div>
                                <div className="unit-div2-infor">

                                    <Input type="number" min="0" style={{ width: "100%", color: "red", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />

                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Hội viên</span>
                                </div>
                                <div className="unit-div2-infor">

                                    <Input type="number" min="0" style={{ width: "100%", color: "red", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />

                                </div>
                            </div>
                        </div>{/*unit-column-infor*/}

                        <div className="unit-column-infor">
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Hướng dẫn viên/Cán bộ tăng cường</span>
                                </div>
                                <div className="unit-div2-infor">

                                    <Input type="number" min="0" style={{ width: "100%", color: "red", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />

                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Huấn luyện viên</span>
                                </div>
                                <div className="unit-div2-infor">

                                    <Input type="number" min="0" style={{ width: "100%", color: "red", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />

                                </div>
                            </div>
                            <div className="unit-div-infor">
                                <div className="unit-div1-infor">
                                    <span className="unit-span-infor">Cán bộ</span>
                                </div>
                                <div className="unit-div2-infor">

                                    <Input type="number" min="0" style={{ width: "100%", color: "red", border: "none", backgroundColor: "white", height: 28 }} disabled={changeInput} />

                                </div>
                            </div>
                        </div>{/*unit-column-infor*/}
                    </div>{/*---------------unit-table-infor-------------------------*/}
                    <span className="spanLabel">Điểm hiến máu thường xuyên tổ chức:</span>
                    <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
                    <span className="spanLabel">Kết quả hoạt động:</span>
                    <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
                </Form.Item>
            </Form>
            <div className="buttonSubmitForMobile">
                {/* <button id='rolesave' className="buttonS" onClick={() => handleUp() && roles}>Lưu thay đổi</button> */}
                <Form.Item>
                    <Button id='rolesave' className="buttonS" type="primary" htmlType="submit">Lưu thay đổi</Button>
                </Form.Item>
            </div>
        </div>

    )
}

export default ChiHoi;