import React, { useContext, useEffect, useState } from "react";
import HomepageContext from "../../../context/HomepageContext";
import { Unit, Admin } from "../../../api/base";
import { Link } from "react-router-dom";
import {
  CaretDownOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import "./style.scss";

const UnitRecord = () => {
  const { setNameMap, setLoading } = useContext(HomepageContext);
  const [unit, setUnit] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    const result = await Unit.getUnitAll();
    setLoading(false);
    if (result.data.success) {
      setUnit(result.data.data);
    }
  };
  const [checked, setChecked] = useState([]);
  const handleChecked = (e) => {
    const currentIndex = checked.indexOf(e);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(e);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const [club, setClub] = useState([]);
  const fetchDataClub = async () => {
    setLoading(true);
    const result = await Admin.getClubAll();
    setLoading(false);
    if (result.data.success) {
      setClub(result.data.data);
    }
  };
  useEffect(() => {
    fetchData();
    fetchDataClub();
    setNameMap({
      ["/"]: "Trang chủ",
      ["/ho-so-to-chuc"]: "Hồ sơ tổ chức",
      ["/ho-so-don-vi"]: "Hồ sơ đơn vị",
    });
  }, []);
  return (
    <div className="box-para-unit">
      <div className="box-link-unit">
        {unit.map((search, index) => (
          <div key={"U-" + index}>
            <a
              className="panel-heading list-group-blood "
              data-toggle="collapse"
              href={`#${search.Machihoi}`}
              onClick={(e) => handleChecked(search.Machihoi)}
            >
              <div className="box-name-unit">
                {search.Tenchihoi}
                {checked.indexOf(search.Machihoi) === -1 ? (
                  <CaretDownOutlined style={{ fontSize: "14px" }} />
                ) : (
                  <CaretUpOutlined style={{ fontSize: "14px" }} />
                )}
              </div>
            </a>
            <div id={search.Machihoi} className="panel-collapse collapse">
              <ul className="list-group">
                <li key={"C-1"} className="list-group-blood-item">
                  <div style={{ width: "100%" }}>
                    <Link
                      className="box-item-unit"
                      to={{
                        pathname: `/ho-so-chi-hoi/${search.Machihoi}`,
                      }}
                    >
                      {" "}
                      Giới thiệu về {search.Tenchihoi}
                      <div style={{ display: "flex" }}>
                        <CaretRightOutlined style={{ fontSize: "12px" }} />
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="list-group">
                {search.clubs.map((child, index) => (
                  <li key={"C-" + index} className="list-group-blood-item">
                    <Link
                      className="box-item-unit"
                      to={{
                        pathname: `/ho-so-doi-mau/${child.Madoi}`,
                      }}
                    >
                      {" "}
                      {child.Tendoi}
                      <div style={{ display: "flex" }}>
                        <CaretRightOutlined style={{ fontSize: "12px" }} />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default UnitRecord;
