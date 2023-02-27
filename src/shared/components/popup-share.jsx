import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react"
import { IconMail, IconUnlink, IconBrandWhatsapp, IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';


const PopupShare = ({ opened, toggle }) => {
  const socialLinks = [
    {
      label: "Facebook",
      slug: "facebook",
      icon: <IconBrandFacebook/>
    },
    {
      label: "Twitter",
      slug: "twitter",
      icon: <IconBrandTwitter/>
    },
    {
      label: "Linkedin",
      slug: "linkedin",
      icon: <IconBrandLinkedin/>
    },
    {
      label: "Whatsapp",
      slug: "whatsapp",
      icon: <IconBrandWhatsapp/>
    },
    {
      label: "E-mail",
      slug: "mail",
      icon: <IconMail/>
    },    
    {
      label: "Copia URL",
      slug: "url",
      icon: <IconUnlink/>,
    },
  ];

  return (
    <Modal
    size="sm"
    isCentered
    onClose={toggle}
    isOpen={opened}
    motionPreset="slideInBottom"
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
      Condividi
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody>
    
      <div className="list media-list">
        <ul>
          {socialLinks.map((item) => (
            <li key={item.slug}>
            <Link href={item.slug} className="item-link item-content">
              <div className="item-media">
                {item.icon}
              </div>
              <div className="item-inner">
                <div className="item-title">{item.label}</div>
              </div>
            </Link>
          </li>
          ))}
        </ul>
      </div>
      </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PopupShare;
