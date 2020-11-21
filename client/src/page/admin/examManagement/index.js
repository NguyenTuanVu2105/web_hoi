import "./style.scss";
import React, { useContext, useEffect, useState } from "react";
import HomepageContext from "../../../context/HomepageContext";
import ButtonBox from "../../../components/buttonBox";
import { editLinkTest, getLinkTest } from "../../../api/base/association";
import { Input, Form, notification } from "antd";
const ExamManagement = (props) => {
  const { setNameMap, setLoading } = useContext(HomepageContext);
  const [data, setData] = useState("");

  const fetchData = async () => {
    let { success, data } = await getLinkTest();
    if (success) {
      setData(data.message.LinkTest);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { success } = await editLinkTest({
      LinkTest: document.getElementById("linkExam").value,
    });
    setLoading(false);
    if (success) {
      notification["success"]({
        message: "Tạo thành công link!",
      });
    } else {
      notification["error"]({
        message: "Xảy ra lỗi!",
      });
    }
  };

  useEffect(() => {
    fetchData();
    setNameMap({
      ["/"]: "Trang chủ",
      ["/kiem-tra-danh-gia"]: "Kiểm tra",
    });
  }, []);

  return (
    <div className="para-exam-management">
      <Form onSubmit={handleSubmit} className="row">
        <Input
          id="linkExam"
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          title="Link"
          placeholder="link..."
        />
        <div className="border-button">
          <ButtonBox nameButton="Thay đổi" htmlType="submit" />
        </div>
      </Form>
    </div>
  );
};

export default ExamManagement;
