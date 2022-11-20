import React from "react";
import "./userForm.style.scss";
const UserForm = () => {
  return (
    <div className="user_form">
      <div className="link_items">
        <div className="myFlex">
          <a>Individual</a>
        </div>
        <div className="myFlex">
          <a>Bulk</a>
        </div>
      </div>
      <form>
        <h4>Manage Your Profile</h4>
        <div className="form_item">
          <input id="name" type="text" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form_item">
          <input id="job" type="text" />
          <label htmlFor="job">Job</label>
        </div>
        <div className="form_item">
          <input id="mail" type="email" />
          <label htmlFor="mail">Email</label>
        </div>
        <div className="form_item">
          <input id="phone" type="number" />
          <label htmlFor="phone">Phone Number</label>
        </div>
        <div className="flex_center">
          <button type="button" className="btn">
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
