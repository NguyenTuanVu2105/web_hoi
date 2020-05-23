import React, {useState, useEffect, useContext} from 'react'
import {Button, Form, Input, notification, Select} from 'antd'
import './MemberSearchForm.scss'
import { getClubAll } from '../../../../../api/base/admin'
import { getUnitAll } from '../../../../../api/base/unit'
import {regionList} from "../../constant/regionList";
import HomepageContext from "../../../../../context/HomepageContext";
import _ from 'lodash'
import {dataSearchDefault} from "../../constant/searchDefault";

const MemberSearchForm = (props) => {
    const { setLoading } = useContext(HomepageContext)
    const { Option } = Select
    const {getFieldDecorator} = props.form
    const {setDataSearch, searchMember} = props
    const [club, setClub] = useState([])
    function handleChange(value) {
        console.log(`selected ${value}`)
    }
    const fetchDataClub = async () => {
        const result = await getClubAll()
        if (result.data.success) {
          setClub(result.data.data)
        }
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
        fetchDataClub()
        
    }, [])

    const onSearchSubmit = async e => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                let data = _.pickBy(values, _.identity)
                if (!data) data = dataSearchDefault
                console.log(data)
                setDataSearch(data)
                await searchMember(data)
            }
        })
    }
    const mapClub = branchId => {
        setClub(unit.find(x => x.id === branchId).clubs)
    }
    return (
        <Form className='menuSearch' onSubmit={onSearchSubmit}>
            <Form.Item>
                <div style={{width: 1000}}>
                    {getFieldDecorator('hovaten')(
                        <Input
                            showSearch
                            placeholder="Họ và tên..."
                            style={{width: '24%', height: 30}}
                        ></Input>
                    )}

                </div>
                <div>
                    {/* ======que quan====== */}
                    {getFieldDecorator('quequan')(
                        <Select
                            showSearch
                            placeholder="Quê quán"
                            style={{width: '24%', height: 30}}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {regionList.map((region) => (
                                <Option style={{textAlign: "center"}} key={region.name}>{region.name}</Option>
                            ))}

                        </Select>
                    )}

                    {/* ======Năm sinh====== */}

                    {getFieldDecorator('ngaysinh')(
                        <Input
                            showSearch
                            placeholder="Năm sinh"
                            style={{width: '24%', height: 30}}
                        >

                        </Input>
                    )}

                    {getFieldDecorator('nhommau')(
                        <Select style={{width: '15%', height: 30}}
                                onChange={handleChange}>
                            <Option style={{textAlign: "center"}} value="default">Nhóm máu</Option>
                            <Option style={{textAlign: "center"}} value="O">O</Option>
                            <Option style={{textAlign: "center"}} value="A">A</Option>
                            <Option style={{textAlign: "center"}} value="B">B</Option>
                            <Option style={{textAlign: "center"}} value="AB">AB</Option>
                        </Select>
                    )}

                    {getFieldDecorator('branchId')(
                        <Select onChange={mapClub} placeholder="Mã Chi Hội"
                                style={{width: '15%', height: 30}}>
                            {unit.map(unit => (
                                <Option style={{textAlign: "center"}} value={unit.id}
                                        key={unit.id}>{unit.Machihoi}</Option>
                            ))}
                        </Select>
                    )}

                    {getFieldDecorator('clubId')(
                        <Select placeholder="Tên đội"
                                style={{width: '30%', height: 30}}>
                            {club.map(club => (
                                <Option style={{textAlign: "center"}} key={club.id}>{club.Tendoi}</Option>
                            ))}
                        </Select>
                    )}

                    <Button className='buttonSearch' htmlType='submit'><i className="fa fa-search"></i></Button>
                </div>
            </Form.Item>
        </Form>
    )
}

export default Form.create()(MemberSearchForm);