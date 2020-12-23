import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { Auth } from "../../api/base";
import { Loading } from "../../components";
import "./style.css";

const ResetPassword = (props) => {
  const { token } = props.match.params;
  const [id, setId] = useState(-1);
  const [isLoading, setLoading] = useState(false);
  console.log(token);
  useEffect(() => {
    checkInvalidToken(token);
  }, []);

  const checkInvalidToken = async (_token) => {
    const resp = await Auth.checkToken(_token);
    if (resp.success) {
      setId(resp.data.userId);
    }
  };
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handlePassword = async () => {
    const { success, data } = await Auth.resetPassword({
      userId: id,
      newpassword: password,
      passwordConfirm: confirmpassword,
    });
    if (success) {
      notification["success"]({
        message:
          "Cập nhật mật khẩu thành công. Hệ thống sẽ chuyển đến trang đăng nhập trong giây lát",
      });
      setTimeout(() => {
        setLoading(true);
      }, 500);
      setTimeout(() => {
        setLoading(false);
        props.history.push("/login");
      }, 2000);
    } else {
      notification["error"]({
        message: "Mật khẩu xác nhận không chính xác. Vui lòng nhập lại",
      });
    }
  };
  const invalidToken = id !== -1;
  return (
    <>
      {invalidToken ? (
        <>
          <div style={{ display: isLoading ? "block" : "none" }}>
            <Loading />
          </div>
          <div className="body-changepass-form">
            <div className="borderContent">
              <div className="content-left-changepass">
                <div style={{ margin: "0 auto" }}>
                  <div
                    style={{
                      color: "white",
                      fontSize: 40,
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    HỘI MÁU HÀ NỘI
                  </div>
                  <div
                    style={{
                      color: " white",
                      fontSize: 18,
                      fontFamily: "sans-serif",
                      textAlign: "center",
                    }}
                  >
                    Đổi mật khẩu
                  </div>
                </div>
              </div>
              <div className="content-right-changepass">
                <div className="logomauI">
                  <img className="logo-img-changepass" src="/img/logomau.png" />
                </div>
                <input
                  className="password"
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <br />
                <input
                  className="password"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => setconfirmpassword(e.target.value)}
                />
                <br />
                <button className="button-submit" onClick={handlePassword}>
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <p>Yêu cầu đổi mật khẩu của bạn đã hết hạn</p>
          <a href="/login">Quay về trang đăng nhập</a>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
