import "./UnitProfile.css";
import React, { useContext, useEffect, useState } from "react";
import HomepageContext from "../../../context/HomepageContext";
import { getUnitAll } from "../../../api/base/unit";
import { Select } from "antd";
import { getClubAll } from "../../../api/base/admin";
import { Link } from "react-router-dom";

const { Option } = Select;

const UnitProfile = () => {
  const { setNameMap, setLoading } = useContext(HomepageContext);
  const [unit, setUnit] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    const result = await getUnitAll();
    setLoading(false);
    if (result.data.success) {
      setUnit(result.data.data);
    }
  };

  const [club, setClub] = useState([]);
  const fetchDataClub = async () => {
    setLoading(true);
    const result = await getClubAll();
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
    <div className="para-unit-profile">
      {unit.map((search, index) => (
        <div key={"U-" + index}>
          <a
            className="panel-heading list-group-blood "
            data-toggle="collapse"
            href={`#${search.Machihoi}`}
          >
            <div className="AFM">
              {search.Tenchihoi}
              <i
                id="icon10"
                className="fa fa-angle-down"
                style={{ fontSize: "25px" }}
              />
            </div>
          </a>
          <div
            id={search.Machihoi}
            className="panel-collapse collapse"
            style={{ marginTop: "10px" }}
          >
            <ul className="list-group">
              <li key={"C-1"} className="list-group-blood-item">
                <div style={{ width: "100%" }}>
                  <Link
                    className="list-items-a"
                    to={{
                      pathname: `/ho-so-chi-hoi/${search.Machihoi}`,
                    }}
                  >
                    {" "}
                    Giới thiệu về {search.Tenchihoi}
                    <div style={{ display: "flex" }}>
                      <i
                        className="fa fa-caret-right"
                        style={{ fontSize: "20px" }}
                      />
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="list-group">
              {search.clubs.map((child, index) => (
                <li key={"C-" + index} className="list-group-blood-item">
                  {/* <div style={{width:"100%"}}> */}
                  <Link
                    className="list-items-a"
                    to={{
                      pathname: `/ho-so-doi-mau/${child.Madoi}`,
                    }}
                  >
                    {" "}
                    {child.Tendoi}
                    <div style={{ display: "flex" }}>
                      <i
                        className="fa fa-caret-right"
                        style={{ fontSize: "20px" }}
                      />
                    </div>
                  </Link>
                  {/* </div> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnitProfile;
