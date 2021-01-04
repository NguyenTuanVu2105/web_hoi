import React, { useContext, useEffect, useState } from "react";
import HomepageContext from "../../../../../context/HomepageContext";
import { Radio, Select, Form, notification, Input, Button } from "antd";
import { Admin } from "../../../../../api/base";
import AdminInfUser from "./AdminInfUser";
import "./profile.scss";

function AdminProfile(props) {
  const { idUser } = props;
  const { getFieldDecorator } = props.form;
  const { setNameMap, setLoading } = useContext(HomepageContext);
  const [user, setUser] = useState([]);
  const [file, setFile] = useState({});
  const fetchData = async () => {
    setLoading(true);
    const result = await Admin.viewProfileUser(idUser);
    setLoading(false);
    if (result) {
      if (result.data.success) {
        setUser(result.data.data);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        await Admin.editAvatarUser(file);
        const { success } = await Admin.editProfileUser(values);
        setLoading(false);
        if (success) {
          notification["success"]({
            message: "Cập nhật thông tin thành công!",
          });
        } else {
          notification["error"]({
            message: "Cập nhật thông tin thất bại!",
          });
        }
      }
    });
  };

  useEffect(() => {
    fetchData();
    setNameMap({
      "/": "Trang chủ",
      "/profile": "Hồ sơ cá nhân",
    });
  }, []);

  const style = {
    textAlign: "end",
    width: "32%",
  };

  //nhóm máu
  const { Option } = Select;
  return (
    <div>
      <Form onSubmit={handleSubmit} className="row">
        <div className="profileForMobile">
          <Form.Item action="" method="post" className="row" autocomplete="on">
            <fieldset>
              <legend className="legendA">Thông tin cá nhân</legend>
              <div style={{ width: "100%" }}>
                <AdminInfUser
                  id={idUser}
                  image={user.Image}
                  file={file}
                  setFile={setFile}
                />
              </div>

              <div className="informationUserForMobile">
                <label className="label_information2">Mã thành viên: </label>{" "}
                {user.Sothethanhvien}
                <br />
                <label className="label_information2">Họ và tên: </label>
                {getFieldDecorator("hovaten", {
                  initialValue: user.Hovaten,
                })(<Input type="text" className="input_information" />)}
                <br /> <br />
                <label className="label_information2">Ngày sinh: </label>
                {getFieldDecorator("ngaysinh", {
                  initialValue: user.Ngaysinh,
                })(<Input type="date" className="input_information" />)}
                <br />
                <label className="label_information2">Giới tính: </label>
                {getFieldDecorator("gioitinh", {
                  initialValue: user.Gioitinh,
                })(
                  <Radio.Group name="radiogroup">
                    <Radio
                      value={true}
                      style={{ marginLeft: "5px" }}
                      className="radio_information"
                    >
                      {" "}
                      Nam{" "}
                    </Radio>
                    <Radio value={false} className="radio_information">
                      {" "}
                      Nữ{" "}
                    </Radio>
                  </Radio.Group>
                )}
                <br />
              </div>
            </fieldset>
          </Form.Item>
          <Form.Item
            action=""
            method="post"
            className="information"
            autocomplete="on"
          >
            <fieldset>
              <legend className="legendA">Thông tin cơ bản</legend>
              <div>
                <label style={style} className="label_information">
                  CMND/CCCD/HC:{" "}
                </label>
                {getFieldDecorator("id", {
                  initialValue: idUser,
                })}
                {getFieldDecorator("cmtorhc", {
                  initialValue: user.CMTorHC,
                })(<Input type="text" className="input_information" />)}
                <label style={style} className="label_information">
                  Ngày cấp:{" "}
                </label>
                {getFieldDecorator("ngaycap", {
                  initialValue: user.Ngaycap,
                })(<Input type="date" className="input_information" />)}
                <label style={style} className="label_information">
                  Nơi cấp:{" "}
                </label>
                {getFieldDecorator("noicap", {
                  initialValue: user.Noicap,
                })(<Input type="text" className="input_information" />)}
                <label style={style} className="label_information">
                  Điện thoại:{" "}
                </label>
                {getFieldDecorator("dienthoai", {
                  initialValue: user.Dienthoai,
                })(<Input type="text" className="input_information" />)}
                <label style={style} className="label_information">
                  Link Facebook:{" "}
                </label>
                {getFieldDecorator("facebook", {
                  initialValue: user.Facebook,
                })(<Input type="text" className="input_information" />)}
                <label style={style} className="label_information">
                  Địa chỉ Email:{" "}
                </label>
                {getFieldDecorator("email", {
                  initialValue: user.Email,
                })(<Input type="text" className="input_information" />)}
              </div>
            </fieldset>
          </Form.Item>
          <Form.Item
            action=""
            method="post"
            className="information"
            autocomplete="on"
          >
            <fieldset>
              <legend className="legendA">Hiến máu</legend>
              <label style={style} className="label_information">
                Số lần hiến máu:{" "}
              </label>
              {getFieldDecorator("solanhm", {
                initialValue: user.SolanHM,
              })(<Input type="text" className="input_information" />)}
              <label style={style} className="label_information">
                Nhóm máu:{" "}
              </label>
              {getFieldDecorator("nhommau", {
                initialValue: user.Nhommau ? user.Nhommau : null,
              })(
                <Select style={{ marginLeft: 5, height: 30, width: 120 }}>
                  <Option style={{ textAlign: "center" }} value="O">
                    O
                  </Option>
                  <Option style={{ textAlign: "center" }} value="A">
                    A
                  </Option>
                  <Option style={{ textAlign: "center" }} value="B">
                    B
                  </Option>
                  <Option style={{ textAlign: "center" }} value="AB">
                    AB
                  </Option>
                </Select>
              )}{" "}
              <br />
              <label style={style} className="label_information">
                Rh(D):{" "}
              </label>
              {getFieldDecorator("rh", {
                initialValue: user.Rh ? user.Rh : null,
              })(
                <Select style={{ marginLeft: 5, height: 30, width: 120 }}>
                  <Option style={{ textAlign: "center" }} value={true}>
                    +
                  </Option>
                  <Option style={{ textAlign: "center" }} value={false}>
                    -
                  </Option>
                </Select>
              )}
            </fieldset>
          </Form.Item>
        </div>
        <div className="profileForMobile">
          <Form.Item
            action=""
            method="post"
            className="information"
            autocomplete="on"
          >
            <fieldset>
              <legend className="legendA">Đơn vị công tác</legend>
              <div>
                <label style={style} className="label_information">
                  Đơn vị học tập/Công tác:{" "}
                </label>
                {getFieldDecorator("donvi", {
                  initialValue: user.Donvi,
                })(<Input type="text" className="input_information" />)}
                <label style={style} className="label_information">
                  Khoa/Đơn vị cụ thể:{" "}
                </label>
                {getFieldDecorator("donvicuthe", {
                  initialValue: user.Donvicuthe,
                })(<Input type="text" className="input_information" />)}
                <label style={style} className="label_information">
                  Đoàn viên/Đảng viên:{" "}
                </label>
                {getFieldDecorator("doanviendangvien", {
                  initialValue: user.DoanvienDangvien,
                })(<Input type="text" className="input_information" />)}
                <label style={style} className="label_information">
                  Trình độ học vấn:{" "}
                </label>
                {getFieldDecorator("trinhdohocvan", {
                  initialValue: user.Trinhdohocvan,
                })(<Input type="text" className="input_information" />)}
              </div>
            </fieldset>
            <fieldset>
              <legend className="legendA">Địa chỉ</legend>
              <div>
                <label style={style} className="label_information">
                  Quê quán:{" "}
                </label>
                {getFieldDecorator("quequan", {
                  initialValue: user.Quequan,
                })(<Input type="text" className="input_information" />)}
                <label style={style} className="label_information">
                  Nơi ở hiện nay:{" "}
                </label>
                {getFieldDecorator("diachill", {
                  initialValue: user.DiachiLL,
                })(<Input type="text" className="input_information" />)}
              </div>
            </fieldset>
            <fieldset>
              <legend className="legendA">Liên hệ người thân</legend>
              <div>
                <label style={style} className="label_information">
                  Địa chỉ liên hệ:{" "}
                </label>
                {getFieldDecorator("thongtinlienhegd", {
                  initialValue: user.ThongtinlienheGD,
                })(<Input type="text" className="input_information" />)}
              </div>
            </fieldset>
          </Form.Item>
          <Form.Item
            action=""
            method="post"
            className="information"
            autocomplete="on"
            style={{ heigh: "auto" }}
          >
            <fieldset>
              <legend className="legendA">Ghi chú khác</legend>
              <label style={style} className="label_information">
                Ghi chú:{" "}
              </label>
              {getFieldDecorator("ghichukhac", {
                initialValue: user.Ghichukhac,
              })(<Input type="text" className="input_information" />)}
            </fieldset>
          </Form.Item>
          <div className="DIVprofile">
            <Form.Item>
              <Button
                className="buttonProfile"
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div> // row
  );
}
export default Form.create()(AdminProfile);
