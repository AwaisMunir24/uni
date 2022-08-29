import React, { Component, useState } from "react";
import profile from "../../assets/image/awais.jpg";
import Users from "../../components/user/Users";
import "./Students.css";
const Students = () => {
  const [studentsRecord, setStudentsRecord] = useState([
    {
      image: profile,
      userName: "XYZ User",
      location: "Faisalabad",
      phone: "0300-7204086",
      btnTitle: "Contact",
      icons: <i className="fa-solid fa-ellipsis-vertical"></i>,
    },
    {
      image: profile,
      userName: "XYZ User",
      location: "Faisalabad",
      phone: "0300-7204086",
      btnTitle: "Contact",
      icons: <i className="fa-solid fa-ellipsis-vertical"></i>,
    },
  ]);
  return (
    <>
      <section>
        <div className="student_records">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h4>Users</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <table className="table ">
                  <thead>
                    <th>Users</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Contact</th>
                    <th>Actions</th>
                  </thead>
                  <tbody>
                    {studentsRecord.map((e, idx) => (
                      <Users
                        key={idx}
                        image={e.image}
                        userName={e.userName}
                        location={e.location}
                        phone={e.phone}
                        btnTitle={e.btnTitle}
                        icons={e.icons}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Students;
