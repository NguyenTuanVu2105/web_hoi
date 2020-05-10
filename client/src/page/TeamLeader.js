import React, { useContext, useEffect, useState } from 'react'
import HomepageContext from "../context/HomepageContext";
import '../css/TeamLeader.css'
import { getLeaderAll } from '../api/base/leader'

const TeamLeader = () => {

    const { setNameMap, setLoading } = useContext(HomepageContext)
    const [leader, setLeader] = useState([])
    const fetchData = async () => {
        setLoading(true)
        const result = await getLeaderAll()
        setLoading(false)
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

    const HandleOC = (e) => {
        var id = "div-" + e;
        var para = document.getElementById(id);
        var id1 = "a-" + e;
        var para1 = document.getElementById(id1);
        if (para.classList.item(0) === "div-information-close") {
            para.classList.remove("div-information-close");
            para.classList.toggle("div-information-open");
            para1.innerHTML="thu gọn";
        }
        else if (para.classList.item(0) === "div-information-open") {
            para.classList.remove("div-information-open");
            para.classList.toggle("div-information-close");
            para1.innerHTML="Chi tiết>>>";
        }
        
    }
    return (
        <div >
            {
                leader.map((leader, index) => (
                    <div key={"L"+index} className='row borderRadius'>
                        <div className='image'>
                            <img className='img' src={leader.Image}></img>
                        </div>
                        <div className='information1'>
                            <label className="label_information1">Họ tên: {leader.Hovaten}</label><br />
                            <label className="label_information1">Chức vụ: {leader.position.Chucvu}</label><br />
                            <label className="label_information1">Thời gian công tác: {leader.ThoigianHD}</label><br />
                            <div>
                                <div id={"div-" + index} className="div-information-close" style={{ width: "100%", overflow: "hidden", }}>Mô tả: {leader.Ghichukhac}</div>
                                <a id={"a-"+index} className='describe' onClick={() => HandleOC(index)}>Chi tiết>>></a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TeamLeader;