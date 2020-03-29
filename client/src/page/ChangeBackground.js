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
    const [count, setCount] = useState(10)

    const arr = []
    const arr1 = []
    const arr2 = []
    var temp = 0
    for (var i = 1; i <= count; i++) {
        arr1.push(<CBH id={i} />)
        temp +=1
        if(temp % 5==0){
            arr.push(
                <div id={"id-"+ i}>
                    {
                        arr1
                    }
                </div>
            )
            arr2.push(
                <a className="pagination-a" id={"a-"+i} href={"#id-"+i}>{i/5}</a>
            )      
        }
    }

    return (
        <div className="para">
            <button className="addBackground" onClick={() => setCount(1)}>Thêm background</button>
            {
                arr
            }
            <div class="container">
                <div class="pagination">
                    <a className="pagination-a" href="#">&laquo;</a>
                    {/* <a className="pagination-a active" href="#">1</a> */}
                    {
                        arr2
                    }
                    <a className="pagination-a" href="#">&raquo;</a>
                </div>
            </div>

        </div>
    )
}

export default ChangeBackground;