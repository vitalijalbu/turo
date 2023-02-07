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
            {Navigation.map((nav, i) => (
             <div className="col-6 col-md-3">
              <h5 className="mb-2 mb-md-4">
                {nav.title}
              </h5>
              <ul className="nav flex-column text-primary-hover"
                id={nav.id}
                key={i}
              >
                {nav.links.map((link, l) => (
                  <li key={l} className="nav-item">
                    <Link
                      className="nav-link"
                      href={link.url ?? '#'}
                      key={l}
                      
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
      {/* Widget 2 END */}
    </div>
        {/* Divider */}
        <hr className="mt-4 mb-0" />
    {/* Row END */}
    {/* Payment and card */}
    <div className="row g-4 justify-content-between mt-0 mt-md-2">
      {/* Payment card */}
      <div className="col-sm-7 col-md-6 col-lg-4">
        <h5 className="mb-2">Payment &amp; Security</h5>
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
        <h5 className="mb-2">Seguici sui social</h5>
  <ul className="list-inline mb-0 mt-3">
          <li className="list-inline-item">
            <Link href="#"><IconBrandInstagram/></Link>
          </li>
          <li className="list-inline-item">
          <Link href="#"><IconBrandFacebook/></Link>
          </li>
          <li className="list-inline-item">
          <Link href="#"><IconBrandLinkedin/></Link>
          </li>
          <li className="list-inline-item">
          <Link href="#"><IconBrandTwitter/></Link>
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
          &copy; Copyright {new Date().getFullYear()} resthotels. Tutti i diritti riservati
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
