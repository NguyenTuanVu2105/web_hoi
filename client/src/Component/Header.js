import React, { Component, useState, useEffect } from 'react'
import '../css/Header.css'
import { getAllBackground } from '../api/base/background'


const Header = (props) => {
    const [inf, setInf] = useState(null)
    
    const fetchData = async () => {
        const result = await getAllBackground()
        if (result.data.success) {
            setInf(result.data.data)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='pageHeader' style={props} >            
            <div  className="informationImg" style={{backgroundColor:`${inf.Maunen}`}}>                
                <div>      
                    <label name="time" className="labelHeader" style={{color:`${inf.Mauchu}`}}>Tên chương trình:</label><br />               
                    <label name="name" className="labelHeader" style={{color:`${inf.Mauchu}`, fontSize:26}}> <a href={inf.Linkanh} style={{color:`${inf.Mauchu}`}} target="blank">{inf.Tenchuongtrinh}</a></label><br />
                    <label name="time" className="labelHeader" style={{color:`${inf.Mauchu}`}}>Ngày diễn ra: {inf.Ngaydienra}</label><br />
                    <label name="place" className="labelHeader" style={{color:`${inf.Mauchu}`}}>Địa điểm tổ chức: {inf.Diadiem}</label><br />                    
                </div>
            </div>
            <div>
                <div className="triangleImg" style={{borderLeft:`60px solid ${inf.Maunen}`}}/>
                <div className="backgroundCover"/>
            </div>            
        </div>
    )
}
export default Header;