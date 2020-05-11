import React, { useContext, useState } from 'react'
import { Spin } from 'antd';
import '../css/loading.scss'

const Loading = () => {
    return (
        <div className="example">
            <Spin />
        </div>
    )
}
export default Loading;