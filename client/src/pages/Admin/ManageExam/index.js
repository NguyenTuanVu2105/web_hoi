import React, { useContext, useEffect, useState } from "react";
import HomepageContext from "../../../context/HomepageContext";
import { Input, Form, notification } from "antd";
import { ButtonBox } from "../../../components";
import { Association } from "../../../api/base";
import "./style.scss";

const ExamManagement = (props) => {
  const { setNameMap, setLoading } = useContext(HomepageContext);
  const [data, setData] = useState("");

  const fetchData = async () => {
    let data = await Association.getLinkTest();
    if (data && data.success) {
      setData(data.data.message.LinkTest);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { success } = await Association.editLinkTest({
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
      "/": "Trang chủ",
      "/kiem-tra-danh-gia": "Kiểm tra",
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
