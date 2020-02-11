import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { Table } from 'antd';
import '../css/TableSearch.css'
import { Modal, Button } from 'antd';
import { Select } from 'antd';
import { TableSearchList, CheckBoxLeft, CheckBoxRight } from '../Component/TableSearchList'
import { Input } from 'antd';



const columns = [
  {
    title: 'STT',
    dataIndex: 'STT',
    fixed: 'left'
  },
  {
    title: 'ID',
    dataIndex: 'ID',
    fixed: 'left'
  },
  {
    title: 'Họ và tên',
    dataIndex: 'name',
    fixed: 'left'
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'date',
  },
  {
    title: 'Giới tính',
    dataIndex: 'sex',
    // filters: [{ text: 'Nam', value: 'nam' }, { text: 'Nữ', value: 'nữ' }],
    // onFilter: (value, record) => {
    //   return record.aAction === value
    // },
  },
  {
    title: 'Chức vụ',
    dataIndex: 'position',
  },
  {
    title: 'Bậc chuyên môn',
    dataIndex: 'position',
  },
  {
    title: 'CCCD/HC',
    dataIndex: 'position',
  },
  {
    title: 'Ngày cấp',
    dataIndex: 'position',
  },
  {
    title: 'Nơi cấp',
    dataIndex: 'position',
  },
  {
    title: 'Điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'phone',
  },
  {
    title: 'link Facebook',
    dataIndex: 'phone',
  },
  {
    title: 'Quê quán',
    dataIndex: 'phone',
  },
  {
    title: 'Địa chỉ liên lạc',
    dataIndex: 'phone',
  },
  {
    title: 'Chi hội trực thuộc',
    dataIndex: 'phone',
  },
  {
    title: 'Đội trực thuộc',
    dataIndex: 'team',
  },
  {
    title: 'Nhóm máu',
    dataIndex: 'phone',
  },
  {
    title: 'RH(D)',
    dataIndex: 'phone',
  },
  {
    title: 'Số lần hiến máu',
    dataIndex: 'phone',
  },
  {
    title: 'Ngày vào Hội',
    dataIndex: 'phone',
  },
  {
    title: 'Thời gian hoạt động hội',
    dataIndex: 'phone',
  },
  {
    title: 'Thông tin liên lạc gia đình',
    dataIndex: 'phone',
  },
  {
    title: 'Đơn vị học tập/Công tác',
    dataIndex: 'phone',
  },
  {
    title: 'Lớp/Đơn vị cụ thể',
    dataIndex: 'phone',
  },
  {
    title: 'Kết quả học tập tích lũy',
    dataIndex: 'phone',
  },
  {
    title: 'Đảng viên/Đoàn viên',
    dataIndex: 'phone',
  },
  {
    title: 'Action',
    dataIndex: 'aAction',
    fixed: 'right',
    // filters: [{ text: 'on', value: 'on' }, { text: 'off', value: 'off' }],
    // onFilter: (value, record) => {
    //   return record.aAction === value
    // },
  },
  {
    title: 'Delete',
    dataIndex: 'aAction',
    fixed:'right'
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    STT: i,
    ID: `2019.2702.01.00${i}`,
    key: i,
    name: `NGo Thai Son vu vuong${i}`,
    date: `07/04/198${i}`,
    sex: 'Nam',
    position: `hihi${i}`,
    team: 'hihihihi',
    phone: `123456789${i}`,
    aAction: i % 2 ? "on" : "off"
  });
}

const TableSearch = () => {
  const { nameMap, setNameMap } = useContext(HomepageContext)
  useEffect(() => {
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

      <Table columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
    </div>

  )
}

export default TableSearch;