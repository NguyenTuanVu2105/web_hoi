import React, { Component } from 'react'
import {TeamLeaderList} from '../Component/TeamLeaderList'
import '../css/TeamLeader.css'

const TeamLeader = () =>{
    return (
        <div>
            {
                TeamLeaderList.map(leader =>(
                    <div className = 'row borderRadius'>
                        <div className = 'col-2 image'>
                            <div className = 'img'></div>
                        </div>
                        <div className = 'col-9 information'>
                            <label>Họ tên: {leader.name}</label><br/>
                            <label>Chức vụ: {leader.position}</label><br/>
                            <label>Thời gian công tác: {leader.time}</label><br/>
                            <label>Mô tả: {leader.describe}</label><br/>
                            <a className='describe' href = ''>Chi tiết>>></a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TeamLeader;