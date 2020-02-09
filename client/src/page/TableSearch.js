import React, { Component,useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { Table } from 'antd';
import '../css/SearchItem.css'
import { Modal, Button } from 'antd';
import { Select } from 'antd';
import {TableSearchList, CheckBoxLeft, CheckBoxRight} from '../Component/TableSearchList'
import { Input } from 'antd';



const columns = [
  {
    title: 'STT',
    dataIndex: 'STT',
    fixed:'left'
  },
  {
    title: 'ID',
    dataIndex: 'ID',
    fixed:'left'
  },
  {
    title: 'Họ và tên',
    dataIndex: 'name',
    fixed:'left'
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
    title: 'Đội trực thuộc',
    dataIndex: 'team',
  },
  {
    title: 'Điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Action',
    dataIndex: 'aAction',
    fixed:'right',
    // filters: [{ text: 'on', value: 'on' }, { text: 'off', value: 'off' }],
    // onFilter: (value, record) => {
    //   return record.aAction === value
    // },
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
    aAction: i%2?"on":"off"
  });
}

const TableSearch = () =>{
  const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/TableSearch']: 'Tìm kiếm thành viên'
        })
    }, [])

    // tùy chọn hiển thị 
    const [Visible, setVisible] = useState(false)
    
      const showModal = () => {
        setVisible(true)
      };
    
      const handleOk = e => {
        console.log(e);
        setVisible(false)
      };
    
      const handleCancel = e => {
        console.log(e);
        setVisible(false)
      };

      // select nhom mau và Rh 
      const { Option } = Select;

      function handleChange(value) {
        console.log(`selected ${value}`);
      }

      // search
      const { Search } = Input;


  return(
    <div className = "para searchItem">
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

        
        <div className="offset-8">
          <Search
            placeholder="Họ và tên..."
            onSearch={value => console.log(value)}
            style={{ width: 200, height: 30, margin :20 }}
          />
          <Select defaultValue="All" style={{ width: 110,height:30 }} onChange={handleChange}>
            <Option value="All">Nhóm máu</Option>
            <Option style={{ textAlign: "center" }} value="O">O</Option>
            <Option style={{ textAlign: "center" }}value="A">A</Option>
            <Option style={{ textAlign: "center" }}value="B">B</Option>
            <Option style={{ textAlign: "center" }}value="AB">AB</Option>
          </Select>
        </div>
      </form>
      <Table columns={columns} dataSource={data}  scroll={{x: 'max-content' }} />
    </div>
    
  )
}

export default TableSearch;