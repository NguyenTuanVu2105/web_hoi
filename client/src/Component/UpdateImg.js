import React, { Component, useEffect, useState } from 'react'
import { Upload, Icon, message } from 'antd'
import { getAvatar, uploadAvatar } from '../api/base/profile'

const Avatar = (props) => {
    const {avt} = props
    const [avatar, setAvatar] = useState(null)
    
    const fetchData = async () => {
        const result = await getAvatar(avt)
        console.log(result.data)
        // if (result.success) {
        //     setAvatar(result.data)
        // }
    }

    useEffect(() => {
        fetchData()
    }, [avt])

    return (
        <Upload
            listType="picture-card"
        >
            <img src={avatar} alt="avatar" style={{ width: '100%' }} />
        </Upload>
    )
}

export default Avatar;
