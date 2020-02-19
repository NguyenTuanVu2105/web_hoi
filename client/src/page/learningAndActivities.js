
import '../css/LearningAndActivities.css'
import React, { Component, useContext, useEffect } from 'react'
import HomepageContext from "../context/HomepageContext";
import { learningAndActivities } from '../Component/learningAndActivities'
function LearningAndActivities(props) {

    const { nameMap, setNameMap } = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/learn']: 'Học tập và hoạt động'
        })
    }, [])

    const style = {
        paddingLeft: '15px'
    }
    return (
        <div className="para">

            <div>
                <h3>Học tập</h3>
                <form action="" method="post" className="">
                    <div className="row">
                        <div className="col-6">
                            <label for="" className="label_information">Trường:</label>
                            <input type="text" className="input_LAA" /> <br />
                            <label for="" className="label_information">Lớp:</label>
                            <input type="text" className="input_LAA" />
                        </div>
                        <div className="col-6">
                            <label for="" className="label_information">Ngành:</label>
                            <input type="text" className="input_LAA" /> <br />
                            <label for="" className="label_information">Kết quả học tập:</label>
                            <input type="text" className="input_LAA" />
                        </div>
                    </div>
                    <fieldset>
                    <legend className="legendA">Khen thưởng:</legend>
                    <table style={{width:'100%'}}>
                        <tr className='row '>
                            <th className='col-4'>Năm học</th>
                            <th className='col-4'>Kỳ học</th>
                            <th className='col-4'>Lý do khen thưởng</th>
                        </tr>
                        <tr className='row'>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                        </tr>
                        <tr className='row'>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                        </tr>
                        <tr className='row'>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                        </tr>
                        <tr className='row'>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                        </tr>
                        <tr className='row'>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                        </tr>
                        <tr className='row'>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><input type="number" className="input_LAA1" /></th>
                            <th className='col-4'><textarea rows="1" className="input_LAA1" /></th>
                        </tr>
                    </table>
                </fieldset>
                </form>
            </div>
            <div>
                <h3>Hoạt động</h3>
                {
                    learningAndActivities.map(label => (
                        <div className="activities">
                            <label for="" className="label_information">{label.label}</label><br />
                        </div>
                    ))
                }
                <fieldset>
                    <legend className="legendA">Khen thưởng:</legend>

                </fieldset>
            </div>
            <div className="DivLAA">
                <button className="buttonLAA">Submit</button>
            </div>
        </div>
    )
}

export default LearningAndActivities;