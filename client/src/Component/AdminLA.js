
import '../css/LearningAndActivities.css'
import React, { useContext, useEffect, Fragment, useState } from 'react'
import { Form, notification, Input, Button } from 'antd'
import HomepageContext from "../context/HomepageContext";

import { getLearnActivity, editLearnActivity } from '../api/base/profile'
import TextArea from 'antd/lib/input/TextArea';

function AdminLA(props) {
    const { idUser } = props
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
                                    <label className="label_LAA">Trường:</label>
                                    {getFieldDecorator('truong', {
                                        initialValue: leact.Truong
                                    })(
                                        <Input type="text" className="input_LAA2" />
                                    )} <br />
                                    <label className="label_LAA">Lớp:</label>
                                    {getFieldDecorator('lop', {
                                        initialValue: leact.Lop
                                    })(
                                        <Input type="text" className="input_LAA2" />
                                    )} <br />
                                    <label className="label_LAA">Ngành:</label>
                                    {getFieldDecorator('nganh', {
                                        initialValue: leact.Nganh
                                    })(
                                        <Input type="text" className="input_LAA2" />
                                    )} <br />
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
                                            initialValue: leact.HT_Namhoc_Mot
                                        })(
                                            <Input type="text" className="input_LAA1" />
                                        )} 
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_kihoc_mot', {
                                            initialValue: leact.HT_Kihoc_Mot
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )} 
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_lydo_mot', {
                                            initialValue: leact.HT_Lydo_Mot
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )} 
                                    </th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_namhoc_hai', {
                                            initialValue: leact.HT_Namhoc_Hai
                                        })(
                                            <Input type="text" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_kihoc_hai', {
                                            initialValue: leact.HT_Kihoc_Hai
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_lydo_hai', {
                                            initialValue: leact.HT_Lydo_Hai
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )}
                                    </th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_namhoc_ba', {
                                            initialValue: leact.HT_Namhoc_Ba
                                        })(
                                            <Input type="text" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_kihoc_ba', {
                                            initialValue: leact.HT_Kihoc_Ba
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_lydo_ba', {
                                            initialValue: leact.HT_Lydo_Ba
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )}
                                    </th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_namhoc_bon', {
                                            initialValue: leact.HT_Namhoc_Bon
                                        })(
                                            <Input type="text" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_kihoc_bon', {
                                            initialValue: leact.HT_Kihoc_Bon
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_lydo_bon', {
                                            initialValue: leact.HT_Lydo_Bon
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )}
                                    </th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_namhoc_nam', {
                                            initialValue: leact.HT_Namhoc_Nam
                                        })(
                                            <Input type="text" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_kihoc_nam', {
                                            initialValue: leact.HT_Kihoc_Nam
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('learn_lydo_nam', {
                                            initialValue: leact.HT_Lydo_Nam
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )}
                                    </th>
                                </tr>
                            </table>
                        </fieldset>
                        </form>
                    </Form.Item>
                </div>
                <div>
                    <h3>Hoạt động</h3>
                    <div className="row">
                        <div className="col12">
                            <label className="label_information">Trực thuộc chi Hội:</label><br />
                            <label className="label_information">Trực thuộc Đội:</label><br />
                            <label className="label_information">Ngày vào Hội:</label><br />
                        </div>
                        <div className="col12">
                        <label className="label_information">Chức vụ:</label><br />
                            <label className="label_information">Bậc chuyên môn:</label><br />
                            <label className="label_information">Tình trạng hoạt động:</label><br />
                        </div>
                    </div>

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
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_namhoc_mot', {
                                            initialValue: leact.HD_Namhoc_Mot
                                        })(
                                            <Input type="text" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_kihoc_mot', {
                                            initialValue: leact.HD_Kihoc_Mot
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_lydo_mot', {
                                            initialValue: leact.HD_Lydo_Mot
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )}
                                    </th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_namhoc_hai', {
                                            initialValue: leact.HD_Namhoc_Hai
                                        })(
                                            <Input type="text" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_kihoc_hai', {
                                            initialValue: leact.HD_Kihoc_Hai
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_lydo_hai', {
                                            initialValue: leact.HD_Lydo_Hai
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )}
                                    </th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_namhoc_ba', {
                                            initialValue: leact.HD_Namhoc_Ba
                                        })(
                                            <Input type="text" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_kihoc_ba', {
                                            initialValue: leact.HD_Kihoc_Ba
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_lydo_ba', {
                                            initialValue: leact.HD_Lydo_Ba
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )}
                                    </th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_namhoc_bon', {
                                            initialValue: leact.HD_Namhoc_Bon
                                        })(
                                            <Input type="text" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_kihoc_bon', {
                                            initialValue: leact.HD_Kihoc_Bon
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_lydo_bon', {
                                            initialValue: leact.HD_Lydo_Bon
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )}
                                    </th>
                                </tr>
                                <tr className='row'>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_namhoc_nam', {
                                            initialValue: leact.HD_Namhoc_Nam
                                        })(
                                            <Input type="text" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_kihoc_nam', {
                                            initialValue: leact.HD_Kihoc_Nam
                                        })(
                                            <Input type="number" className="input_LAA1" />
                                        )}
                                    </th>
                                    <th className='col-4'>
                                        {getFieldDecorator('activity_lydo_nam', {
                                            initialValue: leact.HD_Lydo_Nam
                                        })(
                                            <TextArea rows="1" className="input_LAA1" />
                                        )}
                                    </th>
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

export default Form.create()(AdminLA)