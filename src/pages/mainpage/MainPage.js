import React, { Component, useEffect, useState } from "react";
import Login from "../login/Login";
import Students from "../students/Students";
import Home from "../home/Home";
import Teachers from "../teachers/Teachers";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
const MainPage = () => {
  function adminList() {
    let items = JSON.parse(localStorage.getItem("admin"));
    if (items) {
      return JSON.parse(localStorage.getItem("admin"));
    } else {
      return [];
    }
  }

  const [admins, setAdmins] = useState(adminList());
  let navigate = useNavigate();
  const loginng = () => {
    navigate("/");

    console.log(admins, "apps");
  };
  useEffect(() => {
    loginng();
  }, []);
  return (
    <>
      <div className="context">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
};
export default MainPage;
