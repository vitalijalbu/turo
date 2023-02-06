import React, { useState, useEffect } from "react";
import { Button, Container, Anchor, Group, Text, Title } from "@mantine/core";
import Link from "next/link";
import { IconArrowLeft } from '@tabler/icons-react';;

const Head = (props) => {
  //console.log("props", props);
  return (
<section className="pt-4">
  <div className="container">
    <div className="card rounded-3 border p-3 pb-2">
      {/* Avatar and info START */}
      <div className="d-sm-flex align-items-center">
        <div className="avatar avatar-xl mb-2 mb-sm-0">
          <img
            className="avatar-img rounded-circle"
            src="assets/images/avatar/01.jpg"
            alt=""
          />
        </div>
        <h4 className="mb-2 mb-sm-0 ms-sm-3">
          <span className="fw-light">Hi</span> Jacqueline Miller
        </h4>
        <a
          href="add-listing.html"
          className="btn btn-sm btn-primary-soft mb-0 ms-auto flex-shrink-0"
        >
          <i className="bi bi-plus-lg fa-fw me-2" />
          Add New Listing
        </a>
      </div>
      {/* Avatar and info START */}
      {/* Responsive navbar toggler */}
      <button
        className="btn btn-primary w-100 d-block d-xl-none mt-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#dashboardMenu"
        aria-controls="dashboardMenu"
      >
        <i className="bi bi-list" /> Dashboard Menu
      </button>
      {/* Nav links START */}
      <div
        className="offcanvas-xl offcanvas-end mt-xl-3"
        tabIndex={-1}
        id="dashboardMenu"
      >
        <div className="offcanvas-header border-bottom p-3">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#dashboardMenu"
            aria-label="Close"
          />
        </div>
        {/* Offcanvas body */}
        <div className="offcanvas-body p-3 p-xl-0">
          {/* Nav item */}
          <div className="navbar navbar-expand-xl">
            <ul className="navbar-nav navbar-offcanvas-menu">
              <li className="nav-item">
                
                <a className="nav-link active" href="agent-dashboard.html">
                  <i className="bi bi-house-door fa-fw me-1" />
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                
                <a className="nav-link" href="agent-listings.html">
                  <i className="bi bi-journals fa-fw me-1" />
                  Listings
                </a>
              </li>
              <li className="nav-item">
                
                <a className="nav-link" href="agent-bookings.html">
                  <i className="bi bi-bookmark-heart fa-fw me-1" />
                  Bookings
                </a>
              </li>
              <li className="nav-item">
                
                <a className="nav-link" href="agent-activities.html">
                  <i className="bi bi-bell fa-fw me-1" />
                  Activities
                </a>
              </li>
              <li className="nav-item">
                
                <a className="nav-link" href="agent-earnings.html">
                  <i className="bi bi-graph-up-arrow fa-fw me-1" />
                  Earnings
                </a>
              </li>
              <li className="nav-item">
                
                <a className="nav-link" href="agent-reviews.html">
                  <i className="bi bi-star fa-fw me-1" />
                  Reviews
                </a>
              </li>
              <li>
                
                <a className="nav-link" href="agent-settings.html">
                  <i className="bi bi-gear fa-fw me-1" />
                  Settings
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdoanMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bi bi-list-ul fa-fw me-1" />
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdoanMenu">
                  {/* Dropdown menu */}
                  <li>
                    
                    <a className="dropdown-item" href="#">
                      Item 1
                    </a>
                  </li>
                  <li>
                    
                    <a className="dropdown-item" href="#">
                      Item 2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Nav links END */}
    </div>
  </div>
</section>

  );
};

export default Head;
