import React, { useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { introduleBloodList, ItemUnit } from '../Component/introduleBloodList'
import '../css/AddUnit.css'
import '../css/introduleBlood.scss'
import { Button, Input, Form, } from 'antd';
import { getUnitAll } from '../api/base/unit'
import { BrowserRouter as Link } from "react-router-dom"
import IntroUnit from '../Component/introUnit'
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
            {/* <div className="ButtonForMobileAdd">
                <button className="buttonDisable" onClick={() => setchangeInput(false)}>Sửa</button>
            </div> */}
            <h4><a style={{ color: 'red' }} href='/introduleBloodDisplay'>Giới thiệu chi tiết về Hội thanh niên vận động hiến máu Hà Nội</a></h4>
            <div>
                <h6 style={{ color: 'red' }}>Thường trực ủy ban Hội</h6>
                {
                    introduleBloodList.map((label, index) => (
                        <div key={"i-" + index} style={{ display: "flex", flexWrap: "wrap" }}>
                            <span key={"span-" + index} className="span-label">{label.span}</span>
                            <Input
                                key={"input-" + index}
                                type="text"
                                style={{ width: "calc(100% - 250px)", backgroundColor: "white", color: "red", border: "none", borderRadius: 0 }}
                                disabled={changeInput}
                                defaultValue={label.name}
                            /><br />
                        </div>
                    ))
                }
            </div>
            <div>
                <div>
                    <span className="spanLabel">Năm thành lập: </span>
                    <Input
                        type="text"
                        style={{ width: "calc(100% - 250px)", backgroundColor: "white", color: "red", border: "none", borderRadius: 0 }}
                        disabled={changeInput}
                        defaultValue=""
                    />
                </div>
                <div>
                    <span className="spanLabel">Ngày truyền thống: </span>
                    <Input
                        type="text"
                        style={{ width: "calc(100% - 250px)", backgroundColor: "white", color: "red", border: "none", borderRadius: 0 }}
                        disabled={changeInput}
                        defaultValue=""
                    />
                </div>
                <div>
                    <span className="spanLabel">Các cơ sở trực thuộc Hội:</span>
                    <a href="/SearchUnit"> Đi tới </a>
                    <br />
                </div>
                <div>
                    <span className="spanLabel">Tổng số thành viên: </span>
                </div>
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
            
            <IntroUnit/>

            <div className="buttonSubmitForMobile">
                <button className="buttonDisable" onClick={() => setchangeInput(false)}>Sửa</button>
                <button className="buttonS" onClick={() => handleUp()}>Lưu thay đổi</button>
            </div>
        </div>
    )
}

export default IntroduleBlood;