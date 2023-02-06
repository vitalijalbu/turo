import React from 'react';
import { Grid, Container, Group, Title, Text, Button } from '@mantine/core';


const HeroBanner = (props) => {

  return (
<section className="py-0 py-md-5">
  <div className="container">
    <div
      className="position-relative rounded-3 overflow-hidden p-3 p-sm-5"
      style={{
        backgroundImage: "url(https://via.placeholder.com/1980x1280)",
        backgroundPosition: "center left",
        backgroundSize: "cover"
      }}
    >
      <div className="row position-relative z-index-9">
        <div className="col-md-7 col-xl-5 ms-auto">
          <div className="card card-body p-sm-5">
            <div className="d-sm-flex justify-content-between align-items-center mb-2">
              <h6 className="text-primary mb-0">Exclusive Offer</h6>
              {/* Rating */}
              <ul className="list-inline small mb-0">
                <li className="list-inline-item me-0">
                  <i className="fa-solid fa-star text-warning" />
                </li>
                <li className="list-inline-item me-0">
                  <i className="fa-solid fa-star text-warning" />
                </li>
                <li className="list-inline-item me-0">
                  <i className="fa-solid fa-star text-warning" />
                </li>
                <li className="list-inline-item me-0">
                  <i className="fa-solid fa-star text-warning" />
                </li>
                <li className="list-inline-item">
                  <i className="fa-solid fa-star text-warning" />
                </li>
              </ul>
            </div>
            {/* Title */}
            <h5>Enjoy Your Dream Vacation In Switzerland</h5>
            <p className="mb-3">
              Book your hotel with us and don't forget to grab an awesome hotel
              deal to save massive on your stay.
            </p>
            {/* Price */}
            <h6 className="fw-normal mb-1">2 Days / 3 Nights</h6>
            <div className="d-flex align-items-center">
              <h5 className="text-success mb-0 me-1">$750</h5>
              <span className="mb-0 me-2">/day</span>
              <span className="text-decoration-line-through">$1000</span>
            </div>
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