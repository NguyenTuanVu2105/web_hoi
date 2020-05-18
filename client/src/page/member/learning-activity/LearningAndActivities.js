import './learningAndActivities.scss'
import React, { useContext, useEffect, useState } from 'react'
import { Form, notification, Input, Button } from 'antd'
import HomepageContext from "../../../context/HomepageContext";
import { getLearnActivity, editLearnActivity } from '../../../api/base/profile'
import TextArea from 'antd/lib/input/TextArea';

function LearningAndActivities(props) {
    const { getFieldDecorator } = props.form
    const { setNameMap, setLoading } = useContext(HomepageContext)
    const [leact, setLeact] = useState([])
    const fetchData = async () => {
        setLoading(true)
        const result = await getLearnActivity()
        setLoading(false)
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
                const { success } = await editLearnActivity(values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Cập nhật học tập và hoạt động thành công!',
                    })
                } else {
                    notification['error']({
                        message: 'Cập nhật học tập và hoạt động thất bại!',
                    })
                }
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
                                        <Input type="text" className="input-LAA2" />
                                    )} <br />
                                    <label className="label_LAA">Lớp:</label>
                                    {getFieldDecorator('lop', {
                                        initialValue: leact.Lop
                                    })(
                                        <Input type="text" className="input-LAA2" />
                                    )} <br />
                                    <label className="label_LAA">Ngành:</label>
                                    {getFieldDecorator('nganh', {
                                        initialValue: leact.Nganh
                                    })(
                                        <Input type="text" className="input-LAA2" />
                                    )} <br />
                                </div>
                            </div>
                            <fieldset className="fieldset-LAA">
                                <legend className="legendA">Khen thưởng:</legend>
                                <div className="table-LA">
                                    <div className="table-LA-par">
                                        <div className="table-LA-cont">
                                            Năm học
                                        </div>
                                        <div className="table-LA-cont">
                                            Kỳ học
                                        </div>
                                        <div className="table-LA-cont">
                                            Lý do khen thưởng
                                        </div>
                                    </div>
                                    <div className="table-LA-par">
                                        <div className="table-LA-cont">
                                            {getFieldDecorator('learn_namhoc_mot', {
                                                initialValue: leact.HT_Namhoc_Mot
                                            })(
                                                <Input type="text" style={{ width: "90%", textAlign: "center" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont" >
                                            {getFieldDecorator('learn_kihoc_mot', {
                                                initialValue: leact.HT_Kihoc_Mot
                                            })(
                                                <Input type="number" style={{ width: "90%", textAlign: "center" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont">
                                            {getFieldDecorator('learn_lydo_mot', {
                                                initialValue: leact.HT_Lydo_Mot
                                            })(
                                                <TextArea rows="1" style={{ width: "90%" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont">
                                            {getFieldDecorator('learn_namhoc_hai', {
                                                initialValue: leact.HT_Namhoc_Hai
                                            })(
                                                <Input type="text" style={{ width: "90%", textAlign: "center" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont" >
                                            {getFieldDecorator('learn_kihoc_hai', {
                                                initialValue: leact.HT_Kihoc_Hai
                                            })(
                                                <Input type="number" style={{ width: "90%", textAlign: "center" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont">
                                            {getFieldDecorator('learn_lydo_hai', {
                                                initialValue: leact.HT_Lydo_Hai
                                            })(
                                                <TextArea rows="1" style={{ width: "90%" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont">
                                            {getFieldDecorator('learn_namhoc_ba', {
                                                initialValue: leact.HT_Namhoc_Ba
                                            })(
                                                <Input type="text" style={{ width: "90%", textAlign: "center" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont" >
                                            {getFieldDecorator('learn_kihoc_ba', {
                                                initialValue: leact.HT_Kihoc_Ba
                                            })(
                                                <Input type="number" style={{ width: "90%", textAlign: "center" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont">
                                            {getFieldDecorator('learn_lydo_ba', {
                                                initialValue: leact.HT_Lydo_Ba
                                            })(
                                                <TextArea rows="1" style={{ width: "90%" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont">
                                            {getFieldDecorator('learn_namhoc_bon', {
                                                initialValue: leact.HT_Namhoc_Bon
                                            })(
                                                <Input type="text" style={{ width: "90%", textAlign: "center" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont" >
                                            {getFieldDecorator('learn_kihoc_bon', {
                                                initialValue: leact.HT_Kihoc_Bon
                                            })(
                                                <Input type="number" style={{ width: "90%", textAlign: "center" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont">
                                            {getFieldDecorator('learn_lydo_bon', {
                                                initialValue: leact.HT_Lydo_Bon
                                            })(
                                                <TextArea rows="1" style={{ width: "90%" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont">
                                            {getFieldDecorator('learn_namhoc_nam', {
                                                initialValue: leact.HT_Namhoc_Nam
                                            })(
                                                <Input type="text" style={{ width: "90%", textAlign: "center" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont" >
                                            {getFieldDecorator('learn_kihoc_nam', {
                                                initialValue: leact.HT_Kihoc_Nam
                                            })(
                                                <Input type="number" style={{ width: "90%", textAlign: "center" }} />
                                            )}
                                        </div>
                                        <div className="table-LA-cont">
                                            {getFieldDecorator('learn_lydo_nam', {
                                                initialValue: leact.HT_Lydo_Nam
                                            })(
                                                <TextArea rows="1" style={{ width: "90%" }} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            {/* <fieldset>
                                <legend className="legendA">Khen thưởng:</legend>
                                <table style={{ width: '100%' }}>
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
                            </fieldset> */}
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


                        <fieldset className="fieldset-LAA">
                            <legend className="legendA">Khen thưởng:</legend>
                            <div className="table-LA">
                                <div className="table-LA-par">
                                    <div className="table-LA-cont">
                                        Năm học
                                        </div>
                                    <div className="table-LA-cont">
                                        Kỳ học
                                        </div>
                                    <div className="table-LA-cont">
                                        Lý do khen thưởng
                                        </div>
                                </div>
                                <div className="table-LA-par">
                                    <div className="table-LA-cont">
                                        {getFieldDecorator('activity_namhoc_mot', {
                                            initialValue: leact.HD_Namhoc_Mot
                                        })(
                                            <Input type="text" style={{ width: "90%", textAlign: "center" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont" >
                                        {getFieldDecorator('activity_kihoc_mot', {
                                            initialValue: leact.HD_Kihoc_Mot
                                        })(
                                            <Input type="number" style={{ width: "90%", textAlign: "center" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont">
                                        {getFieldDecorator('activity_lydo_mot', {
                                            initialValue: leact.HD_Lydo_Mot
                                        })(
                                            <TextArea rows="1" style={{ width: "90%" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont">
                                        {getFieldDecorator('activity_namhoc_hai', {
                                            initialValue: leact.HD_Namhoc_Hai
                                        })(
                                            <Input type="text" style={{ width: "90%", textAlign: "center" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont" >
                                        {getFieldDecorator('activity_kihoc_hai', {
                                            initialValue: leact.HD_Kihoc_Hai
                                        })(
                                            <Input type="number" style={{ width: "90%", textAlign: "center" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont">
                                        {getFieldDecorator('activity_lydo_hai', {
                                            initialValue: leact.HD_Lydo_Hai
                                        })(
                                            <TextArea rows="1" style={{ width: "90%" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont">
                                        {getFieldDecorator('activity_namhoc_ba', {
                                            initialValue: leact.HD_Namhoc_Ba
                                        })(
                                            <Input type="text" style={{ width: "90%", textAlign: "center" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont" >
                                        {getFieldDecorator('activity_kihoc_ba', {
                                            initialValue: leact.HD_Kihoc_Ba
                                        })(
                                            <Input type="number" style={{ width: "90%", textAlign: "center" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont">
                                        {getFieldDecorator('activity_lydo_ba', {
                                            initialValue: leact.HD_Lydo_Ba
                                        })(
                                            <TextArea rows="1" style={{ width: "90%" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont">
                                        {getFieldDecorator('activity_namhoc_bon', {
                                            initialValue: leact.HD_Namhoc_Bon
                                        })(
                                            <Input type="text" style={{ width: "90%", textAlign: "center" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont" >
                                        {getFieldDecorator('activity_kihoc_bon', {
                                            initialValue: leact.HD_Kihoc_Bon
                                        })(
                                            <Input type="number" style={{ width: "90%", textAlign: "center" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont">
                                        {getFieldDecorator('activity_lydo_bon', {
                                            initialValue: leact.HD_Lydo_Bon
                                        })(
                                            <TextArea rows="1" style={{ width: "90%" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont">
                                        {getFieldDecorator('activity_namhoc_nam', {
                                            initialValue: leact.HD_Namhoc_Nam
                                        })(
                                            <Input type="text" style={{ width: "90%", textAlign: "center" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont" >
                                        {getFieldDecorator('activity_kihoc_nam', {
                                            initialValue: leact.HD_Kihoc_Nam
                                        })(
                                            <Input type="number" style={{ width: "90%", textAlign: "center" }} />
                                        )}
                                    </div>
                                    <div className="table-LA-cont">
                                        {getFieldDecorator('activity_lydo_nam', {
                                            initialValue: leact.HD_Lydo_Nam
                                        })(
                                            <TextArea rows="1" style={{ width: "90%" }} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        {/* <fieldset>
                            <legend className="legendA">Khen thưởng:</legend>
                            <table style={{ width: '100%' }}>
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
                        </fieldset> */}
                    </Form.Item>
                </div>
                <div className="Div-LAA">
                    <Form.Item>
                        <Button className="button-LAA" type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default Form.create()(LearningAndActivities)