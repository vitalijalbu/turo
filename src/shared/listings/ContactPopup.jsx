import React, { useState, useRef } from "react";
import { Modal } from '@mantine/core';



const ContactModal = ({ opened, toggle }) => {


  return (
    <Modal centered tabletFullscreen={true} opened={opened} onClose={() => toggle()}>
     <div className="navbar">
  <div className="navbar-bg" />
  <div className="navbar-inner">
    <div className="left">
      <a href="#" className="link">
        Left Link
      </a>
    </div>
    <div className="title">Page Title</div>
    <div className="right">
      <a href="#" className="link">
        Right Link
      </a>
    </div>
  </div>
</div>

    </Modal>
  );
};

export default ContactModal;
