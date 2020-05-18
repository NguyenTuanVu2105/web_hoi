import React, {useContext, useEffect} from 'react'
import HomepageContext from "../../../../../context/HomepageContext";
import './introduleBloodDisplay.css'

const IntroduleBloodDisplay = () => {
    const { setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/ho-so-to-chuc']: 'Hồ sơ tổ chức',
            ['/gioi-thieu-ve-hoi']: 'Giới thiệu về Hội',
            ['/gioi-thieu-ve-hoi-chi-tiet']: 'Giới thiệu về Hội(Chi tiết)'
        })
    }, [])
    return (
        <div className="para">
            <iframe src="https://drive.google.com/file/d/1jz2hyNr1bMqejn5qTO8wciYRqs3VP6G3/preview"
                    style={{width: "90%", height: "1000px", marginLeft: "5%"}}></iframe>
        </div>
    )
}

export default IntroduleBloodDisplay;