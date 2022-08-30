import React, { Component } from "react";
const Users = (props) => {
  const { image, userName, location, phone, btnTitle } = props;
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

        <td className="user_record_setting">
          <h5 className="location">{location}</h5>
        </td>
        <td className="user_record_setting">
          <h5 className="phone">{phone}</h5>
        </td>
        <td className="user_record_setting">
          <a href="mailto:someone@example.com" className="userButton" >{btnTitle}</a>
        </td>
        <td className="user_record_setting">
          <select
            className="form-select form-select-lg mb-0 select_option"
            aria-label=".form-select-lg example"
          >
            <option selected className="">Select Status</option>
            <option value="blocked">Blocked</option>
            <option value="notblocked">Not Blocked</option>
            </select>
        </td>
      </tr>
    </>
  );
};
export default Users;
