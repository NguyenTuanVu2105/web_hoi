import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
import {AddUnitChild, ItemUnit} from '../Component/AddUnitChild'
import '../css/AddUnit.css'
const AddUnit = () => {

    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/AddUnit']: 'Thêm đơn vị'
        })
    }, [])

    return (
        <div className = "para">
            {
                AddUnitChild.map(label => (
                    <div>
                        <span className = "spanLabel">{label.name}</span><br />                         
                    </div>
                ))
            }
            <div className='col-12'>
            <span className = "spanLabel">Thành viên hiện tại:</span>
            </div>
            <div className='row rowTable'>
                <table className='col-5' border={'1px'}>
                    <tr>
                        <th>
                            Cảm tình viên
                            </th>
                        <th>
                            1
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Tình nguyện viên
                        </th>
                        <th>2</th>
                    </tr>
                    <tr>
                        <th>
                            Hội viên
                        </th>
                        <th>3</th>
                    </tr>
                </table>

                <table className='col-5' border={'1px'}>
                    <tr>
                        <th>
                            Hướng dẫn viên/Cán bộ tăng cường
                        </th>
                        <th>1</th>
                    </tr>
                    <tr>
                        <th>
                            Huấn luyện viên
                        </th>
                        <th>2</th>
                    </tr>
                    <tr>
                        <th>
                            Cán bộ
                        </th>
                        <th>3</th>
                    </tr>
                </table>
            </div>
            <div>
                <span className = "spanLabel">Số cơ sở trực thuộc Hội:</span><br/>
                {
                    ItemUnit.map(name =>(
                        <div style={{paddingLeft:'20px'}}>
                            <a>{name.name}</a><br/>
                        </div>
                    ))
                }
            </div>
            <span className = "spanLabel">Tổng số thành viên:</span><br/>
            <span className = "spanLabel">Điểm hiến máu thường xuyên tổ chức:</span><br/>
            <span className = "spanLabel">Kết quả hoạt động:</span>
            <div></div>
        </div>
    )
}

export default AddUnit;