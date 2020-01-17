import React, { Component } from 'react'
import {AddUnitChild} from '../Component/AddUnitChild'
const AddUnit = () => {


    return (
        <div>
            {
                AddUnitChild.map(label => (
                    <div>
                        <label>{label.name}</label><br />
                    </div>
                ))
            }
            <div className='col-12'>
                thành viên hiện tại
            </div>
            <div className='row'>


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
            <div>Tổng số thành viên:</div>
            <span>Điểm hiến máu thường xuyên tổ chức:</span><br/>
            <span>Kết quả hoạt động:</span>
            <div></div>
        </div>
    )
}

export default AddUnit;