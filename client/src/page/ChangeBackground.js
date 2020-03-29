import React, { Component, useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import CBH from "../Component/CBH";
import '../css/changeBackground.scss'
import { getAllBackground } from '../api/base/background'
const ChangeBackground = () => {
    const { nameMap, setNameMap, setLoading } = useContext(HomepageContext)
    const [cover, setCover] = useState(null)

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
    return (
        <div className="para">
            <button className="addBackground" onClick={() => setCount(1)}>Thêm background</button>
            {
                arr
            }
        </div>
    )
}

export default ChangeBackground