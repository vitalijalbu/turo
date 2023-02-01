import React, { useState } from "react";
import {
  Toolbar,
  Button,
  Progressbar
} from "framework7-react";



const Footer = ({ next, prev, disabled }) => {

  return (
    <Toolbar tabbar bottom className="hosting-footer">
    <div>
    <Progressbar progress={10} id="inline-progressbar" />
    
      <div className="container display-flex justify-content-space-between">
    <Button disabled={disabled}>Indietro</Button>
    <Button fill color="black">Avanti</Button>
    </div>
  </div>
  </Toolbar>
  );
};

export default Footer;
