import React, { useState, useEffect } from "react";
import { getUser, logout, checkAuth } from "../../api/auth";
import { Association } from "../../api/base";
import { navs } from "./contant/nav";
import "./style/NavBar.scss";
const NavBar = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    let data = await Association.getLinkTest();
    if (data && data.success) {
      setData(data.data.message.LinkTest);
    }
  };

  const roles = getUser().then((value) => {
    if (checkAuth()) {
      var roleAdmin = document.getElementById("admin");
      var roleBackground = document.getElementById("quanlybackground");
      var roleAdd = document.getElementById("themdonvi");
      var roleTest = document.getElementById("managertest");
      if (value.role === "member") {
        roleAdmin.style.display = "none";
      } else {
        roleAdmin.style.display = "block";
      }
      if (value.role === "hoitruong") {
        roleBackground.style.display = "block";
        roleAdd.style.display = "block";
        roleTest.style.display = "block";
      } else {
        roleBackground.style.display = "none";
        roleAdd.style.display = "none";
        roleTest.style.display = "none";
      }
    }
  });

  // const [Icon, setIcon] = useState(false)
  const setChangeIcon = (element) => {
    var para = document.getElementById(element);
    if (para) {
      if (para.classList.item(1) === "fa-angle-down") {
        para.classList.remove("fa-angle-down");
        para.classList.toggle("fa-angle-up");
      } else if (para.classList.item(1) === "fa-angle-up") {
        para.classList.remove("fa-angle-up");
        para.classList.toggle("fa-angle-down");
      }
    }
  };
  const style = {
    fontSize: "24px",
    lineHeight: "35px",
    color: "white",
  };
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sidebar-container">
      <button className="sideBarOpen sideBar" onClick={() => setOpen(true)}>
        &#9776;
      </button>
      <div
        className="sticky w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left"
        style={{ width: 235, zIndex: 12, display: open ? "block" : "none" }}
        id="mySidebar"
      >
        <button className="sideBarClose sideBar" onClick={() => setOpen(false)}>
          Close X
        </button>
        <div className="logo-page-blood">
          <img className="logo-image" src="/img/logomau.png" alt="logo"></img>
        </div>
        {navs.map((nav, index) => (
          <div key={"nav" + index} id={nav.id}>
            <div className="panel-heading drop-menu">
              <a
                className="stickyA"
                data-toggle="collapse"
                href={nav.Id1}
                onClick={() => setChangeIcon(nav.IconID) && roles}
              >
                {nav.name}
                <div className="items-i">
                  <i
                    id={nav.IconID}
                    className="fa fa-angle-down"
                    style={style}
                  ></i>
                </div>
              </a>
            </div>
            <div id={nav.Id2} className="panel-collapse collapse">
              <ul
                className="list-group"
                style={{ paddingLeft: "5%", paddingRight: "5%" }}
              >
                {nav.children.map((x, index) => (
                  <li
                    key={"navC" + index}
                    id={x.id}
                    className="list-group-item"
                  >
                    <a
                      className="list-items"
                      href={data && x.id === "test" ? data : x.href}
                    >
                      {x.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div>
          <div className="panel-heading drop-menu">
            <a
              className="stickyA"
              data-toggle="collapse"
              href="#collapse7"
              onClick={() => setChangeIcon("icon7")}
            >
              QUẢN LÝ TÀI KHOẢN
              <div className="items-i">
                <i id="icon7" className="fa fa-angle-down" style={style}></i>
              </div>
            </a>
          </div>
          <div id="collapse7" className="panel-collapse collapse">
            <ul
              className="list-group"
              style={{ paddingLeft: "5%", paddingRight: "5%" }}
            >
              <li className="list-group-item">
                <a
                  className="list-items"
                  onClick={logout}
                  style={{ color: "#ff4d4d" }}
                >
                  ĐĂNG XUẤT
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="list-items"
                  data-toggle="modal"
                  data-target="#modalMK"
                  style={{ color: "#ff4d4d" }}
                >
                  ĐỔI MẬT KHẨU
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
