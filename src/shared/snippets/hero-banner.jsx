import React from 'react';
import { Row, Container, Group, Title, Text, Button } from 'reactstrap';


const HeroBanner = (props) => {

  return (
<section className="py-0 py-md-5">
  <div className="container">
    <div
      className="position-relative rounded-3 overflow-hidden p-3 p-sm-5"
      style={{
        backgroundImage: "https://via.placeholder.com/1280",
        backgroundPosition: "center left",
        backgroundSize: "cover"
      }}
    >
      <div className="row position-relative z-index-9">
        <div className="col-md-7 col-xl-5 ms-auto">
          <div className="card card-body p-sm-5">
            {/* Title */}
            <h5>{props.title}</h5>
            <p className="mb-3">
            {props.subtitle}
            </p>
            {/* Button */}
            <a href="#" className="btn btn-primary-soft mb-0 mt-3">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  );
}
export default HeroBanner;