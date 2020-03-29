import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import CBH from "../Component/CBH";
import '../css/changeBackground.scss'
import { getAllBackground } from '../api/base/background'
import InfiniteScroll from 'react-infinite-scroll-component'
const ChangeBackground = () => {
    const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)
    const [cover, setCover] = useState([])

    const fetchData = async () => {
        setLoading(true)
        const result = await getAllBackground()
        setLoading(false)
        if (result) {
            if (result.data.success) {
                setCover(result.data.data)
            }
        }
    }

    useEffect(() => {
        fetchData()
        setNameMap({
            ['/']: 'Trang chủ',
            ['/HistoryBlood']: 'Change Background',
        })
    }, [])
    const [count, setCount] = useState(0)

    const arr = []
    for (let i = 0; i < count; i++) {
        arr.push(<CBH id={i} />)
    }
    console.log(cover.length)
    return (
        <div className="para">
            <button className="addBackground" onClick={() => setCount(1)}>Thêm background</button>
            {
                arr
            }
            <InfiniteScroll
                dataLength={cover.length}
            >
            {
                cover.map((data, index) => (
                    <div className='pageHeader' id={data.id} style={{ marginBottom: 30 }}>
                        <div className="informationImg" style={{ backgroundColor: `${data.Maunen}` }}>
                            <div>
                                <label name="time" className="labelHeader" style={{ color: `${data.Mauchu}` }}>Tên chương trình:</label><br />
                                <label name="name" className="labelHeader" style={{ color: `${data.Mauchu}`, fontSize: 26 }}>
                                    <a href={data.Linkchuongtrinh} style={{ color: `${data.Mauchu}` }} target="blank">
                                        {data.Tenchuongtrinh}
                                    </a>
                                </label><br />
                                <label name="time" className="labelHeader" style={{ color: `${data.Mauchu}` }}>
                                    Ngày diễn ra: {data.Ngaydienra} - {data.Ngayketthuc}
                                </label><br />
                                <label name="place" className="labelHeader" style={{ color: `${data.Mauchu}` }}>
                                    Địa điểm tổ chức: {data.Diadiem}
                                </label><br />
                                <a className="doiBackground" data-toggle="modal" data-target={'#modalBackground' + data.id}> 
                                    Changebackground >>>
                                </a>
                            </div>
                        </div>
                            
                        <div>
                            <div className="triangleImg" style={{ borderLeft: `60px solid ${data.Maunen}` }}></div>
                            <div name="linkAnh" className="backgroundCover" style={{ backgroundImage: `url(${data.Linkanh})` }}></div>
                        </div>
                    </div>
                ))
            }
            </InfiniteScroll>
        </div>
    )
}

export default ChangeBackground