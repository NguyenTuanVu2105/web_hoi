import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext"
import { Table } from 'antd'
import '../css/TableSearch.css'
import { Modal, Button, Radio, Form } from 'antd'
import { Select } from 'antd'
import { TableSearchList, CheckBoxLeft, CheckBoxRight } from '../Component/TableSearchList'
import { Input } from 'antd'
import { getTableMember, addNewMember } from '../api/base/tablesearch'
import { getClubAll } from '../api/base/admin'
import { getPosition, getSpecialized} from '../api/base/consernposition'

const { Column } = Table
const { Option } = Select

const TableSearch = (props) => {
  const { getFieldDecorator } = props.form
  const [table, setTable] = useState([])
  const [club, setClub] = useState([])
  const [position, setPosition] = useState([])
  const [specialized, setSpecialized] = useState([])
  const { nameMap, setNameMap } = useContext(HomepageContext)

  const fetchDataPosition = async () => {
    const result = await getPosition()
    if (result.success) {
      setPosition(result.data.data)
    }
  }

  const fetchDataSpecialized = async () => {
    const result = await getSpecialized()
    if (result.success) {
      setSpecialized(result.data.data)
    }
  }

  const fetchDataClub = async () => {
    const result = await getClubAll()
    if (result.success) {
      setClub(result.data.data)
    }
  }
  
  const fetchData = async () => {
    const result = await getTableMember(1000, 1)
    if (result.success) {
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
      ['/TableSearch']: 'Tìm kiếm thành viên'
    })
  }, [])

  // tùy chọn hiển thị //thêm thành viên
  const [Visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  };

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        addNewMember(values)
      }
    });
    setVisible(false)
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  function handleChange(value) {
    console.log(`selected ${value}`)
  }
  return (
    <div className="para searchItem">
      <div className='row menuFM' >
        {/* --Thêm thành viên--- */}
        <div className='addFM'>
          <Button className="ADDmember" type="primary" onClick={showModal} style={{ backgroundColor: 'white',width:'100%', color: '#1890ff',whiteSpace: 'inherit' }}>
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
              {getFieldDecorator('hovaten')(
                <Input placeholder="Họ và tên" style={{ marginBottom: 15 }} />
              )}
              {getFieldDecorator('ngaysinh')(
                <Input type='date' placeholder="Basic usage" style={{ marginBottom: 15 }} />
              )}
              {getFieldDecorator('gioitinh')(
                <Radio.Group name="radiogroup">
                  <Radio value={1}  style = {{marginLeft: '5px', marginBottom: 15}} class="radio_information"> Nam </Radio>
                  <Radio value={0}  class="radio_information"> Nữ </Radio>
                </Radio.Group>
              )}
              {getFieldDecorator('positionId')(
                <Select defaultValue="Chức vụ" style={{ height: 30, marginBottom: 15 }}>
                  {position.map(position => (
                    <Option style={{ textAlign: "center" }} key={position.id}>{position.Chucvu}</Option>
                  ))}
                </Select>
              )}
              {getFieldDecorator('specializedId')(
                <Select defaultValue="Bậc chuyên môn" style={{ height: 30, marginBottom: 15 }} >
                  {specialized.map(specialized => (
                    <Option style={{ textAlign: "center" }} key={specialized.id}>{specialized.Bacchuyenmon}</Option>
                  ))}
                </Select>
              )}
              {getFieldDecorator('clubId')(
                <Select defaultValue="Tên đội" style={{ width: '100%' }}>
                  {club.map(club => (
                    <Option style={{ textAlign: "center" }} key={club.id}>{club.Tendoi}</Option>
                  ))}
                </Select>
              )}
              {getFieldDecorator('tinhtranghd')(
                <Radio.Group name="radiogroup">
                  <Radio value={1}  style = {{marginLeft: '5px', marginTop: 15}} class="radio_information"> Đang hoạt động </Radio>
                  <Radio value={0}  class="radio_information"> Nghỉ hoạt động </Radio>
                </Radio.Group>
              )}
              <Form.Item>
                <Button type="primary" style = {{marginLeft: '5px', marginTop: 15}} htmlType="submit">Tạo</Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>

        {/* ---------------tìm kiếm--------------------- */}
        <div className=' menuSearchFM'>
          <form className='row menuSearch'>
            {/* <div className='col-2 offset-1  '>
          <Button type="primary" onClick={showModal}>
            Tùy chọn hiển thị
            </Button>
          <Modal
            title="Tùy chọn hiển thị"
            visible={Visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className='row'>
              <div className='col-6'>
                {
                  CheckBoxLeft.map(name => (
                    <div>
                      <input type='checkbox' id={name.id} />
                      <label id={name.id} >{name.label}</label>
                    </div>
                  ))
                }
              </div>
              <div className='col-6'>
                {
                  CheckBoxRight.map(name => (
                    <div>
                      <input type='checkbox' name={name.label} />
                      <label id={name.label} >{name.label}</label>
                    </div>
                  ))
                }
              </div>
            </div>

          </Modal>
        </div> */}
            <div className="tenFM">
              <Select
                showSearch
                placeholder="Họ và tên..."
                style={{ width: '100%', height: 30 }}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {table.map(table => (
                  <Option value={table.id} style={{ textAlign: "center" }}>{table.Hovaten}</Option>
                ))}
              </Select>
            </div>
            <div className="nhommauFM">
              <Select defaultValue="Nhóm máu" style={{ width:'90%', height: 30 }} onChange={handleChange}>
                <Option style={{ textAlign: "center" }} value="O">O</Option>
                <Option style={{ textAlign: "center" }} value="A">A</Option>
                <Option style={{ textAlign: "center" }} value="B">B</Option>
                <Option style={{ textAlign: "center" }} value="AB">AB</Option>
              </Select>
              <button className='buttonSearch'><i className="fa fa-search"></i></button>
            </div>
            
          </form>
        </div>
      </div>

      <Table dataSource={table} scroll={{ x: 'max-content' }}>
        <Column title="ID" dataIndex="id" fixed="left" id="id" />
        <Column title="Số thẻ thành viên" dataIndex="Sothethanhvien" fixed="left" id="Sothethanhvien" />
        <Column title="Họ và tên" dataIndex="Hovaten" fixed="left" id="Hovaten" />
        <Column title="Ngày sinh" dataIndex="Ngaysinh" id="Ngaysinh" />
        <Column 
          title="Giới tính" 
          dataIndex="Gioitinh" 
          id="Gioitinh"
          render={(Gioitinh) => {
            if (Gioitinh) {
              return <span>
                Nam
              </span>
            } else {
              return <span>
                Nữ
              </span>
            }
          }}
        />
        <Column title="Chức vụ" dataIndex="position.Chucvu" id="Chucvu" />
        <Column title="Bậc chuyên môn" dataIndex="specialized.Bacchuyenmon" id="Bacchuyenmon " />
        <Column title="CCCD/CMT/HC" dataIndex="CMTorHC" id="CMTorHC" />
        <Column title="Ngày cấp" dataIndex="Ngaycap" id="Ngaycap" />
        <Column title="Nơi cấp" dataIndex="Noicap" id="Noi" />
        <Column title="Điện thoại" dataIndex="Dienthoai" id="Dienthoai" />
        <Column title="Email" dataIndex="Email" id="Email" />
        <Column title="Facebook" dataIndex="Facebook" id="Facebook" />
        <Column title="Quê quán" dataIndex="Quequan" id="Quequan" />
        <Column title="Địa chỉ LL" dataIndex="DiachiLL" id="DiachiLL" />
        <Column title="Đội trực thuộc" dataIndex="club.Tendoi" id="Tendoi" />
        <Column title="Chi hội trực thuộc" dataIndex="club.branch.Tenchihoi" id="Tenchihoi" />
        <Column title="Nhóm máu" dataIndex="Nhommau" id="Nhommau" />
        <Column 
          title="Rh" 
          dataIndex="Rh" 
          id="Rh"
          render={(Rh) => {
            if (Rh) {
              return <span>
                +
              </span>
            } else {
              return <span>
                -
              </span>
            }
          }}
        />
        <Column title="Số lần hiến máu" dataIndex="SolanHM" id="SolanHM" />
        <Column title="Ngày vào Hội" dataIndex="NgayvaoHoi" id="NgayvaoHoi" />
        <Column title="Thời gian hoạt động hội" dataIndex="ThoigianHD" id="ThoigianHD" />
        <Column title="Thông tin liên lạc gia đình" dataIndex="ThongtinlienheGD" id="ThongtinlienheGD" />
        <Column title="Đơn vị học tập/Công tác" dataIndex="Donvi" id="Donvi" />
        <Column title="Lớp/Đơn vị cụ thể" dataIndex="Donvicuthe" id="Donvicuthe" />
        <Column title="GPA" dataIndex="GPA" id="GPA" />
        <Column title="Trình độ học vấn" dataIndex="Trinhdohocvan" id="Trinhdohocvan" />
        <Column title="Đảng viên/Đoàn viên" dataIndex="DoanvienDangvien" id="DoanvienDangvien" />
        <Column 
          title="status" 
          dataIndex="TinhtrangHD"
          
          id="TinhtrangHD"
          render={(TinhtrangHD) => {
            if (TinhtrangHD) {
              return <span>
                <i className="fa fa-circle" style={{color:'rgb(91, 255, 91)'}}></i>
              </span>
            } else {
              return <span>
                <i className="fa fa-circle" style={{color:'gray'}}></i>
              </span>
            }
          }}
        />
        <Column 
          title="Chọn" 
          
          id="Chon" 
          render={(text, record) => (
            <span>
              <Button>Sửa</Button>
              <Button>Xóa</Button>
            </span>
          )}
        />
      </Table>
    </div>

  )
}


export default Form.create()(TableSearch)