import React from "react"
import "./style.scss"
import { Button } from 'antd'
const ButtonBox = ({id,nameButton, onClick, typeButton, htmlType}) =>{
    return(
        <Button 
        id={id}
        className="button-box" 
        onClick={onClick}
        type={typeButton}
        htmlType={htmlType}
        >
            {nameButton}
        </Button>
    )
}

export default ButtonBox;