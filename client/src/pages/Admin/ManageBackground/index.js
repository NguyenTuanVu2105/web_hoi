import React, { useState, useContext, useEffect } from "react";
import HomepageContext from "../../../context/HomepageContext";
import { Background } from "../../../api/base";
import {
  Form,
  Button,
  Input,
  notification,
  Upload,
  Icon,
  Modal,
  // Spin,
  Table,
} from "antd";
import CBH from "./CBH";
import DeleteBackground from "./DeleteBackground";
import "./style.scss";

const ChangeBackground = (props) => {
  const { setNameMap, setLoading, fetchBackgroundData } = useContext(
    HomepageContext
  );
  const [cover, setCover] = useState([]);
  // const { page, setPage } = useState(1);

  const { getFieldDecorator } = props.form;
  const [file, setFile] = useState({});
  const [nameFile, setNameFile] = useState(null);

  const onChooseFile = ({ data, filename, file }) => {
    setFile({ data, filename, file });
    setNameFile(file.name);
  };

  const fetchData = async () => {
    setLoading(true);
    const result = await Background.getAllBackground();
    setLoading(false);
    if (result.success) {
      if (result.data.success) {
        setCover(result.data.data);
      }
    }
  };

  // sửa khi có bảng update sửa lại handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        setLoading(true);
        const { success } = await Background.uploadBackground(file, values);
        setLoading(false);
        if (success) {
          notification["success"]({
            message: "Cập nhật thông tin thành công!",
          });
          setOpenBack(false);
          fetchData();
          fetchBackgroundData();
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
      "/HistoryBlood": "Change Background",
    });
  }, []);

  const [openBack, setOpenBack] = useState(false);

  const showModal = () => {
    setOpenBack(true);
  };

  const handleCancel = (e) => {
    setOpenBack(false);
  };
  // delete img

  // tableback
  const columns = [
    {
      title: "Thao tác",
      fixed: "left",
      id: "Chon",
      dataIndex: "id",
      render: (id) => {
        return (
          <div>
            <CBH id={id} />
            <DeleteBackground id={id} fetchData={fetchData} />
          </div>
        );
      },
    },
    {
      title: "Tên chương trình",
      dataIndex: "Tenchuongtrinh",
    },
    {
      title: "link chương trình",
      dataIndex: "Linkchuongtrinh",
    },
    {
      title: "Ngày diễn ra",
      dataIndex: "Ngaydienra",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "Ngayketthuc",
    },
    {
      title: "Địa điểm",
      dataIndex: "Diadiem",
    },
    {
      title: "Ảnh chương trình",
      dataIndex: "Linkanh",
      id: "Linkanh",
      render: (Linkanh) => {
        return (
          <a href={Linkanh} target="blank">
            <div
              name="linkAnh"
              className="background-change-header-s"
              style={{ backgroundImage: `url(${Linkanh})` }}
            />
          </a>
        );
      },
    },
  ];
  // tableback

  return (
    <div className="para-change-background-admin">
      <div>
        <Button
          type="primary"
          className="add-button-background"
          style={{ marginBottom: 15 }}
          onClick={showModal}
        >
          Thêm chương trình
        </Button>
      </div>

      <Modal
        title="Thêm chương trình"
        visible={openBack}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item>
            {getFieldDecorator("tenchuongtrinh")(
              <Input
                type="text"
                name="name"
                style={{ marginBottom: 10 }}
                placeholder="Tên chương trình"
                required
              />
            )}
            {getFieldDecorator("linkchuongtrinh")(
              <Input
                type="text"
                name="link"
                style={{ marginBottom: 10 }}
                placeholder="Link chương trình"
                required
              />
            )}
            <label className="change-color-header">Ngày diễn ra: </label>
            {getFieldDecorator("ngaydienra")(
              <Input
                type="date"
                name="date"
                style={{ marginBottom: 10 }}
                placeholder="Ngày diễn ra"
                required
              />
            )}
            <label className="change-color-header">Ngày kết thúc: </label>
            {getFieldDecorator("ngayketthuc")(
              <Input
                type="date"
                name="hihi"
                style={{ marginBottom: 10 }}
                placeholder="Ngày kết thúc"
                required
              />
            )}
            {getFieldDecorator("diadiem")(
              <Input
                type="text"
                name="place"
                style={{ marginBottom: 10 }}
                placeholder="Địa điểm tổ chức"
                required
              />
            )}
            <Upload
              // link to upload
              customRequest={onChooseFile}
              // end
              accept={".png,.jpg,.jpeg"}
              multiple={false}
              fileList={[]}
            >
              <div
                style={{ display: "flex", flexWrap: "wrap", marginBottom: 10 }}
              >
                <label className="change-color-header">Tải ảnh lên: </label>
                <button>
                  <Icon type="upload" /> Choose File
                </button>
                {nameFile}
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      {/* table back */}
      <Table
        columns={columns}
        scroll={{ x: "max-content" }}
        dataSource={cover}
        size="middle"
      />

      {/* table back */}
    </div>
  );
};

export default Form.create()(ChangeBackground);
