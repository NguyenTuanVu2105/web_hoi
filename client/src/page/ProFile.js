import React, {Component, useContext, useEffect} from 'react'
import InformationUser from '../Component/InformationUser'
import {formChildren} from '../Component/FormChildren'
import {formChildrenRight} from '../Component/FormChildrenRight'
import HomepageContext from "../context/HomepageContext";

function ProFileLeft(props) {
    const {nameMap, setNameMap} = useContext(HomepageContext)
    useEffect(() => {
        setNameMap({
            ['/']: 'Trang chủ',
            ['/profile']: 'Hồ sơ cá nhân'
        })
    }, [])
    const style = {
        textAlign:'end',
        width : '32%'
    }
    console.log(nameMap)
    return (
        <div className="row">
            <div className = "col-5 offset-1">
                <InformationUser />
                {
                    formChildren.map(form => (
                        <form action="" method="post" className="information">
                            <fieldset>
                                <legend>{form.legend}</legend>
                                        {
                                            form.children.map(label => (
                                                <div>
                                                    <label for="" style={style} className="label_information">{label.name}</label>
                                                    <input type="text" className="input_information" />
                                                </div>
                                                
                                            ))
                                        }
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
                                        {
                                            form.children.map(label => (
                                                <div>
                                                    <label for="" style={style} className="label_information">{label.name}</label>
                                                    <input type="textarea" className="input_information" />
                                                </div>                                 
                                            ))
                                        }
                            </fieldset>
                        </form>
                    ))
                }
            </div>
        </div>// row

    )
}
export default ProFileLeft;