import React from "react";
import { useForm } from "@mantine/form";
import {
  Container,
  Grid,
  Title,
  Button,
  Card,
  NumberInput,
  TextInput,
} from "@mantine/core";
import SideNav from "@/shared/components/settings/SideNav";

const Settings = () => {
  const form = useForm({
    initialValues: { name: "", email: "", age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  return (
    <div className="page" id="searchPage">
      <Container>
      <div className="row g-4">
  {/* Edit profile START */}
  <div className="col-12">
    <div className="card border">
      <div className="card-header border-bottom">
        <h5 className="card-header-title">Edit Profile</h5>
      </div>
      <div className="card-body">
        {/* Full name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue="Jacqueline Miller"
            placeholder="Name"
          />
        </div>
        {/* Profile picture */}
        <div className="mb-3">
          <label className="form-label">Profile picture</label>
          {/* Avatar upload START */}
          <div className="d-flex align-items-center">
            <label
              className="position-relative me-4"
              htmlFor="uploadfile-1"
              title="Replace this pic"
            >
              {/* Avatar place holder */}
              <span className="avatar avatar-xl">
                <img
                  id="uploadfile-1-preview"
                  className="avatar-img rounded-circle border border-white border-3 shadow"
                  src="assets/images/avatar/01.jpg"
                  alt=""
                />
              </span>
            </label>
            {/* Upload button */}
            <label
              className="btn btn-sm btn-primary-soft mb-0"
              htmlFor="uploadfile-1"
            >
              Change
            </label>
            <input
              id="uploadfile-1"
              className="form-control d-none"
              type="file"
            />
          </div>
          {/* Avatar upload END */}
        </div>
        {/* Email id */}
        <div className="mb-3">
          <label className="form-label">Email id</label>
          <input
            type="email"
            className="form-control"
            defaultValue="hello@gmail.com"
            placeholder="Enter your email id"
          />
        </div>
        {/* Mobile number */}
        <div className="mb-3">
          <label className="form-label">Mobile number</label>
          <input
            type="text"
            className="form-control"
            defaultValue="222 555 666"
            placeholder="Enter your mobile number"
          />
        </div>
        {/* Location */}
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            className="form-control"
            type="text"
            defaultValue="New Hampshire"
          />
        </div>
        {/* Birthday */}
        <div>
          <label className="form-label">Birthday</label>
          <input
            type="text"
            className="form-control flatpickr flatpickr-input"
            defaultValue="29 Aug 1994"
            placeholder="Enter your birth-date"
            data-date-format="d M Y"
            readOnly="readonly"
          />
        </div>
        {/* Save button */}
        <div className="d-flex justify-content-end mt-4">
          <a href="#" className="btn text-secondary border-0 me-2">
            Discard
          </a>
          <a href="#" className="btn btn-primary">
            Save change
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Edit profile END */}
  {/* Update Email START */}
  <div className="col-md-6">
    <div className="card border">
      <div className="card-header border-bottom">
        <h5 className="card-header-title">Update Email</h5>
        <p className="mb-0 small">
          Your current email address is{" "}
          <span className="text-primary">example@gmail.com</span>
        </p>
      </div>
      <form className="card-body">
        {/* Email */}
        <label className="form-label">Enter your new email id</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email id"
        />
        <div className="text-end mt-3">
          <a href="#" className="btn btn-primary mb-0">
            Save Email
          </a>
        </div>
      </form>
    </div>
  </div>
  {/* Update Email END */}
  {/* Update Password START */}
  <div className="col-md-6">
    <div className="card border">
      <div className="card-header border-bottom">
        <h5 className="card-header-title">Update Password</h5>
        <p className="mb-0 small">
          Your current email address is{" "}
          <span className="text-primary">example@gmail.com</span>
        </p>
      </div>
      {/* Card body START */}
      <form className="card-body">
        {/* Current password */}
        <div className="mb-3">
          <label className="form-label">Current password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter current password"
          />
        </div>
        {/* New password */}
        <div className="mb-3">
          <label className="form-label"> Enter new password</label>
          <div className="input-group">
            <input
              className="form-control fakepassword"
              type="password"
              id="psw-input"
              placeholder="Enter new password"
            />
            <span className="input-group-text p-0 bg-transparent">
              <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2" />
            </span>
          </div>
        </div>
        {/* Confirm */}
        <div>
          <label className="form-label">Confirm new password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm new password"
          />
        </div>
        <div className="text-end mt-3">
          <a href="#" className="btn btn-primary mb-0">
            Change Password
          </a>
        </div>
      </form>
      {/* Card body END */}
    </div>
  </div>
  {/* Update Password END */}
</div>

      </Container>
    </div>
  );
};

export default Settings;
