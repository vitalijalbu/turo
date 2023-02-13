import React, { useState, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const PopupShare = ({ opened, toggle }) => {
  const socialLinks = [
    {
      label: "Facebook",
      slug: "facebook",
      iconUrl: process.env.BASE_URL + "/web/static/icons/icon-facebook.svg",
    },
    {
      label: "Twitter",
      slug: "twitter",
      iconUrl: process.env.BASE_URL + "/web/static/icons/icon-twitter.svg",
    },
    {
      label: "Linkedin",
      slug: "linkedin",
      iconUrl: process.env.BASE_URL + "/web/static/icons/icon-linkedin.svg",
    },
    {
      label: "Whatsapp",
      slug: "whatsapp",
      iconUrl: process.env.BASE_URL + "/web/static/icons/icon-whatsapp.svg",
    },
    {
      label: "E-mail",
      slug: "mail",
      iconUrl: process.env.BASE_URL + "/web/static/icons/icon-mail.svg",
    },
  ];

  return (
    <Modal
      centered
      size="sm"
      toggle={toggle}
      isOpen={opened}
    >
      <ModalHeader toggle={toggle}>Condividi questo annuncio</ModalHeader>
        <ModalBody>
      <div className="list media-list">
        <ul>
          {socialLinks.map((item, i) => (
            <li>
              <a href={item.url} className="item-link item-content">
                <div className="item-content">
                  <div className="item-media">
                    <img src={item.iconUrl} />
                  </div>
                  <div className="item-inner">
                    <div className="item-title-row">
                      <div className="item-title">{item.label}</div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      </ModalBody>
    </Modal>
  );
};

export default PopupShare;
