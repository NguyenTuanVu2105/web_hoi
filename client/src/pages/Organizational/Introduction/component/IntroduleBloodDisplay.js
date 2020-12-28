import React, { useContext, useEffect, useState } from "react";
import HomepageContext from "../../../../context/HomepageContext";
import "./introduleBloodDisplay.scss";
import { Form, Input, Modal, Button, notification, Upload, Icon } from "antd";
import { Association } from "../../../../api/base";
import { getUser, checkAuth } from "../../../../api/auth";

const IntroduleBloodDisplay = (props) => {
  const { getFieldDecorator } = props.form;
  const { setLoading } = useContext(HomepageContext);

  const [pdf, setPDF] = useState([]);

  const fetchData = async () => {
    const result = await Association.getPDF();
    if (result.success) {
      if (result.data.success) {
        if (result.data.message.Tailieu !== null) {
          setPDF(result.data.message.Tailieu);
        } else {
          setPDF(
            "https://drive.google.com/file/d/1vIKk1qYAxAEghLyUcksTKwqe-r9SbTQo/preview"
          );
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const { success } = await Association.editPDF(values);
        setLoading(false);
        if (success) {
          notification["success"]({
            message: "Sửa thành công!",
          });
        } else {
          notification["error"]({
            message: "Sửa không thành công",
          });
        }
      }
    });
  };

  const roles = () => {
    getUser().then((value) => {
      if (checkAuth()) {
        var edit = document.getElementById("edit");
        if (value.role === "hoitruong") {
          edit.style.display = "block";
        } else {
          edit.style.display = "none";
        }
      }
    });
  };

  useEffect(() => {
    fetchData();
    roles();
  }, []);
  const [OpenModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setOpenModal(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setOpenModal(false);
  };
  const onChooseFile = () => {};
  return (
    <div className="para-IBD-s">
      <div>
        <Modal
          title="Sửa file PDF"
          visible={OpenModal}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <Upload
                // link to upload
                customRequest={onChooseFile}
                // end
                accept={".pdf"}
                multiple={false}
                fileList={[]}
              >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <label className="change-color-header">
                    Tải File pdf lên:{" "}
                  </label>
                  <button>
                    <Icon type="upload" /> Choose File
                  </button>
                  {/* {nameFile} */}
                </div>
              </Upload>
            </Form.Item>
            <Form.Item>
              <div className="footer-modal-s">
                <Button
                  className="button-IBD-HB"
                  type="primary"
                  htmlType="submit"
                >
                  {" "}
                  Lưu thay đổi{" "}
                </Button>
              </div>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {" "}
                Sửa{" "}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      {/* <iframe
            
                src= {pdf}
                style={{ width: "100%", height: "700px" }}
            >
            </iframe> */}
      <iframe
        src="/pdf/gt.pdf"
        style={{ width: "100%", height: "700px" }}
      ></iframe>
      <Button id="edit" type="primary" onClick={showModal}>
        Sửa
      </Button>
    </div>
  );
};

export default Form.create()(IntroduleBloodDisplay);
