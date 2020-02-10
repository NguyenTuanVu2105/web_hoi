import React, { Component, useState, useContext, useEffect } from 'react'
import '../css/signIn.css'

const signIn = () => {
    return (
        <div>
            <div className="test"></div>
            <div className="para-e">
                <div className="hihi">

                    <div className="child-e">
                        <div className="circle-blood">
                            <div className="mau"></div>
                        </div>
                        <form action="" className="sign-in-form">
                            <div className="child-form">
                                <i className="fa fa-user icon-fa" style={{ fontSize: 40}}/><input className="child-input" type="text" placeholder="ID" />
                            </div>
                            <div className="child-form">
                                <i className="fa fa-lock icon-fa" style={{ fontSize: 40}} />
                                <input className="child-input" type="password" placeholder="Password" />
                            </div>
                            <div className="child-form" style={{justifyContent: 'center'}}>
                                <button>Sign-in</button>
                            </div>
                            <div className="unknown-name">
                                <input type="checkbox" name="" id="R-e" value="" /> <label for="R-e">Remmember me</label>
                                <a href="">Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default signIn;