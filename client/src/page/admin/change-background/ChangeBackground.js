import React, { useState, useContext, useEffect } from 'react'
import HomepageContext from "../../../context/HomepageContext";
import './changeBackground.scss'
import {getAllBackground, uploadBackground, editBackground, deleteBackground} from '../../../api/base/background'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Form, Button, Input, notification, Upload, Icon, Modal, Spin, Table } from 'antd'
import CBH from './CBH';

const ChangeBackground = (props) => {
    const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)
    const [cover, setCover] = useState([])
    const {page, setPage} = useState(1)

    const { getFieldDecorator } = props.form
    const [file, setFile] = useState({})
    const [nameFile, setNameFile] = useState(null)

    const onChooseFile = ({ data, filename, file }) => {
        setFile({ data, filename, file })
        setNameFile(file.name)
    }
    const fetchData = async () => {
        setLoading(true)
        const result = await getAllBackground()
        setLoading(false)
        if (result.success) {
            if (result.data.success) {
                setCover(result.data.data)
            }
        }
    }
    const [openDe, setOpenDe] = useState(false)
    const removeImg = async (id) => {
        setLoading(true)
        const resp = await deleteBackground(id)
        if (resp.success) {
            if (resp.data.success) {
                setOpenDe(false)
                notification['success']({
                    message: 'Xóa thành công',
                })
                fetchData()
            } else {
                notification['error']({
                    message: 'Xóa không thành công',
                })
            }
        }
        setLoading(false)
    }
    // sửa khi có bảng update sửa lại handlesubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
            if (!err) {
                setLoading(true)
                const { success } = await uploadBackground(file, values)
                setLoading(false)
                if (success) {
                    notification['success']({
                        message: 'Cập nhật thông tin thành công!',
                    })
                    setOpenBack(false)
                    fetchData()
                } else {
                    notification['error']({
                        message: 'Cập nhật thông tin thất bại!',
                    })
                }
            }
        })
    }

    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/HistoryBlood']: 'Change Background',
        })
    }, [])

    const [openBack, setOpenBack] = useState(false)

    const showModal = () => {
        setOpenBack(true)
    };

    const handleCancel = e => {
        setOpenBack(false)
    };
    // delete img
    
    const showModalDe = () => {
        setOpenDe(true)
    };
    const handleCancelDe = e => {
        setOpenDe(false)
    };
// tableback
const columns = [
    {
        title: 'Thao tác',
        fixed: 'left',
        id: 'Chon',
        dataIndex: 'id',
        render: (id) => {
            return <div>
                <CBH id={id}/>               
                <Button type="primary" className="button-change-back-s" style={{ marginTop: 15 }} onClick={showModalDe}>
                    Xóa
                </Button>
                <Modal
                title="Xóa chương trình!"
                visible={openDe}
                footer={null}
                onCancel={handleCancelDe}
                >
                    <p>Hành động này không thể hoàn tác. Bạn có chắc muốn xóa!</p>
                    <div className="modal-change-back-s">
                        <button className="button-change-back-s" style={{width:"100px"}} onClick={() => removeImg(id)}>Xóa</button>
                    </div>                   
                </Modal>
            </div>
        }
    },
    {
        title: 'Tên chương trình',
        dataIndex: 'Tenchuongtrinh',
    },
    {
        title: 'link chương trình',
        dataIndex: 'Linkchuongtrinh',
    },
    {
        title: 'Ngày diễn ra',
        dataIndex: 'Ngaydienra',
    },
    {
        title: 'Ngày kết thúc',
        dataIndex: 'Ngayketthuc',
    },
    {
        title: 'Địa điểm',
        dataIndex: 'Diadiem',
    },
    {
        title: 'Ảnh chương trình',
        dataIndex: 'Linkanh',
        id: 'Linkanh',
        render: (Linkanh) => {
            return <a href={Linkanh} target="blank"><div name="linkAnh" className="background-change-header-s" style={{ backgroundImage: `url(${Linkanh})` }}/></a>
        }
    },
  ];
// tableback

    return (
        <div className="para-change-background-admin">
            <div>
                <Button type="primary" className="add-button-background" style={{ marginBottom: 15 }} onClick={showModal}>
                    Thêm chương trình
                </Button>
            </div>
            
            <Modal
                title="Thêm chương trình"
                visible={openBack}
                onOk={handleSubmit}
                onCancel={handleCancel}
            >
                <Form>
                    <Form.Item>
                        {getFieldDecorator('tenchuongtrinh')(
                            <Input type="text" name="name" style={{ marginBottom: 10 }} placeholder="Tên chương trình" required />
                        )}
                        {getFieldDecorator('linkchuongtrinh')(
                            <Input type="text" name="link" style={{ marginBottom: 10 }} placeholder="Link chương trình" required />
                        )}
                        <label className="change-color-header">Ngày diễn ra: </label>
                        {getFieldDecorator('ngaydienra')(
                            <Input type="date" name="date" style={{ marginBottom: 10 }} placeholder="Ngày diễn ra" required />
                        )}
                        <label className="change-color-header">Ngày kết thúc: </label>
                        {getFieldDecorator('ngayketthuc')(
                            <Input type="date" name="hihi" style={{ marginBottom: 10 }} placeholder="Ngày kết thúc" required />
                        )}
                        {getFieldDecorator('diadiem')(
                            <Input type="text" name="place" style={{ marginBottom: 10 }} placeholder="Địa điểm tổ chức" required />
                        )}
                        <Upload
                            // link to upload
                            customRequest={onChooseFile}
                            // end
                            accept={".png,.jpg,.jpeg"}
                            multiple={false}
                            fileList={[]}
                        >
                            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 10 }}>
                                <label className="change-color-header">Tải ảnh lên: </label>
                                <button>
                                    <Icon type="upload" /> Choose File
                                </button>
                                {nameFile}
                            </div>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
            {/* table back */}
            <Table columns={columns} scroll={{x: 'max-content'}} dataSource={cover} size="middle" />

            {/* table back */}
        </div>
    )
}

export default Form.create()(ChangeBackground)