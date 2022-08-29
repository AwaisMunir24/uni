import React, { Component } from "react";
const Users = (props) => {
  const { image,userName,location ,phone,btnTitle,icons} = props;
  return (
    <>
      <tr>
        <td className="d-flex align-items-center user_record_setting">
          {" "}
          <img src={image} alt="image" className="profile_img" />
          <div>
            <h5 className="username">{userName}</h5>
          </div>{" "}
        </td>

        <td className="user_record_setting"><h5 className="location">{location}</h5></td>
        <td className="user_record_setting"><h5 className="phone">{phone}</h5></td>
        <td className="user_record_setting">
          <button  className="userButton">{btnTitle}</button>
        </td>
        <td className="user_record_setting">
          <a href="#">{icons}</a>
        </td>
      </tr>
    </>
  );
};
export default Users;
