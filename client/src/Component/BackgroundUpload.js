import React, { Component, useEffect, useState } from 'react'
import { Form, Upload, Icon } from 'antd'

const BackgroundUpload = props => {
    const onChooseFile = ({ data, filename, file }) => {
        props.setFile({ data, filename, file })
    }

    return (
        <div>
            <Upload
                // link to upload
                customRequest={onChooseFile}
                // end
                accept={".png,.jpg,.jpeg"}
                multiple={false}
                fileList={[]}
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 10 }}><label className="changeColor">Tải ảnh lên: </label>
                <Icon style={{ marginLeft: 5 }} type="camera" theme="filled" className="icon_change_avatar" /></div>
                {/* <p style={{ textAlign: "center", color: "white", width: "100%" }}>Thay đổi</p> */}
            </Upload>
        </div>
    )
}

export default BackgroundUpload