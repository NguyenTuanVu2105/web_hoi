import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
// import {AddUnitChild, ItemUnit} from '../Component/AddUnitChild'
import '../css/SearchItem.css'
const Searchitem = () => {

    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/AddUnit']: 'Tìm kiếm thành viên'
        })
    }, [])

    return (
        <div className = "para searchItem">
            <select>
                <option>Bộ lọc:</option>
                <option>1: hihi</option>
                <option>1: hihi</option>
                <option>1: hihi</option>
            </select>
            <select>
                <option>Tùy chọn hiển thị:</option>
                <option>1: hihi</option>
                <option>1: hihi</option>
                <option>1: hihi</option>
            </select>
            <input></input>
            <button>Tìm kiếm</button>
            <div className='row rowTable'>
                <table className='col-10' border={'1px'}>
                    <tr>
                        <th>
                            STT
                        </th>
                        <th>
                            ID
                        </th>
                        <th>
                            Họ và tên
                        </th>
                        <th>
                            Ngày sinh
                        </th>
                        <th>
                            Giới tính
                        </th>
                        <th>
                            Chức vụ
                        </th>
                        <th>
                            Đội trực thuộc
                        </th>
                        <th>
                            Điện thoại
                        </th>
                    </tr>
                    <tr>
                        <th>
                            1
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                    <tr>
                    <th>
                            2
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Searchitem;