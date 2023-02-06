import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Grid, Container, Divider, Group, Title, Text } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';


const Navigation = [
  {
    id: "utils",
    title: "Link utili",
    links: [
      {
        exact: true,
        label: "Il mio account",
        url: "/account",
      },
      {
        exact: true,
        label: "Piano",
        url: "/settings/billing",
      },
      {
        exact: false,
        label: "Impostazioni",
        url: "/settings",
      },
      {
        exact: false,
        label: "Pubblicità",
        url: "/advertsing",
      },
    ],
  },
  {
    id: "general",
    title: "Generale",
    links: [
      {
        label: "Cerca",
        url: "/search",
      },
      {
        label: "Hosts",
        url: "/hosts",
      },
      {
        label: "Piani e prezzi",
        url: "/pricing",
      },
      {
        label: "Blog",
        url: "/blog",
      },
    ],
  },
  {
    id: "help",
    title: "Aiuto",
    links: [
      {
        label: "Assistenza",
        url: "/help",
      },
      {
        label: "Feedback",
        url: "mailto:partner@ceebo.com?subject=Feedback Ceebo Partner",
        external: true,
      },
    ],
  },
];

const Footer = () => {
  return (
<footer className="bg-light pt-5">
  <div className="container">
    {/* Row START */}
    <div className="row g-4">
      {/* Widget 1 START */}
      <div className="col-lg-3">
        {/* logo */}
        <Link href="/">
          <img src="/img/logo.svg" className="site-logo"/>
        </Link>
        <p className="my-3 text-muted">
          Departure defective arranging rapturous did believe him all had
          supported.
        </p>
        <p className="mb-2">
          <a href="#" className="text-muted text-primary-hover">
            <i className="bi bi-telephone me-2" />
            +1234 568 963
          </a>
        </p>
        <p className="mb-0">
          <a href="#" className="text-muted text-primary-hover">
            <i className="bi bi-envelope me-2" />
            example@gmail.com
          </a>
        </p>
      </div>
      {/* Widget 1 END */}
      {/* Widget 2 START */}
      <div className="col-lg-8 ms-auto">
        <div className="row g-4">
          {/* Link block */}
          <div className="col-6 col-md-3">
            <h5 className="text-white mb-2 mb-md-4">Page</h5>
            <ul className="nav flex-column text-primary-hover">
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  News and Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Meet a Team
                </a>
              </li>
            </ul>
          </div>
          {/* Link block */}
          <div className="col-6 col-md-3">
            <h5 className="text-white mb-2 mb-md-4">Link</h5>
            <ul className="nav flex-column text-primary-hover">
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Cookie
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>
          {/* Link block */}
          <div className="col-6 col-md-3">
            <h5 className="text-white mb-2 mb-md-4">Global Site</h5>
            <ul className="nav flex-column text-primary-hover">
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  India
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  California
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Indonesia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Canada
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Malaysia
                </a>
              </li>
            </ul>
          </div>
          {/* Link block */}
          <div className="col-6 col-md-3">
            <h5 className="text-white mb-2 mb-md-4">Booking</h5>
            <ul className="nav flex-column text-primary-hover">
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  <i className="fa-solid fa-hotel me-2" />
                  Hotel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  <i className="fa-solid fa-plane me-2" />
                  Flight
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  <i className="fa-solid fa-globe-americas me-2" />
                  Tour
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  <i className="fa-solid fa-car me-2" />
                  Cabs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Widget 2 END */}
    </div>
    {/* Row END */}
    {/* Tops Links */}
    <div className="row mt-5">
      <h5 className="mb-2 text-white">Top Links</h5>
      <ul className="list-inline text-primary-hover lh-lg">
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Flights
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Hotels
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Tours
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Cabs
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            About
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Contact us
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Blogs
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Services
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Detail page
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Services
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Policy
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Testimonials
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Newsletters
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Podcasts
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Protests
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            NewsCyber
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Education
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Sports
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Tech and Auto
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Opinion
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="text-muted">
            Share Market
          </a>
        </li>
      </ul>
    </div>
    {/* Payment and card */}
    <div className="row g-4 justify-content-between mt-0 mt-md-2">
      {/* Payment card */}
      <div className="col-sm-7 col-md-6 col-lg-4">
        <h5 className="text-white mb-2">Payment &amp; Security</h5>
        <ul className="list-inline mb-0 mt-3">
          <li className="list-inline-item">
            
            <a href="#">
              <img
                src="/img/payments@2x-300x43.png"
                className="h-30px"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      {/* Social media icon */}
      <div className="col-sm-5 col-md-6 col-lg-3 text-sm-end">
        <h5 className="text-white mb-2">Follow us on</h5>
        <ul className="list-inline mb-0 mt-3">
          <li className="list-inline-item">
            
            <a className="btn btn-sm px-2 bg-facebook mb-0" href="#">
              <i className="fab fa-fw fa-facebook-f" />
            </a>
          </li>
          <li className="list-inline-item">
            
            <a className="btn btn-sm shadow px-2 bg-instagram mb-0" href="#">
              <i className="fab fa-fw fa-instagram" />
            </a>
          </li>
          <li className="list-inline-item">
            
            <a className="btn btn-sm shadow px-2 bg-twitter mb-0" href="#">
              <i className="fab fa-fw fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            
            <a className="btn btn-sm shadow px-2 bg-linkedin mb-0" href="#">
              <i className="fab fa-fw fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* Divider */}
    <hr className="mt-4 mb-0" />
    {/* Bottom footer */}
    <div className="row">
      <div className="container">
        <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
          {/* copyright text */}
          <div className="text-muted text-primary-hover">
            
            Copyrights ©2023 Booking. Build by
            <a href="https://www.webestica.com/" className="text-muted">
              Webestica
            </a>
            .
          </div>
          {/* copyright links*/}
          <div className="nav mt-2 mt-lg-0">
            <ul className="list-inline text-primary-hover mx-auto mb-0">
              <li className="list-inline-item me-0">
                <a className="nav-link py-1 text-muted" href="#">
                  Privacy policy
                </a>
              </li>
              <li className="list-inline-item me-0">
                <a className="nav-link py-1 text-muted" href="#">
                  Terms and conditions
                </a>
              </li>
              <li className="list-inline-item me-0">
                <a className="nav-link py-1 text-muted pe-0" href="#">
                  Refund policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer;
