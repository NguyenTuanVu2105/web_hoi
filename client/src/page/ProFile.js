import React, {Component, useContext, useEffect, useState} from 'react'
import InformationUser from '../Component/InformationUser'
import {formChildren} from '../Component/FormChildren'
import {formChildrenRight} from '../Component/FormChildrenRight'
import HomepageContext from "../context/HomepageContext"
import { Select } from 'antd'
import '../css/profile.css'
import { getUserProfile } from '../api/base/profile'
import { createAuthApiRequest } from '../api/index'

function ProFileLeft(props) {
    const {nameMap, setNameMap} = useContext(HomepageContext)
    const [user, setUser] = useState([])

    const fetchData = async () => {
        const result = await getUserProfile()
        if (result.success) {
            setUser(result.data.data)
        }
    }

    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/profile']: 'Hồ sơ cá nhân'
        })
    }, [])

    console.log(user)

    const style = {
        textAlign:'end',
        width : '32%'
    }
    console.log(nameMap)
    //nhóm máu
    const { Option } = Select;
    return (
        <div className="row">
            <div className = "profileForMobile">
                <InformationUser />
                {
                    formChildren.map(form => (
                        <form action="" method="post" className="information"  autocomplete="on">
                            <fieldset>
                                <legend>{form.legend}</legend>
                                        {
                                            form.children.map(label => (
                                                <div>
                                                    <label for="" style={style} className="label_information">{label.name}</label>
                                                    <input type="text" className="input_information" />
                                                </div>
                                                
                                            ))
                                        }
                            </fieldset>
                        </form>
                    ))
                }
                <form action="" method="post" className="information"  autocomplete="on">
                    <fieldset>
                        <legend>Hiến máu:</legend>
                        <label for="" style={style} className="label_information">Số lần hiến máu: </label>
                        <input type="text" className="input_information" />
                        <label for="" style={style} className="label_information">Nhóm máu: </label>
                        <Select defaultValue="disabled" style={{marginLeft:5, height: 30,width:120}}>
                            <Option style={{ textAlign: "center" }} value="disabled" disabled>Nhóm máu</Option>
                            <Option style={{ textAlign: "center" }} value="1">O</Option>
                            <Option style={{ textAlign: "center" }} value="2">A</Option>
                            <Option style={{ textAlign: "center" }} value="3">B</Option>
                            <Option style={{ textAlign: "center" }} value="4">AB</Option>
                        </Select><br/>
                        <label for="" style={style} className="label_information">Rh(D): </label>
                        <Select defaultValue="disabled" style={{marginLeft:5, height: 30,width:120}}>
                            <Option style={{ textAlign: "center" }} value="disabled" disabled>Rh(D):</Option>
                            <Option style={{ textAlign: "center" }} value="1">+</Option>
                            <Option style={{ textAlign: "center" }} value="2">-</Option>
                        </Select>
                    </fieldset>
                </form>
            </div>
            <div className = "profileForMobile">
                {
                    formChildrenRight.map(form =>(
                        <form action = "" method = "post" className = "information"  autocomplete="on">
                            <fieldset>
                                <legend>{form.legend}</legend>
                                        {
                                            form.children.map(label => (
                                                <div>
                                                    <label for="" style={style} className="label_information">{label.name}</label>
                                                    <input type="textarea" className="input_information" />
                                                </div>                                 
                                            ))
                                        }
                            </fieldset>
                        </form>
                    ))
                }
                <form action="" method="post" className="information"  autocomplete="on">
                    <fieldset>
                        <legend>Ghi chú khác:</legend>
                        <label for="" style={style} className="label_information">Ghi chú: </label>
                        <textarea className="input_information" style={{height:26}} cols="50"/>                      
                    </fieldset>
                </form>
                <div className="DIVprofile">
                    <button className="buttonProfile">Submit</button>
                    <button className="buttonProfile">Hủy</button>
                </div>                
            </div>
        </div>// row

    )
}
export default ProFileLeft;