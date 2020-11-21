import './style.scss'
import React, { useContext, useEffect} from 'react'
import HomepageContext from "../../../context/HomepageContext";
import ButtonBox from "../../../components/buttonBox";
import { Input, Form, } from 'antd'
const ExamManagement = () =>{
    const { setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ', 
            ['/kiem-tra-danh-gia']: 'Kiểm tra',
        })
    }, [])
    const handleSubmit = (e)=>{
        e.preventDefault();
        // document.getElementById("linkExam").value()
        console.log(document.getElementById("linkExam").value)
    }
    return(
        <div className="para-exam-management">
            <Form onSubmit={handleSubmit} className="row">          
                <Input id = "linkExam" type="text" title="Link" placeholder="link..." />
                <div className="border-button">
                    <ButtonBox nameButton="Thay đổi" htmlType="submit"/>
                </div>
            </Form>
        </div>
    )
}

export default ExamManagement;