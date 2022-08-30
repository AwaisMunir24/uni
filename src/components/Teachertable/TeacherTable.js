import React, { Component } from 'react';
const TeacherTable=(props)=>{
    const {id,teacherprofile,teachername,cnic,qualification,course,passcode}=props;


    console.log(teacherprofile);
    return(
        <>
        <tr>
            <td>{id}</td>
            <td><div><img src={teacherprofile }alt="iamge"/></div></td>
            <td><h4>{teachername}</h4></td>
            <td><p>{cnic}</p></td>
            <td><p>{qualification}</p></td>
            <td><p>{course}</p></td>
            <td>{passcode}</td>
            <td><i className="fa-solid fa-circle-minus" ></i></td>
        </tr>
        </>
    )
}
export default TeacherTable