import React, {  useEffect, useState } from 'react'
import './InformationUser.scss'
import { Radio, Form, Upload, Icon, Avatar } from 'antd'
const InformationUser = (props) => {
    const { sttv, hovaten, ngaysinh, gioitinh, giotmau, image } = props
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
    
    
    // const arr = []
    // const n = 3 
    // for (var i = 1; i <= 5; i++) {
    //     if (i <= n) {
    //         arr.push(
    //             <div className="icon-blood"></div>
    //         )
    //     }
    //     else {
    //         arr.push(
    //             <div className="icon-blood-1"></div>
    //         )
    //     }
    // }


    return (
        <div>
            {
                <Form action="" method="post" className="information">
                    <div>
                        <div id="thong-tin-ca-nhan" className="title-profile-s">Thông tin cá nhân</div>
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
                                    {/* <div className="icon-position">
                                        <div className="icon-position-div">
                                            {
                                                arr
                                            }
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="informationUserForMobile">
                                <label className="label-profile-s-2">Mã thành viên: </label> {sttv}<br />
                                <label className="label-profile-s-2">Họ và tên: </label> {hovaten}<br />
                                {/* <label className="label_information2">giotmau: </label> {giotmau}<br /> */}
                                <label className="label-profile-s-2">Ngày sinh: </label>
                                <input type="date" className="input_information2" defaultValue={ngaysinh} disabled={true} /><br />
                                <label className="label-profile-s-2">Giới tính: </label>
                                <Radio.Group disabled={true} value={gioitinh ? 1 : 2} name="radiogroup">
                                    <Radio value={1} style={{ marginLeft: '5px' }} className="radio_information"> Nam </Radio>
                                    <Radio value={2} className="radio_information"> Nữ </Radio>
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </Form>
            }
        </div>
    )
}
export default InformationUser;