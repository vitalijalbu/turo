import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Container, Anchor, Group, Text, Title } from "reactstrap";

import { IconArrowLeft, IconPlus } from '@tabler/icons-react';;

const Head = (props) => {
  //console.log("props", props);
  return (
<section className="pt-4">
  <div className="container">
      {/* Avatar and info START */}
      <div className="d-sm-flex align-items-center">
        <div className="avatar avatar-xl mb-2 mb-sm-0">
          <img
            className="avatar-img rounded-circle"
            src="https://via.placeholder.com/80"
            alt=""
          />
        </div>
        <h4 className="mb-2 mb-sm-0 ms-sm-3">
          <span className="fw-light">Ciao</span> User demo
        </h4>
        <Link
          href="/hosting/create"
          className="btn btn-primary mb-0 ms-auto flex-shrink-0"
        >
          <IconPlus/>
          Crea annuncio
        </Link>
      </div>
      {/* Avatar and info START */}
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
            <ul className="navbar-nav">
              <li className="nav-item">
                
                <Link className="nav-link active" href="/account">
                  Il mio profilo
                </Link>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link" href="/account/listings">
                  I miei annunci
                </Link>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link" href="/account/settings">
                  Impostazioni
                </Link>
              </li>  
            </ul>
          </div>
        </div>
      </div>
      {/* Nav links END */}
    </div>
</section>

  );
};

export default Head;
