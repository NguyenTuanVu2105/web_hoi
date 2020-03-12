import React, { Component,useState, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import CBH from "../Component/CBH";
import '../css/changeBackground.css'
const ChangeBackground = () => {
    const { nameMap, setNameMap } = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/HistoryBlood']: 'Change Background',
        })
    }, [])
    const [count, setCount] = useState(0)

    const arr = []
    for (var i = 0; i<count;i++){
        arr.push(<CBH/>)
    }
    return (
        <div className="para">
            <button className="addBackground" onClick={()=>setCount(count + 1)}>Thêm background</button>
            {
                arr
            }
        </div>
    )
}

export default ChangeBackground;