
import '../css/LearningAndActivities.css'
import React, { Component, useContext, useEffect, Fragment, useState } from 'react'
import { Form, notification, Input, Button } from 'antd'
import HomepageContext from "../context/HomepageContext";
import { learningAndActivities } from '../Component/learningAndActivities'
import { getLearnActivity, editLearnActivity } from '../api/base/profile'
import { A} from '../api/base/auth'
import TextArea from 'antd/lib/input/TextArea';

function LearningAndActivities(props) {
    const { getFieldDecorator } = props.form
    const { nameMap, setNameMap, setLoading  } = useContext(HomepageContext)
    const [ leact, setLeact ] = useState([])
    const fetchData = async () => {
        const result = await getLearnActivity()
        if (result) {
            if (result.data.success) {
                setLeact(result.data.data)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                await editLearnActivity(values)
                setLoading(false)
                notification['success']({
                    message: 'Cập nhật học tập và hoạt động thành công!',
                })
            }
        })
    }

    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/learn']: 'Học tập và hoạt động'
        })
    }, [])

    console.log(leact)

    const style = {
        paddingLeft: '15px'
    }
    return (
        <div className="para">
            <Form onSubmit={handleSubmit}>
                <div>
                    <h3>Học tập</h3>
                    <Form.Item>
                        <form action="" method="post" className="">
                            <div className="row">
                                <div className="DIV-learn">
                                    <label for="" className="label_LAA">Trường:</label>
                                    {getFieldDecorator('truong', {
                                        initialValue: leact.Truong
                                    })(
                                        <Input type="text" className="input_LAA" />
                                    )} <br />
                                    <label for="" className="label_LAA">Lớp:</label>
                                    {getFieldDecorator('lop', {
                                        initialValue: leact.Lop
                                    })(
                                        <Input type="text" className="input_LAA" />
                                    )} <br />
                                    <label for="" className="label_LAA">Ngành:</label>
                                    {getFieldDecorator('nganh', {
                                        initialValue: leact.Nganh
                                    })(
                                        <Input type="text" className="input_LAA" />
                                    )} <br />
                                    <label for="" className="label_LAA">Kết quả học tập:</label>
                                    <input type="number" className="input-number-LAA" />
                                </div>
                            </div>
                            <fieldset>
                            <legend className="legendA">Khen thưởng:</legend>
                            <table style={{width:'100%'}}>
                                <tr className='row '>
                                    <th className='col-4'>Năm học</th>
                                    <th className='col-4'>Kỳ học</th>
                                    <th className='col-4'>Lý do khen thưởng</th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_namhoc_mot', {
                                            // initialValue: leact.learn
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )} <br />
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_kihoc_mot', {
                                            // initialValue: leact.learn.Kihoc_Mot
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )} <br />
                                    </th>
                                    <th className='col-4'>{getFieldDecorator('learn_lydo_mot', {
                                            // initialValue: leact.learn['Lydo_Mot']
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )} <br />
                                    </th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                            </table>
                        </fieldset>
                        </form>
                    </Form.Item>
                </div>
                <div>
                    <h3>Hoạt động</h3>
                    {
                        learningAndActivities.map(label => (
                            <div className="activities">
                                <label for="" className="label_information">{label.label}</label><br />
                            </div>
                        ))
                    }
                    <Form.Item>
                        <fieldset>
                            <legend className="legendA">Khen thưởng:</legend>
                            <table style={{width:'100%'}}>
                                <tr className='row '>
                                    <th className='col-4'>Năm học</th>
                                    <th className='col-4'>Kỳ học</th>
                                    <th className='col-4'>Lý do khen thưởng</th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><input type="number" className="input_LAA1" /></th>
                                    <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                                </tr>
                            </table>
                        </fieldset>
                    </Form.Item>
                </div>
                <div className="DivLAA">
                    <Form.Item>
                        <Button className="buttonLAA" type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default Form.create()(LearningAndActivities)