import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Dashboard",
      path: "#",
      icon: <i className="fa-solid fa-boxes-stacked"></i>,
      path: "dashboard",
    },
    {
      title: "Teachers",
      path: "#",
      icon: <i className="fa-solid fa-chalkboard-user"></i>,
      path: "teachers",
    },
    {
      title: "Students",
      path: "#",
      icon: <i className="fa-solid fa-graduation-cap"></i>,
      path: "students",
    },
  ];
  return (
    <>
      <div className="sidebar ">
        <div className={`${open ? "sidebar_items" : "sidebar_items_2"}`}>
          <div className="icons">
            <i
              className="fa-solid fa-angle-left"
              onClick={() => setOpen(!open)}
            ></i>
          </div>
          <ul className="navigation_list">
            {Menus.map((e, idx) => (
              <Link to={e.path}>
              <li key={idx}>
                {e.icon}
                <span className={`${!open && "hidden"}`}>{e.title}</span>
              </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default SideBar;
