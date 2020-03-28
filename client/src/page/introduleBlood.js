import React, { useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { introduleBloodList, ItemUnit } from '../Component/introduleBloodList'
import '../css/AddUnit.css'
import '../css/introduleBlood.css'
import { Button, Input, Form, } from 'antd';
import { getUnitAll } from '../api/base/unit'
import { BrowserRouter as Link } from "react-router-dom"
const IntroduleBlood = () => {
    const [changeInput, setchangeInput] = useState(true)
    const { nameMap, setNameMap, isLoading, setLoading } = useContext(HomepageContext)

    const handleUp = () => {
        window.confirm('Bạn có chắc muốn lưu thay đổi!');
        setchangeInput(true)
    }
    const handleCa = () => {
        window.confirm('Bạn có chắc muốn Hủy thay đổi!');
        setchangeInput(true)
    }
    const [unit, setUnit] = useState([])
    const fetchData = async () => {
        const result = await getUnitAll()
        if (result.data.success) {
            setUnit(result.data.data)
        }
    }
    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/introduleBlood']: 'Giới thiệu về Hội'
        })
    }, [])


    return (
        <div className="para">
            <div className="ButtonForMobileAdd">
                <button className="buttonDisable" onClick={() => setchangeInput(false)}>Sửa</button>
            </div>
            <h4><a style={{ color: 'red' }} href='/introduleBloodDisplay'>Phần I: Giới thiệu về Hội >>></a></h4>
            {
                introduleBloodList.map(label => (
                    <div>
                        <span className="spanLabel">{label.name}</span>
                        <Input type="text" style={{ width: "60%", backgroundColor: "white", color: "red", border: "none", borderRadius: 0, marginBottom: 2 }} disabled={changeInput} /><br />
                    </div>
                ))
            }
            <div>
                <div>
                    <span className="spanLabel">Các đơn vị trực thuộc Hội:</span>
                    <a href="/SearchUnit"> Đi tới </a>
                    <br />
                </div>
                <span className="spanLabel">Tổng số thành viên: </span>
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

            <div className="buttonSubmitForMobile">
                <button className="buttonS" onClick={() => handleUp()}>Lưu thay đổi</button>
            </div>
        </div>
    )
}

export default IntroduleBlood;