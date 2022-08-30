import React, { Component, useEffect, useState } from "react";
import "./StudentForm.css";
import NewInput from "../newInput/Newinput";
const StudentForm = () => {
  function studentList() {
    let items = JSON.parse(localStorage.getItem("studentReocrd"));
    if (items) {
      return JSON.parse(localStorage.getItem("studentReocrd"));
    } else {
      return [];
    }
  }

  const [studentName, setStudentName] = useState("");
  const [father, setFather] = useState("");
  const [cnic, setCnic] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [regId, setRegid] = useState("");
  const [updating, setUpdating] = useState(false);
  const [password, setPassword] = useState("");
  const [studentReocrd, setStudentRecord] = useState(studentList());
  const handleSubmiting = (e) => {
    e.preventDefault();
    setUpdating(true);
    setTimeout(() => {
      setUpdating(false);
    }, 2000);
    const newStudentList = [
      ...studentReocrd,
      {
        id: studentReocrd.length + 1,
        studentName,
        father,
        cnic,
        image,
        address,
        age,
        regId,
        password,
      },
    ];
    setStudentRecord(newStudentList);
  };
  useEffect(() => {
    localStorage.setItem("studentReocrd", JSON.stringify(studentReocrd));
  }, [studentReocrd]);
  return (
    <>
      <form onSubmit={handleSubmiting} className="text-center">
        <div className="row mt-3 justify-content-center">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <NewInput
                type="number"
                className="form-control"
                labelName="CNIC"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Student Id"
                value={regId}
                onChange={(e) => setRegid(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Father's Name"
                value={father}
                onChange={(e) => setFather(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="file"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="number"
                className="form-control"
                labelName="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        {updating ? (
          <button className="buttonload student_button">
            <i className="fa fa-spinner fa-spin"></i>Save Student Record
          </button>
        ) : (
          <button className="student_button">Save Student Record</button>
        )}
      </form>
    </>
  );
};
export default StudentForm;
