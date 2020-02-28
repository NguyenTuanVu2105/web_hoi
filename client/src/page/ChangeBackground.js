import React, { Component, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import CBH from "../Component/CBH";

const ChangeBackground = () => {
    const { nameMap, setNameMap } = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/HistoryBlood']: 'Change Background',
        })
    }, [])
    return (
        <div className="para">
            <CBH/>
            <CBH/>
            <CBH/>
        </div>
    )
}

export default ChangeBackground;