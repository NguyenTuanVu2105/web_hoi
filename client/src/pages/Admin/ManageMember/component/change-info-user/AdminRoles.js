import React, { useState, useEffect, useContext } from "react";
import HomepageContext from "../../../../../context/HomepageContext";
import { Button, Form, notification, Select } from "antd";
import { getUser, checkAuth } from "../../../../../api/auth";
import { Admin } from "../../../../../api/base";
import "./ChangeInfUser.css";

const { Option } = Select;

const AdminRoles = (props) => {
  const { idUser } = props;
  const { getFieldDecorator } = props.form;
  const { setLoading } = useContext(HomepageContext);
  const [roles, setRoles] = useState({});
  const fetchData = async () => {
    await getUser()
      .then(async (value) => {
        if (checkAuth()) {
          if (value.role === "hoitruong") {
            setLoading(true);
            const result = await Admin.viewRoles(idUser);
            setLoading(false);
            if (result.success) {
              if (result.data.success) {
                setRoles(result.data.message);
              }
            }
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const ROLES = getUser().then((value) => {
    if (checkAuth()) {
      var edit = document.getElementById("edit");
      if (value.role === "hoitruong") {
        edit.style.display = "block";
      } else {
        edit.style.display = "none";
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const { success } = await Admin.editRoles(values);
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
  }, []);
  return (
    <div>
      <Form
        id="edit"
        style={{ width: 150, marginLeft: 10, marginRight: 10 }}
        onSubmit={handleSubmit}
      >
        <Form.Item>
          {getFieldDecorator("id", {
            initialValue: roles.id,
          })}
          {getFieldDecorator("role", {
            initialValue: roles.role,
          })(
            <Select style={{ height: 30 }}>
              <Option style={{ textAlign: "center" }} value="hoitruong">
                Admin
              </Option>
              <Option style={{ textAlign: "center" }} value="chihoitruong">
                Chi hội trưởng
              </Option>
              <Option style={{ textAlign: "center" }} value="doitruong">
                Đội trưởng
              </Option>
              <Option style={{ textAlign: "center" }} value="member">
                Thành viên
              </Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button className="buttonProfile" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create()(AdminRoles);
