import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Input, Select } from "antd";
import { Admin, Unit } from "../../../../../api/base";
import { regionList } from "../../constant/regionList";
// import HomepageContext from "../../../../../context/HomepageContext";
import { dataSearchDefault } from "../../constant/searchDefault";
import _ from "lodash";
import "./MemberSearchForm.scss";

const MemberSearchForm = (props) => {
  // const { setLoading } = useContext(HomepageContext);
  const { Option } = Select;
  const { getFieldDecorator } = props.form;
  const { setDataSearch, searchMember } = props;
  const [club, setClub] = useState([]);
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const fetchDataClub = async () => {
    const result = await Admin.getClubAll();
    if (result.data.success) {
      setClub(result.data.data);
    }
  };
  const [unit, setUnit] = useState([]);
  const fetchData = async () => {
    const result = await Unit.getUnitAll();
    if (result.data.success) {
      setUnit(result.data.data);
    }
  };
  useEffect(() => {
    fetchData();
    fetchDataClub();
  }, []);

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        let data = _.pickBy(values, _.identity);
        if (!data) data = dataSearchDefault;
        setDataSearch(data);
        await searchMember(data);
      }
    });
  };
  const mapClub = (branchId) => {
    if (branchId) {
      setClub(unit.find((x) => x.id === branchId).clubs);
    }
  };
  return (
    <Form className="menuSearch" onSubmit={onSearchSubmit}>
      <Form.Item>
        <div className="row-search-1">
          {/* ======ho va ten====== */}
          <div className="search-hovaten-s">
            {getFieldDecorator("hovaten")(
              <Input
                showSearch
                placeholder="Họ và tên..."
                style={{ width: "100%", height: 32 }}
              ></Input>
            )}
          </div>
          {/* ======que quan====== */}
          <div className="search-quequan-s">
            {getFieldDecorator("quequan")(
              <Select
                showSearch
                placeholder="Quê quán"
                style={{ width: "100%", height: 32 }}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option style={{ textAlign: "center" }} value="">
                  Quê quán
                </Option>
                {regionList.map((region) => (
                  <Option style={{ textAlign: "center" }} key={region.name}>
                    {region.name}
                  </Option>
                ))}
              </Select>
            )}
          </div>
          {/* ======Năm sinh====== */}
          <div className="search-ngaysinh-s">
            {getFieldDecorator("ngaysinh")(
              <Input
                showSearch
                placeholder="Năm sinh"
                style={{ width: "100%", height: 32 }}
              ></Input>
            )}
          </div>
        </div>
        <div className="row-search-2">
          {/* ======Nhóm máu====== */}
          <div className="search-nhommau-s">
            {getFieldDecorator("nhommau")(
              <Select
                style={{ width: "100%", height: 32 }}
                onChange={handleChange}
                placeholder="Nhóm máu"
              >
                <Option style={{ textAlign: "center" }} value="">
                  Nhóm máu
                </Option>
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
            )}
          </div>

          {/* ======ma chi hoi====== */}
          <div className="search-machihoi-s">
            {getFieldDecorator("branchId")(
              <Select
                onChange={mapClub}
                placeholder="Mã Chi Hội"
                style={{ width: "100%", height: 32 }}
              >
                <Option style={{ textAlign: "center" }} value="">
                  Mã chi hội
                </Option>
                {unit.map((unit) => (
                  <Option
                    style={{ textAlign: "center" }}
                    value={unit.id}
                    key={unit.id}
                  >
                    {unit.Machihoi}
                  </Option>
                ))}
              </Select>
            )}
          </div>
          {/* ======ten doi====== */}
          <div className="search-tendoi-s">
            {getFieldDecorator("clubId")(
              <Select
                placeholder="Tên đội"
                style={{ width: "100%", height: 32 }}
              >
                <Option style={{ textAlign: "center" }} value="">
                  Tên đội
                </Option>
                {club.map((club) => (
                  <Option style={{ textAlign: "center" }} key={club.id}>
                    {club.Tendoi}
                  </Option>
                ))}
              </Select>
            )}
          </div>
          <div className="search-search-s">
            <Button
              className="button-search-s"
              htmlType="submit"
              style={{ border: "none" }}
            >
              <i className="fa fa-search"></i>
            </Button>
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(MemberSearchForm);
