import React, { Component, useEffect, useState } from 'react'
import '../css/style.css';
import '../css/InformationUser.scss'
import { Radio, Form, Upload, Icon, message, Avatar } from 'antd'

const InformationUser = (props) => {
    const { sttv, hovaten, ngaysinh, gioitinh, image } = props
    const [animateChangeAvatar, setAnimateChangeAvatar] = useState(0)
    const [avatar, setAvatar] = useState(props.image)
    useEffect(() => {
        setAvatar(props.image)
    }, [props.image])

    const onChooseFile = ({ data, filename, file }) => {
        setAvatar(URL.createObjectURL(file))
        // this.setState({ data, filename, file, profile: this.state.profile })
        props.setFile({ data, filename, file })
    }
    return (
        <div>
            {
                <Form action="" method="post" className="information">
                    <fieldset>
                        <legend className="legendA">Thông tin cá nhân</legend>
                        <div className="bodyA">
                            <div className="avatarForMobile" id="image_infor" >
                                <div className="avatar_profile" onMouseEnter={() => { setAnimateChangeAvatar(1) }} onMouseLeave={() => { setAnimateChangeAvatar(0) }}>
                                    <Avatar
                                        size={125}
                                        src={avatar}
                                    />
                                    <div className="change_avatar" style={{ opacity: animateChangeAvatar }}>
                                        <Upload
                                            // link to upload
                                            customRequest={onChooseFile}
                                            // end
                                            accept={".png,.jpg,.jpeg"}
                                            multiple={false}
                                            fileList={[]}
                                        >
                                            <Icon type="camera" theme="filled" className="icon_change_avatar" />
                                            <p style={{ textAlign: "center", color: "white", width: "100%" }}>Thay đổi</p>
                                        </Upload>
                                    </div>
                                </div>
                            </div>
                            <div className="informationUserForMobile">
                                <label className="label_information2">Mã thành viên: </label> {sttv}<br />
                                <label className="label_information2">Họ và tên: </label> {hovaten}<br />
                                <label className="label_information2">Ngày sinh: </label>
                                <input type="date" className="input_information2" defaultValue={ngaysinh} disabled={true} /><br />
                                <label className="label_information2">Giới tính: </label>
                                <Radio.Group disabled={true} value={gioitinh ? 1 : 2} name="radiogroup">
                                    <Radio value={1} style={{ marginLeft: '5px' }} className="radio_information"> Nam </Radio>
                                    <Radio value={2} className="radio_information"> Nữ </Radio>
                                </Radio.Group>
                            </div>
                        </div>
                    </fieldset>
                </Form>
            }
        </div>
    )
}
export default InformationUser;