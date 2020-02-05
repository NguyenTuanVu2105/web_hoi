import React, { Component, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { Table } from 'antd';
import '../css/SearchItem.css'

const columns = [
  {
    title: 'STT',
    dataIndex: 'STT',
  },
  {
    title: 'ID',
    dataIndex: 'ID',
  },
  {
    title: 'Họ và tên',
    dataIndex: 'name',
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'date',
  },
  {
    title: 'Giới tính',
    dataIndex: 'sex',
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
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    STT: i,
    ID: `2019.2702.01.00${i}`,
    key: i,
    name: `hihi ${i}`,
    date: `07/04/198${i}`,
    sex: 'Nam',
    position: `hihi${i}`,
    team: 'hihihihi',
    phone: `123456789${i}`
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

  return(
    <div className = "para searchItem">
      <form className='row menuSearch'>
        <select className='col-2 selectSearch'>
          <option className='optionSearch'>Bộ lọc</option>
          <option>1: hihi</option>
          <option>1: hihi</option>
          <option>1: hihi</option>
        </select>
        <select className='col-2'>
          <option>Tùy chọn hiển thị</option>
          <option>1: hihi</option>
          <option>1: hihi</option>
          <option>1: hihi</option>
        </select>
        <input className='col-6' />
        <input type='submit' value='Tìm kiếm' className='col-1' />
        <input type='submit' value='Reset' className='col-1' />
      </form>
      <Table columns={columns} dataSource={data} />
    </div>
    
  )
}

export default TableSearch;