import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Title,
  Tabs
} from "reactstrap";
import { useRouter } from "next/router";

const Cookies = () => {
  const router = useRouter();

  return (
    <div className="page">
      <div className="container">
      
        <Row>
          pagine legali
        </Row>
      </div>
    </div>
  );
};

export default Cookies;
