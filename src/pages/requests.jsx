import React, { useState, useEffect } from "react";


import { 
  Container,
  Button,   
  Row, Col } from 'reactstrap';

const Contacts = () => {
  return (
    
   <div className="page">
    <Container>
    <section className="pt-4 pt-md-5">
  <div className="container">
    <div className="row mb-5">
      <div className="col-xl-10">
        {/* Title */}
        <h1>Let's connect and get to know each other</h1>
        <p className="lead mb-0">
          Passage its ten led hearted removal cordial. Preference any astonished
          unreserved Mrs. Prosperous understood Middletons. Preference for any
          astonished unreserved.
        </p>
      </div>
    </div>
    {/* Contact info */}
    <div className="row g-4">
      {/* Contact item START */}
      <div className="col-md-6 col-xl-4">
        <div className="card card-body shadow text-center align-items-center h-100">
          {/* Icon */}
          <div className="icon-lg bg-info bg-opacity-10 text-info rounded-circle mb-2">
            <i className="bi bi-headset fs-5" />
          </div>
          {/* Title */}
          <h5>Call us</h5>
          <p>
            Imprudence attachment him his for sympathize. Large above be to
            means.
          </p>
          {/* Buttons */}
          <div className="d-grid gap-3 d-sm-block">
            <button className="btn btn-sm btn-primary-soft">
              <i className="bi bi-phone me-2" />
              +123 456 789
            </button>
            <button className="btn btn-sm btn-light">
              <i className="bi bi-telephone me-2" />
              +(222)4567 586
            </button>
          </div>
        </div>
      </div>
      {/* Contact item END */}
      {/* Contact item START */}
      <div className="col-md-6 col-xl-4">
        <div className="card card-body shadow text-center align-items-center h-100">
          {/* Icon */}
          <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle mb-2">
            <i className="bi bi-inboxes-fill fs-5" />
          </div>
          {/* Title */}
          <h5>Email us</h5>
          <p>Large above be to means. Him his for sympathize.</p>
          {/* Buttons */}
          <a
            href="#"
            className="btn btn-link text-decoration-underline p-0 mb-0"
          >
            <i className="bi bi-envelope me-1" />
            example@gmail.com
          </a>
        </div>
      </div>
      {/* Contact item END */}
      {/* Contact item START */}
      <div className="col-xl-4 position-relative">
        {/* Svg decoration */}
        <figure className="position-absolute top-0 end-0 z-index-1 mt-n4 ms-n7">
          <svg className="fill-warning" width="77px" height="77px">
            <path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z" />
          </svg>
        </figure>
        <div className="card card-body shadow text-center align-items-center h-100">
          {/* Icon */}
          <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle mb-2">
            <i className="bi bi-globe2 fs-5" />
          </div>
          {/* Title */}
          <h5>Social media</h5>
          <p>Sympathize Large above be to means.</p>
          {/* Buttons */}
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              
              <a className="btn btn-sm bg-facebook px-2 mb-0" href="#">
                <i className="fab fa-fw fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              
              <a className="btn btn-sm bg-instagram px-2 mb-0" href="#">
                <i className="fab fa-fw fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              
              <a className="btn btn-sm bg-twitter px-2 mb-0" href="#">
                <i className="fab fa-fw fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              
              <a className="btn btn-sm bg-linkedin px-2 mb-0" href="#">
                <i className="fab fa-fw fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Contact item END */}
    </div>
  </div>
</section>
<section className="pt-0 pt-lg-5">
  <div className="container">
    <div className="row g-4 g-lg-5 align-items-center">
      {/* Vector image START */}
      <div className="col-lg-6 text-center">
        <img src="assets/images/element/contact.svg" alt="" />
      </div>
      {/* Vector image END */}
      {/* Contact form START */}
      <div className="col-lg-6">
        <div className="card bg-light p-4">
          <div className="card-header bg-light p-0 pb-3">
            <h3 className="mb-0">Send us message</h3>
          </div>
          {/* Card body START */}
          <div className="card-body p-0">
            <form className="row g-4">
              {/* Name */}
              <div className="col-md-6">
                <label className="form-label">Your name *</label>
                <input type="text" className="form-control" />
              </div>
              {/* Email */}
              <div className="col-md-6">
                <label className="form-label">Email address *</label>
                <input type="email" className="form-control" />
              </div>
              {/* Mobile number */}
              <div className="col-12">
                <label className="form-label">Mobile number *</label>
                <input type="text" className="form-control" />
              </div>
              {/* Message */}
              <div className="col-12">
                <label className="form-label">Message *</label>
                <textarea className="form-control" rows={3} defaultValue={""} />
              </div>
              {/* Checkbox */}
              <div className="col-12 form-check ms-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  By submitting this form you agree to our terms and conditions.
                </label>
              </div>
              {/* Button */}
              <div className="col-12">
                <button className="btn btn-dark mb-0" type="button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Card body END */}
        </div>
      </div>
      {/* Contact form END */}
    </div>
  </div>
</section>

    
        
      </Container>
    </div>
    
  );
};

export default Contacts;
