import React, {  useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext"
import { Table } from 'antd'
import '../css/TableSearch.css'
import { Modal, Button, Radio, Form, notification } from 'antd'
import { Select } from 'antd'
// import { TableSearchList, CheckBoxLeft, CheckBoxRight } from '../Component/TableSearchList'
import { Input } from 'antd'
import { getTableMember, addNewMember } from '../api/base/tablesearch'
import { getClubAll } from '../api/base/admin'
import { getPosition, getSpecialized } from '../api/base/consernposition'
import ChangeInfUser from '../Component/ChangeInfUser'
import TableSearchMember from '../Component/TableSearchMember'
const { Column } = Table
const { Option } = Select

const TableSearch = (props) => {
  const { getFieldDecorator } = props.form
  const [table, setTable] = useState([])
  const [club, setClub] = useState([])
  const [position, setPosition] = useState([])
  const [specialized, setSpecialized] = useState([])
  const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)

  const fetchDataPosition = async () => {
    const result = await getPosition()
    if (result.data.success) {
      setPosition(result.data.data)
    }
  }

  const fetchDataSpecialized = async () => {
    const result = await getSpecialized()
    if (result.data.success) {
      setSpecialized(result.data.data)
    }
  }

  const fetchDataClub = async () => {
    const result = await getClubAll()
    if (result.data.success) {
      setClub(result.data.data)
    }
  }

  const fetchData = async () => {
    setLoading(true)
    const result = await getTableMember()
    setLoading(false)
    if (result.data.success) {
      setTable(result.data.data)
    }
  }

  useEffect(() => {
    fetchDataPosition()
    fetchDataSpecialized()
    fetchDataClub()
    fetchData()
    setNameMap({
      ['/']: 'Trang chủ',
      ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
      ['/TableSearch']: 'Tra cứu thành viên'
    })
  }, [])

  // tùy chọn hiển thị //thêm thành viên
  const [Visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  };

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true)
        const {success} = await addNewMember(values)
        setLoading(false)
        setVisible(false)
        if (success) {
          notification['success']({
            message: 'Thêm thành công thành viên ' + values.hovaten
          })
        } else {
          notification['error']({
            message: 'Thêm không thành công'
          })
        }
      }
    })
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  const columns = [{
    title: 'Sửa',
    fixed: 'left',
    id: 'Chon',
    dataIndex: 'id',
    render: (id) => {
      return <span>
        <ChangeInfUser idUser={id}/>
      </span>
    }
  }, {
    title: 'Số thẻ thành viên',
    dataIndex: 'Sothethanhvien',
    id: 'Sothethanhvien',
    fixed: 'left'
  }, {
    title: 'Họ và tên',
    dataIndex: 'Hovaten',
    id: 'Hovaten',
    fixed: 'left'
  }, {
    title: 'Ngày sinh',
    dataIndex: 'Ngaysinh',
    id: 'Ngaysinh',
    // fixed: 'left'
  }, {
    title: 'Giới tính',
    dataIndex: 'Gioitinh',
    id: 'Gioitinh',
    render: (Gioitinh) => {
      if (Gioitinh) {
        return <span> Nam </span>
      } else {
        return <span> Nữ </span>
      }
    }
  }, {
    title: 'Chức vụ',
    dataIndex: 'position.Chucvu',
    id: 'Chucvu'
  }, {
    title: 'Bậc chuyên môn',
    dataIndex: 'specialized.Bacchuyenmon',
    id: 'Bacchuyenmon'
  }, {
    title: 'CCCD/CMT/HC',
    dataIndex: 'CMTorHC',
    id: 'CMTorHC'
  }, {
    title: 'Ngày cấp',
    dataIndex: 'Ngaycap',
    id: 'Ngaycap'
  }, {
    title: 'Nơi cấp',
    dataIndex: 'Noicap',
    id: 'Noicap'
  }, {
    title: 'Điện thoại',
    dataIndex: 'Dienthoai',
    id: 'Dienthoai'
  }, {
    title: 'Email',
    dataIndex: 'Email',
    id: 'Email'
  }, {
    title: 'Facebook',
    dataIndex: 'Facebook',
    id: 'Facebook'
  }, {
    title: 'Quê quán',
    dataIndex: 'Quequan',
    id: 'Quequan'
  }, {
    title: 'Địa chỉ LL',
    dataIndex: 'DiachiLL',
    id: 'DiachiLL'
  }, {
    title: 'Đội trực thuộc',
    dataIndex: 'club.Tendoi',
    id: 'Tendoi'
  }, {
    title: 'Chi hội trực thuộc',
    dataIndex: 'club.branch.Tenchihoi',
    id: 'Tenchihoi'
  }, {
    title: 'Nhóm máu',
    dataIndex: 'Nhommau',
    id: 'Nhommau'
  }, {
    title: 'Rh',
    dataIndex: 'Rh',
    id: 'Rh',
    render: (Rh) => {
      if (Rh === true) {
        return <span> + </span>
      } else if (Rh === false) {
        return <span> - </span>
      } else {
        return <span>   </span>
      }
    }
  }, {
    title: 'Số lần HM',
    dataIndex: 'SolanHM',
    id: 'SolanHM'
  }, {
    title: 'Ngày vào Hội',
    dataIndex: 'NgayvaoHoi',
    id: 'NgayvaoHoi'
  }, {
    title: 'Thời gian HĐ Hội',
    dataIndex: 'ThoigianHD',
    id: 'ThoigianHD'
  }, {
    title: 'Thông tin liên lạc GĐ',
    dataIndex: 'ThongtinlienheGD',
    id: 'ThongtinlienheGD' 
  }, {
    title: 'Đơn vị học tập/Công tác',
    dataIndex: 'Donvi',
    id: 'Donvi'
  }, {
    title: 'Lớp/Đơn vị cụ thể',
    dataIndex: 'Donvicuthe',
    id: 'Donvicuthe'
  }, {
    title: 'GPA',
    dataIndex: 'GPA',
    id: 'GPA' 
  }, {
    title: 'Trình độ học vấn',
    dataIndex: 'Trinhdohocvan',
    id: 'Trinhdohocvan'
  }, {
    title: 'Đảng viên/Đoàn viên',
    dataIndex: 'DoanvienDangvien',
    id: 'DoanvienDangvien'
  }, {
    title: 'status',
    dataIndex: 'TinhtrangHD',
    id: 'TinhtrangHD',
    render: (TinhtrangHD) => {
      if (TinhtrangHD) {
        return <span>
          <i className="fa fa-circle" style={{ color: 'rgb(91, 255, 91)' }}></i>
        </span>
      } else {
        return <span>
          <i className="fa fa-circle" style={{ color: 'gray' }}></i>
        </span>
      }
    }
  }]

  return (
    <div className="para searchItem">
      <div className='row menuFM' >
        
        {/* --Thêm thành viên--- */}
        <Button type="primary" onClick={showModal}  style={{ backgroundColor: 'white', color: '#1890ff', whiteSpace: 'inherit',height:32}}>
          Thêm thành viên
          </Button>
        <Modal
          title="Thêm thành viên"
          visible={Visible}
          onCancel={handleCancel}
          okText="submit"
          footer={null}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              {getFieldDecorator('hovaten', {
                rules: [{
                  required: true,
                  message: 'Chưa nhập họ và tên!'
                }]
              })(
                <Input placeholder="Họ và tên" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('ngaysinh', {
                rules: [{
                  required: true,
                  message: 'Chưa chọn ngày sinh!'
                }]
              })(
                <Input type='date' placeholder="Basic usage"/>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('gioitinh', {
                rules: [{
                  required: true,
                  message: 'Chưa chọn giới tính!'
                }]
              })(
                <Radio.Group name="radiogroup">
                  <Radio value={1} style={{ marginLeft: '5px'}} class="radio_information"> Nam </Radio>
                  <Radio value={0} class="radio_information"> Nữ </Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('positionId', {
                rules: [{
                  required: true,
                  message: 'Chưa chọn chức vụ!'
                }]
              })(
                <Select placeholder="Chức vụ" style={{ height: 30}}>
                  {position.map(position => (
                    <Option style={{ textAlign: "center" }} key={position.id}>{position.Chucvu}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('specializedId', {
                rules: [{
                  required: true,
                  message: 'Chưa chọn bậc chuyên môn!'
                }]
              })(
                <Select placeholder="Bậc chuyên môn" style={{ height: 30 }} >
                  {specialized.map(specialized => (
                    <Option style={{ textAlign: "center" }} key={specialized.id}>{specialized.Bacchuyenmon}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('clubId', {
                rules: [{
                  required: true,
                  message: 'Chưa chọn đội!'
                }]
              })(
                <Select placeholder="Tên đội" style={{ width: '100%' }}>
                  {club.map(club => (
                    <Option style={{ textAlign: "center" }} key={club.id}>{club.Tendoi}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('tinhtranghd', {
                rules: [{
                  required: true,
                  message: 'Chưa chọn tình trạng hoạt động!'
                }]
              })(
                <Radio.Group name="radiogroup">
                  <Radio value={1} style={{ marginLeft: '5px'}} class="radio_information"> Đang hoạt động </Radio>
                  <Radio value={0} class="radio_information"> Nghỉ hoạt động </Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="primary" htmlType="submit">Tạo</Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>{/* =====Them thanh vien===== */}

        
        {/* =====Tìm kiếm===== */}
        <TableSearchMember data={table}/>

      </div>

      <Table columns={columns} dataSource={table} scroll={{ x: 'max-content' }}/>

    </div>

  )
}


export default Form.create()(TableSearch)