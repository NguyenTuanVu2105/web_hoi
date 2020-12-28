import React from "react";
import "./style.scss";

const Dashbard = () => {
  return (
    <div className="box-para">
      {data.map((label, index) => (
        <div key={"OR" + index} className="box-border">
          <div className="box-header">
            <span
              style={{
                color: "white",
                marginLeft: 15,
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              {label.name}
            </span>
          </div>
          {label.child.map((x, index) => (
            <a
              key={"OR-C" + index}
              id={x.id}
              className="box-content"
              href={x.href}
            >
              <i
                className="fas fa-angle-double-right"
                style={{
                  fontSize: "15px",
                  color: "#ff4d4d",
                  marginRight: "10px",
                }}
              />
              <div className="tag-a">{x.name}</div>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};
const data = [
  {
    name: "HỘI MÁU",
    child: [
      {
        name: "Giới thiệu về Hội",
        href: "/gioi-thieu-ve-hoi",
        id: "introdule",
      },
      {
        name: "Lịch sử Hội",
        href: "/lich-su-hoi",
        id: "history",
      },
      {
        name: "Lãnh đạo qua các thời kỳ",
        href: "/lanh-dao-qua-cac-thoi-ky",
        id: "teamleader",
      },
    ],
  },
  {
    name: "ĐƠN VỊ TRỰC THUỘC",
    child: [
      {
        name: "Hồ sơ đơn vị",
        href: "/ho-so-don-vi",
        id: "searchunit",
      },
    ],
  },
];
export default Dashbard;
