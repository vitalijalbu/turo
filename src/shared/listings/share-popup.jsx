import React, { useState, useRef } from "react";
import { Modal, Button } from "@mantine/core";


const SharePopup = ({ opened, toggle }) => {
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
      title={'Condividi questo annuncio'}
      size="md"
      radius="md"
      transition="scale-up"
      transitionDuration={600}
      transitionTimingFunction="ease"
      opened={opened}
      onClose={() => toggle()}
    >
      <div className="list media-list">
        <ul>
          {socialLinks.map((item, i) => (
            <li>
              <a href={item.url} class="item-link item-content">
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
    </Modal>
  );
};

export default SharePopup;
