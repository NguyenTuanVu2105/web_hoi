import React, { Component, useEffect, useState } from 'react'
import { Form, Upload } from 'antd'

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
                <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 10 }}>
                    <label className="changeColor">Tải ảnh lên: </label>
                    <button>
                        Choose File
                    </button>
                </div>
            </Upload>
        </div>
    )
}

export default BackgroundUpload