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
      <Container>
      
        <Row>
          pagine legali
        </Row>
      </Container>
    </div>
  );
};

export default Cookies;
