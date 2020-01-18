import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
import {TeamLeaderList} from '../Component/TeamLeaderList'
import '../css/TeamLeader.css'

const TeamLeader = () =>{

    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            '': 'Trang chủ',
            ['/TeamLeader']: 'Lãnh đạo qua các thời kỳ'
        })
    }, [])

    return (
        <div >
            {
                TeamLeaderList.map(leader =>(
                    <div className = 'row borderRadius'>
                        <div className = 'col-2 image'>
                            <div className = 'img'></div>
                        </div>
                        <div className = 'col-9 information'>
                            <label className="label_information1">Họ tên: {leader.name}</label><br/>
                            <label className="label_information1">Chức vụ: {leader.position}</label><br/>
                            <label className="label_information1">Thời gian công tác: {leader.time}</label><br/>
                            <label className="label_information1">Mô tả: {leader.describe}</label><br/>
                            <a className='describe' href = ''>Chi tiết>>></a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TeamLeader;