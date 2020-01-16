import React, {Component, useContext, useEffect} from 'react'
import InformationUser from '../Component/InformationUser'
import {formChildren} from '../Component/FormChildren'
import {formChildrenRight} from '../Component/FormChildrenRight'
import HomepageContext from "../context/HomepageContext";
function ProFileLeft(props) {
    const style = {
        padding : '0'
    }
    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            '': 'Trang chủ',
            ['/profile']: 'Hồ sơ cá nhân'
        })
    }, [])
    console.log(nameMap)
    return (
        <div className="row">
            <div className = "col-5">
                <InformationUser />
                {
                    formChildren.map(form => (
                        <form action="" method="post" className="information">
                            <fieldset>
                                <legend>{form.legend}</legend>
                                <div className="row">
                                    <div className="col-4">
                                        {
                                            form.children.map(label => (
                                                <label for="" className="label_information">{label.name}</label>
                                            ))
                                        }
                                    </div>
                                    <div className="col-6">
                                        {
                                            form.children.map(input => (
                                                <input type="text" className="input_information" />
                                            ))
                                        }
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    ))
                }
            </div>
            <div className = "col-5">
                {
                    formChildrenRight.map(form =>(
                        <form action = "" method = "post" className = "information">
                            <fieldset>
                                <legend>{form.legend}</legend>
                                <div className="row">
                                    <div className="col-5" style={style}>
                                        {
                                            form.children.map(label => (
                                                <label for="" className="label_information">{label.name}</label>
                                            ))
                                        }
                                    </div>
                                    <div className="col-6" style={style}>
                                        {
                                            form.children.map(input => (
                                                <input type="text" className="input_information" />
                                            ))
                                        }
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    ))
                }
            </div>
        </div>// row

    )
}
export default ProFileLeft;