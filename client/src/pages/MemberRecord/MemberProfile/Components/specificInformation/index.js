import React from "react";
import "./style.scss";
const SpecificInformation = (props) => {
  const {
    donvi,
    donvicuthe,
    doanviendangvien,
    trinhdohocvan,
    quequan,
    thongtinlienheGD,
    ghichu,
  } = props;

  return (
    <div className="box-para-speinfo">
      <div className="box-header-speinfo">Thông tin chi tiết</div>
      <div className="box-body-speinfo">
        <div className="box-content-speinfo">
          <div className="label-speinfo">Đơn vị học tập/Công tác:</div>
          <div className="value-speinfo">{donvi}</div>
        </div>
        <div className="box-content-speinfo">
          <div className="label-speinfo">Khoa/Đơn vị cụ thể:</div>
          <div className="value-speinfo">{donvicuthe}</div>
        </div>
        <div className="box-content-speinfo">
          <div className="label-speinfo">Đoàn viên/Đảng viên:</div>
          <div className="value-speinfo">{doanviendangvien}</div>
        </div>
        <div className="box-content-speinfo">
          <div className="label-speinfo">Trình độ học vấn:</div>
          <div className="value-speinfo">{trinhdohocvan}</div>
        </div>
        <div className="box-content-speinfo">
          <div className="label-speinfo">Quê quán:</div>
          <div className="value-speinfo">{quequan}</div>
        </div>
        <div className="box-content-speinfo">
          <div className="label-speinfo">Thông tin liên hệ gia đình:</div>
          <div className="value-speinfo">{thongtinlienheGD}</div>
        </div>
        <div className="box-content-speinfo">
          <div className="label-speinfo">Ghi chú:</div>
          <div className="value-speinfo">{ghichu}</div>
        </div>
      </div>
    </div>
  );
};
export default SpecificInformation;
