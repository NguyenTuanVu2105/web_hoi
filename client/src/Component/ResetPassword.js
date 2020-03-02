import React, { useContext, useState } from 'react'
import '../css/ResetPassword.css'


const ResetPassword = () => {
  

  return (
    <div className="Body">
          <form className="borderContent">

            
            <div style={{ width: 240, margin:'0 auto'}}>
            <div className="logomauI"/>
            <input className="password" type="password" placeholder="New Password"/><br/>
            <input className="password" type="password" placeholder="New Password"/><br/>
            <button className="button-submit">submit</button>
            </div>
            
          </form>
    </div>
  )
}

export default ResetPassword;

