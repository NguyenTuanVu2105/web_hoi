import React, { useContext, useEffect, useState} from 'react'
import HomepageContext from "../context/HomepageContext";
import '../css/TeamLeader.css'
import { getLeaderAll } from '../api/base/leader'

const TeamLeader = () =>{

    const {nameMap, setNameMap} = useContext(HomepageContext)
    const [leader, setLeader] = useState([])
    const fetchData = async () => {
        const result = await getLeaderAll()
        if (result.success) {
            setLeader(result.data.data)
        }
    }
    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/OrganizationalRecords']: 'Hồ sơ tổ chức',
            ['/TeamLeader']: 'Lãnh đạo qua các thời kỳ'
        })
    }, [])

    console.log(leader)

    return (
        <div >
            {
                leader.map(leader =>(
                    <div className = 'row borderRadius'>
                        <div className = 'image'>
                            <img className='img' src={leader.Image}></img>
                        </div>
                        <div className = 'information'>
                            <label className="label_information1">Họ tên: {leader.Hovaten}</label><br/>
                            <label className="label_information1">Chức vụ: {leader.position.Chucvu}</label><br/>
                            <label className="label_information1">Thời gian công tác: {leader.ThoigianHD}</label><br/>
                            <div>
                                <label className="label_information1">Mô tả: {leader.Ghichukhac}</label><br/>
                                <a className='describe' href = ''>Chi tiết>>></a>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TeamLeader;