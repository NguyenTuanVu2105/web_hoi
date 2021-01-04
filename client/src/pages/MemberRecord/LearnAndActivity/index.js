import React, { useContext, useEffect, useState } from "react";
import { Form, notification, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import HomepageContext from "../../../context/HomepageContext";
import { Profile } from "../../../api/base";
import "./style.scss";

const LearnAndActivity = (props) => {
  const { getFieldDecorator } = props.form;
  const { setNameMap, setLoading } = useContext(HomepageContext);
  const [leact, setLeact] = useState([]);
  const [act, setAct] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    const result = await Profile.getLearnActivity();
    const result2 = await Profile.getActivity();
    setLoading(false);
    if (result.success && result2.success) {
      if (result.data.success && result2.data.success) {
        setLeact(result.data.data);
        setAct(result2.data.data);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const { success } = await Profile.editLearnActivity(values);
        setLoading(false);
        if (success) {
          notification["success"]({
            message: "Cập nhật học tập và hoạt động thành công!",
          });
        } else {
          notification["error"]({
            message: "Cập nhật học tập và hoạt động thất bại!",
          });
        }
      }
    });
  };

  useEffect(() => {
    fetchData();
    setNameMap({
      "/": "Trang chủ",
      "/learn": "Học tập và hoạt động",
    });
  }, []);
  return (
    <div className="para-learning-and-activities">
      <Form onSubmit={handleSubmit}>
        <div className="paren-body-LAA">
          <div
            style={{
              backgroundColor: "#ff4d4d",
              height: 35,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "white",
                marginLeft: 15,
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              HỌC TẬP
            </span>
          </div>

          <Form.Item>
            <form action="" method="post" className="">
              <div>
                <div className="DIV-learn">
                  <label className="label_LAA">Trường:</label>
                  {getFieldDecorator("truong", {
                    initialValue: leact.Truong,
                  })(<Input type="text" className="input-LAA2" />)}{" "}
                  <br />
                  <label className="label_LAA">Lớp:</label>
                  {getFieldDecorator("lop", {
                    initialValue: leact.Lop,
                  })(<Input type="text" className="input-LAA2" />)}{" "}
                  <br />
                  <label className="label_LAA">Ngành:</label>
                  {getFieldDecorator("nganh", {
                    initialValue: leact.Nganh,
                  })(<Input type="text" className="input-LAA2" />)}{" "}
                  <br />
                  <label className="label_LAA">GPA:</label>
                  {getFieldDecorator("gpa", {
                    initialValue: leact.GPA,
                  })(<Input type="number" className="input-LAA2" />)}{" "}
                  <br />
                </div>
              </div>
              <div className="scroll-view">
                <fieldset className="fieldset-LAA">
                  <legend className="legendA">Khen thưởng:</legend>
                  <div className="table-LA">
                    <div className="table-LA-par">
                      <div className="table-LA-cont">Năm học</div>
                      <div className="table-LA-cont">Kỳ học</div>
                      <div className="table-LA-cont">Lý do khen thưởng</div>
                    </div>
                    <div className="table-LA-par">
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_namhoc_mot", {
                          initialValue: leact.HT_Namhoc_Mot,
                        })(
                          <Input
                            type="text"
                            style={{ width: "90%", textAlign: "center" }}
                          />
                        )}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_kihoc_mot", {
                          initialValue: leact.HT_Kihoc_Mot,
                        })(
                          <Input
                            type="number"
                            style={{ width: "90%", textAlign: "center" }}
                          />
                        )}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_lydo_mot", {
                          initialValue: leact.HT_Lydo_Mot,
                        })(<TextArea rows="1" style={{ width: "90%" }} />)}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_namhoc_hai", {
                          initialValue: leact.HT_Namhoc_Hai,
                        })(
                          <Input
                            type="text"
                            style={{ width: "90%", textAlign: "center" }}
                          />
                        )}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_kihoc_hai", {
                          initialValue: leact.HT_Kihoc_Hai,
                        })(
                          <Input
                            type="number"
                            style={{ width: "90%", textAlign: "center" }}
                          />
                        )}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_lydo_hai", {
                          initialValue: leact.HT_Lydo_Hai,
                        })(<TextArea rows="1" style={{ width: "90%" }} />)}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_namhoc_ba", {
                          initialValue: leact.HT_Namhoc_Ba,
                        })(
                          <Input
                            type="text"
                            style={{ width: "90%", textAlign: "center" }}
                          />
                        )}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_kihoc_ba", {
                          initialValue: leact.HT_Kihoc_Ba,
                        })(
                          <Input
                            type="number"
                            style={{ width: "90%", textAlign: "center" }}
                          />
                        )}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_lydo_ba", {
                          initialValue: leact.HT_Lydo_Ba,
                        })(<TextArea rows="1" style={{ width: "90%" }} />)}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_namhoc_bon", {
                          initialValue: leact.HT_Namhoc_Bon,
                        })(
                          <Input
                            type="text"
                            style={{ width: "90%", textAlign: "center" }}
                          />
                        )}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_kihoc_bon", {
                          initialValue: leact.HT_Kihoc_Bon,
                        })(
                          <Input
                            type="number"
                            style={{ width: "90%", textAlign: "center" }}
                          />
                        )}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_lydo_bon", {
                          initialValue: leact.HT_Lydo_Bon,
                        })(<TextArea rows="1" style={{ width: "90%" }} />)}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_namhoc_nam", {
                          initialValue: leact.HT_Namhoc_Nam,
                        })(
                          <Input
                            type="text"
                            style={{ width: "90%", textAlign: "center" }}
                          />
                        )}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_kihoc_nam", {
                          initialValue: leact.HT_Kihoc_Nam,
                        })(
                          <Input
                            type="number"
                            style={{ width: "90%", textAlign: "center" }}
                          />
                        )}
                      </div>
                      <div className="table-LA-cont">
                        {getFieldDecorator("learn_lydo_nam", {
                          initialValue: leact.HT_Lydo_Nam,
                        })(<TextArea rows="1" style={{ width: "90%" }} />)}
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </form>
          </Form.Item>
        </div>
        <div className="paren-body-LAA">
          <div
            style={{
              backgroundColor: "#ff4d4d",
              height: 35,
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <span
              style={{
                color: "white",
                marginLeft: 15,
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              HOẠT ĐỘNG
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="col12">
              <label className="label_information">
                Trực thuộc chi Hội: {act.Tenchihoi}
              </label>
              <br />
              <label className="label_information">
                Trực thuộc Đội: {act.Tendoi}
              </label>
              <br />
              <label className="label_information">
                Ngày vào Hội: {act.NgayvaoHoi}
              </label>
              <br />
            </div>
            <div className="col12">
              <label className="label_information">Chức vụ: {act.Chucvu}</label>
              <br />
              <label className="label_information">
                Bậc chuyên môn: {act.Bacchuyenmon}
              </label>
              <br />
              <label className="label_information">
                Tình trạng hoạt động:{" "}
                {act.TinhtrangHD ? "Đang hoạt động" : "Nghỉ hoạt động"}
              </label>
              <br />
            </div>
          </div>

          <Form.Item>
            <div className="scroll-view">
              <fieldset className="fieldset-LAA">
                <legend className="legendA">Khen thưởng:</legend>
                <div className="table-LA">
                  <div className="table-LA-par">
                    <div className="table-LA-cont">Năm học</div>
                    <div className="table-LA-cont">Kỳ học</div>
                    <div className="table-LA-cont">Lý do khen thưởng</div>
                  </div>
                  <div className="table-LA-par">
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_namhoc_mot", {
                        initialValue: leact.HD_Namhoc_Mot,
                      })(
                        <Input
                          type="text"
                          style={{ width: "90%", textAlign: "center" }}
                        />
                      )}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_kihoc_mot", {
                        initialValue: leact.HD_Kihoc_Mot,
                      })(
                        <Input
                          type="number"
                          style={{ width: "90%", textAlign: "center" }}
                        />
                      )}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_lydo_mot", {
                        initialValue: leact.HD_Lydo_Mot,
                      })(<TextArea rows="1" style={{ width: "90%" }} />)}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_namhoc_hai", {
                        initialValue: leact.HD_Namhoc_Hai,
                      })(
                        <Input
                          type="text"
                          style={{ width: "90%", textAlign: "center" }}
                        />
                      )}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_kihoc_hai", {
                        initialValue: leact.HD_Kihoc_Hai,
                      })(
                        <Input
                          type="number"
                          style={{ width: "90%", textAlign: "center" }}
                        />
                      )}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_lydo_hai", {
                        initialValue: leact.HD_Lydo_Hai,
                      })(<TextArea rows="1" style={{ width: "90%" }} />)}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_namhoc_ba", {
                        initialValue: leact.HD_Namhoc_Ba,
                      })(
                        <Input
                          type="text"
                          style={{ width: "90%", textAlign: "center" }}
                        />
                      )}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_kihoc_ba", {
                        initialValue: leact.HD_Kihoc_Ba,
                      })(
                        <Input
                          type="number"
                          style={{ width: "90%", textAlign: "center" }}
                        />
                      )}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_lydo_ba", {
                        initialValue: leact.HD_Lydo_Ba,
                      })(<TextArea rows="1" style={{ width: "90%" }} />)}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_namhoc_bon", {
                        initialValue: leact.HD_Namhoc_Bon,
                      })(
                        <Input
                          type="text"
                          style={{ width: "90%", textAlign: "center" }}
                        />
                      )}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_kihoc_bon", {
                        initialValue: leact.HD_Kihoc_Bon,
                      })(
                        <Input
                          type="number"
                          style={{ width: "90%", textAlign: "center" }}
                        />
                      )}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_lydo_bon", {
                        initialValue: leact.HD_Lydo_Bon,
                      })(<TextArea rows="1" style={{ width: "90%" }} />)}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_namhoc_nam", {
                        initialValue: leact.HD_Namhoc_Nam,
                      })(
                        <Input
                          type="text"
                          style={{ width: "90%", textAlign: "center" }}
                        />
                      )}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_kihoc_nam", {
                        initialValue: leact.HD_Kihoc_Nam,
                      })(
                        <Input
                          type="number"
                          style={{ width: "90%", textAlign: "center" }}
                        />
                      )}
                    </div>
                    <div className="table-LA-cont">
                      {getFieldDecorator("activity_lydo_nam", {
                        initialValue: leact.HD_Lydo_Nam,
                      })(<TextArea rows="1" style={{ width: "90%" }} />)}
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </Form.Item>
        </div>
        <div className="Div-LAA">
          <Form.Item>
            <Button className="button-LAA" type="primary" htmlType="submit">
              Lưu thay đổi
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Form.create()(LearnAndActivity);
