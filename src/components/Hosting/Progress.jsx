import React, { useState } from "react";
import {
  Progressbar,
  Button
} from "framework7-react";

const BottomBar = ({ props, disabled }) => {

  return (
    <div className="progress-section">
    <div className="container">
    <Progressbar progress={10} id="inline-progressbar" />
    </div>
    </div>

  );
};

export default BottomBar;
