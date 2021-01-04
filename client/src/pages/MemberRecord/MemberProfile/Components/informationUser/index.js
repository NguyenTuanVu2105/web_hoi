import React, { useEffect, useState } from "react";
import "./style.scss";
import { Radio, Form, Upload, Icon, Avatar } from "antd";
const InformationUser = (props) => {
  const {
    sttv,
    hovaten,
    ngaysinh,
    gioitinh,
    giotmau,
    image,
    SolanHM,
    Nhommau,
    rhD,
    donvi,
    donvicuthe,
    doanviendangvien,
    trinhdohocvan,
    email,
    sdt,
    cmtorhc,
    linkfb,
    diachi,
  } = props;
  const [animateChangeAvatar, setAnimateChangeAvatar] = useState(0);
  const [avatar, setAvatar] = useState(props.image);
  useEffect(() => {
    setAvatar(props.image);
  }, [props.image]);

  const onChooseFile = ({ data, filename, file }) => {
    setAvatar(URL.createObjectURL(file));
    // this.setState({ data, filename, file, profile: this.state.profile })
    props.setFile({ data, filename, file });
  };

  return (
    <div>
      {
        <Form action="" method="post" className="information">
          {/* <div id="thong-tin-ca-nhan" className="title-profile-s">Thông tin cá nhân</div> */}
          <div className="box-border-member">
            <div className="box-avatar" id="image_infor">
              <div
                className="avatar_profile"
                onMouseEnter={() => {
                  setAnimateChangeAvatar(1);
                }}
                onMouseLeave={() => {
                  setAnimateChangeAvatar(0);
                }}
              >
                <Avatar size={125} src={avatar} />
                <div
                  className="change_avatar"
                  style={{ opacity: animateChangeAvatar }}
                >
                  <Upload
                    // link to upload
                    customRequest={onChooseFile}
                    // end
                    accept={".png,.jpg,.jpeg"}
                    multiple={false}
                    fileList={[]}
                  >
                    <Icon
                      type="camera"
                      theme="filled"
                      className="icon_change_avatar"
                    />
                    <p
                      style={{
                        textAlign: "center",
                        color: "white",
                        width: "100%",
                      }}
                    >
                      Thay đổi
                    </p>
                  </Upload>
                </div>
              </div>
            </div>
            <div className="box-content-member">
              <div
                className="box-name-member"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {hovaten}
              </div>
              <div className="box-name-member">{sttv}</div>
              <div className="box-topic-member">
                <div className="box-label">Thông tin cá nhân</div>
                <div className="box-line" />
              </div>
              <div className="box-infor-member-1">
                <div className="box-svg-member">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="table"
                    className="svg-inline--fa fa-table fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"
                    ></path>
                  </svg>
                </div>
                <div className="box-value-member">{ngaysinh}</div>
              </div>
              <div className="box-infor-member-1">
                <div className="box-svg-member">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="transgender"
                    className="svg-inline--fa fa-transgender fa-w-12"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M372 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7C198.5 104.1 172.2 96 144 96 64.5 96 0 160.5 0 240c0 68.5 47.9 125.9 112 140.4V408H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v28c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-28h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-27.6c64.1-14.6 112-71.9 112-140.4 0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12zM144 320c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                    ></path>
                  </svg>
                </div>
                <div className="box-value-member">
                  {gioitinh ? "Nam" : "Nữ"}
                </div>
              </div>
              <div className="box-infor-member-1">
                <div className="box-svg-member">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="address-card"
                    className="svg-inline--fa fa-address-card fa-w-18"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
                    ></path>
                  </svg>
                </div>
                <div className="box-value-member">{cmtorhc}</div>
              </div>
              <div className="box-infor-member-1">
                <div className="box-svg-member">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone-alt"
                    className="svg-inline--fa fa-phone-alt fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                    ></path>
                  </svg>
                </div>
                <div className="box-value-member">{sdt}</div>
              </div>
              <div className="box-infor-member-1">
                <div className="box-svg-member" style={{ width: "26px" }}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-square"
                    className="svg-inline--fa fa-facebook-square fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                    ></path>
                  </svg>
                </div>
                <div className="box-value-member">
                  <a
                    style={{ color: "rgba(0, 0, 0, 0.65)" }}
                    href={linkfb}
                    target="_blank"
                  >
                    {linkfb}
                  </a>
                </div>
              </div>
              <div className="box-infor-member-1">
                <div className="box-svg-member">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="envelope"
                    className="svg-inline--fa fa-envelope fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    ></path>
                  </svg>
                </div>
                <div className="box-value-member">{email}</div>
              </div>
              <div className="box-infor-member-1">
                <div className="box-svg-member" style={{ marginLeft: "1.5px" }}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="map-marker-alt"
                    className="svg-inline--fa fa-map-marker-alt fa-w-12"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                    ></path>
                  </svg>
                </div>
                <div className="box-value-member">{diachi}</div>
              </div>
              <div className="box-topic-member">
                <div className="box-label">Hiến máu</div>
                <div className="box-line" />
              </div>
              <div className="box-infor-member">
                <div>Số lần hiến máu:</div>
                <div className="box-value-member">{SolanHM}</div>
              </div>
              <div className="box-infor-member">
                <div>Nhóm máu:</div>
                <div className="box-value-member">
                  {Nhommau}
                  {rhD ? "+" : "-"}
                </div>
              </div>
            </div>
          </div>
        </Form>
      }
    </div>
  );
};
export default InformationUser;
