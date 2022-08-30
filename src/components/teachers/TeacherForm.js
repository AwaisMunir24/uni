import React, { Component, useEffect, useState } from "react";
import Button from "../button/Button";
import NewInput from "../newInput/Newinput";
import "./TeacherForm.css";
const TeacherForm = () => {
  function TeacherList() {
    let items = JSON.parse(localStorage.getItem("teacherRecord"));
    if (items) {
      return JSON.parse(localStorage.getItem("teacherRecord"));
    } else {
      return [];
    }
  }

  const [teacherName, setTeacherName] = useState("");
  const [teaherCnic, setTeacherCnic] = useState("");
  const [passcode, setPasscode] = useState("");
  const [qualification, setQualification] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState("");
  const [teacherRecord, setTeacherRecord] = useState(TeacherList());
  const [isUpdating, setIsUpdating] = useState(false);

  const handleTeacher = (e) => {
    e.preventDefault();
    setIsUpdating(true);
    setTimeout(() => {
        setIsUpdating(false);
      }, 2000);
    const newTeacher = [
      ...teacherRecord,
      {
        id: teacherRecord.length + 1,
        teacherName,
        teaherCnic,
        passcode,
        qualification,
        course,
        image,
      },
    ];
    setTeacherRecord(newTeacher);
    setTeacherName("");
    setTeacherCnic("");
    setPasscode("");
    setQualification("");
    setCourse("");
    setImage("");
  };

  const imageChangeFunction=(e)=>{
    setImage(e.target.files[0]);
   
  }

  useEffect(() => {
    localStorage.setItem("teacherRecord", JSON.stringify(teacherRecord));
  }, [teacherRecord]);
  return (
    <>
      <form onSubmit={handleTeacher} className="text-center">
        <div className="row justify-content-center mt-3">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Teacher Name"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Last Qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="mb-3">
              <NewInput
                type="number"
                className="form-control"
                labelName="CNIC"
                value={teaherCnic}
                onChange={(e) => setTeacherCnic(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="file"
                className="form-control"
                value={image}
                onChange={(e)=>setImage(e.target.value)}
              />
            </div>
          </div>
        </div>
        {isUpdating ? (
        <button className="buttonload student_button">
          <i className="fa fa-spinner fa-spin"></i>Saving Teacher Data
        </button>
      ) : (
        <button className="student_button">Save Teacher Data</button>
      )}
      </form>
    </>
  );
};
export default TeacherForm;
