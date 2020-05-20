import React, { useEffect, useState } from 'react'
import '../../../../member/infomation/InformationUser.scss'
import {  Upload, Icon, Avatar } from 'antd'

const AdminInfUser = (props) => {
    const { id, image } = props
    const [animateChangeAvatar, setAnimateChangeAvatar] = useState(0)
    const [avatar, setAvatar] = useState(props.image)
    useEffect(() => {
        setAvatar(props.image)
    }, [props.image])

    const onChooseFile = ({ data, filename, file }) => {
        setAvatar(URL.createObjectURL(file))
        // this.setState({ data, filename, file, profile: this.state.profile })
        props.setFile({ data, filename, file, id })
    }
    return (
        <div style={{ width: "100%" }}>
            {
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
            }
        </div>
    )
}
export default AdminInfUser;