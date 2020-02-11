import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { Table } from 'antd';
import '../css/TableSearch.css'
import { Modal, Button } from 'antd';
import { Select } from 'antd';
import { TableSearchList, CheckBoxLeft, CheckBoxRight } from '../Component/TableSearchList'
import { Input } from 'antd';
import { getTableMember } from "../api/base/tablesearch"

const { Column } = Table

const TableSearch = () => {
  const [table, setTable] = useState([])
  const { nameMap, setNameMap } = useContext(HomepageContext)

  const fetchData = async () => {
    const result = await getTableMember(10, 1)
    if (result.success) {
        setTable(result.data.data)
    }
}

  useEffect(() => {
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

  const handleOk = e => {
    console.log(e);
    alert('Thêm thành công tài khoản:AAAAAAAAA')
    setVisible(false)
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

  //thêm thành viên



  // select nhom mau
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  // search
  const { Search } = Input;



  //tên đội
  const { Option1 } = Select;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }


  return (
    <div className="para searchItem">
      <div className='row' style={{margin:10}}>
        {/* --Thêm thành viên--- */}
        <div className='col-1'>
          <Button type="primary" onClick={showModal} style={{ backgroundColor: 'white', color: '#1890ff' }}>
            Thêm thành viên
          </Button>
          <Modal
            title="Thêm thành viên"
            visible={Visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <form >
              <Input placeholder="Họ và tên" style={{ marginBottom: 15 }} />
              <Input type='date' placeholder="Basic usage" style={{ marginBottom: 15 }} />
              <Select defaultValue="disabled" style={{ height: 30, marginBottom: 15 }}>
                <Option style={{ textAlign: "center" }} value="disabled" disabled>Chức vụ</Option>
                <Option style={{ textAlign: "center" }} value="1">Chủ tịch Hội</Option>
                <Option style={{ textAlign: "center" }} value="2">Chi hội trưởng</Option>
                <Option style={{ textAlign: "center" }} value="3">Đội trưởng</Option>
                <Option style={{ textAlign: "center" }} value="4">None</Option>
              </Select>
              <Select defaultValue="disabled" style={{ height: 30, marginBottom: 15 }} >
                <Option style={{ textAlign: "center" }} value="disabled" disabled>Bậc chuyên môn</Option>
                <Option style={{ textAlign: "center" }} value="1">Huấn luyện viên</Option>
                <Option style={{ textAlign: "center" }} value="2">Hướng dẫn viên</Option>
                <Option style={{ textAlign: "center" }} value="3">Học viên</Option>
                <Option style={{ textAlign: "center" }} value="4">none</Option>
              </Select>
              <Select mode='default' style={{ width: '100%' }} placeholder="Tên đội" onChange={handleChange}>
                {children}
              </Select>
            </form>
          </Modal>
        </div>

        {/* ---------------tìm kiếm--------------------- */}
        <div className='col-4 offset-7'>
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

            <div className="">
              <Search
                placeholder="Họ và tên..."
                onSearch={value => console.log(value)}
                style={{ width: 200, height: 30 }}
              />
              <Select defaultValue="All" style={{marginLeft:5, width: 110, height: 30 }} onChange={handleChange}>
                <Option value="All">Nhóm máu</Option>
                <Option style={{ textAlign: "center" }} value="O">O</Option>
                <Option style={{ textAlign: "center" }} value="A">A</Option>
                <Option style={{ textAlign: "center" }} value="B">B</Option>
                <Option style={{ textAlign: "center" }} value="AB">AB</Option>
              </Select>
            </div>
          </form>
        </div>
      </div>

      <Table dataSource={table} scroll={{ x: 'max-content' }}>
        <Column title="ID" dataIndex="id" fixed="left" id="id" />
        <Column title="Số thẻ thành viên" dataIndex="Sothethanhvien" fixed="left" id="Sothethanhvien" />
        <Column title="Họ và tên" dataIndex="Hovaten" fixed="left" id="Hovaten" />
        <Column title="Ngày sinh" dataIndex="Ngaysinh" id="Ngaysinh" />
        <Column title="Giới tính" dataIndex="Gioitinh" id="Gioitinh" />
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
        <Column title="Rh" dataIndex="Rh" id="Rh" />
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
          title="Tình trạng HĐ" 
          dataIndex="TinhtrangHD" 
          fixed="right"
          id="TinhtrangHD" 
        />
        <Column 
          title="Chọn" 
          fixed="right" 
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

export default TableSearch;