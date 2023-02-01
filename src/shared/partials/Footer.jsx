import React, { useState, useEffect } from "react";
import { Page, Link, BlockTitle, Icon, Badge, Row, Col } from "framework7-react";


const Navigation = [
  {
    id: 'utils',
    title: 'Link utili',
    links: [
      {
        exact: true,
        label: 'Il mio account',
        url: '/account'
      },
      {
        exact: true,
        label: 'Piano',
        url: '/settings/billing'
      },
      {
        exact: false,
        label: 'Impostazioni',
        url: '/settings'
      }, 
      {
        exact: false,
        label: 'Pubblicità',
        url: '/advertsing'
      },
    ],
  },
  {
    id: 'general',
    title: 'Generale',
    links: [
      {
        label: 'Cerca',
        url: '/search'
      },  
      {
        label: 'Hosts',
        url: '/hosts'
      }, 
      {
        label: 'Piani e prezzi',
        url: '/pricing'
      }, 
      {
        label: 'Blog',
        url: '/blog'
      },
    ],
  },
  {
    id: 'help',
    title: 'Aiuto',
    links: [
      {
        label: 'Assistenza',
        url: '/help'
      },
      {
        label: 'Feedback',
        url: 'mailto:example@gmail.com?subject=Feedback Ceebo Partner',
        external: true
      }
    ]
  }
];

const Footer = () => {
  return (
    <Page>
    <footer className="main-footer padding-vertical-xl">
      <div className="container">
        <Row>
        {Navigation.map((nav, i) => (
          <Col width={50} large={25}>
        <BlockTitle key={i} className="no-margin">{nav.title}</BlockTitle>
        <ul className="list-unstyled padding-vertical" id={nav.id} key={i}>
              {nav.links.map((link, l) =>
                  <li key={l}>
                    <a href={link.url} key={l} reloadAll={true}>{link.label}</a>
                  </li>
              )}
            </ul>
            </Col>
      ))}
        </Row>
        <hr/>
        <div className="subfooter">
        <div className="display-flex">
        <div>Hello</div>
        <div>World!</div>
      </div>
          </div>
      </div>
    </footer>
    </Page>
  );
};

export default Footer;
