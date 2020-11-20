import './style.scss'
import React, { useContext, useEffect} from 'react'
import HomepageContext from "../../../context/HomepageContext";

const TestUnit = () =>{
    const { setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ', 
            ['/kiem-tra-danh-gia']: 'Kiểm tra',
        })
    }, [])
    return(
        <div className="para-unit-profile">
            <iframe src="https://hoimau.herokuapp.com/login" title="thi"width="100%" height="500px"></iframe>
        </div>
    )
}

export default TestUnit;

