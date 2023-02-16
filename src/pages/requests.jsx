import { IconMail, IconPhone } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";


import { 
  Container,
  Button,   
  Row, Col } from 'reactstrap';

const Requests = () => {
  return (
    
   <div className="page">
    <Container>
      <Row>
        <Col md={8}>
          <form>
            
          </form>
        </Col>
      </Row>

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
            <h3 className="mb-0">Compila il form per la richiesta</h3>
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

export default Requests;
