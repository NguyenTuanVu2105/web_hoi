import React, {useState , useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
import '../css/AddUnit.css'
import { getUser, checkAuth} from '../api/auth/auth'
import { getClub, editClub } from '../api/base/club'
import { useParams } from 'react-router-dom'
import { Button,  Input, Form, notification } from 'antd'

const AddUnit = (props) => {
    const { getFieldDecorator } = props.form
    let { madoi } = useParams()
    const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)
    const [changeInput, setchangeInput] = useState(true)
    // const [changeButton, setchangeButton] = useState(false)
    const [club, setClub] = useState([])

    const fetchData = async () => {
        setLoading(true)
        const result = await getClub(madoi)
        setLoading(false)
        if (result.data.success) {
            setClub(result.data.data)
        }
    }

    // const roles = getUser().then((value) => {
    //     if (checkAuth()) {
    //         var edit = document.getElementById('roleedit')
    //         var save = document.getElementById('rolesave')
    //         if (value.role === 'member') {
    //             edit.style.display='none'
    //             save.style.display='none'
    //         } else {
    //             edit.style.display='block'
    //             save.style.display='block'
    //         }
    //     }
    // })

    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/searchUnit']:'Hồ sơ đơn vị',
            ['/AddUnit']: 'Hồ sơ đơn vị(Đội)'
        })
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const {success} = await editClub(values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Cập nhật thông tin đơn vị thành công!',
                    })
                  }
                else {
                    notification['error']({
                        message: 'Cập nhật thông tin đơn vị thất bại!',
                    })
                }
                setchangeInput(true)
            }
        })
    }
    const [count, setCount] = useState(0)
    const arr = []
    for(var i = 0; i<count;i++){
        arr.push(<Input type="text" style={{width:"70%",backgroundColor:"white", color:"red", border:"none", marginBottom:2}} disabled={changeInput} />)
    }
    return (
        <div className = "para">
            <div className="ButtonForMobileAdd">
                <Button className="buttonDisable1" id='roleedit' onClick={() => setchangeInput(false)}>Sửa</Button>                
            </div>
            <Form onSubmit={handleUpdate}>
                <Form.Item>
                    <div>
                            <span className="spanLabel">Đơn vị:</span>
                            {getFieldDecorator('tendoi', {
                                    initialValue: club.Tendoi
                            })(
                                <Input type="text" style={{width:"70%",backgroundColor:"white", color:"red", border:"none", marginBottom:2}} disabled={changeInput} />
                            )}
                        </div>
                        <div>
                            <span className="spanLabel">Mã đơn vị:</span>
                            {getFieldDecorator('madoi', {
                                    initialValue: club.Madoi
                            })(
                                <Input type="text" style={{width:"70%",backgroundColor:"white", color:"red", border:"none", marginBottom:2}} disabled={changeInput} />
                            )}
                        </div>
                        <div>
                            <span className="spanLabel">Địa chỉ:</span>
                            {getFieldDecorator('diachi', {
                                    initialValue: club.Diachi
                            })(
                                <Input type="text" style={{width:"70%",backgroundColor:"white", color:"red", border:"none", marginBottom:2}} disabled={changeInput} />
                            )}
                        </div>
                        <div>
                            <span className="spanLabel">Đơn vị trực thuộc quản lý:</span>
                            {getFieldDecorator('donviql', {
                                    initialValue: club.DonviQL
                            })(
                                <Input type="text" style={{width:"70%",backgroundColor:"white", color:"red", border:"none", marginBottom:2}} disabled={changeInput} />
                            )}
                            
                        </div>
                        <div>
                            <span className="spanLabel">Phụ trách đơn vị hiện tại:</span>
                            {getFieldDecorator('phutrach', {
                                    initialValue: club.Phutrach
                            })(
                                <Input type="text" style={{width:"70%",backgroundColor:"white", color:"red", border:"none", marginBottom:2}} disabled={changeInput} />
                            )}
                        </div>
                        <div>
                            <span className="spanLabel">Năm thành lập:</span>
                            {getFieldDecorator('ngaythanhlap', {
                                    initialValue: club.Ngaythanhlap
                            })(
                                <Input type="number" style={{width:"70%",backgroundColor:"white", color:"red", border:"none", marginBottom:2}} disabled={changeInput} />
                            )}
                        </div>
                        <div>
                            <span className="spanLabel">Ngày truyền thống:</span>
                            {getFieldDecorator('ngaytruyenthong', {
                                    initialValue: club.Ngaytruyenthong
                            })(
                                <Input type="date" style={{width:"70%",backgroundColor:"white", color:"red", border:"none", marginBottom:2}} disabled={changeInput} />
                            )}
                        </div>
                    <div>
                    <span className = "spanLabel">Tổng số thành viên:</span><br/>
                    </div>
                    <div className='row rowTable'>
                        <table className='col-4 tableAddUnit' border={'1px'} cellPadding={'2px'}>
                            <tr>
                                <th>
                                    Cảm tình viên
                                </th>
                                <th className="inputTH">
                                {getFieldDecorator('camtinhvien', {
                                    initialValue: club.Camtinhvien
                                })(
                                    <Input type="number" min="0" style={{width:70, color:"red", border:"none", backgroundColor:"white" }} disabled={changeInput} />
                                )}
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Tình nguyện viên
                                </th>
                                <th className="inputTH">
                                {getFieldDecorator('tnv', {
                                    initialValue: club.TNV
                                })(
                                    <Input type="number" min="0" style={{width:70, color:"red", border:"none", backgroundColor:"white" }} disabled={changeInput} />
                                )}
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Hội viên
                                </th>
                                <th className="inputTH">
                                {getFieldDecorator('hoivien', {
                                    initialValue: club.Hoivien
                                })(
                                    <Input type="number" min="0" style={{width:70, color:"red", border:"none", backgroundColor:"white" }} disabled={changeInput} />
                                )}
                                </th>
                            </tr>
                        </table>
                        <table className='col-4 tableAddUnit' border={'1px'} cellPadding={'2px'}>
                            <tr>
                                <th>
                                    Hướng dẫn viên/Cán bộ tăng cường
                                </th>
                                <th className="inputTH">
                                {getFieldDecorator('huongdanvien', {
                                    initialValue: club.Huongdanvien
                                })(
                                    <Input type="number" min="0" style={{width:70, color:"red", border:"none", backgroundColor:"white" }} disabled={changeInput} />
                                )}
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Huấn luyện viên
                                </th>
                                <th className="inputTH">
                                {getFieldDecorator('huanluyenvien', {
                                    initialValue: club.Huanluyenvien
                                })(
                                    <Input type="number" min="0" style={{width:70, color:"red", border:"none", backgroundColor:"white" }} disabled={changeInput} />
                                )}       
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Cán bộ
                                </th>
                                <th className="inputTH">
                                {getFieldDecorator('canbotangcuong', {
                                    initialValue: club.Canbotangcuong
                                })(
                                    <Input type="number" min="0" style={{width:70, color:"red", border:"none", backgroundColor:"white" }} disabled={changeInput} />
                                )}
                                </th>
                            </tr>
                        </table>
                    </div>           
                    <span className = "spanLabel">Điểm hiến máu thường xuyên tổ chức:</span>
                    {getFieldDecorator('ketquahoatdong', {
                        initialValue: club.Ketquahoatdong
                    })(
                        <Input type="text" style={{width:"70%",backgroundColor:"white", color:"red", border:"none", marginBottom:2}}  disabled={changeInput} />
                    )}
                    <br/>
                    <span className = "spanLabel">Kết quả hoạt động:</span>
                    {getFieldDecorator('diemhienmau', {
                        initialValue: club.Diemhienmau
                    })(
                        <Input type="text" style={{width:"70%",backgroundColor:"white", color:"red", border:"none", marginBottom:2}} disabled={changeInput} />
                    )}
                    {
                        arr
                    }
                </Form.Item>
                <div className="buttonSubmitForMobile">
                   
                    <Form.Item>
                        <Button id='rolesave' className="buttonS" type="primary" htmlType="submit">Lưu thay đổi</Button>
                    </Form.Item>
                </div>
            </Form>
            <button onClick={()=>setCount(count + 1)}>Thêm điểm hiến máu</button>
        </div>
    )
}

export default Form.create()(AddUnit);