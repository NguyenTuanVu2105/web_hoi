
import '../css/LearningAndActivities.css'
import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";
import {learningAndActivities} from '../Component/learningAndActivities'
function LearningAndActivities(props){

    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/learn']: 'Học tập và hoạt động'
        })
    }, [])
    
    const style = {
        paddingLeft : '15px'
    }
    return (
        <div className = "para">

            <div>
                <h3>Học tập</h3>
                <form action="" method="post" className="">
                    <div className="row">
                        <div className="col-6">
                            <label for="" className="label_information">Trường:</label>
                            <input type="text" className="input_information" /> <br />
                            <label for="" className="label_information">Lớp:</label>
                            <input type="text" className="input_information" />
                        </div>
                        <div className="col-6">
                            <label for="" className="label_information">Ngành:</label>
                            <input type="text" className="input_information" /> <br />
                            <label for="" className="label_information">Kết quả học tập:</label>
                            <input type="text" className="input_information" />
                        </div>
                    </div>
                </form>
                <fieldset>
                    <legend>Khen thưởng:</legend>
                    <table style = {{width :'40%'}} >
                        <tr className='row'>
                            <th className='col-4'>Năm học:</th>
                            <th className='col-4'>Kỳ học:</th>
                            <th className='col-4'>Lý do khen thưởng:</th>
                        </tr>
                    </table>
                </fieldset>
            </div>
            <div>
                <h3>Hoạt động</h3>
                {
                    learningAndActivities.map(label => (
                        <div className="activities">
                            <label for=""className="label_information">{label.label}</label><br />
                        </div>
                    ))
                }
                <fieldset>
                    <legend>Khen thưởng:</legend>
                    
                </fieldset>
            </div>

        </div>
    )
}

export default LearningAndActivities;