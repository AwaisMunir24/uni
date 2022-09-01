import React, { Component, useState } from "react";
import DashBoardCard from "../../components/dashoardcard/DashBoardCard";
import profile from "../../assets/image/profile.jpg";
import './Dashboard.css';
import TeachersInfo from "../../components/teacherInfo/TeachersInfo";
const Dashboard = () => {
  const [teachercard, setTeacherCard] = useState([
    {
      profile: profile,
      card_title: "Teacher",
    },
  ]);
  const [studentCard,setStudentCard]=useState([
    {
      profile: profile,
      card_title: "Students",
    }
  ])
  const [teachers,setTeachers]=useState('30');
  const [blockedTeacher,setBlockedTeachers]=useState('5');
  const [unBlockedTeacher,setUnBlockedTeaher]=useState('25');
  const [students,setStudents]=useState('200');
  const [blockedStudents,setBlockedStudents]=useState('10');
  const [unBlockedSudents,setUnBlockedStudents]=useState('190');

  return (
    <>
      <section>
        <div className="dashboard">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-12">
                <h4>Dashboard</h4>
              </div>
            </div>
            <div className="row border-bottom pb-5">
              <div className="col-lg-4 col-md-12">
                {teachercard.map((e, idx) => (
                  <DashBoardCard
                    key={idx}
                    profile={e.profile}
                    card_title={e.card_title}
                  />
                ))}
              </div>
              <div className="col-lg-7 col-md-12 right-section-teacher-info text-center">
                 <TeachersInfo
                 infoTitle="Total Teachers"
                 totalNumber={teachers}
                 blockedTitle="Blocked Teachers"
                 unBlockedTitle="Un Blocked Teachers"
                 blocked={blockedTeacher}
                 Unblocked={unBlockedTeacher}
                 /> 

              </div>
            </div>
            <div className="row mt-5">
            <div className="col-lg-4 col-md-12">
                {studentCard.map((e, idx) => (
                  <DashBoardCard
                    key={idx}
                    profile={e.profile}
                    card_title={e.card_title}
                  />
                ))}
              </div> 
              <div className="col-lg-7 col-md-12 right-section-teacher-info text-center">
                 <TeachersInfo
                 infoTitle="Total Students"
                 totalNumber={students}
                 blockedTitle="Blocked Students"
                 unBlockedTitle="Un Blocked Studernts"
                 blocked={blockedStudents}
                 Unblocked={unBlockedSudents}
                 /> 

              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
