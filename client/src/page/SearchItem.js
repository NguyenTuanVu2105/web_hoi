import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
// import {AddUnitChild, ItemUnit} from '../Component/AddUnitChild'
import '../css/SearchItem.css'
const Searchitem = () => {

    const {setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/AddUnit']: 'Tìm kiếm thành viên'
        })
    }, [])

    return (
        <div className = "para searchItem">
            <form className='row menuSearch'>
                <select className = 'col-2 selectSearch'>
                    <option className = 'optionSearch'>Bộ lọc</option>
                    <option>1: hihi</option>
                    <option>1: hihi</option>
                    <option>1: hihi</option>
                </select>
                <select className = 'col-2'>
                    <option>Tùy chọn hiển thị</option>
                    <option>1: hihi</option>
                    <option>1: hihi</option>
                    <option>1: hihi</option>
                </select>
                <input className = 'col-6'/>
                <input type = 'submit' value='Tìm kiếm' className = 'col-1'/>
                <input type = 'submit' value='Hủy' className = 'col-1'/>
            </form>
            
            <div className='row'>
                <table className='col-12' border={'1px'}>
                    <tr>
                        <th className = 'SI SISTT'>
                            STT
                        </th>
                        <th className = 'SI SIID'>
                            ID
                        </th>
                        <th className = 'SI SIname'>
                            Họ và tên
                        </th>
                        <th className = 'SI SIdate'>
                            Ngày sinh
                        </th>
                        <th className = 'SI SIsex'>
                            Giới tính
                        </th>
                        <th className = 'SI SIposition'>
                            Chức vụ
                        </th>
                        <th className = 'SI SIC'>
                            Đội trực thuộc
                        </th>
                        <th className = 'SI SIphone'>
                            Điện thoại
                        </th>
                    </tr>
                    <tr>
                        <th className = 'SIchild'>
                            1
                        </th>
                        <th className = 'SIchild'>
                            2019.2702.01.001
                        </th>
                        <th className = 'SIchild'>
                            CHỬ NHẤT HỢP
                        </th>
                        <th className = 'SIchild'>
                            07/04/1985
                        </th>
                        <th className = 'SIchild'>
                            Nam
                        </th>
                        <th className = 'SIchild'>
                            Chủ tịch
                        </th>
                        <th className = 'SIchild'>
                            Đội Máu Công Đoàn
                        </th>
                        <th className = 'SIchild'>
                            113
                        </th>
                    </tr>
                    <tr>
                        <th className = 'SIchild'>
                            2
                        </th>
                        <th className = 'SIchild'>
                            2019.0512.01.001
                        </th>
                        <th className = 'SIchild'>
                            NGUYỄN VĂN HUYẾN
                        </th>
                        <th className = 'SIchild'>
                            24/01/1998
                        </th>
                        <th className = 'SIchild'>
                            Nam
                        </th>
                        <th className = 'SIchild'>
                            Thường trực
                        </th>
                        <th className = 'SIchild'>
                            Đội Máu Ocean
                        </th>
                        <th className = 'SIchild'>
                            114
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Searchitem;