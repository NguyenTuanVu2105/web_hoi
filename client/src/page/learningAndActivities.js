
import '../css/LearningAndActivities.css'
import React, {Component, useContext, useEffect} from 'react'
import HomepageContext from "../context/HomepageContext";

function LearningAndActivities(props){

    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            '': 'Trang chủ',
            ['/learn']: 'Học tập và hoạt động'
        })
    }, [])
    

    return (
        <div>

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
                    <div className='row'>
                        <label>Năm học:</label>
                        <label>Kỳ học:</label>
                        <label>Lý do khen thưởng:</label>
                    </div>
                </fieldset>
            </div>
            <div>
                <h3>Hoạt động</h3>
                <div>
                    <label for="" className="label">Trực thuộc chi hội:</label><br />
                    <label for="" className="label">Trực thuộc đội:</label><br />
                    <label for="" className="label">Ngày vào hội:</label><br />
                    <label for="" className="label">Chức vụ:</label><br />
                    <label for="" className="label">Bậc chuyên môn:</label>
                </div>
                <fieldset>
                    <legend>Khen thưởng:</legend>
                    {/* <div className='row'>
                            <label>Năm học:</label>
                            <label>Kỳ học:</label>
                            <label>Lý do khen thưởng:</label>
                        </div> */}
                </fieldset>
            </div>

        </div>
    )
}

export default LearningAndActivities;