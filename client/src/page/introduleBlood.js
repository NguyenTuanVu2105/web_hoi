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
        <div className="para container-intro">
            <h4><a className="h4-a-IB" href='/introduleBloodDisplay'>Giới thiệu về Hội thanh niên vận động hiến máu Hà Nội</a></h4>
            <div>
                <h6 style={{ color: '#ff4d4d' }}>Thường trực ủy ban Hội</h6>
                {
                    introduleBloodList.map((label, index) => (
                        <div key={"i-" + index} className="list-name-intro">
                            <span key={"span-" + index} className="span-label">{label.span}</span>
                            <Input
                                key={"input-" + index}
                                type="text"
                                style={{ width: "auto", backgroundColor: "white", color: "#ff4d4d", border: "none", borderRadius: 0 }}
                                disabled={changeInput}
                                defaultValue={label.name}
                            /><br />
                        </div>
                    ))
                }
            </div>
            <div>
                <div>
                    <span className="span-label">Năm thành lập: </span>
                    <Input
                        type="text"
                        style={{ width: "calc(100% - 250px)", backgroundColor: "white", color: "#ff4d4d", border: "none", borderRadius: 0 }}
                        disabled={changeInput}
                        defaultValue="24-1-1994"
                    />
                </div>
                <div>
                    <span className="span-label">Ngày truyền thống: </span>
                    <Input
                        type="text"
                        style={{ width: "calc(100% - 250px)", backgroundColor: "white", color: "#ff4d4d", border: "none", borderRadius: 0 }}
                        disabled={changeInput}
                        defaultValue=""
                    />
                </div>
                <div>
                    <span className="span-label" style={{marginRight:2}}>Các cơ sở trực thuộc Hội:</span>
                    <a className="tag-a-IB" href="/SearchUnit">Tại đây</a>
                    <br />
                </div>
                <div>
                    <span className="span-label">Tổng số thành viên: </span>
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

            <div className="div-submit-IB">
                <button className="button-dis-sub" onClick={() => setchangeInput(false)}>Sửa</button>
                <button className="button-dis-sub" onClick={() => handleUp()}>Lưu thay đổi</button>
            </div>
        </div>
    )
}

export default IntroduleBlood;