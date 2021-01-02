import React, { useState, useContext, useEffect } from "react";
import HomepageContext from "../../../context/HomepageContext";
import AddUnit from "./AddUnit";
import AddClub from "./AddClub";
import "./style.scss";

const AddUnitClub = () => {
  const { setNameMap } = useContext(HomepageContext);
  const [name, setName] = useState(true);

  useEffect(() => {
    setNameMap({
      "/": "Trang chủ",
      "/them-don-vi": "Thêm đơn vị",
    });
  }, []);

  return (
    <div className="para-add-unit">
      <div className="change-div-AU">
        <div className="ButtonForMobile">
          <button className="buttonD" onClick={() => setName(true)}>
            Chi Hội
          </button>
          <button className="buttonD" onClick={() => setName(false)}>
            Đội
          </button>
        </div>
      </div>
      <div
        className="paren-body-AU"
        style={{ display: name ? "block" : "none" }}
      >
        <AddUnit />
      </div>
      <div
        className="paren-body-AU"
        style={{ display: name ? "none" : "block" }}
      >
        <AddClub />
      </div>
    </div>
  );
};
export default AddUnitClub;
